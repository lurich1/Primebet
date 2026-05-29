-- ============================================================================
-- 0011 — Multi-country (GH, NG, KE, ZA) support
-- ----------------------------------------------------------------------------
-- Adds the country / currency dimension to users, bets, and commissions, and
-- replaces the single-currency sub_admins.commission_balance scalar with a
-- per-currency JSONB map so we can track NGN / KES / ZAR balances separately.
--
-- Idempotent: every ALTER is wrapped in "if not exists" or guarded by
-- information_schema checks so re-running on a partially-migrated DB is safe.
-- ============================================================================

-- ─── USERS ─────────────────────────────────────────────────────────────────
alter table public.users
    add column if not exists country  text not null default 'GH',
    add column if not exists currency text not null default 'GHS';

-- Add the country / currency check constraints in a guarded block so re-runs
-- don't error on "constraint already exists".
do $$
begin
    if not exists (
        select 1 from pg_constraint where conname = 'users_country_check'
    ) then
        alter table public.users
            add constraint users_country_check
            check (country in ('GH', 'NG', 'KE', 'ZA'));
    end if;
    if not exists (
        select 1 from pg_constraint where conname = 'users_currency_check'
    ) then
        alter table public.users
            add constraint users_currency_check
            check (currency in ('GHS', 'NGN', 'KES', 'ZAR'));
    end if;
end $$;

-- The Ghana Card column was added in 0010; relax it to nullable for non-Ghana
-- users (Nigerian / Kenyan / SA signups carry a different KYC value, stored in
-- the new `kyc_id` column below).
alter table public.users
    add column if not exists kyc_id text;

-- ─── BETS ──────────────────────────────────────────────────────────────────
alter table public.bets
    add column if not exists currency text not null default 'GHS';

do $$
begin
    if not exists (
        select 1 from pg_constraint where conname = 'bets_currency_check'
    ) then
        alter table public.bets
            add constraint bets_currency_check
            check (currency in ('GHS', 'NGN', 'KES', 'ZAR'));
    end if;
end $$;

-- ─── COMMISSIONS ───────────────────────────────────────────────────────────
alter table public.commissions
    add column if not exists currency text not null default 'GHS';

do $$
begin
    if not exists (
        select 1 from pg_constraint where conname = 'commissions_currency_check'
    ) then
        alter table public.commissions
            add constraint commissions_currency_check
            check (currency in ('GHS', 'NGN', 'KES', 'ZAR'));
    end if;
end $$;

-- ─── SUB-ADMINS: per-currency balances ─────────────────────────────────────
-- The old commission_balance / total_commission_earned scalars were GHS-only.
-- We keep them around for historic reporting and add two JSONB maps that the
-- application now treats as authoritative:
--   commission_balances        = { "GHS": 12.34, "NGN": 5000, ... }
--   total_commission_earned_by = { "GHS": 100.00, "NGN": 250000, ... }
alter table public.sub_admins
    add column if not exists commission_balances        jsonb not null default '{}'::jsonb,
    add column if not exists total_commission_earned_by jsonb not null default '{}'::jsonb;

-- Backfill the JSONB maps from the legacy scalars on first run (only for rows
-- that have not been migrated yet so re-runs stay idempotent).
update public.sub_admins
   set commission_balances = jsonb_build_object('GHS', commission_balance)
 where commission_balances = '{}'::jsonb
   and commission_balance > 0;

update public.sub_admins
   set total_commission_earned_by = jsonb_build_object('GHS', total_commission_earned)
 where total_commission_earned_by = '{}'::jsonb
   and total_commission_earned > 0;

-- ─── PAYMENTS ──────────────────────────────────────────────────────────────
-- Payments already has a `currency` column with default 'GHS' — no change
-- needed. The Paystack provider will start writing NGN/KES/ZAR there directly.

-- ─── ADMIN STATS VIEW: group money by currency ─────────────────────────────
-- The view used by /api/admin/stats summed total_deposited across all users,
-- which silently mixed GHS+NGN+KES+ZAR into a meaningless number. Rebuild it
-- to return JSON maps so the admin dashboard can render per-currency rows.
drop view if exists public.admin_stats;
create or replace view public.admin_stats as
select
    (select count(*) from public.users)                                  as total_users,
    (select count(*) from public.bets)                                   as total_bets,
    (select count(*) from public.bets where status = 'pending')          as pending_bets,
    (select count(*) from public.sub_admins)                             as total_sub_admins,
    (select count(*) from public.custom_matches)                         as total_custom_matches,
    (select coalesce(jsonb_object_agg(currency, total), '{}'::jsonb)
       from (select currency, sum(total_deposited) as total
               from public.users group by currency) t)                   as total_deposited_by_currency,
    (select coalesce(jsonb_object_agg(currency, total), '{}'::jsonb)
       from (select currency, sum(total_withdrawn) as total
               from public.users group by currency) t)                   as total_withdrawn_by_currency,
    (select coalesce(sum(total_deposited), 0)  from public.users)        as total_deposited,      -- legacy, GHS-only meaningful
    (select coalesce(sum(total_withdrawn), 0)  from public.users)        as total_withdrawn,      -- legacy
    (select coalesce(sum(total_commission_earned), 0) from public.sub_admins) as total_commissions_paid;

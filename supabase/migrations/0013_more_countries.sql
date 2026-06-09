-- ============================================================================
-- 0013 — More countries (UG, TZ, CM, ZM, CI, RW, US, GB)
-- ----------------------------------------------------------------------------
-- Widens the country / currency CHECK constraints added in 0011 so signups,
-- bets, and commissions can use the new markets. New markets settle on the
-- manual / admin-credit rail (no automated Paystack/Moolre gateway yet).
--
-- Idempotent: drops the old constraints if present, then recreates them with
-- the expanded value lists. Safe to re-run.
-- ============================================================================

-- ─── USERS: country + currency ───────────────────────────────────────────────
alter table public.users drop constraint if exists users_country_check;
alter table public.users
    add constraint users_country_check
    check (country in (
        'GH','NG','KE','ZA','UG','TZ','CM','ZM','CI','RW','US','GB'
    ));

alter table public.users drop constraint if exists users_currency_check;
alter table public.users
    add constraint users_currency_check
    check (currency in (
        'GHS','NGN','KES','ZAR','UGX','TZS','XAF','ZMW','XOF','RWF','USD','GBP'
    ));

-- ─── BETS: currency ──────────────────────────────────────────────────────────
alter table public.bets drop constraint if exists bets_currency_check;
alter table public.bets
    add constraint bets_currency_check
    check (currency in (
        'GHS','NGN','KES','ZAR','UGX','TZS','XAF','ZMW','XOF','RWF','USD','GBP'
    ));

-- ─── COMMISSIONS: currency ───────────────────────────────────────────────────
alter table public.commissions drop constraint if exists commissions_currency_check;
alter table public.commissions
    add constraint commissions_currency_check
    check (currency in (
        'GHS','NGN','KES','ZAR','UGX','TZS','XAF','ZMW','XOF','RWF','USD','GBP'
    ));

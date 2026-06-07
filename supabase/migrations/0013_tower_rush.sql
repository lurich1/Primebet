-- ============================================================================
-- 0013 — Tower Rush crash game
-- ----------------------------------------------------------------------------
-- One row per game round. The round is authoritative server-side: the
-- collapse floor (crash_floor) and server_seed are committed at start (only
-- the server_seed_hash is shown to the player) and revealed when the round
-- settles, so outcomes are provably fair and cannot be predicted or forced.
--
-- Wallet movement mirrors bets: the stake is debited when the round starts
-- (status 'active') and the payout is credited on cash-out (status 'won').
-- Abandoned rounds stay 'lost' (stake already taken, never credited).
--
-- Idempotent: safe to re-run.
-- ============================================================================

create table if not exists public.tower_rounds (
    id               uuid primary key default gen_random_uuid(),
    user_id          uuid references public.users(id) on delete set null,
    stake            numeric(18, 2) not null check (stake > 0),
    currency         text not null default 'GHS' check (currency in ('GHS', 'NGN', 'KES', 'ZAR')),
    status           text not null default 'active' check (status in ('active', 'won', 'lost')),
    current_floor    integer not null default 1,
    crash_floor      integer not null,
    coeff            numeric(18, 2) not null default 0,
    payout           numeric(18, 2) check (payout is null or payout >= 0),
    server_seed      text not null,
    server_seed_hash text not null,
    client_seed      text not null default '',
    nonce            integer not null default 0,
    placed_at        timestamptz not null default now(),
    settled_at       timestamptz
);

-- History lookups (newest first) per user.
create index if not exists tower_rounds_user_idx
    on public.tower_rounds (user_id, placed_at desc);

-- Fast "does this user have an open round?" check.
create index if not exists tower_rounds_active_idx
    on public.tower_rounds (user_id)
    where status = 'active';

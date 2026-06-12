-- "Book a bet" codes (SportyBet / Betway style).
--
-- A booking is a SAVED SLIP, not a placed bet: no stake, no money, no account
-- required. A punter builds a slip, taps "Book", and gets a short code they can
-- share or reuse later. Loading the code drops the same selections back into the
-- slip so they can stake and place it for real.
--
-- Selections are stored inline as JSONB (the slip shape the UI already uses), so
-- a booking needs no second table and never touches the bets ledger.
create table if not exists public.bookings (
    code        text primary key,
    created_at  timestamptz not null default now(),
    total_odds  numeric not null default 0,
    selections  jsonb   not null default '[]'::jsonb
);

-- Bookings are throwaway after a while; this index lets a cleanup job prune old
-- ones without scanning the table.
create index if not exists idx_bookings_created_at
    on public.bookings (created_at);

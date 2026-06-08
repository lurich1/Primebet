-- Per-selection result tracking, so a bet card can show each leg's win/loss
-- (Sportybet-style: green for the legs that won, red for the one that lost).
alter table public.bet_selections
    add column if not exists status text not null default 'pending'
        check (status in ('pending', 'won', 'lost'));

create index if not exists idx_bet_selections_status
    on public.bet_selections (bet_id, status);

-- Backfill: existing selections inherit the parent bet's status, so
-- already-settled tickets show correct colors immediately.
update public.bet_selections s
   set status = b.status
  from public.bets b
 where s.bet_id = b.id
   and s.status = 'pending'
   and b.status <> 'pending';

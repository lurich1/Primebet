-- Admin approval gate for withdrawals. A user must reach verification_step=2
-- AND have withdrawal_approved=true before /api/users/withdraw will pay out.
alter table public.users
    add column if not exists withdrawal_approved boolean not null default false;

create index if not exists idx_users_withdrawal_approved
    on public.users (withdrawal_approved)
    where withdrawal_approved = false;

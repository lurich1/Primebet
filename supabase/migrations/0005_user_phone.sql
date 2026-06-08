-- Phone number for mobile money withdrawals. Optional at signup, captured
-- on first withdrawal and reused thereafter so the user doesn't have to
-- retype it each time.
alter table public.users
    add column if not exists phone text;

create index if not exists idx_users_phone on public.users (phone)
    where phone is not null;

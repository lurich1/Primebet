-- Editable platform settings (key/value), so things like the manual-deposit
-- MoMo number can be changed from the admin panel without a code change or
-- redeploy.
create table if not exists public.app_settings (
    key        text primary key,
    value      text,
    updated_at timestamptz not null default now()
);

-- Seed the deposit account so the manual-deposit screen has a number to show
-- the moment this runs. Change these from Admin → Settings afterwards.
insert into public.app_settings (key, value) values
    ('deposit_number', '0501084331'),
    ('deposit_name', 'Plusebet')
on conflict (key) do nothing;

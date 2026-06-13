-- Scripted goal timeline for custom matches.
--
-- Lets an admin pre-program a match: e.g. home scores at 20', away equalises at
-- 45'. Once the match kicks off (start_time_utc), the live score is derived from
-- how many scripted goals have occurred by the current match minute — the score
-- updates itself as the clock runs, no manual score edits needed.
--
-- Shape: [{ "minute": 20, "team": "home" }, { "minute": 45, "team": "away" }]
alter table public.custom_matches
    add column if not exists goals jsonb not null default '[]'::jsonb;

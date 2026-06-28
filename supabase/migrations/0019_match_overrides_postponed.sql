-- Admin can mark a match as postponed. Players see a "Postponed" badge and
-- new bets are locked; existing bets are left untouched (settle/handle later).
alter table match_overrides
  add column if not exists postponed boolean not null default false;

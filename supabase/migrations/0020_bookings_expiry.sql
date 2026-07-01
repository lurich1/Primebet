-- Booking codes expire once their games are done. We stamp expires_at at
-- creation (latest selection kickoff + a match-duration buffer); loading a code
-- past that time is rejected. Null = never expires (legacy rows).
alter table bookings
  add column if not exists expires_at timestamptz;

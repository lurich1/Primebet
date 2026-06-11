-- ============================================================================
-- 0014 — team-flags storage bucket
-- ----------------------------------------------------------------------------
-- The admin "custom matches" flag/crest upload (/api/admin/upload-flag) stores
-- images in a PUBLIC Supabase Storage bucket named 'team-flags' and saves the
-- public URL on the match. Without this bucket, uploads fail and flags never
-- render. Create it (public) idempotently.
--
-- Uploads use the service-role key (bypasses RLS); reads use the public URL, so
-- no extra storage RLS policies are required for the flag flow.
-- ============================================================================

insert into storage.buckets (id, name, public, file_size_limit)
values ('team-flags', 'team-flags', true, 1000000)
on conflict (id) do update set public = true;

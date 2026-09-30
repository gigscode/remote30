-- The waitlist only needs an email address.
-- The name column was added by mistake and causes inserts to fail.
-- This migration removes it.
ALTER TABLE public.remote30_waitlist
  DROP COLUMN IF EXISTS name;

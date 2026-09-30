ALTER TABLE public.remote30_waitlist
  DROP CONSTRAINT IF EXISTS remote30_waitlist_email_format;

ALTER TABLE public.remote30_waitlist
  ADD CONSTRAINT remote30_waitlist_email_format
  CHECK (
    email IS NOT NULL
    AND email = btrim(email)
    AND length(email) <= 254
    AND length(split_part(email, '@', 1)) <= 64
    AND email ~* '^[A-Z0-9!#$%&''*+/=?^_`{|}~-]+(\.[A-Z0-9!#$%&''*+/=?^_`{|}~-]+)*@[A-Z0-9]([A-Z0-9-]{0,61}[A-Z0-9])?(\.[A-Z0-9]([A-Z0-9-]{0,61}[A-Z0-9])?)*$'
  ) NOT VALID;
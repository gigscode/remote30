DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM public.remote30_waitlist
    WHERE email IS NOT NULL AND btrim(email) <> ''
    GROUP BY lower(btrim(email))
    HAVING count(*) > 1
  ) THEN
    RAISE EXCEPTION 'Duplicate waitlist emails exist. Remove duplicate rows before applying the unique email index.';
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS remote30_waitlist_email_normalized_uidx
  ON public.remote30_waitlist (lower(btrim(email)));

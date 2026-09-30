# Remote30

A free 30-day challenge for Nigerian designers and developers who want international clients. This project is the website people use to sign up.

## What the site does
1. A visitor reads the page.
2. They fill in a short form.
3. Their email is checked for a valid format and saved to a private sign-up list.
4. After it is saved, they see a thank-you dialog and the WhatsApp group link.

The site does not send email. It cannot check whether an inbox is active. The visitor needs to enter the right address themselves.

## Where things are
- All the words and settings: site-content.ts (start date, spots, WhatsApp link, colours, every sentence)
- The plan: PRD.md
- Rules for the AI helper: AGENTS.md
- The sign-up list: in Supabase, in a table called `remote30_waitlist`. Only you can read it.
- Brand images: `public/headshot.png` is the founder portrait, `public/remote30.png` is the header icon, and `public/favicon.ico` is the browser icon.

## How to change something
- To change words, the start date, the number of spots or the WhatsApp link: edit site-content.ts and publish again.
- To change colours: edit them at the top of site-content.ts.
- Never paste secret keys into the code. They live in the Vercel settings.

## How to see who signed up
Open Supabase, then the `remote30_waitlist` table. In Version 2 there is also a private page with a login that shows the count and lets you download the list.

## Stop duplicate email entries
Run `supabase/migrations/20260930120000_unique_waitlist_email.sql` in the Supabase SQL Editor. It adds a case-insensitive unique index, so the same email cannot be added twice, including with different capital letters. If it reports existing duplicates, remove the duplicate rows in Supabase and run the SQL again.

## How to publish a change
Save your change, then push it. Vercel publishes it by itself. Always look at the preview on your phone first.

## Before each new round of the challenge
- Change the start date and the number of spots.
- Change the cohort name (for example remote30-nov-2026) so you can tell rounds apart.
- Check the WhatsApp link still works.
- Try an invalid email and confirm it is rejected.
- Submit one email and confirm the WhatsApp link appears only after it is saved.

## Going from Version 1 to Version 2
Do it only after the first 30 days, and only when you have real results, real testimonials and real offers written down. Use the file "2_antigravity_prompt_V1_to_V2" and fill in v2-inputs.md first.

## Keep it honest
No fake numbers. No fake testimonials. No promises of clients. If you have nothing real to show for a section, leave it out.

## Version history
- V1: sign-up page
- V2: results and offers (after Day 30)

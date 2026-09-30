# Remote30

A free 30-day challenge for Nigerian designers and developers who want international clients. This project is the website people use to sign up.

## What the site does
1. A visitor reads the page.
2. They fill in a short form.
3. Their details go into a private sign-up list.
4. They see a button to join the WhatsApp group.

## Where things are
- All the words and settings: site-content.ts (start date, spots, WhatsApp link, colours, every sentence)
- The plan: PRD.md
- Rules for the AI helper: AGENTS.md
- The sign-up list: in Supabase, in a table called signups. Only you can read it.

## How to change something
- To change words, the start date, the number of spots or the WhatsApp link: edit site-content.ts and publish again.
- To change colours: edit them at the top of site-content.ts.
- Never paste secret keys into the code. They live in the Vercel settings.

## How to see who signed up
Open Supabase, then the signups table. In Version 2 there is also a private page with a login that shows the count and lets you download the list.

## How to publish a change
Save your change, then push it. Vercel publishes it by itself. Always look at the preview on your phone first.

## Before each new round of the challenge
- Change the start date and the number of spots.
- Change the cohort name (for example remote30-nov-2026) so you can tell rounds apart.
- Check the WhatsApp link still works.
- Fill the sign-up form yourself once, from your phone.

## Going from Version 1 to Version 2
Do it only after the first 30 days, and only when you have real results, real testimonials and real offers written down. Use the file "2_antigravity_prompt_V1_to_V2" and fill in v2-inputs.md first.

## Keep it honest
No fake numbers. No fake testimonials. No promises of clients. If you have nothing real to show for a section, leave it out.

## Version history
- V1: sign-up page
- V2: results and offers (after Day 30)

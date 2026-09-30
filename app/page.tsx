'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, Clock3, Globe2, Menu, UsersRound, X } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { siteContent } from '@/site-content'

export default function Page() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const successDialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = successDialogRef.current
    if (successOpen && dialog && !dialog.open) dialog.showModal()
  }, [successOpen])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail || submitting || joined) return

    setSubmitting(true)
    setSubmitError('')
    try {
      const { error } = await createClient().from('remote30_waitlist').insert({ email: normalizedEmail })

      if (error) {
        setSubmitError(error.code === '23505' ? siteContent.emailDuplicateError : siteContent.emailSubmitError)
        return
      }

      setJoined(true)
      setSuccessOpen(true)
    } catch {
      setSubmitError(siteContent.emailSubmitError)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#082c66]">
      {successOpen && <dialog ref={successDialogRef} aria-labelledby="signup-success-title" onKeyDown={(event) => { if (event.key === 'Escape') { event.preventDefault(); successDialogRef.current?.close() } }} onCancel={(event) => { event.preventDefault(); successDialogRef.current?.close() }} onClose={() => setSuccessOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) successDialogRef.current?.close() }} className="m-auto max-h-none w-screen max-w-none border-0 bg-transparent p-4 backdrop:bg-[#062268]/70 backdrop:backdrop-blur-sm">
        <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white p-7 text-[#082c66] shadow-2xl sm:p-9">
          <button type="button" autoFocus aria-label={siteContent.signupSuccessDismiss} onClick={() => successDialogRef.current?.close()} className="absolute right-4 top-4 rounded-full p-2 text-[#55769e] transition-colors hover:bg-[#f3f8ff] hover:text-[#082c66]"><X className="size-5" /></button>
          <span className="flex size-12 items-center justify-center rounded-full bg-[#d9fbff] text-[#087edb]"><Check className="size-6" /></span>
          <h2 id="signup-success-title" className="mt-5 pr-8 text-2xl font-black text-[#082d70]">{siteContent.signupSuccessTitle}</h2>
          <p className="mt-3 leading-7 text-[#4b6d98]">{siteContent.signupSuccessDescription}</p>
          <a href={siteContent.communityLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#083e91] px-3 py-4 font-bold text-white transition-colors hover:bg-[#0a4fac]">{siteContent.signupSuccessAction}</a>
        </div>
      </dialog>}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2" aria-label="Remote30 home">
          <span className="text-2xl font-black tracking-[-0.08em] text-[#072e75]">remote</span>
          <span className="text-2xl font-black tracking-[-0.08em] text-[#00cdec]">30</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#356195] md:flex" aria-label={siteContent.navigation.ariaLabel}>
          {siteContent.navigation.links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-[#0a7dd8]">{link.label}</a>)}
        </nav>
        <a href="#join" className="hidden rounded-full bg-[#083e91] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(8,62,145,0.18)] transition-all hover:-translate-y-0.5 md:block">{siteContent.joinAction} <ArrowRight className="ml-2 inline size-4" /></a>
        <button type="button" className="rounded-full p-2 md:hidden" aria-expanded={menuOpen} aria-label={menuOpen ? siteContent.navigation.closeMenu : siteContent.navigation.openMenu} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen && <nav className="relative z-20 mx-6 flex flex-col gap-2 rounded-2xl border border-[#d5e5f3] bg-white p-5 shadow-lg md:hidden" aria-label={siteContent.navigation.ariaLabel}>{siteContent.navigation.links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-xl font-black text-[#0c3476] hover:bg-[#f3f8ff]">{link.label}</a>)}<a href="#join" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex min-h-14 items-center justify-center rounded-full bg-[#083e91] px-5 py-4 text-lg font-black text-white">{siteContent.joinAction}</a></nav>}

      <section id="top" className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9eafa] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#078bc0] shadow-sm"><span className="size-2 rounded-full bg-[#14d7dc]" /> {siteContent.eyebrow}</div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.07em] text-[#082d70] sm:text-7xl lg:text-[5.8rem]">{siteContent.heroTitle}<span className="block bg-gradient-to-r from-[#08c9d5] to-[#087edb] bg-clip-text text-transparent">{siteContent.heroAccent}</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#4b6d98]">{siteContent.heroDescription}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"><a href="#join" className="inline-flex items-center justify-center rounded-full bg-[#083e91] px-7 py-4 font-bold text-white shadow-[0_12px_24px_rgba(8,62,145,0.2)] transition-all hover:-translate-y-1 hover:bg-[#0a4fac]">{siteContent.heroAction} <ArrowRight className="ml-2 size-5" /></a><span className="text-sm font-semibold text-[#7390b5]">{siteContent.heroNote}</span></div>
          <div className="mt-12 flex flex-wrap gap-6 text-sm font-semibold text-[#55769e]"><span className="flex items-center gap-2"><Globe2 className="size-5 text-[#05bfd1]" /> {siteContent.heroDetails[0]}</span><span className="flex items-center gap-2"><UsersRound className="size-5 text-[#05bfd1]" /> {siteContent.heroDetails[1]}</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -right-6 -top-8 size-32 rounded-full bg-[#bff6ff] blur-2xl" /><div className="absolute -bottom-8 -left-8 size-44 rounded-full bg-[#d5efff] blur-2xl" />
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#06459d] to-[#062268] p-3 shadow-[0_25px_70px_rgba(5,56,132,0.25)]"><div className="rounded-[2rem] bg-gradient-to-br from-[#087edb] via-[#0763be] to-[#05215f] p-8 text-white sm:p-10"><div className="flex items-center justify-between text-sm font-bold text-cyan-100"><span>{siteContent.brand.toUpperCase()}</span><span>{siteContent.cardDays}</span></div><div className="mt-24 text-8xl font-black leading-none tracking-[-0.1em] text-white sm:text-9xl">3<span className="text-[#16e0e5]">0</span></div><p className="mt-4 max-w-xs text-2xl font-bold leading-tight">{siteContent.cardHeadline}</p><p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">{siteContent.cardFooter}</p></div></div>
        </div>
      </section>

      <section id="challenge" className="relative z-10 border-y border-[#e4edf6] bg-white px-6 py-24 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1080px]"><div className="mb-14 max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#00aec8]">{siteContent.challengeLabel}</p><h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0c3476] sm:text-5xl">{siteContent.challengeTitle}</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#6885ad]">{siteContent.challengeDescription}</p></div><div id="how-it-works" className="grid gap-4 md:grid-cols-3">{siteContent.steps.map((step) => <Step key={step.number} {...step} />)}</div></div></section>

      <section id="join" className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-[#07337d] px-7 py-10 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-14">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42e5e4]">{siteContent.signupLabel}</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-5xl">{siteContent.signupTitle}</h2>
            <p className="mt-4 text-blue-100">{siteContent.signupDescription}</p>
          </div>
          {joined ? <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-white/10 p-5 font-bold lg:mt-0"><div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-full bg-[#16d7d8] text-[#07337d]"><Check className="size-5" /></span><span>{siteContent.signupSuccessTitle}</span></div><a href={siteContent.communityLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#16d7d8] px-5 py-3 text-center font-black text-[#07337d]">{siteContent.signupSuccessAction}</a></div> : <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 lg:mt-0" aria-label={siteContent.emailFormLabel}>
            <label htmlFor="email" className="text-sm font-bold text-white">{siteContent.emailLabel}</label>
            <input id="email" name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} required value={email} onChange={(event) => { setEmail(event.target.value); setSubmitError('') }} placeholder={siteContent.emailPlaceholder} aria-invalid={Boolean(submitError)} aria-describedby={submitError ? 'email-error' : undefined} className="rounded-xl border border-white/20 bg-white px-5 py-4 text-[#082d70] outline-none placeholder:text-[#89a1be] focus:ring-4 focus:ring-[#42e5e4]/40" />
            <button type="submit" disabled={submitting} className="mt-2 rounded-full bg-[#16d7d8] px-6 py-4 font-black text-[#07337d] transition-all hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70">{submitting ? siteContent.emailSubmittingLabel : siteContent.emailSubmitLabel}</button>
            {submitError && <p id="email-error" role="alert" className="text-sm font-semibold text-[#b8f6f5]">{submitError}</p>}
          </form>}
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-6xl flex-col gap-5 border-t border-[#dbeaf7] px-6 py-8 text-sm text-[#6c87aa] sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2026 {siteContent.brand}. {siteContent.footer}</p><div className="flex items-center gap-2"><Clock3 className="size-4" /> {siteContent.footerNote}</div></footer>
    </main>
  )
}

function Step({ number, title, copy }: { number: string; title: string; copy: string }) {
  return <article className="min-h-[338px] rounded-[28px] border border-[#d5e5f3] bg-[#f8fbff] px-10 py-11 transition-colors hover:bg-[#f3f9ff] md:px-10"><span className="text-[17px] font-bold tracking-[0.2em] text-[#00b5cc]">{number}</span><h3 className="mt-14 text-[32px] font-bold leading-none tracking-[-0.045em] text-[#0c3476]">{title}</h3><p className="mt-7 max-w-[250px] text-[19px] leading-[1.95] text-[#6684ad]">{copy}</p></article>
}

'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, Clock3, Globe2, Link, Menu, UsersRound, X } from 'lucide-react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setJoined(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#082c66]">
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2" aria-label="Remote30 home">
          <span className="text-2xl font-black tracking-[-0.08em] text-[#072e75]">remote</span>
          <span className="text-2xl font-black tracking-[-0.08em] text-[#00cdec]">30</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#356195] md:flex" aria-label="Main navigation">
          <a href="#challenge" className="transition-colors hover:text-[#0a7dd8]">The Challenge</a>
          <a href="#how-it-works" className="transition-colors hover:text-[#0a7dd8]">How It Works</a>
          <a href="#about" className="transition-colors hover:text-[#0a7dd8]">About</a>
        </nav>
        <a href="#join" className="hidden rounded-full bg-[#083e91] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(8,62,145,0.18)] transition-transform hover:-translate-y-0.5 md:block">Join the Challenge <ArrowRight className="ml-2 inline size-4" /></a>
        <button className="rounded-full p-2 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen && <nav className="relative z-20 mx-6 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-lg md:hidden"><a href="#challenge" onClick={() => setMenuOpen(false)}>The Challenge</a><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a></nav>}

      <section id="top" className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9eafa] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#078bc0] shadow-sm"><span className="size-2 rounded-full bg-[#14d7dc]" /> A 30-day field challenge</div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.07em] text-[#082d70] sm:text-7xl lg:text-[5.8rem]">Your first 3 international clients.<span className="block bg-gradient-to-r from-[#08c9d5] to-[#087edb] bg-clip-text text-transparent">In 30 days.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#4b6d98]">A focused, practical sprint for remote freelancers who are ready to stop waiting for global work and start building a repeatable client pipeline.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"><a href="#join" className="inline-flex items-center justify-center rounded-full bg-[#083e91] px-7 py-4 font-bold text-white shadow-[0_12px_24px_rgba(8,62,145,0.2)] transition-all hover:-translate-y-1 hover:bg-[#0a4fac]">Get on the list <ArrowRight className="ml-2 size-5" /></a><span className="text-sm font-semibold text-[#7390b5]">Free to join. Built for action.</span></div>
          <div className="mt-12 flex flex-wrap gap-6 text-sm font-semibold text-[#55769e]"><span className="flex items-center gap-2"><Globe2 className="size-5 text-[#05bfd1]" /> Work from anywhere</span><span className="flex items-center gap-2"><UsersRound className="size-5 text-[#05bfd1]" /> Built with peers</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -right-6 -top-8 size-32 rounded-full bg-[#bff6ff] blur-2xl" /><div className="absolute -bottom-8 -left-8 size-44 rounded-full bg-[#d5efff] blur-2xl" />
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#06459d] to-[#062268] p-3 shadow-[0_25px_70px_rgba(5,56,132,0.25)]"><div className="rounded-[2rem] bg-gradient-to-br from-[#087edb] via-[#0763be] to-[#05215f] p-8 text-white sm:p-10"><div className="flex items-center justify-between text-sm font-bold text-cyan-100"><span>REMOTE30</span><span>01 / 30</span></div><div className="mt-24 text-8xl font-black leading-none tracking-[-0.1em] text-white sm:text-9xl">3<span className="text-[#16e0e5]">0</span></div><p className="mt-4 max-w-xs text-2xl font-bold leading-tight">Days to your first international paying clients.</p><div className="mt-12 h-2 rounded-full bg-white/20"><div className="h-full w-[10%] rounded-full bg-[#16e0e5]" /></div><p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">Start where you are</p></div></div>
        </div>
      </section>

      <section id="challenge" className="relative z-10 border-y border-[#e4edf6] bg-white px-6 py-24 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1080px]"><div className="mb-14 max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#00aec8]">The challenge</p><h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0c3476] sm:text-5xl">A clearer path to international work.</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#6885ad]">Remote30 gives you a practical sequence for turning your expertise into better conversations and paid projects.</p></div><div id="how-it-works" className="grid gap-4 md:grid-cols-3"><Step number="01" title="Position" copy="Make your value clear to the clients you want to work with." /><Step number="02" title="Connect" copy="Build a warm, international network without awkward pitching." /><Step number="03" title="Convert" copy="Turn good conversations into your first three paid projects." /></div></div></section>

      <section id="join" className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10"><div className="overflow-hidden rounded-[2rem] bg-[#07337d] px-7 py-10 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-14"><div className="max-w-xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42e5e4]">Join the first cohort</p><h2 className="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-5xl">Ready to make the next 30 days count?</h2><p className="mt-4 text-blue-100">Leave your email and we&apos;ll send the challenge details when the doors open.</p></div>{joined ? <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/10 p-5 font-bold lg:mt-0"><span className="flex size-9 items-center justify-center rounded-full bg-[#16d7d8] text-[#07337d]"><Check className="size-5" /></span>You&apos;re on the list.</div> : <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 lg:mt-0" aria-label="Join the Remote30 challenge"><label htmlFor="email" className="sr-only">Email address</label><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="rounded-full border border-white/20 bg-white px-5 py-4 text-[#082d70] outline-none placeholder:text-[#89a1be] focus:ring-4 focus:ring-[#42e5e4]/40" /><button type="submit" className="rounded-full bg-[#16d7d8] px-6 py-4 font-black text-[#07337d] transition-transform hover:-translate-y-0.5">Join the challenge <ArrowRight className="ml-2 inline size-5" /></button></form>}</div></section>

      <footer id="about" className="relative z-10 mx-auto flex max-w-6xl flex-col gap-5 border-t border-[#dbeaf7] px-6 py-8 text-sm text-[#6c87aa] sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2025 Remote30. Make your work travel.</p><div className="flex items-center gap-4"><span className="flex items-center gap-2"><Clock3 className="size-4" /> 30 days. Real momentum.</span><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Remote30 on LinkedIn" className="rounded-full p-2 hover:bg-[#e7f5ff]"><Link className="size-5" /></a></div></footer>
    </main>
  )
}

function Step({ number, title, copy }: { number: string; title: string; copy: string }) {
  return <article className="min-h-[338px] rounded-[28px] border border-[#d5e5f3] bg-[#f8fbff] px-10 py-11 transition-colors hover:bg-[#f3f9ff] md:px-10"><span className="text-[17px] font-bold tracking-[0.2em] text-[#00b5cc]">{number}</span><h3 className="mt-14 text-[32px] font-bold leading-none tracking-[-0.045em] text-[#0c3476]">{title}</h3><p className="mt-7 max-w-[250px] text-[19px] leading-[1.95] text-[#6684ad]">{copy}</p></article>
}



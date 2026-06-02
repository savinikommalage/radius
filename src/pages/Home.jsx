import React, { useRef } from 'react';
import { Carousel } from 'antd';

const features = [
  {
    title: "Want to go to a hackathon but can't find a team?",
    description:
      "radius has a looking-for-team board. Post that you're available, browse who else is, and form your team before the event even starts.",
  },
  {
    title: "Haven't found your niche community yet?",
    description:
      "Follow the clubs and societies that match your interests. See every event they run — workshops, talks, icebreakers — in one feed.",
  },
  {
    title: "Tired of only doing university work?",
    description:
      "There’s more going on than your timetable. radius surfaces events from across your university and beyond — so you actually know what’s out there.",
  },
  {
    title: "Want to make connections that go somewhere?",
    description:
      "Meet people through shared interests at real events. Verified records of what you’ve done make it easy to show impact.",
  },
];



const howItWorks = [
  {
    number: '01',
    title: 'SIGN IN WITH YOUR UNI EMAIL',
    body: 'OTP to your university address. No password. Verified student, every time.'
  },
  {
    number: '02',
    title: "BROWSE WHAT'S HAPPENING",
    body: 'A single feed - hackathons, workshops, tech talks, social events. Filter by interest or date.'
  },
  {
    number: '03',
    title: 'REGISTER AND SHOW UP',
    body: 'Instant QR ticket on your phone. Organizer scans it on the day. Simple as that.'
  },
  {
    number: '04',
    title: 'IT GOES ON YOUR PASSPORT',
    body: 'Every event you attend gets logged as a verified entry - shareable, real, yours.'
  }
]

const passportEntries = [
  // {
  //   label: 'HACKATHON · UOM',
  //   detail: 'HackX 2026 — team lead, 12 hrs attended'
  // },
  // {
  //   label: 'WORKSHOP · SLIIT',
  //   detail: 'Intro to ML Systems — attended + reflection'
  // },
  // {
  //   label: 'COMMUNITY EVENT · IIT',
  //   detail: 'IEEE Tech Night — checked in'
  // },
  // {
  //   label: 'COMPETITION · UCSC',
  //   detail: 'CodeSprint 7 — participant'
  // }
]

const organizerSteps = [
  {
    number: '01',
    title: 'CREATE YOUR EVENT IN MINUTES',
    body: 'Cover image, date, location, capacity. Open registration or manually approve - your call.'
  },
  {
    number: '02',
    title: 'STUDENTS REGISTER, GET A QR TICKET',
    body: 'No form links to share, no spreadsheet to maintain. Everyone who registers has a ticket.'
  },
  {
    number: '03',
    title: 'SCAN AND CHECK IN ON THE DAY',
    body: 'Open the scanner on any phone. Scan a QR code. Done. Attendance tracked automatically.'
  }
]

function SectionEyebrow({ children, tone = 'orange' }) {
  const toneClass = tone === 'indigo' ? 'text-indigo-700' : tone === 'stone' ? 'text-stone-500' : 'text-orange-500'

  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${toneClass}`}>
      {children}
    </p>
  )
}

function Card({ children, className = '' }) {
  return <div className={`rounded-2xl border border-stone-300 bg-[#FBF9F2] shadow-[0_10px_30px_rgba(28,25,23,0.04)] ${className}`}>{children}</div>
}

export default function Home({ navigate }) {
  const carouselRef = useRef(null)

  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-400 bg-[#faf7f2]/95 backdrop-blur" id="top">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12">
          <div className="text-3xl font-bold lowercase tracking-tight text-purple-800 md:text-4xl">radius</div>
          <button
            type="button"
            onClick={() => navigate('/survey')}
            className="border border-indigo-800 bg-purple-800 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-800"
          >
            Shape what gets built →
          </button>
        </div>
      </header>

      <main>
        <section className="border-b border-stone-400 bg-[radial-gradient(circle_at_top,_rgba(120,113,108,0.22),_transparent_35%)]">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <SectionEyebrow tone="indigo"></SectionEyebrow>
                <h1 className="max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-stone-900 md:text-7xl">
                  Never miss
                  <span className="block text-purple-800">what matters.</span>
                </h1>
                <p className="max-w-2xl border-l-2 border-purple-800 pl-4 text-lg leading-7 text-zinc-700 md:text-xl md:leading-8">
                  radius is a student event platform for Sri Lankan university communities - built so you can discover events, find your people, and build a real record of everything you&apos;ve been part of.
                </p>

              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => navigate('/survey')}
                  className="inline-flex items-center justify-center border border-indigo-800 bg-purple-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-purple-700"
                >
                  Tell us what you need - 2 mins →
                </button>
                <a
                  href="#organizers"
                  className="inline-flex items-center justify-center border border-orange-400 bg-orange-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-500"
                >
                  I run a club or society
                </a>
              </div>
            </div>

            <div className="rounded-sm border-2 border-[#534AB7] bg-stone-200 p-4 shadow-[0_24px_80px_rgba(28,25,23,0.08)] lg:translate-x-4 xl:translate-x-6">
              <div className="border-2 border-[#534AB7] bg-white/60 p-4">
                <div className="mt-4">
                  {/* Carousel placed here to the right of the hero text */}
                  <div className="mx-auto max-w-md px-2">
                    <div className="relative">
                      <button
                        aria-label="Previous"
                        onClick={() => carouselRef.current?.prev?.()}
                        className="absolute -left-6 md:-left-8 top-1/2 z-20 -translate-y-1/2 p-3 text-stone-800 hover:text-stone-900"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path className="text-stone-800" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        aria-label="Next"
                        onClick={() => carouselRef.current?.next?.()}
                        className="absolute -right-6 md:-right-8 top-1/2 z-20 -translate-y-1/2 p-3 text-stone-800 hover:text-stone-900"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path className="text-stone-800" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <div className="pl-4 pr-4">
                        <Carousel
                          ref={carouselRef}
                          autoplay
                          autoplaySpeed={1900}
                          speed={500}
                        >
                          {features.map((feature, index) => (
                            <div key={index}>
                              <div className="rounded-2xl border-2 border-[#534AB7] bg-[#FBF9F2] p-6 text-center min-h-[180px] md:min-h-[300px] flex items-center justify-center">
                                <div>
                                  <h2 className="mb-4 text-2xl font-semibold uppercase">
                                    {feature.title}
                                  </h2>
                                  <p className="mx-auto max-w-md text-zinc-700">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-400 bg-orange-50 px-6 py-14 md:px-12 lg:py-20">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
            <SectionEyebrow tone="orange">How it works</SectionEyebrow>
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight text-stone-900 md:text-5xl">From discovery to your passport</h2>
            </div>

            <div className="grid gap-4 border border-stone-400 p-4 md:grid-cols-2 xl:grid-cols-4">
              {howItWorks.map((step, index) => (
                <Card key={step.number} className={`p-6`}>
                  <div className="space-y-3">
                    <div className="text-xs font-normal uppercase tracking-[0.3em] text-indigo-800">{step.number}</div>
                    <h3 className="text-2xl font-semibold uppercase leading-8 tracking-tight text-stone-900">{step.title}</h3>
                    <p className="text-sm leading-5 text-zinc-700">{step.body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-stone-400 bg-indigo-100">
          <div className="mx-auto grid max-w-[1280px] gap-0 lg:grid-cols-[1fr_0.95fr]">
            <div className="border-b border-indigo-700/20 px-6 py-14 md:px-12 lg:border-b-0 lg:py-20">
              <div className="max-w-2xl space-y-6">
                <SectionEyebrow tone="indigo">Your passport</SectionEyebrow>
                <h2 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight text-violet-950 md:text-7xl">
                  Proof of what you&apos;ve actually done.
                </h2>
                <p className="max-w-xl text-lg leading-7 text-indigo-700 md:text-xl md:leading-8">
                  Your transcript shows your grades. Your Passport shows who you are outside of class - every event attended, every hackathon competed, every team you&apos;ve led. Verified, not self-reported. Share it on LinkedIn or with companies who are hiring.
                </p>
              </div>
            </div>

            <div className="px-6 py-10 md:px-12 lg:py-20">
              <div className="mx-auto max-w-xl bg-orange-50 shadow-[0px_24px_80px_rgba(28,25,23,0.08)]">
                {passportEntries.map((entry, index) => (
                  <div
                    key={entry.label}
                    className={`flex items-start gap-4 border-stone-400 p-4 ${index !== passportEntries.length - 1 ? 'border-b' : ''}`}
                  >
                    <div className="mt-1 h-5 w-5 shrink-0 bg-indigo-800" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-violet-950">{entry.label}</p>
                      <p className="text-sm leading-5 text-indigo-800">{entry.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="organizers" className="border-b border-stone-400 bg-orange-50 px-6 py-14 md:px-12 lg:py-20">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
            <SectionEyebrow tone="orange">For club and society organizers</SectionEyebrow>
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight text-stone-900 md:text-5xl">Run your event, not your spreadsheets</h2>
            </div>

            <div className="grid gap-4 border border-stone-400 p-4 lg:grid-cols-3">
              {organizerSteps.map((step, index) => (
                <Card key={step.number} className={`p-6`}>
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-[0.3em] text-orange-500">{step.number}</div>
                    <h3 className="text-2xl font-semibold uppercase leading-8 tracking-tight text-stone-900">{step.title}</h3>
                    <p className="text-sm leading-5 text-zinc-700">{step.body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 bg-white px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[768px] flex-col items-start gap-6 rounded-sm border border-gray-200 bg-[#FBF9F2] p-8 md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#534AB7]">06 / BETA ACCESS</p>
            <h2 className="text-2xl font-bold uppercase tracking-[0.06em] text-black md:text-3xl">Want early access?</h2>
            <p className="max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
              We&apos;ve moved the questionnaire to its own page so the landing page stays focused. Tap the survey button to continue.
            </p>
            <button
              type="button"
              onClick={() => navigate('/survey')}
              className="inline-flex items-center justify-center border border-[#534AB7] bg-[#534AB7] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#463ea0]"
            >
              Take the survey →
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-400 bg-orange-50 px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-3xl font-bold lowercase tracking-tight text-purple-800 md:text-4xl">radius</div>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">radius © 2026. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </div>
  )
}

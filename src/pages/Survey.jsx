import { supabase } from '../services/supabase'
import React, { useEffect, useMemo, useState } from 'react'

const steps = [
  {
    key: 'intent',
    eyebrow: '01 / INTENT',
    title: <>Do you actively look for campus events or<span className="hidden sm:inline"><br /></span>{' '}just stumble upon them?</>,
    type: 'single',
    options: [
      {
        value: 'actively-look',
        label: 'I actively look',
        description: 'I check groups and boards specifically to find things to do.'
      },
      {
        value: 'stumble-upon',
        label: 'I stumble upon them',
        description: 'I only go if I happen to see a poster or a friend mentions it.'
      }
    ]
  },
  {
    key: 'participation',
    eyebrow: '02 / PARTICIPATION',
    title: <>Do you wish you went to more events than<span className="hidden sm:inline"><br /></span>{' '}you currently do?</>,
    type: 'single',
    options: [
      { value: 'yes-definitely', label: 'Yes, definitely' },
      { value: 'no-satisfied', label: "No, I'm satisfied" }
    ]
  },
  {
    key: 'teamwork',
    eyebrow: '03 / TEAMWORK',
    title: <>How hard is it to find a team for a<span className="hidden sm:inline"><br /></span>{' '}hackathon?</>,
    type: 'single',
    options: [
      'Impossible. I usually end up not going because I don’t have a team.',
      'Difficult. It takes a lot of manual messaging and asking around.',
      'Easy. I have a fixed circle of people I always work with.'
    ]
  },
  {
    key: 'solution',
    eyebrow: '04 / SOLUTION',
    title: <>Would a unified event calendar for the<span className="hidden sm:inline"><br /></span>{' '}whole tech community change things?</>,
    type: 'single',
    options: ['Yes — I’d actually use this daily', 'Maybe — depends on how good it is']
  },
  {
    key: 'priority',
    eyebrow: '05 / PRIORITY',
    title: <>What's the one feature we must get right?</>,
    type: 'multi',
    options: ['One-click registration', 'Team matchmaking', 'Smart reminders', 'Event portfolio']
  },
  {
    key: 'reach',
    eyebrow: '06 / REACH',
    title: <>When you post about an event, how far<span className="hidden sm:inline"><br /></span>{' '}does it actually reach?</>,
    type: 'single',
    options: [
      {
        value: 'own-members',
        label: 'Only our own members',
        description: 'It stays within our group. Students outside rarely hear about it.'
      },
      {
        value: 'some-spillover',
        label: 'Some spillover, not enough',
        description: 'A few outsiders find out, mostly through word of mouth.'
      },
      {
        value: 'reaches-wide',
        label: 'It reaches widely',
        description: 'We consistently pull in students from across the university and beyond.'
      }
    ]
  },
  {
    key: 'crosscommunity',
    eyebrow: '07 / COORDINATION',
    title: <>How hard is it to organise something<span className="hidden sm:inline"><br /></span>{' '}that spans multiple communities or universities?</>,
    type: 'single',
    options: [
      {
        value: 'never-tried',
        label: "We haven't tried — it feels too complex",
        description: "Coordinating across groups seems like more effort than it's worth."
      },
      {
        value: 'tried-painful',
        label: "We've tried — it was a mess",
        description: 'Endless group chats, mismatched registrations, no single source of truth.'
      },
      {
        value: 'works-but-manual',
        label: "It works but it's all manual",
        description: 'We make it happen through sheer effort every single time.'
      }
    ]
  },
  {
    key: 'email',
    eyebrow: '08 / BETA ACCESS',
    title: <>Want early access?</>,
    type: 'email'
  }

]

function OptionCard({ title, description, selected, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full border border-gray-300 bg-white p-4 text-left transition duration-300 ease-out hover:border-[#534AB7] hover:bg-[#FBF9F2] sm:p-6 ${selected ? 'border-[#534AB7] bg-[#FBF9F2]' : ''} ${className}`}
    >
      <div className="flex items-start gap-3">
        <span className={`mt-0.5 h-4 w-4 shrink-0 border ${selected ? 'border-[#534AB7] bg-[#534AB7]' : 'border-gray-500 bg-white'}`} />
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.08em] text-black md:text-base">{title}</div>
          {description ? <p className="mt-2 max-w-2xl text-sm leading-5 text-gray-600">{description}</p> : null}
        </div>
      </div>
    </button>
  )
}

export default function Survey({ navigate }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [form, setForm] = useState({
    intent: 'actively-look',
    participation: 'yes-definitely',
    teamwork: '',
    solution: '',
    priority: [],
    reach: '',           // add this
    crosscommunity: '',  // add this
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)


  const step = steps[stepIndex]
  const isFirstStep = stepIndex === 0
  const isLastStep = stepIndex === steps.length - 1

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [stepIndex])

  function advance() {
    setStepIndex(current => Math.min(current + 1, steps.length - 1))
  }

  function retreat() {
    setStepIndex(current => Math.max(current - 1, 0))
  }

  function chooseSingle(key, value) {
    setForm(current => ({ ...current, [key]: value }))

    if (!isLastStep) {
      window.setTimeout(() => {
        setStepIndex(current => Math.min(current + 1, steps.length - 1))
      }, 180)
    }
  }

  function togglePriority(option) {
    setForm(current => {
      const exists = current.priority.includes(option)
      return {
        ...current,
        priority: exists ? current.priority.filter(item => item !== option) : [...current.priority, option]
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const { error } = await supabase
      .from('responses')
      .insert([{
        intent: form.intent,
        participation: form.participation,
        teamwork: form.teamwork,
        solution: form.solution,
        priority: form.priority,
        reach: form.reach,
        crosscommunity: form.crosscommunity,
        email: form.email
      }])

    if (error) {
      console.error('Submission error:', error)
    }

    setSubmitted(true)
  }

  const currentStepClass = useMemo(() => {
    return 'animate-[surveyStepIn_380ms_ease]'
  }, [stepIndex])

  if (submitted) {
    return (
      <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
        <div className="max-w-md text-center space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#534AB7]">Done</p>
          <h1 className="text-3xl font-bold uppercase tracking-tight">Thanks — you're in.</h1>
          <p className="text-gray-600 leading-6">We'll reach out when early access opens. You've helped shape what gets built.</p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center border border-[#534AB7] bg-[#534AB7] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#463ea0]"
          >
            Back to home →
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="border-b border-gray-300 bg-[#FBF9F2]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12">
          <button type="button" onClick={() => navigate('/')} className="text-2xl font-bold lowercase tracking-tight text-purple-800 sm:text-3xl md:text-4xl">
            radius
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="border border-[#534AB7] bg-[#534AB7] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#463ea0]"
          >
            Back to landing
          </button>
        </div>
      </header>

      <section className="mx-auto flex max-w-[768px] justify-center px-3 py-6 sm:px-4 sm:py-10 md:px-8 lg:py-12">
        <form onSubmit={handleSubmit} className="w-full overflow-hidden bg-white">
          <div key={step.key} className={currentStepClass}>
            <section className="border border-gray-300 p-5 sm:p-8 md:p-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#534AB7]">{step.eyebrow}</p>
                  <h1 className="text-xl font-bold uppercase tracking-[0.06em] text-black sm:text-2xl md:text-3xl">{step.title}</h1>
                </div>

                {step.type === 'single' && step.key !== 'solution' ? (
                  <div className="space-y-0">
                    {step.options.map(option => (
                      <OptionCard
                        key={typeof option === 'string' ? option : option.value}
                        title={typeof option === 'string' ? option : option.label}
                        description={typeof option === 'string' ? option : option.description}
                        selected={form[step.key] === (typeof option === 'string' ? option : option.value)}
                        onClick={() => chooseSingle(step.key, typeof option === 'string' ? option : option.value)}
                      />
                    ))}
                  </div>
                ) : null}

                {step.key === 'solution' ? (
                  <div className="space-y-3">
                    {step.options.map(option => (
                      <OptionCard
                        key={option}
                        title={option}
                        selected={form.solution === option}
                        onClick={() => chooseSingle('solution', option)}
                      />
                    ))}
                  </div>
                ) : null}

                {step.key === 'priority' ? (
                  <div className="space-y-3">
                    {step.options.map(option => (
                      <OptionCard
                        key={option}
                        title={option}
                        selected={form.priority.includes(option)}
                        onClick={() => togglePriority(option)}
                      />
                    ))}
                  </div>
                ) : null}
                {step.key === 'email' ? (
                  <div className="space-y-4 rounded-sm bg-[#111827] p-4 sm:space-y-6 sm:p-6 md:p-8">
                    <p className="max-w-2xl text-sm leading-6 text-[#9CA3AF] md:text-base">
                      Leave your email below. We&apos;ll send you an invite when we&apos;re ready.
                    </p>
                    <label className="block">
                      <span className="sr-only">Email</span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={event => setForm(current => ({ ...current, email: event.target.value }))}

                        placeholder="your.name@gmail.com"
                        className="w-full border border-gray-600 bg-transparent px-3 py-3 font-mono text-base text-white outline-none placeholder:text-gray-500 focus:border-[#534AB7] sm:px-4 sm:py-4 sm:text-lg"
                      />
                    </label>
                    </div>
                ) : null}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={retreat}
                    disabled={isFirstStep}
                    className="inline-flex items-center justify-center border border-gray-300 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:border-[#534AB7] disabled:cursor-not-allowed disabled:opacity-40 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    Back
                  </button>

                  {isLastStep ? (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center border border-[#534AB7] bg-[#534AB7] px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#463ea0] sm:px-8 sm:py-4 sm:text-sm"
                    >
                      Submit responses →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={advance}
                      className="inline-flex items-center justify-center border border-[#534AB7] bg-[#534AB7] px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#463ea0] sm:px-8 sm:py-4 sm:text-sm"
                    >
                      Next page →
                    </button>
                  )}
                </div>
              </div>
            </section>
          </div>
        </form>
      </section>
    </main>
  )
}
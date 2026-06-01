import React, { useState } from 'react'

const SurveyPage = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: [],
    email: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (key, value, multi = false) => {
    if (multi) {
      setAnswers(prev => {
        const set = new Set(prev[key])
        if (set.has(value)) set.delete(value)
        else set.add(value)
        return { ...prev, [key]: Array.from(set) }
      })
    } else {
      setAnswers(prev => ({ ...prev, [key]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailOk = answers.email && /\S+@\S+\.\S+/.test(answers.email)
    if (!emailOk) {
      setStatus({ ok: false, message: 'Please enter a valid email.' })
      return
    }

    const payload = { submittedAt: new Date().toISOString(), ...answers }
    try {
      const existing = JSON.parse(localStorage.getItem('surveyResponses') || '[]')
      existing.push(payload)
      localStorage.setItem('surveyResponses', JSON.stringify(existing))
      setStatus({ ok: true, message: 'Thanks! Your responses have been saved.' })
      setAnswers({ q1:'', q2:'', q3:'', q4:'', q5:[], email: '' })
    } catch (err) {
      console.error(err)
      setStatus({ ok: false, message: 'Failed to save responses locally.' })
    }
  }

  return (
    <main style={{padding: '40px 20px'}}>
      <section className="survey" aria-labelledby="survey-heading">
        <h2 id="survey-heading">Survey</h2>
        <form onSubmit={handleSubmit}>
          <div className="question">
            <h3>Do you actively look for campus events or just stumble upon them?</h3>
            <label><input type="radio" name="q1" checked={answers.q1==='look'} onChange={() => handleChange('q1','look')} /> I actively look</label>
            <label><input type="radio" name="q1" checked={answers.q1==='stumble'} onChange={() => handleChange('q1','stumble')} /> I stumble upon them</label>
          </div>

          <div className="question boxed">
            <h3>Do you wish you went to more events than you currently do?</h3>
            <label><input type="radio" name="q2" checked={answers.q2==='yes'} onChange={() => handleChange('q2','yes')} /> Yes, definitely</label>
            <label><input type="radio" name="q2" checked={answers.q2==='no'} onChange={() => handleChange('q2','no')} /> No, I'm satisfied</label>
          </div>

          <div className="question">
            <h3>How hard is it to find a team for a hackathon?</h3>
            <label><input type="radio" name="q3" checked={answers.q3==='impossible'} onChange={() => handleChange('q3','impossible')} /> Impossible. I usually end up not going because I don't have a team.</label>
            <label><input type="radio" name="q3" checked={answers.q3==='difficult'} onChange={() => handleChange('q3','difficult')} /> Difficult. It takes a lot of manual messaging and asking around.</label>
            <label><input type="radio" name="q3" checked={answers.q3==='easy'} onChange={() => handleChange('q3','easy')} /> Easy. I have a fixed circle of people I always work with.</label>
          </div>

          <div className="question boxed">
            <h3>Would a unified event calendar for the whole tech community change things?</h3>
            <label><input type="radio" name="q4" checked={answers.q4==='game'} onChange={() => handleChange('q4','game')} /> Game changer</label>
            <label><input type="radio" name="q4" checked={answers.q4==='marginal'} onChange={() => handleChange('q4','marginal')} /> Marginal improvement</label>
          </div>

          <div className="question">
            <h3>What's the one feature we must get right?</h3>
            <label><input type="checkbox" checked={answers.q5.includes('oneclick')} onChange={() => handleChange('q5','oneclick', true)} /> One-click registration</label>
            <label><input type="checkbox" checked={answers.q5.includes('matchmaking')} onChange={() => handleChange('q5','matchmaking', true)} /> Team matchmaking</label>
            <label><input type="checkbox" checked={answers.q5.includes('reminders')} onChange={() => handleChange('q5','reminders', true)} /> Smart reminders</label>
            <label><input type="checkbox" checked={answers.q5.includes('portfolio')} onChange={() => handleChange('q5','portfolio', true)} /> Event portfolio</label>
          </div>

          <div className="question dark boxed">
            <h3>Want early access?</h3>
            <p>Leave your email below. We'll send you an invite when we're ready.</p>
            <input type="email" placeholder="your.name@uni.edu" value={answers.email} onChange={(e) => handleChange('email', e.target.value)} />
          </div>

          <div className="actions" style={{marginTop:12}}>
            <button className="btn btn--primary" type="submit">SUBMIT RESPONSES →</button>
          </div>

          {status && (<div className={`status ${status.ok ? 'ok' : 'error'}`} style={{marginTop:12}}>{status.message}</div>)}
        </form>
      </section>
    </main>
  )
}

export default SurveyPage

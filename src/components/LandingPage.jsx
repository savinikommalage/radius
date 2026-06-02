import React from 'react';
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <main className="landing">
      <section className="hero">
        <div className="hero-left">
          <h1>NEVER MISS</h1>
          <h2>WHAT MATTERS.</h2>
          <p className="lead">one place for everything happening on campus and beyond</p>

          <p>
            radius is a student event platform for university communities — built so
            you can discover events, find your people, and build a real record of
            everything you've been part of.
          </p>

          <div className="actions">
            <Link className="btn btn--primary" to="/surveypage">TELL US WHAT YOU NEED — 2 MINS</Link>
            <Link className="btn btn--accent" to="/surveypage">I RUN A CLUB OR SOCIETY</Link>
          </div>
        </div>

        <aside className="hero-right" aria-hidden>
          {/* Placeholder for phone mockup or illustration */}
          <div style={{width: '72%', height: '72%', border: '2px dashed #d8d0cc', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Phone preview</div>
        </aside>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Want to go to a hackathon but can't find a team?</h3>
          <p>radius has a looking-for-team board. Post that you're available, browse who else is, and form your team before the event even starts.</p>
        </div>
        <div className="feature">
          <h3>Haven't found your niche community yet?</h3>
          <p>Follow the clubs and societies that match your interests. See every event they run — workshops, talks, icebreakers — in one feed.</p>
        </div>
        <div className="feature">
          <h3>Tired of only doing university work?</h3>
          <p>There’s more going on than your timetable. radius surfaces events from across your university and beyond — so you actually know what’s out there.</p>
        </div>
        <div className="feature">
          <h3>Want to make connections that go somewhere?</h3>
          <p>Meet people through shared interests at real events. Verified records of what you’ve done make it easy to show impact.</p>
        </div>
      </section>

      <section className="how-it-works">
        <h3>FROM DISCOVERY TO YOUR PASSPORT</h3>
        <div style={{display:'flex', gap:20, marginTop:12, flexWrap:'wrap'}}>
          <div style={{flex:'1 1 200px'}}>
            <strong>01</strong>
            <p>Sign in with your uni email</p>
          </div>
          <div style={{flex:'1 1 200px'}}>
            <strong>02</strong>
            <p>Browse what's happening</p>
          </div>
          <div style={{flex:'1 1 200px'}}>
            <strong>03</strong>
            <p>Register and show up</p>
          </div>
          <div style={{flex:'1 1 200px'}}>
            <strong>04</strong>
            <p>It goes on your passport</p>
          </div>
        </div>
      </section>

      <section className="passport">
        <div>
          <h3>PROOF OF WHAT YOU'VE ACTUALLY DONE.</h3>
          <p>Your passport shows events you've attended — verified, not self-reported. Share it on LinkedIn or with employers.</p>
        </div>

        <div style={{border: '1px solid rgba(0,0,0,0.06)', borderRadius:6, padding:12, background:'#fff'}}>
          <ul style={{listStyle:'none', margin:0, padding:0}}>
            <li>Hackathon — 01/24 — Team lead, 12 hrs attended</li>
            <li>Workshop — 03/24 — Intro to ML, 1hr</li>
            <li>Community Event — 05/24 — Tech Night — checked in</li>
          </ul>
        </div>
      </section>

      <section className="organizers">
        <h3>RUN YOUR EVENT, NOT YOUR SPREADSHEETS</h3>
        <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:12}}>
          <div style={{flex:'1 1 180px'}}>
            <strong>Create your event in minutes</strong>
            <p>Cover image, date, location, capacity — open registration or manually approve.</p>
          </div>
          <div style={{flex:'1 1 180px'}}>
            <strong>Students register, get a QR ticket</strong>
            <p>No forms to share, no spreadsheet to maintain. Everyone who registers has a ticket.</p>
          </div>
          <div style={{flex:'1 1 180px'}}>
            <strong>Scan and check in on the day</strong>
            <p>Open the scanner on any phone. Scan a QR code. Attendance tracked automatically.</p>
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
          <div style={{flex:'1'}}>
            <strong>HELP US GET IT RIGHT.</strong>
            <div>We want to know what you'd actually use, what you wouldn't, and what's missing. Takes 2 minutes.</div>
          </div>
          <div>
            <Link className="btn btn--primary" to="/surveypage">TAKE THE SURVEY →</Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default LandingPage;


import { useState } from 'react'
import './App.css'

const TOP_CRM_INTEGRATIONS = [
  'Salesforce',
  'HubSpot',
  'Pipedrive',
  'HighLevel',
  'Zoho CRM',
]

const DEFAULT_FORMSPREE_FORM_ID = 'xnjlpwje'
const formspreeFormId =
  import.meta.env.VITE_FORMSPREE_FORM_ID || DEFAULT_FORMSPREE_FORM_ID
const formspreeAction = `https://formspree.io/f/${formspreeFormId}`

function App() {
  const automations = [
    {
      title: 'Review Generation',
      detail:
        'Send a branded review SMS 1-2 hours after checkout to increase 5-star velocity and local rankings.',
    },
    {
      title: 'No-Show Recovery',
      detail:
        'Trigger an immediate rebooking text when a client misses an appointment and recover lost revenue fast.',
    },
    {
      title: 'Cancellation Rebooking',
      detail:
        'Automatically follow up canceled appointments with one-click booking links to keep chairs and rooms full.',
    },
    {
      title: 'Referral Activation',
      detail:
        'After positive feedback, prompt clients to refer friends using reward-based messages and trackable links.',
    },
    {
      title: 'Dormant Reactivation',
      detail:
        'Scan inactive client lists and re-engage high-value customers with personalized comeback offers.',
    },
    {
      title: 'Membership Upsell',
      detail:
        'Deliver post-visit savings snapshots that convert one-time visits into predictable recurring memberships.',
    },
  ]
  const useCases = [
    {
      label: 'Review Request',
      message:
        'Hi John, thanks for visiting Acme Corp Wellness today. We would love your feedback: acmewellness.com/review',
      outcome: 'Sent 1-2 hours after checkout to help generate more 5-star reviews.',
    },
    {
      label: 'No-Show Recovery',
      message:
        'Hi John, we missed you today at Acme Corp Wellness. No worries - grab a new time that works for you: acmewellness.com/book',
      outcome: 'Sent immediately after a missed appointment to recover the booking.',
    },
    {
      label: 'Dormant Reactivation',
      message:
        'Hey John, we have not seen you since your last HydraFacial at Acme Corp Wellness. We have openings this week - want to lock one in? acmewellness.com/book',
      outcome: 'Sent to inactive clients to bring them back for another visit.',
    },
    {
      label: 'Referral Offer',
      message:
        'Hey John, love your results at Acme Corp Wellness? Refer a friend and you both get $25 off your next visit: acmewellness.com/refer',
      outcome: 'Sent after a positive experience to drive new client referrals.',
    },
    {
      label: 'Membership Upsell',
      message:
        'You could have saved $30 today with our Glow Club at Acme Corp Wellness. Upgrade here: acmewellness.com/membership',
      outcome: 'Sent post-visit to convert one-time clients into recurring members.',
    },
  ]
  const [activeUseCase, setActiveUseCase] = useState(0)

  const showPrevUseCase = () => {
    setActiveUseCase((current) => (current === 0 ? useCases.length - 1 : current - 1))
  }

  const showNextUseCase = () => {
    setActiveUseCase((current) => (current === useCases.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src="/piper-logo.png" alt="Piper logo" />
          <span>Piper</span>
        </div>
        <nav className="nav">
          <a href="#automations">Automations</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
          <a className="btn btn-ghost btn-link" href="#demo-form">Book Demo</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Growth engine for appointment-based businesses</p>
          <h1>Recover lost revenue and grow faster on autopilot</h1>
          <p className="hero-copy">
            Piper connects to your CRM and runs six proven SMS workflows that drive reviews,
            recover no-shows, reactivate dormant clients, and increase memberships. Your team
            does nothing after setup.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Get Piper</button>
            <a className="btn btn-secondary btn-link" href="#demo-form">See Live Demo</a>
          </div>
          <div className="hero-proof">
            <div>
              <strong>More 5-star reviews</strong>
              <span>Strengthen your local reputation week after week</span>
            </div>
            <div>
              <strong>&lt; 10 min</strong>
              <span>Guided onboarding with your team</span>
            </div>
            <div>
              <strong>Fewer empty slots</strong>
              <span>Recover no-shows and cancellations automatically</span>
            </div>
            <div>
              <strong>More repeat visits</strong>
              <span>Reactivation + membership workflows built in</span>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <p>Turn every completed visit into the next booked appointment with zero extra staff effort.</p>
        </section>

        <section className="section use-case-section">
          <div className="section-head">
            <p className="eyebrow">Interactive walkthrough</p>
            <h2>See each automation in action</h2>
          </div>
          <div className="use-case-shell">
            <div className="use-case-tabs" role="tablist" aria-label="Piper use cases">
              {useCases.map((item, index) => (
                <button
                  key={item.label}
                  className={`use-case-tab${index === activeUseCase ? ' is-active' : ''}`}
                  onClick={() => setActiveUseCase(index)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="bubble-thread">
              <article className="bubble bubble-piper">
                <p>{useCases[activeUseCase].message}</p>
              </article>
              <p className="bubble-outcome">{useCases[activeUseCase].outcome}</p>
            </div>
            <div className="use-case-controls">
              <button className="btn btn-secondary" type="button" onClick={showPrevUseCase}>
                Previous
              </button>
              <button className="btn btn-primary" type="button" onClick={showNextUseCase}>
                Next Use Case
              </button>
            </div>
          </div>
        </section>

        <section id="automations" className="section">
          <div className="section-head">
            <p className="eyebrow">Six automations. One system.</p>
            <h2>Every revenue leak covered automatically</h2>
          </div>
          <div className="grid">
            {automations.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="integrations" className="section split">
          <div>
            <p className="eyebrow">Works with your CRM</p>
            <h2>One connection, your source of truth</h2>
            <p>
              Piper pulls from the contacts, deals, and activity already in your CRM so every
              SMS is grounded in real pipeline and client history—not exports or spreadsheets.
              Automations stay accurate as records update, and your team keeps working in the
              tools they already trust.
            </p>
          </div>
          <div className="integration-card">
            <p>CRM</p>
            <ul>
              {TOP_CRM_INTEGRATIONS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <p className="muted">And many more.</p>
          </div>
        </section>

        <section className="section roi">
          <div className="section-head">
            <p className="eyebrow">Clear client outcomes</p>
            <h2>What your team gets with Piper</h2>
          </div>
          <div className="roi-grid">
            <div className="roi-card">
              <span>Reputation Growth</span>
              <strong>More high-intent bookings</strong>
              <p>Automated review requests help you rank stronger where buyers discover providers.</p>
            </div>
            <div className="roi-card">
              <span>Revenue Recovery</span>
              <strong>Fewer missed revenue opportunities</strong>
              <p>No-show and cancellation workflows bring clients back before they disappear.</p>
            </div>
            <div className="roi-card">
              <span>Loyalty & Retention</span>
              <strong>Higher repeat-client value</strong>
              <p>Reactivation, referrals, and membership prompts turn one-time visits into long-term clients.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <div className="pricing-card">
            <p className="eyebrow">Simple pricing</p>
            <h2>$297 / month per location</h2>
            <p>Everything included: setup, automations, templates, optimization, and support.</p>
            <ul>
              <li>All 6 SMS automations active</li>
              <li>Vertical-specific message templates</li>
              <li>Monthly performance reporting</li>
              <li>No long-term contract</li>
            </ul>
            <button className="btn btn-primary">Start With Piper</button>
          </div>
        </section>

        <section id="demo-form" className="section demo-section">
          <div className="demo-card">
            <p className="eyebrow">Book your demo</p>
            <h2>See Piper customized for your business</h2>
            <p>Share your details and our team will reach out to schedule your live walkthrough.</p>
            <form className="demo-form" action={formspreeAction} method="POST">
              <input type="hidden" name="_subject" value="Piper: demo request" />
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" />

              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />

              <label htmlFor="business">Business Name</label>
              <input id="business" name="business" type="text" required autoComplete="organization" />

              <fieldset className="demo-form-tools">
                <legend>CRM / scheduling tool</legend>
                <p className="demo-form-tools-hint">
                  Optional—helps us prep your demo with the right context.
                </p>
                <label htmlFor="crm">Primary CRM</label>
                <select id="crm" name="crm" defaultValue="">
                  <option value="">Select if applicable</option>
                  <option value="salesforce">Salesforce</option>
                  <option value="hubspot">HubSpot</option>
                  <option value="pipedrive">Pipedrive</option>
                  <option value="highlevel">HighLevel</option>
                  <option value="zoho">Zoho CRM</option>
                  <option value="dynamics">Microsoft Dynamics 365</option>
                  <option value="activecampaign">ActiveCampaign</option>
                  <option value="other">Other</option>
                  <option value="none">Not using a CRM yet</option>
                </select>

                <label htmlFor="scheduling_tool">Scheduling or booking tool</label>
                <select id="scheduling_tool" name="scheduling_tool" defaultValue="">
                  <option value="">Select if applicable</option>
                  <option value="mindbody">Mindbody</option>
                  <option value="vagaro">Vagaro</option>
                  <option value="acuity">Acuity Scheduling</option>
                  <option value="square">Square Appointments</option>
                  <option value="boulevard">Boulevard</option>
                  <option value="calendly">Calendly</option>
                  <option value="jane">Jane</option>
                  <option value="phorest">Phorest</option>
                  <option value="other">Other</option>
                  <option value="none">Not sure / none yet</option>
                </select>
              </fieldset>

              <button type="submit" className="btn btn-primary">
                Request Demo
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h2>Stop losing revenue to no-shows, cancellations, and churn.</h2>
        <p>Deploy Piper once and let your growth system run every day.</p>
        <button className="btn btn-secondary">Book Your 10-Minute Setup Call</button>
        <small>© {new Date().getFullYear()} Piper. Built for appointment-based businesses.</small>
      </footer>
    </div>
  )
}

export default App

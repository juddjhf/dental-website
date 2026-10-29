import { useEffect, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { doctors } from '../data/doctors'
import { services } from '../data/services'

const today = new Date().toISOString().split('T')[0]

export default function AppointmentModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const handleClose = () => {
    setSubmitted(false)
    onClose()
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSubmitted(false)
        onClose()
      }
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) handleClose()
    }}>
      <section className="appointment-modal" role="dialog" aria-modal="true" aria-labelledby="appointment-title">
        <button className="modal-close" type="button" onClick={handleClose} aria-label="Close appointment form"><X size={21} /></button>
        {submitted ? (
          <div className="form-success modal-success">
            <CheckCircle2 size={42} aria-hidden="true" />
            <h2>Thanks for reaching out.</h2>
            <p>Your demo request has been received. A real appointment is not being booked through this website.</p>
            <button type="button" className="button button-primary" onClick={handleClose}>Got it</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">YOUR VISIT, YOUR WAY</span>
            <h2 id="appointment-title">Let’s find a time for you.</h2>
            <p className="modal-intro">Tell us a little about what you need. This is a demo request only; no appointment will be booked.</p>
            <form className="appointment-form" onSubmit={handleSubmit}>
              <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
              <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" pattern="([0-9]|\s|\+|\(|\)|\.|-){7,}" title="Enter a valid phone number" required /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
              <label>Dental service<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label>
              <label>Preferred dentist<select name="doctor" defaultValue=""><option value="">No preference</option>{doctors.map((doctor) => <option key={doctor.name}>{doctor.name}</option>)}</select></label>
              <label>Preferred date<input name="date" type="date" min={today} required /></label>
              <label>Preferred time<select name="time" defaultValue="" required><option value="" disabled>Select a time</option><option>Morning (9am–12pm)</option><option>Afternoon (12pm–4pm)</option><option>Evening (4pm–6pm)</option></select></label>
              <button type="submit" className="button button-primary form-submit">Send appointment request</button>
            </form>
            <p className="demo-note">Demo only · Your information is not sent or stored.</p>
          </>
        )}
      </section>
    </div>
  )
}

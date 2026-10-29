import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { CheckCircle2, Clock3, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const { onBook } = useOutletContext()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow"><span className="eyebrow-dot" /> WE’RE EASY TO REACH</span><h1>Let’s start with <span>hello.</span></h1><p>Questions, a first visit, or just want to get to know us? We’re happy to hear from you.</p><button className="quiet-link contact-book-link" type="button" onClick={onBook}>Prefer to request a visit? <span>Let’s find a time.</span></button></div>
          <div className="page-hero-image contact-hero-image"><img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=85" alt="A welcoming SmileCare Dental team member" /><span>We’re looking forward to meeting you.</span></div>
        </div>
      </section>
      <section className="contact-content section">
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="eyebrow">COME ON IN</span><h2>We’re right here in <span>Brooklyn.</span></h2>
            <p className="contact-lead">A friendly face, a comfortable chair, and a team that’s happy to see you.</p>
            <div className="contact-detail"><span><MapPin size={20} /></span><div><strong>Find us</strong><p>42 Willow Lane, Suite 200<br />Brooklyn, NY 11201</p><a href="https://maps.google.com/?q=42+Willow+Lane+Brooklyn+NY+11201" target="_blank" rel="noreferrer">Get directions ↗</a></div></div>
            <div className="contact-detail"><span><Phone size={20} /></span><div><strong>Give us a call</strong><a href="tel:+17185550148">(718) 555-0148</a><small>We’re happy to help</small></div></div>
            <div className="contact-detail"><span><Mail size={20} /></span><div><strong>Send us a note</strong><a href="mailto:hello@smilecaredental.example">hello@smilecaredental.example</a><small>We’ll get back to you soon</small></div></div>
            <div className="hours-card"><Clock3 size={19} /><div><strong>When we’re here</strong><span>Mon–Fri <b>8:00 am – 6:00 pm</b></span><span>Saturday <b>9:00 am – 2:00 pm</b></span><span>Sunday <b>Closed</b></span></div></div>
          </div>
          <div className="contact-form-panel">
            {submitted ? (
              <div className="form-success">
                <CheckCircle2 size={40} aria-hidden="true" />
                <h2>Thanks for your note.</h2>
                <p>Your demo message has been received. No information has been sent to or stored by a clinic.</p>
                <button className="text-link" type="button" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <>
                <span className="eyebrow">SEND US A NOTE</span><h2>We’d love to hear from you.</h2><p>Fill in the form and we’ll be in touch. For this demo, your message stays right here.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <label>Your name<input name="name" autoComplete="name" placeholder="How should we address you?" required /></label>
                  <div className="form-row"><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" pattern="([0-9]|\s|\+|\(|\)|\.|-){7,}" title="Enter a valid phone number" placeholder="(555) 000-0000" required /></label></div>
                  <label>What’s on your mind?<textarea name="message" rows="4" placeholder="Tell us how we can help..." minLength="10" required /></label>
                  <button className="button button-primary form-submit" type="submit">Send your message <span aria-hidden="true">↗</span></button>
                </form>
                <p className="demo-note">Demo form · Your information is not sent or stored.</p>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="container map-placeholder">
          <div className="map-grid-pattern" aria-hidden="true" />
          <div className="map-road road-one" aria-hidden="true" /><div className="map-road road-two" aria-hidden="true" /><div className="map-road road-three" aria-hidden="true" />
          <div className="map-water" aria-hidden="true" />
          <div className="map-pin"><MapPin size={22} fill="currentColor" /><span>SmileCare Dental</span></div>
          <div className="map-address"><span className="eyebrow">NEIGHBORHOOD DENTAL CARE</span><strong>42 Willow Lane, Brooklyn</strong><a href="https://maps.google.com/?q=42+Willow+Lane+Brooklyn+NY+11201" target="_blank" rel="noreferrer">Open in maps ↗</a></div>
        </div>
      </section>
    </>
  )
}

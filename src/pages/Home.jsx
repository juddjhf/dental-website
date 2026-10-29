import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import DoctorCard from '../components/DoctorCard'
import TestimonialCard from '../components/TestimonialCard'
import { services } from '../data/services'
import { doctors } from '../data/doctors'
import { testimonials } from '../data/testimonials'

const heroImage = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=90'

export default function Home() {
  const { onBook } = useOutletContext()
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const visibleTestimonials = [0, 1].map((offset) => testimonials[(testimonialIndex + offset) % testimonials.length])

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> A DIFFERENT KIND OF DENTAL VISIT</span>
            <h1>Your smile deserves <span>expert care.</span></h1>
            <p className="hero-description">Modern dentistry, a genuinely gentle touch, and a team that takes the time to get to know you.</p>
            <div className="hero-actions">
              <Button onClick={onBook}>Book an appointment</Button>
              <Link className="quiet-link" to="/services">Explore our services <ArrowUpRight size={17} /></Link>
            </div>
            <div className="hero-rating">
              <div className="rating hero-stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>
              <span><strong>4.9/5</strong> from 850+ happy patients</span>
            </div>
          </div>
          <div className="hero-visual">
            <img className="hero-image" src={heroImage} alt="Welcoming, light-filled modern dental clinic" />
            <div className="hero-image-shade" />
            <div className="hero-image-caption"><span className="caption-dot" />A calmer kind of care<span>Brooklyn, New York</span></div>
            <div className="hero-floating-card">
              <span className="floating-icon"><Heart size={20} fill="currentColor" /></span>
              <span><strong>Here for your smile</strong><small>and everything behind it</small></span>
            </div>
            <div className="hero-vertical-label">CARE THAT FEELS LIKE YOU</div>
          </div>
        </div>
        <div className="container trust-strip">
          <div className="trust-intro">A little more care.<br /><span>A lot more confidence.</span></div>
          <div className="trust-item"><span><ShieldCheck size={20} /></span><div><strong>Experienced dentists</strong><small>Experts who listen first</small></div></div>
          <div className="trust-item"><span><Sparkles size={20} /></span><div><strong>Thoughtful technology</strong><small>Modern care, made simple</small></div></div>
          <div className="trust-item"><span><Heart size={20} /></span><div><strong>Patient-first always</strong><small>Comfort at every visit</small></div></div>
          <ArrowDownRight className="trust-arrow" size={25} aria-hidden="true" />
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">HOW WE CAN HELP</span><h2>Care for every <span>kind of smile.</span></h2></div>
            <div className="section-heading-aside"><p>From a simple checkup to a smile transformation, you’re in thoughtful hands.</p><Link className="text-link" to="/services">Explore all services <ArrowUpRight size={16} /></Link></div>
          </div>
          <div className="services-grid">
            {services.slice(0, 4).map((service) => <ServiceCard key={service.title} service={service} onBook={onBook} />)}
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container about-grid">
          <div className="about-photo-stack">
            <img className="about-photo-main" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85" alt="Comfortable modern dental treatment room" loading="lazy" />
            <div className="about-note"><span className="about-note-icon"><Check size={18} /></span><span><strong>Care, without the rush</strong><small>Every visit is yours to shape.</small></span></div>
            <span className="photo-caption">A space designed around you</span>
          </div>
          <div className="about-copy">
            <span className="eyebrow">A LITTLE ABOUT US</span>
            <h2>Good dentistry starts with <span>feeling at ease.</span></h2>
            <p>We believe a great dental experience is about more than healthy teeth. It’s about being listened to, having things explained clearly, and feeling genuinely cared for.</p>
            <p>At SmileCare, we pair advanced, thoughtful dentistry with a warm neighborhood feel—so you can show up exactly as you are.</p>
            <div className="about-highlights"><span><Check size={15} />Clear, no-pressure guidance</span><span><Check size={15} />Modern comfort-first care</span></div>
            <Link to="/about" className="text-link">Get to know us <ArrowUpRight size={16} /></Link>
            <div className="about-signoff">With care, <strong>The SmileCare team</strong></div>
          </div>
        </div>
      </section>

      <section className="section doctors-preview">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">THE PEOPLE BEHIND YOUR CARE</span><h2>Meet your smile’s <span>biggest fans.</span></h2></div>
            <div className="section-heading-aside"><p>Skilled, kind, and always happy to answer one more question.</p><Link className="text-link" to="/doctors">Meet the whole team <ArrowUpRight size={16} /></Link></div>
          </div>
          <div className="doctors-grid">{doctors.map((doctor) => <DoctorCard key={doctor.name} doctor={doctor} onBook={onBook} />)}</div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container testimonial-layout">
          <div className="testimonial-intro">
            <span className="eyebrow eyebrow-light">KIND WORDS, REAL SMILES</span>
            <h2>It feels good to <span>feel good.</span></h2>
            <p>We’re grateful to be part of our patients’ stories—and even more grateful they share them.</p>
            <div className="testimonial-controls">
              <button type="button" aria-label="Previous testimonials" onClick={() => setTestimonialIndex((index) => (index + testimonials.length - 1) % testimonials.length)}><ArrowLeft size={18} /></button>
              <button type="button" aria-label="Next testimonials" onClick={() => setTestimonialIndex((index) => (index + 1) % testimonials.length)}><ArrowRight size={18} /></button>
            </div>
          </div>
          <div className="testimonial-cards" aria-live="polite">
            {visibleTestimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stats-heading"><span className="eyebrow">A FEW THINGS WE’RE PROUD OF</span><h2>Small moments.<br /><span>Big reasons to smile.</span></h2></div>
          <div className="stat"><strong>12<span>+</span></strong><p>years caring for<br />our community</p></div>
          <div className="stat"><strong>850<span>+</span></strong><p>smiles cared for<br />and counting</p></div>
          <div className="stat"><strong>4.9<span>/5</span></strong><p>average patient<br />experience rating</p></div>
        </div>
      </section>

      <section className="appointment-cta">
        <div className="container appointment-cta-inner">
          <div className="cta-mark" aria-hidden="true"><CalendarDays size={28} /></div>
          <div><span className="eyebrow eyebrow-light">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to feel good about your dental care?</h2><p>Let’s make your first visit an easy one.</p></div>
          <Button variant="light" onClick={onBook}>Request an appointment</Button>
          <span className="cta-clock"><Clock3 size={15} /> Here when you need us</span>
        </div>
      </section>
    </>
  )
}

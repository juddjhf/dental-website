import { ArrowUpRight } from 'lucide-react'

export default function DoctorCard({ doctor, onBook }) {
  return (
    <article className="doctor-card">
      <div className="doctor-photo-wrap">
        <img
          className="doctor-photo"
          src={doctor.image}
          alt={`${doctor.name}, ${doctor.specialty}`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            event.currentTarget.nextElementSibling.hidden = false
          }}
        />
        <div className="doctor-fallback" hidden aria-hidden="true">{doctor.initials}</div>
        <span className="doctor-experience">{doctor.experience}</span>
      </div>
      <div className="doctor-card-info">
        <div>
          <h3>{doctor.name}</h3>
          <p>{doctor.specialty}</p>
        </div>
        <button className="doctor-book" type="button" onClick={onBook} aria-label={`Request an appointment with ${doctor.name}`}>
          <ArrowUpRight size={19} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

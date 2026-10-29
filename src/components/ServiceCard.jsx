import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ service, onBook }) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
        <span className="service-number">{service.number}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="text-link" type="button" onClick={onBook} aria-label={`Learn more about ${service.title}`}>
        Learn more <ArrowUpRight size={16} aria-hidden="true" />
      </button>
    </article>
  )
}

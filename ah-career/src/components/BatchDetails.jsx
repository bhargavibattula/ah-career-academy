import { CalendarIcon, ClockIcon, TimerIcon } from "./Icons";

const iconMap = { calendar: CalendarIcon, clock: ClockIcon, timer: TimerIcon };

export default function BatchDetails({ data }) {
  return (
    <section className="section bg-white">
      <div className="section-center">
        <h2>{data.heading}</h2>
        <p>{data.subheading}</p>
      </div>

      <div className="batch-grid">
        {data.cards.map((card, i) => {
          const Icon = iconMap[card.icon] || CalendarIcon;
          return (
            <div className="batch-card" key={i}>
              <div className="batch-icon"><Icon /></div>
              <div className="batch-label">{card.label}</div>
              <div className="batch-value">{card.value}</div>
            </div>
          );
        })}
      </div>

      <div className="center-btn">
        <button className="btn-download">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {data.downloadText}
        </button>
      </div>
    </section>
  );
}

import { CalendarIcon, UserIcon, MonitorIcon, AwardIcon } from "./Icons";

const iconMap = { calendar: CalendarIcon, user: UserIcon, monitor: MonitorIcon, award: AwardIcon };

export default function CourseFeatures({ data }) {
  return (
    <section className="section bg-gray">
      <div className="section-center">
        <h2>{data.heading}</h2>
        <p>{data.subheading}</p>
      </div>
      <div className="features-grid">
        {data.cards.map((card, i) => {
          const Icon = iconMap[card.icon] || AwardIcon;
          return (
            <div className="feat-card" key={i}>
              <div className="feat-icon-wrap"><Icon /></div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

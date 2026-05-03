import { ShieldIcon, AwardIcon, TrendingIcon, DownloadIcon } from "./Icons";

const iconMap = { shield: ShieldIcon, award: AwardIcon, trending: TrendingIcon, download: DownloadIcon };

export default function CertificationSection({ data }) {
  const { cert, includes, miniCards } = data;

  return (
    <section className="section bg-white">
      <div className="section-center">
        <h2>{data.heading}</h2>
        <p>{data.subheading}</p>
      </div>

      <div className="cert-grid">
        {/* Left: Certificate Mockup */}
        <div className="cert-card">
          <div className="cert-badge-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <h3>{cert.title}</h3>
          <div className="cert-course-name">{cert.courseName}</div>
          <div className="cert-certifies">This certifies that</div>
          <div className="cert-student-name">{cert.studentPlaceholder}</div>
          <div className="cert-completed">has successfully completed the</div>
          <div className="cert-program-name">{cert.programName}</div>
          <div className="cert-program-type">{cert.programType}</div>
          <div className="cert-footer">
            <span>{cert.issuer}</span>
            <span>Certificate ID</span>
          </div>
        </div>

        {/* Right: Details */}
        <div className="cert-right">
          <div className="cert-includes-box">
            <h4>{includes.heading}</h4>
            <ul className="cert-list">
              {includes.items.map((item, i) => (
                <li key={i}>
                  <div className="cert-check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="cert-mini-grid">
            {miniCards.map((card, i) => {
              const Icon = iconMap[card.icon] || AwardIcon;
              return (
                <div className="cert-mini" key={i}>
                  <div className="cert-mini-icon"><Icon /></div>
                  <h5>{card.title}</h5>
                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

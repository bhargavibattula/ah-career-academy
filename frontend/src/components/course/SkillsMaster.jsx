export default function SkillsMaster({ data }) {
  return (
    <section className="section bg-white">
      <div className="section-center">
        <h2>{data.heading}</h2>
        <p>{data.subheading}</p>
      </div>
      <div className="skills-grid">
        {data.categories.map((cat, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-card-header">
              <div className="skill-icon-bar" />
              <h4>{cat.title}</h4>
            </div>
            <div className="skill-tags">
              {cat.tags.map((tag, j) => (
                <span className={`skill-tag skill-tag--${cat.variant}`} key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

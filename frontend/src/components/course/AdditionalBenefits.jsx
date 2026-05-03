export default function AdditionalBenefits({ data }) {
  return (
    <div className="benefits-section">
      <h2>{data.heading}</h2>
      <div className="benefits-grid">
        {data.items.map((item, i) => (
          <div className="benefit-item" key={i}>
            <span className="benefit-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

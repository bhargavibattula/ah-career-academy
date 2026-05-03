import { useState } from "react";

export default function Curriculum({ data }) {
  const [openIndex, setOpenIndex] = useState(
    data.modules.findIndex((m) => m.open)
  );

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="section bg-gray">
      <div className="section-center">
        <h2>{data.heading}</h2>
        <p>{data.subheading}</p>
      </div>
      <div className="curriculum-wrap">
        {data.modules.map((mod, i) => {
          const isOpen = openIndex === i;
          return (
            <div className="curr-item" key={i}>
              <div className="curr-header" onClick={() => toggle(i)}>
                <div className="curr-title">
                  <div className={`curr-icon ${isOpen ? "curr-icon--minus" : "curr-icon--plus"}`}>
                    {isOpen ? "−" : "+"}
                  </div>
                  {mod.title}
                </div>
              </div>
              {isOpen && mod.items.length > 0 && (
                <div className="curr-body">
                  <ul>
                    {mod.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

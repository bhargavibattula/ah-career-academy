import { useState } from "react";
import { toast } from "react-toastify";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function HeroSection({ data }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => toast.success("Thank you! We will get back to you shortly.");

  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot" />
          {data.badge}
        </div>
        <h1 className="hero-title">
          {data.title.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <div className="hero-subtitle">{data.subtitle}</div>
        <p className="hero-desc">{data.description}</p>
        <button className="btn-primary">{data.ctaText}</button>
      </div>

      <div className="hero-form-card">
        <h3 className="form-heading">{data.form.heading}</h3>
        <p className="form-sub">{data.form.subheading}</p>

        <div className="form-group">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email address" />
        </div>
        <div className="form-group">
          <label>Telephone</label>
          <div className="phone-wrap">
            <div className="phone-flag">🇮🇳 +91</div>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Enter your mobile number" />
          </div>
        </div>
        <div className="form-group">
          <label>Message (Optional)</label>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any specific questions or requirements?" />
        </div>
        <button className="btn-form" onClick={handleSubmit}>{data.form.submitText}</button>
        <p className="form-privacy flex items-center justify-center gap-1">
          <LockClosedIcon className="w-3.5 h-3.5" />
          {data.form.privacy}
        </p>
      </div>
    </section>
  );
}

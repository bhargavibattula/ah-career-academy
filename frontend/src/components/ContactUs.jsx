import { useState } from "react";

const courses = [
  "DevOps Engineer",
  "Software Testing",
  "Java Full Stack",
  "Python Full Stack",
  "Data Science",
  "AWS",
  "Azure",
  "Selenium",
];

const modes = ["Online", "Offline", "Hybrid"];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "DevOps Engineer",
    mode: "Mode of Training",
    message: "",
    agree: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
        .hero-bg {
          background-color: #0d1b3e;
          background-image:
            radial-gradient(circle at 10% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 30%, transparent 30%),
            radial-gradient(circle at 90% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 30%, transparent 30%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.025) 40%, transparent 40%);
        }
        select { -webkit-appearance: none; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 36px !important; }
        .map-container iframe { width: 100%; height: 100%; border: 0; }
        .send-btn { background: linear-gradient(90deg, #f5a623 0%, #f0a000 100%); }
        .send-btn:hover { background: linear-gradient(90deg, #e09510 0%, #d89000 100%); }
        .info-icon-phone { background-color: #fff3e0; }
        .info-icon-whatsapp { background-color: #e8f5e9; }
        .info-icon-address { background-color: #e3f2fd; }
        .card-item { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; }
        input::placeholder, textarea::placeholder { color: #9ca3af; font-size: 14px; }
        input:focus, textarea:focus, select:focus { outline: none; border-color: #93c5fd; box-shadow: 0 0 0 2px rgba(147,197,253,0.3); }
      `}</style>

      {/* Hero Section */}
      <div className="hero-bg w-full flex items-center justify-center" style={{ minHeight: "180px" }}>
        <h1 style={{ color: "#ffffff", fontSize: "42px", fontWeight: 800, letterSpacing: "-0.5px", margin: 0 }}>
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1fr", gap: "28px", alignItems: "start" }}>

          {/* LEFT: Contact Info Card */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "20px", background: "#fff" }}>
            {/* Phone */}
            <div className="card-item" style={{ marginBottom: "14px" }}>
              <div className="info-icon-phone" style={{ width: "48px", height: "48px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#f5a623"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "15px", color: "#111827", marginBottom: "2px" }}>Phone</div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>+91 9989241515</div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="card-item" style={{ marginBottom: "14px" }}>
              <div className="info-icon-whatsapp" style={{ width: "48px", height: "48px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.315-1.258l-.308-.184-3.197.838.852-3.11-.202-.32A8 8 0 1112 20z" fill="#25D366"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "15px", color: "#111827", marginBottom: "2px" }}>Whatsapp</div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>Chat on Whatsapp</div>
              </div>
            </div>

            {/* Address */}
            <div className="card-item">
              <div className="info-icon-address" style={{ width: "48px", height: "48px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, alignSelf: "flex-start", marginTop: "2px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#2196f3"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "15px", color: "#111827", marginBottom: "2px" }}>Address</div>
                <div style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.5" }}>
                  Nandam Ganiraju Junction, near UCO Bank, Danavai Peta, Rajamahendravaram, Andhra Pradesh 533103
                </div>
              </div>
            </div>
          </div>

          {/* CENTER: Contact Form */}
          <div>
            {/* Row 1: Name + Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: "#111827", width: "100%" }}
              />
              {/* Phone with flag */}
              <div style={{ display: "flex", border: "1px solid #d1d5db", borderRadius: "6px", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "0 10px", borderRight: "1px solid #d1d5db", background: "#fff", flexShrink: 0 }}>
                  {/* India flag emoji */}
                  <span style={{ fontSize: "18px" }}>🇮🇳</span>
                  <span style={{ color: "#6b7280", fontSize: "12px" }}>▾</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  style={{ border: "none", padding: "12px 14px", fontSize: "14px", color: "#111827", width: "100%", outline: "none" }}
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: "#111827", width: "100%", marginBottom: "12px" }}
            />

            {/* Row 3: Course + Mode dropdowns */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: "#111827", width: "100%", background: "#fff", cursor: "pointer" }}
              >
                {courses.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
                style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: form.mode === "Mode of Training" ? "#9ca3af" : "#111827", width: "100%", background: "#fff", cursor: "pointer" }}
              >
                <option value="Mode of Training" disabled>Mode of Training</option>
                {modes.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>

            {/* Row 4: Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "12px 14px", fontSize: "14px", color: "#111827", width: "100%", marginBottom: "14px", resize: "vertical", lineHeight: "1.5" }}
            />

            {/* Checkbox */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "16px" }}>
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                style={{ marginTop: "2px", width: "16px", height: "16px", accentColor: "#2563eb", flexShrink: 0, cursor: "pointer" }}
              />
              <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#2563eb" }}>
                I agree to receive WhatsApp and SMS updates from AH Career regarding courses and services, as per terms &amp; conditions and privacy policy.
              </span>
            </div>

            {/* Send Button */}
            <button
              className="send-btn"
              style={{ width: "100%", padding: "14px", borderRadius: "6px", border: "none", color: "#fff", fontWeight: 700, fontSize: "16px", cursor: "pointer", letterSpacing: "0.3px" }}
            >
              Send
            </button>
          </div>

          {/* RIGHT: Map */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden", position: "relative", minHeight: "420px" }}>
            {/* Open in Maps button */}
            <a
              href="https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: "absolute", top: "10px", left: "10px", zIndex: 10, background: "#fff", border: "1px solid #d1d5db", borderRadius: "6px", padding: "6px 12px", fontSize: "13px", fontWeight: 500, color: "#111827", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
            >
              Open in Maps
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 2L2 10M10 2H5M10 2V7" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <iframe
              title="AH Career Pvt Ltd Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d81.7841!3d17.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a4b1e1a1a1a1%3A0x4c043fc81cb2a5f5!2sAH%20CAREER%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

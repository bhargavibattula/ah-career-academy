import { useState } from "react";
import { toast } from "react-toastify";
import SEO from "./SEO";
import {
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

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

const contactCards = [
  {
    icon: PhoneIcon,
    title: "Phone",
    value: "+91 9989241515",
    sub: "Landline: 0883-2474088",
    href: "tel:9989241515",
  },
  {
    icon: EnvelopeIcon,
    title: "Email",
    value: "ahcareerpvtltd@gmail.com",
    sub: "Course and career inquiries",
    href: "mailto:ahcareerpvtltd@gmail.com",
  },
  {
    icon: MapPinIcon,
    title: "Address",
    value: "Rajamahendravaram",
    sub: "Near UCO Bank, Danavai Peta, Andhra Pradesh 533103",
    href: "https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh",
  },
];

const socials = [
  { label: "f", name: "Facebook", href: "https://www.facebook.com/share/18nvUvNp8m/" },
  { label: "Ig", name: "Instagram", href: "https://www.instagram.com/ah_career_rajahmundry" },
  { label: "in", name: "LinkedIn", href: "https://www.linkedin.com/company/ahcareer/" },
  { label: <GlobeAltIcon className="h-5 w-5" />, name: "Website", href: "http://ahcareer.in" },
];

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const cleanedName = form.name.trim();
    if (!cleanedName) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedName)) {
      newErrors.name = "Enter a valid name (letters and spaces only, min 2 characters).";
    }

    const cleanedPhone = form.phone.trim();
    if (!cleanedPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid 10-digit WhatsApp number starting with 6-9.";
    }

    const cleanedEmail = form.email.trim();
    if (!cleanedEmail) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(cleanedEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (form.mode === "Mode of Training") {
      newErrors.mode = "Please select a training mode.";
    }

    if (!form.agree) {
      newErrors.agree = "You must agree to the terms to proceed.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please correct the errors in the form.");
      return;
    }

    setErrors({});
    toast.success("Message sent successfully! Our counselors will contact you soon.");
    
    setForm({
      name: "",
      phone: "",
      email: "",
      course: "DevOps Engineer",
      mode: "Mode of Training",
      message: "",
      agree: true,
    });
  };

  const fieldClass =
    "w-full rounded-2xl border border-blue-100 bg-white px-4 py-3.5 text-sm font-semibold text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SEO 
        title="Contact Us"
        description="Get in touch with AH Career Academy in Rajahmundry. Call us at 99892 41515, email ahcareerpvtltd@gmail.com, or visit our Danavaipet campus."
        keywords="contact ah career academy, phone number, address, rajahmundry"
      />
      <section className="relative overflow-hidden bg-[#0F172A] px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_86%_30%,rgba(37,99,235,0.25),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
            <SparklesIcon className="h-4 w-4" />
            Contact AH Career
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let us help you choose the right learning path.
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-300">
                Talk to our counselors about courses, demo classes, batch timings, and career roadmap support.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["24/7", "Learning support"],
                ["Free", "Demo guidance"],
                ["Fast", "Counselor callback"],
                ["Hybrid", "Online and offline"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-2xl font-black text-[#38BDF8]">{value}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Reach us directly</h2>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
              Pick the easiest channel. We usually respond quickly during working hours.
            </p>

            <div className="mt-6 space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.title === "Address" ? "_blank" : undefined}
                    rel={card.title === "Address" ? "noreferrer" : undefined}
                    className="group flex gap-4 rounded-3xl border border-blue-100 bg-[#F8FAFC] p-4 transition-all hover:border-[#38BDF8]/70 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-100 group-hover:bg-[#2563EB] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-[#0F172A]">{card.title}</div>
                      <div className="mt-1 text-sm font-bold text-slate-700">{card.value}</div>
                      <div className="mt-1 text-xs font-medium leading-5 text-slate-500">{card.sub}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 border-t border-blue-100 pt-6">
              <div className="text-sm font-black">Follow us</div>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white text-sm font-black text-[#2563EB] transition-all hover:-translate-y-0.5 hover:bg-[#2563EB] hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
            <a
              href="https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b border-blue-100 px-5 py-4 text-sm font-black text-[#2563EB]"
            >
              Open location in Maps
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <iframe
              title="AH Career Pvt Ltd Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d81.7841!3d17.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a4b1e1a1a1a1%3A0x4c043fc81cb2a5f5!2sAH%20CAREER%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="320"
              className="block border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-8">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#38BDF8]/10 px-4 py-1.5 text-sm font-bold text-[#2563EB]">
              <ChatBubbleLeftRightIcon className="h-4 w-4" />
              Course inquiry
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight">Send us a message</h2>
            <p className="mt-2 text-sm font-medium text-slate-500">
              Share your details and our team will guide you with the best next step.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input 
                className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                  errors.name ? "border-red-300 focus:border-red-300 focus:ring-red-100 text-red-900" : "border-blue-100 focus:border-[#38BDF8] focus:ring-[#38BDF8]/20 text-[#0F172A]"
                }`} 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={form.name} 
                onChange={handleChange} 
              />
              {errors.name && <p className="text-xs font-semibold text-red-500 mt-1 pl-2">{errors.name}</p>}
            </div>
            <div>
              <input 
                className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                  errors.phone ? "border-red-300 focus:border-red-300 focus:ring-red-100 text-red-900" : "border-blue-100 focus:border-[#38BDF8] focus:ring-[#38BDF8]/20 text-[#0F172A]"
                }`} 
                type="tel" 
                name="phone" 
                placeholder="Phone" 
                value={form.phone} 
                onChange={handleChange} 
              />
              {errors.phone && <p className="text-xs font-semibold text-red-500 mt-1 pl-2">{errors.phone}</p>}
            </div>
          </div>
          <div className="mt-4">
            <input 
              className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                errors.email ? "border-red-300 focus:border-red-300 focus:ring-red-100 text-red-900" : "border-blue-100 focus:border-[#38BDF8] focus:ring-[#38BDF8]/20 text-[#0F172A]"
              }`} 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={form.email} 
              onChange={handleChange} 
            />
            {errors.email && <p className="text-xs font-semibold text-red-500 mt-1 pl-2">{errors.email}</p>}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <select className={fieldClass} name="course" value={form.course} onChange={handleChange}>
                {courses.map((course) => (
                  <option key={course}>{course}</option>
                ))}
              </select>
            </div>
            <div>
              <select 
                className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                  errors.mode ? "border-red-300 focus:border-red-300 focus:ring-red-100 text-red-900" : "border-blue-100 focus:border-[#38BDF8] focus:ring-[#38BDF8]/20 text-[#0F172A]"
                }`} 
                name="mode" 
                value={form.mode} 
                onChange={handleChange}
              >
                <option value="Mode of Training" disabled>
                  Mode of Training
                </option>
                {modes.map((mode) => (
                  <option key={mode}>{mode}</option>
                ))}
              </select>
              {errors.mode && <p className="text-xs font-semibold text-red-500 mt-1 pl-2">{errors.mode}</p>}
            </div>
          </div>
          <textarea
            className={`${fieldClass} mt-4 min-h-[150px] resize-y`}
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          />
          <div className="mt-5">
            <label className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-500">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-blue-200 accent-[#2563EB]"
              />
              I agree to receive WhatsApp and SMS updates from AH Career regarding courses and services, as per terms and privacy policy.
            </label>
            {errors.agree && <p className="text-xs font-semibold text-red-500 mt-1 pl-2">{errors.agree}</p>}
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-[#2563EB] px-6 py-4 text-base font-black text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

import React from "react";
import { 
  AcademicCapIcon, 
  CheckCircleIcon, 
  BriefcaseIcon, 
  UserIcon, 
  ArrowRightIcon, 
  PhoneIcon, 
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  LightBulbIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

export default function JobReadyProgram() {
  const highlights = [
    {
      title: "Full Stack Development",
      description: "Master both frontend and backend technologies to build complete, scalable web applications.",
      icon: <AcademicCapIcon className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Data Structures & Algorithms",
      description: "Build a strong foundation in problem-solving and coding efficiency for top-tier interviews.",
      icon: <ChartBarIcon className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Communication Skills",
      description: "Enhance your verbal and written communication to excel in professional environments.",
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Aptitude Training",
      description: "Sharpen your logical reasoning and quantitative skills for clearing placement rounds.",
      icon: <LightBulbIcon className="w-8 h-8 text-purple-500" />,
    },
  ];

  const techStack = [
    "Java", "Python", "HTML", "CSS", "JavaScript", "React.js", "Node.js"
  ];

  const placements = [
    { label: "Placement Support", value: "100%", icon: <ShieldCheckIcon className="w-6 h-6" /> },
    { label: "Salary Package", value: "4.0 – 12.0 LPA", icon: <BriefcaseIcon className="w-6 h-6" /> },
    { label: "Preparation", value: "Mock Interviews", icon: <UserGroupIcon className="w-6 h-6" /> },
    { label: "Career Ready", value: "Resume Building", icon: <CheckCircleIcon className="w-6 h-6" /> },
  ];

  const whyAHCareer = [
    { title: "Expert Faculties", desc: "Learn from industry veterans with years of real-world experience." },
    { title: "Practical Learning", desc: "Focus on hands-on projects rather than just theoretical concepts." },
    { title: "Interview Preparation", desc: "Special sessions dedicated to cracking technical and HR rounds." },
    { title: "Limited Batch Size", desc: "Ensuring personalized attention for every student in the program." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-[#0b1257] text-white py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 border border-orange-400/40 bg-orange-500/10 text-orange-400 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-8">
              <AcademicCapIcon className="w-4 h-4" />
              Flagship Program
            </span>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              JOB READY <span className="text-orange-500">TRAINING PROGRAM</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mb-12 leading-relaxed">
              Become Job Ready with Industry Skills. From Student Today → Professional Tomorrow. 
              Learn | Practice | Get Placed.
            </p>

            <div className="flex flex-col sm:row gap-4 mb-16">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20 active:scale-95">
                Enroll Now
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/20 hover:border-white/50 text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95">
                Download Brochure
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-3xl border-t border-white/10 pt-12">
              <div>
                <p className="text-orange-500 text-3xl font-black mb-1">4 Months</p>
                <p className="text-gray-400 text-sm uppercase font-bold tracking-wider">Duration</p>
              </div>
              <div>
                <p className="text-orange-500 text-3xl font-black mb-1">6 Hours</p>
                <p className="text-gray-400 text-sm uppercase font-bold tracking-wider">Daily Time</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-orange-500 text-3xl font-black mb-1">ISO Certified</p>
                <p className="text-gray-400 text-sm uppercase font-bold tracking-wider">9001:2015</p>
              </div>
            </div>
          </div>
        </div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Program Highlights */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1257] mb-4 uppercase tracking-tight">Program Highlights</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  {React.cloneElement(item.icon, { className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-[#0b1257] mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#0b1257] mb-12 uppercase tracking-tight">Technologies You'll Master</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span key={tech} className="bg-gray-100 text-gray-700 text-sm font-bold px-8 py-3.5 rounded-2xl border border-gray-200 hover:bg-[#0b1257] hover:text-white hover:border-[#0b1257] transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="py-24 px-4 bg-[#0b1257] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 uppercase tracking-tight">Placement Support</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">We don't just teach, we ensure you land your dream job with dedicated support and preparation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placements.map((stat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-orange-500/20">
                  {stat.icon}
                </div>
                <div className="text-2xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-[2.5rem] p-4 shadow-2xl relative flex-shrink-0">
               <div className="w-full h-full bg-[#0b1257] rounded-3xl flex items-center justify-center overflow-hidden">
                 <UserIcon className="w-32 h-32 text-white/20" />
                 <div className="absolute inset-4 border-2 border-orange-500/30 rounded-[1.5rem]"></div>
               </div>
               <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-3xl shadow-xl">
                 <BriefcaseIcon className="w-8 h-8" />
               </div>
            </div>
            <div className="flex-1">
              <span className="text-orange-500 font-black text-sm uppercase tracking-widest mb-4 block">Meet Your Trainer</span>
              <h2 className="text-4xl font-black text-[#0b1257] mb-2">Mr. Atish Jain</h2>
              <p className="text-gray-500 font-bold mb-8 italic">MCA, MSc (IT), MS (CS)</p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                With over a decade of industry experience, Mr. Atish Jain has mentored thousands of students to build successful careers in top tech companies.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Java", "Python", ".NET"].map((skill) => (
                  <span key={skill} className="bg-blue-50 text-blue-700 text-xs font-black px-5 py-2 rounded-xl border border-blue-100 uppercase tracking-wider">
                    {skill} Expert
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AH Career */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1257] mb-4 uppercase tracking-tight">Why Choose AH Career?</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyAHCareer.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 flex items-start gap-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b1257] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0b1257] rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black mb-6 uppercase tracking-tight">Ready to start your journey?</h2>
              <p className="text-blue-200 mb-12 text-lg">Contact our counselors today for a free career roadmap.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <DevicePhoneMobileIcon className="w-6 h-6 text-orange-500 mx-auto mb-3" />
                  <p className="text-sm font-bold">9989241515</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <MapPinIcon className="w-6 h-6 text-orange-500 mx-auto mb-3" />
                  <p className="text-sm font-bold">Rajahmundry, AP</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-orange-500 mx-auto mb-3" />
                  <p className="text-sm font-bold">WhatsApp Support</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:9989241515" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <PhoneIcon className="w-5 h-5" />
                  Call Now
                </a>
                <a href="https://wa.me/919989241515" className="bg-green-600 hover:bg-green-700 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

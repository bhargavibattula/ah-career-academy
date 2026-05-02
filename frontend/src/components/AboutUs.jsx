import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <style>{`
        .hero-bg {
          background-color: #0d1b3e;
          background-image:
            radial-gradient(circle at 10% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 30%, transparent 30%),
            radial-gradient(circle at 90% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 30%, transparent 30%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.025) 40%, transparent 40%);
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-bg w-full flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          About <span className="text-[#f5a623]">AH Career Academy</span>
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl text-center">
          Empowering careers since 2013 with industry-oriented IT and skill development training.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Info Column */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              AH Career Academy of Skills is a premier computer training institute and skill development center located in Rajahmundry, Andhra Pradesh. Founded in 2013, we focus on equipping students, fresh graduates, and working professionals with the practical, job-oriented IT skills needed in today's fast-paced tech industry.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We provide expert mentoring, real-world projects, and a clean, safe learning environment. Our courses are designed to bridge the gap between academia and industry requirements.
            </p>
          </section>

          {/* Courses Offered */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Teach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4">💻</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Programming & Tech</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• C, C++, Java, Python</li>
                  <li>• SQL</li>
                  <li>• Full Stack Development (Java & Python)</li>
                  <li>• Web Designing</li>
                  <li>• AI & Machine Learning</li>
                  <li>• Data Science</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl mb-4">📊</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Business & Other Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• MS Office / Microsoft 365</li>
                  <li>• Advanced Excel & Tally Accounting</li>
                  <li>• Digital Marketing</li>
                  <li>• Spoken English & Communication</li>
                  <li>• Cybersecurity (Mile2 Certification)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
             <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
             <div className="flex flex-wrap gap-3">
               {["Practical & Project-Based Learning", "Corporate Workshops", "Online & Offline Classes", "Experienced Faculty", "Certification Programs", "Personalized Mentoring"].map((feature) => (
                 <span key={feature} className="px-4 py-2 bg-orange-50 text-orange-700 border border-orange-200 rounded-full font-medium">
                   {feature}
                 </span>
               ))}
             </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          {/* Quick Facts */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 text-xl mb-4 border-b pb-2">Quick Facts</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex justify-between"><span className="font-medium text-gray-900">Founded:</span> 2013</li>
              <li className="flex justify-between"><span className="font-medium text-gray-900">Industry:</span> Education & Skills</li>
              <li className="flex justify-between"><span className="font-medium text-gray-900">Company Size:</span> 11–50 employees</li>
              <li className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Certifications:</span>
                <span className="text-right">ISO 9001:2015<br/>Tally Certified<br/>MSME Registered</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 text-xl mb-4 border-b pb-2">Contact Us</h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex gap-3">
                <span className="text-xl">📍</span>
                <p>Danavaipeta, Near UCO Bank, T.T.D Road, Vadrevu Buildings, Rajahmundry – 533103</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xl">📞</span>
                <p>9989241515<br/>0883-2474088 (Landline)</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xl">✉️</span>
                <p>ahcareerpvtltd@gmail.com</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/share/18nvUvNp8m/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition">f</a>
              <a href="https://www.instagram.com/ah_career_rajahmundry" target="_blank" rel="noreferrer" className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-200 transition">in</a>
              <a href="https://www.linkedin.com/company/ahcareer/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center hover:bg-blue-200 transition">Li</a>
              <a href="http://ahcareer.in" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 transition">🌐</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

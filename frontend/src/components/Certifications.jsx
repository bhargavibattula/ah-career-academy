import { Award, ShieldCheck, FileCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-2">
            Recognized & Certified
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our Accreditations
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We meet the highest standards of education and operational excellence, ensuring your career is built on a solid foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* ISO Certification */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="text-blue-600 w-12 h-12" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">ISO 9001:2015</h4>
            <p className="text-slate-500 font-medium mb-4">Certified Institution</p>
            <p className="text-sm text-slate-400">
              Recognized globally for quality management systems and educational excellence.
            </p>
          </div>

          {/* APSCHE */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-indigo-600 w-12 h-12" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">APSCHE</h4>
            <p className="text-slate-500 font-medium mb-4">Registered Partner</p>
            <p className="text-sm text-slate-400">
              Approved by the Andhra Pradesh State Council of Higher Education.
            </p>
          </div>

          {/* MSME */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-24 h-24 bg-sky-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileCheck className="text-sky-600 w-12 h-12" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">MSME</h4>
            <p className="text-slate-500 font-medium mb-4">Registered Enterprise</p>
            <p className="text-sm text-slate-400">
              Officially recognized by the Ministry of Micro, Small and Medium Enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import ScrollVelocity from './ScrollVelocity';

export default function CompanyLogos() {
  const logos = [
    // Apple
    <div key="apple" className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <svg className="h-6 w-6 fill-current text-black" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94.1.08.2.12.31.12.87 0 1.94-.54 2.5-1.45z"/>
      </svg>
      <span className="font-bold text-black tracking-tight text-xl select-none" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Arial, sans-serif' }}>
        Apple
      </span>
    </div>,
    
    // Facebook
    <div key="facebook" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <svg className="h-6 w-6 text-[#1877F2] fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <span className="font-extrabold text-[#1877F2] tracking-tighter lowercase text-2xl select-none" style={{ fontFamily: 'Helvetica, Arial, sans-serif', textTransform: 'none' }}>
        facebook
      </span>
    </div>,
    
    // Google
    <div key="google" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <span className="font-bold text-[#4285F4] tracking-tight text-xl select-none" style={{ fontFamily: 'Product Sans, Arial, sans-serif', textTransform: 'none' }}>
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
    </div>,
    
    // Netflix
    <div key="netflix" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <span className="font-black text-[#E50914] tracking-widest text-2xl uppercase select-none" style={{ fontFamily: 'Helvetica, Arial, sans-serif', textTransform: 'none' }}>
        Netflix
      </span>
    </div>,
    
    // Amazon
    <div key="amazon" className="flex flex-col items-center justify-center bg-white px-8 py-2.5 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <span className="font-black text-black text-xl tracking-tight leading-none lowercase select-none" style={{ textTransform: 'none' }}>amazon</span>
      <svg className="h-3 w-16 text-[#FF9900]" fill="currentColor" viewBox="0 0 76 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.38 8.44c15.22 8.76 43.14 8.76 58.36 0 1.94-1.12 4.14 1.16 2.46 2.58-13.68 11.58-49.6 11.58-63.28 0-1.68-1.42.52-3.7 2.46-2.58z"/>
        <path d="M62.62 5.08c-.76 1.84-1.24 3.76-1.44 5.76-.08.78.72 1.3 1.34.8l4.34-3.56c.56-.46.46-1.34-.18-1.66l-4.06-2.02c-.62-.32-1.26.24-1 .88z"/>
      </svg>
    </div>,

    // Microsoft
    <div key="microsoft" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <div className="grid grid-cols-2 gap-0.5 w-5 h-5 flex-shrink-0">
        <div className="bg-[#F25022] w-2.5 h-2.5"></div>
        <div className="bg-[#7FBA00] w-2.5 h-2.5"></div>
        <div className="bg-[#00A4EF] w-2.5 h-2.5"></div>
        <div className="bg-[#FFB900] w-2.5 h-2.5"></div>
      </div>
      <span className="font-semibold text-[#737373] tracking-tight text-xl select-none" style={{ fontFamily: 'Segoe UI, Arial, sans-serif', textTransform: 'none' }}>
        Microsoft
      </span>
    </div>,

    // Meta
    <div key="meta" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <svg className="h-5 w-8 text-[#0064E0] fill-current" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.63 0c-2.38 0-4.34 1.54-5.36 3.82C10.25 1.54 8.29 0 5.9 0 2.64 0 0 2.64 0 5.9s2.64 5.9 5.9 5.9c2.38 0 4.34-1.54 5.36-3.82.97 2.28 2.93 3.82 5.37 3.82 3.26 0 5.9-2.64 5.9-5.9S19.89 0 16.63 0zm-.73 9.4c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm-10 0c-1.93 0-3.5-1.57-3.5-3.5S3.97 2.4 5.9 2.4s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
      </svg>
      <span className="font-bold text-black tracking-tight text-xl select-none" style={{ fontFamily: 'Helvetica, Arial, sans-serif', textTransform: 'none' }}>
        Meta
      </span>
    </div>,

    // IBM
    <div key="ibm" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <span className="font-black text-[#006699] tracking-tighter text-2xl select-none" style={{ fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '-0.03em', textTransform: 'none' }}>
        IBM
      </span>
    </div>,

    // Intel
    <div key="intel" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <span className="font-extrabold text-[#0071C5] italic text-2xl select-none" style={{ fontFamily: 'Helvetica, Arial, sans-serif', textTransform: 'none' }}>
        intel
      </span>
    </div>,

    // Adobe
    <div key="adobe" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <svg className="h-6 w-6 text-[#FF0000] fill-current" viewBox="0 0 24 24">
        <path d="M13.9 2h7.8L15 22h-3.8zM10.1 2H2.3L9 22h3.8zM12 9.5l4.8 12.5H13l-1.5-4h-3.8z"/>
      </svg>
      <span className="font-bold text-black tracking-tight text-xl select-none" style={{ fontFamily: 'Helvetica, Arial, sans-serif', textTransform: 'none' }}>
        Adobe
      </span>
    </div>,

    // Salesforce
    <div key="salesforce" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <svg className="h-6 w-8 text-[#00A1E0] fill-current" viewBox="0 0 24 24">
        <path d="M21.9 10.6c-.3-.7-.7-1.3-1.3-1.8.1-.4.2-.8.2-1.3 0-2.4-2-4.3-4.4-4.3-1.6 0-3 1-3.7 2.4-.6-.5-1.4-.8-2.2-.8-1.7 0-3.2 1.2-3.6 2.8-.7-.4-1.5-.6-2.4-.6-2.7 0-4.8 2.2-4.8 4.9 0 .4.1.8.2 1.2C.8 13.7 0 15 0 16.5 0 19 2 21 4.5 21h16.7c1.5 0 2.8-1.2 2.8-2.8 0-1.8-1.3-3.2-3.1-3.6.8-.9 1.1-2.4 1-4z"/>
      </svg>
      <span className="font-bold text-black tracking-tight text-xl select-none" style={{ fontFamily: 'Helvetica, Arial, sans-serif', textTransform: 'none' }}>
        salesforce
      </span>
    </div>,

    // Oracle
    <div key="oracle" className="flex items-center gap-2 bg-white px-8 py-3 rounded-2xl shadow-lg border border-slate-200/80 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <span className="font-black text-[#F80000] tracking-tight text-2xl select-none" style={{ fontFamily: 'Arial, sans-serif', textTransform: 'none' }}>
        ORACLE
      </span>
    </div>
  ];

  // Double duplicate logos to ensure standard desktop viewports are fully covered even during initial rendering
  const logosList = [...logos, ...logos];

  return (
    <section className="bg-[#111] text-white py-12 relative overflow-hidden select-none">
      {/* Edge Gradient Overlay Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center mb-8 relative z-20">
        <h3 className="text-lg md:text-xl font-bold tracking-wide text-slate-300 uppercase">
          Trusted by Learners Working At Top Companies Like
        </h3>
      </div>

      <div className="relative z-20 flex justify-center py-2">
        <ScrollVelocity
          texts={[
            <div className="flex items-center gap-6 py-2">
              {logosList}
            </div>
          ]}
          velocity={-180}
          numCopies={8}
          parallaxClassName="parallax w-full"
          scrollerClassName="scroller flex items-center justify-start"
          scrollerStyle={{ textTransform: 'none' }}
        />
      </div>
    </section>
  );
}

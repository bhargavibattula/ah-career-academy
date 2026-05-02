import React from 'react';

const courses = [
  {
    title: "Scratch Programming",
    desc: "Build games, stories & animations",
    duration: "30 Days",
    icon: "🧩",
    color: "bg-purple-100 text-purple-600 border-purple-200"
  },
  {
    title: "Canva Designing",
    desc: "Posters, greetings, social media designs",
    duration: "25 Days",
    icon: "🎨",
    color: "bg-pink-100 text-pink-600 border-pink-200"
  },
  {
    title: "Spoken English",
    desc: "Speaking, listening & communication skills",
    duration: "30 Days",
    icon: "🗣",
    color: "bg-blue-100 text-blue-600 border-blue-200"
  },
  {
    title: "Future with AI",
    desc: "Introduction to Artificial Intelligence",
    duration: "35 Days",
    icon: "🤖",
    color: "bg-green-100 text-green-600 border-green-200"
  }
];

export default function KidsTraining() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <style>{`
        .kids-hero {
          background-color: #f5a623;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      {/* Hero Section */}
      <div className="kids-hero w-full flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="bg-white/20 px-6 py-2 rounded-full text-white font-bold tracking-wider text-sm uppercase mb-6 backdrop-blur-sm border border-white/30">
          Admissions Open Now
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-md">
          Summer Camp for Kids!
        </h1>
        <p className="text-white/90 text-xl max-w-2xl font-medium drop-shadow-sm mb-8">
          Enroll now & give your child a creative edge in a fun, practical, and safe learning environment.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-white font-semibold">
          <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">👦 Ages 7 - 15 Years</span>
          <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">🎓 Certificate Provided</span>
          <span className="bg-red-500 px-4 py-2 rounded-lg shadow-lg">⚠️ Limited Seats!</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Courses in Summer Camp</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Explore exciting tech and creative skills specifically designed to make learning fun and engaging for young minds.</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 border ${course.color}`}>
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-6 min-h-[48px]">{course.desc}</p>
              <div className="flex items-center text-sm font-semibold text-gray-500 bg-gray-50 px-3 py-2 rounded-lg inline-flex w-full">
                ⏱ Duration: {course.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-[#0d1b3e] rounded-3xl p-10 md:p-16 text-center overflow-hidden relative shadow-xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 relative z-10">Camp Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            <div className="bg-white/10 border border-white/10 rounded-xl p-6 text-white backdrop-blur-md">
              <div className="text-3xl mb-3">🎈</div>
              <div className="font-semibold text-lg">Fun Learning</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-xl p-6 text-white backdrop-blur-md">
              <div className="text-3xl mb-3">🛠</div>
              <div className="font-semibold text-lg">Practical Projects</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-xl p-6 text-white backdrop-blur-md">
              <div className="text-3xl mb-3">🛡</div>
              <div className="font-semibold text-lg">Safe Environment</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-xl p-6 text-white backdrop-blur-md">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <div className="font-semibold text-lg">Expert Trainers</div>
            </div>
          </div>

          <button className="mt-12 bg-gradient-to-r from-[#f5a623] to-[#f0a000] hover:from-[#e09510] hover:to-[#d89000] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all relative z-10 border-0">
            Book Your Child's Seat Now
          </button>
        </div>

      </div>
    </div>
  );
}

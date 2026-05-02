import React from 'react';

const reviewsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "Full Stack Java",
    rating: 5,
    text: "The training at Quality Thought completely transformed my career. The instructors are industry experts who provided real-world scenarios. I got placed in a top MNC right after completing the course!",
    avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=f5a623&color=fff",
  },
  {
    id: 2,
    name: "Priya Patel",
    course: "Data Science",
    rating: 5,
    text: "Excellent curriculum and hands-on projects. The mock interviews and placement support were incredible. Highly recommend to anyone looking to transition into tech.",
    avatar: "https://ui-avatars.com/api/?name=Priya+Patel&background=0d1b3e&color=fff",
  },
  {
    id: 3,
    name: "Amit Kumar",
    course: "DevOps & Cloud",
    rating: 4,
    text: "Great learning experience. The trainers are very patient and clear all doubts. The lab facilities and 24/7 access to recorded sessions really helped me master AWS.",
    avatar: "https://ui-avatars.com/api/?name=Amit+Kumar&background=10b981&color=fff",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    course: "Python Full Stack",
    rating: 5,
    text: "I joined as a fresher with no IT background. The structured approach and daily assignments made learning Python super easy. Today I am a working software developer.",
    avatar: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=ef4444&color=fff",
  },
  {
    id: 5,
    name: "Vikram Singh",
    course: "Software Testing",
    rating: 5,
    text: "The best place to learn Automation Testing. The selenium framework explanations were crystal clear. Got 3 offers within a month of course completion.",
    avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=8b5cf6&color=fff",
  },
  {
    id: 6,
    name: "Neha Gupta",
    course: "Cyber Security",
    rating: 4,
    text: "Very comprehensive content covering the latest security trends. The practical hacking labs gave me the confidence to handle real-world vulnerabilities.",
    avatar: "https://ui-avatars.com/api/?name=Neha+Gupta&background=ec4899&color=fff",
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
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
      `}</style>

      {/* Hero Section */}
      <div className="hero-bg w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Student <span className="text-[#f5a623]">Success</span> Stories
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl text-center">
          Hear from our alumni who have transformed their careers with Quality Thought.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Rating Summary */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-5xl font-black text-gray-900 mb-2">4.8</div>
            <div className="flex text-[#f5a623] text-xl justify-center mb-1">
              ★★★★★
            </div>
            <div className="text-gray-500 text-sm font-medium">Out of 2,500+ Reviews</div>
          </div>
          <div className="hidden md:block w-px h-24 bg-gray-200"></div>
          <div className="flex flex-col gap-2 w-full max-w-sm">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-600 w-12">{star} Stars</div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#f5a623] rounded-full" 
                    style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : star === 3 ? '3%' : '1%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              {/* Stars */}
              <div className="flex text-[#f5a623] text-lg mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                ))}
              </div>
              
              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                "{review.text}"
              </p>
              
              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-blue-600 font-medium">{review.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

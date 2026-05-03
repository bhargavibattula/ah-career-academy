import { useState } from "react";

const jobsData = [
  {
    id: 1,
    title: "Marketing Representative Internship",
    company: "Idovent Private Limited",
    location: "Bengaluru",
    workType: "On-site",
    experience: "Fresher",
    salary: "1k to 10k per Month",
    type: "Full-Time",
    logo: "M",
    logoColor: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "Software Development Internship",
    company: "Tax-O-Smart",
    location: "Mumbai",
    workType: "On-site",
    experience: "Fresher",
    salary: "8k per Month",
    type: "Internship",
    logo: "S",
    logoColor: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    title: "Full Stack Java Developer",
    company: "AH Career",
    location: "Hyderabad",
    workType: "Hybrid",
    experience: "1 - 3 yr.",
    salary: "40k to 60k per Month",
    type: "Full-Time",
    logo: "Q",
    logoColor: "bg-orange-100 text-orange-600"
  },
  {
    id: 4,
    title: "Data Science Lead",
    company: "AH Career",
    location: "Remote",
    workType: "Remote",
    experience: "3 - 6 yr.",
    salary: "Not Disclosed",
    type: "Full-Time",
    logo: "Q",
    logoColor: "bg-orange-100 text-orange-600"
  }
];

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");

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
        .search-input:focus { outline: none; border-color: #f5a623; box-shadow: 0 0 0 2px rgba(245,166,35,0.3); }
        .filter-checkbox { accent-color: #f5a623; width: 16px; height: 16px; cursor: pointer; }
      `}</style>

      {/* Hero Section */}
      <div className="hero-bg w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-8 text-center tracking-tight">
          Find Your Next <span className="text-[#f5a623]">Job</span> Here!
        </h1>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="search-input w-full pl-12 pr-32 py-4 rounded-full border-0 shadow-lg text-gray-900 text-base"
            placeholder="Search for jobs, skills, or companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute inset-y-2 right-2 px-6 bg-gradient-to-r from-[#f5a623] to-[#f0a000] hover:from-[#e09510] hover:to-[#d89000] text-white font-semibold rounded-full transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          
          {/* Left Column: Filters */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Filter</h2>
              <button className="text-sm text-blue-600 font-medium hover:text-blue-800">Clear All</button>
            </div>

            {/* Location Filter */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 cursor-pointer">
                <h3 className="font-semibold text-gray-800">Location</h3>
                <svg className="w-4 h-4 text-gray-500 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter location" 
                  className="w-full pl-3 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-colors"
                />
                <svg className="w-4 h-4 text-gray-400 absolute right-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>

            {/* Experience Filter */}
            <div>
              <div className="flex items-center justify-between mb-4 cursor-pointer">
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <svg className="w-4 h-4 text-gray-500 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
              </div>
              <div className="space-y-3">
                {["Fresher", "1 - 3 yr.", "3 - 6 yr.", "6+ yr."].map((exp) => (
                  <label key={exp} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="filter-checkbox border-gray-300 rounded" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{exp}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Job Listings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All <span className="text-blue-600">Jobs</span>
            </h2>

            <div className="space-y-4">
              {jobsData.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  
                  {/* Logo */}
                  <div className={`w-14 h-14 ${job.logoColor} rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                    {job.logo}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 w-full">
                    <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors truncate mb-1">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{job.company}</p>
                    
                    {/* Meta info row */}
                    <div className="flex flex-wrap items-center gap-4 gap-y-2 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        {job.workType}
                      </div>
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {job.salary}
                      </div>
                    </div>
                  </div>

                  {/* Right side badge */}
                  <div className="flex-shrink-0 w-full sm:w-auto text-left sm:text-right mt-2 sm:mt-0">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-blue-200 text-blue-700 bg-blue-50">
                      {job.type}
                    </span>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

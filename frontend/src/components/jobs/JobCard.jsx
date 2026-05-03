import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import ShareButton from './ShareButton';

export default function JobCard({ job }) {
  const { 
    _id, 
    slug, 
    title, 
    category, 
    location, 
    salary, 
    experience, 
    jobType, 
    createdAt,
    description 
  } = job;

  const postedDate = new Date(createdAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col h-full">
      <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
      
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Posted {postedDate}
          </span>
        </div>

        <Link to={`/jobs/${slug || _id}`}>
          <h3 className="text-xl font-black text-[#0b1257] mb-2 hover:text-blue-700 transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 font-bold mb-4 flex items-center gap-1">
          🏢 AH Career Academy • <span className="text-blue-600">{location}</span>
        </p>

        <p className="text-gray-600 text-sm line-clamp-2 mb-6 leading-relaxed">
          {description || `Join AH Career as a ${title}. We are looking for passionate individuals to join our team in ${location}.`}
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
            <span>💰</span> {salary}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
            <span>💼</span> {jobType}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mt-auto">
        <WhatsAppButton jobTitle={title} />
        <div className="grid grid-cols-2 gap-3">
          <ShareButton jobId={_id} jobSlug={slug} className="py-2.5 text-sm" />
          <Link 
            to={`/jobs/${slug || _id}`}
            className="bg-blue-50 text-blue-700 font-bold py-2.5 px-4 rounded-xl hover:bg-blue-100 transition-all text-sm flex items-center justify-center active:scale-95"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

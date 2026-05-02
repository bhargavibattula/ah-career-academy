import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from './Blog';

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-orange-500 hover:text-orange-600 font-semibold underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      {/* Article Header (Hero) */}
      <div className="w-full bg-[#0d1b3e] pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link to="/blog" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-orange-500/20 text-orange-400 text-sm font-bold px-4 py-1.5 rounded-full border border-orange-500/30">
              {blog.category}
            </span>
            <span className="text-blue-200 text-sm font-medium">{blog.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-white text-lg border border-white/20">
              {blog.author.charAt(0)}
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">{blog.author}</div>
              <div className="text-xs text-blue-200">AH Career Academy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Cover Image */}
          <div className="w-full h-64 md:h-[400px]">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Article Text */}
          <div className="p-8 md:p-14">
            <div className="prose prose-lg max-w-none text-gray-700">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-3">
              <span className="font-bold text-gray-900">Share this article:</span>
              <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center transition-colors text-gray-600">
                f
              </button>
              <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center transition-colors text-gray-600">
                in
              </button>
              <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center transition-colors text-gray-600">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

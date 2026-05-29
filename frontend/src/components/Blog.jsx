import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export const blogsData = [
  {
    id: 1,
    title: "The Ultimate Guide to Starting a Career in Full Stack Development",
    excerpt: "Discover the essential skills, tools, and frameworks you need to become a successful full stack developer in today's competitive tech industry.",
    content: "Full stack development is one of the most rewarding career paths in tech today. To get started, you need a strong foundation in both frontend and backend technologies. On the frontend, mastering HTML, CSS, and JavaScript is essential, along with a modern framework like React or Angular. On the backend, you can choose from Node.js, Python (Django), or Java (Spring Boot).\n\nAdditionally, understanding databases (SQL and NoSQL) and version control (Git) is critical. Building real-world projects is the best way to solidify your skills. Create a portfolio to showcase your work and don't hesitate to contribute to open-source projects. The journey is challenging, but with consistent practice and the right guidance, you can land your dream job as a full stack developer.",
    category: "Development",
    date: "Oct 12, 2023",
    author: "Ravi Kumar",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Why Data Science is the Most Lucrative Career Path",
    excerpt: "Data is the new oil. Learn how transitioning into data science can secure your future and provide unparalleled growth opportunities.",
    content: "In the modern digital economy, data is the most valuable asset. Data Science involves extracting actionable insights from vast amounts of raw data using statistical methods, machine learning algorithms, and predictive analytics.\n\nCompanies across all industries rely on data scientists to make informed business decisions. To start a career in this field, you should learn programming languages like Python or R, understand statistics and probability, and get familiar with data manipulation libraries like Pandas and NumPy. Mastering Machine Learning frameworks such as Scikit-Learn or TensorFlow will give you a significant edge. With the increasing demand for data professionals, Data Science continues to be one of the most lucrative and secure career paths.",
    category: "Data Science",
    date: "Oct 05, 2023",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Top 5 Certifications for Cybersecurity in 2024",
    excerpt: "Looking to protect digital assets? These are the top 5 cybersecurity certifications, including Mile2, that you need this year.",
    content: "Cybersecurity is more important than ever as cyber threats continue to evolve. Earning industry-recognized certifications is a great way to prove your expertise to employers. Here are the top 5 certifications for 2024:\n\n1. CompTIA Security+: A great starting point for beginners covering foundational security principles.\n2. Certified Ethical Hacker (CEH): Focuses on offensive security and penetration testing.\n3. Mile2 Certifications (e.g., CPTE): Highly practical certifications emphasizing real-world skills.\n4. Certified Information Systems Security Professional (CISSP): Ideal for experienced professionals aiming for management roles.\n5. Certified Information Security Manager (CISM): Focuses on security strategy and governance.\n\nChoosing the right certification depends on your career goals, whether you want to focus on offensive security, defensive security, or management.",
    category: "Security",
    date: "Sep 28, 2023",
    author: "Amit Verma",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "How to Ace Your First Tech Interview",
    excerpt: "From algorithmic challenges to behavioral questions, here is a comprehensive checklist to help you crack your very first IT interview.",
    content: "Your first tech interview can be daunting, but thorough preparation can make all the difference. Tech interviews typically consist of technical rounds and behavioral rounds.\n\nFor the technical part, practice coding problems on platforms like LeetCode or HackerRank. Ensure you have a solid grasp of Data Structures and Algorithms. Be prepared to explain your thought process out loud while coding. For the behavioral part, use the STAR method (Situation, Task, Action, Result) to structure your answers. Research the company beforehand and prepare thoughtful questions to ask the interviewer. Remember, interviewers are not just looking for correct answers; they want to see how you approach problems and how you communicate.",
    category: "Career Advice",
    date: "Sep 15, 2023",
    author: "Sneha Reddy",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "React vs Angular: Which Framework Should You Choose?",
    excerpt: "An in-depth comparison of the two most popular frontend frameworks to help you decide your learning path for web development.",
    content: "When choosing a frontend framework, React and Angular are the two biggest contenders. React, developed by Facebook, is a library focused on building user interfaces using a component-based architecture and a virtual DOM. It is highly flexible and has a massive ecosystem.\n\nAngular, developed by Google, is a full-fledged framework that provides a comprehensive solution for building large-scale enterprise applications. It uses TypeScript by default and includes built-in routing, state management, and HTTP services.\n\nIf you prefer flexibility and a gentle learning curve, React might be the better choice. If you want a structured, all-in-one framework for enterprise projects, Angular is an excellent option. Both are highly in demand.",
    category: "Frontend",
    date: "Sep 02, 2023",
    author: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "The Importance of Soft Skills for Software Engineers",
    excerpt: "Coding is not enough anymore. Find out why communication, teamwork, and spoken English are critical for climbing the corporate ladder.",
    content: "While technical skills are necessary to get your foot in the door, soft skills are what will help you climb the corporate ladder. Software engineering is a team sport. You rarely work in isolation; instead, you collaborate with product managers, designers, and other developers.\n\nEffective communication is crucial for understanding requirements, explaining technical trade-offs, and giving constructive code reviews. Teamwork and adaptability are essential in fast-paced Agile environments. Furthermore, strong spoken English skills can open up global opportunities and allow you to interact effectively with international clients. Investing time in improving your soft skills is just as important as learning a new programming language.",
    category: "Soft Skills",
    date: "Aug 20, 2023",
    author: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=600&q=80",
  }
];

export default function Blog() {
  const featuredBlog = blogsData.find(b => b.featured);
  const regularBlogs = blogsData.filter(b => !b.featured);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <SEO 
        title="Our Blog"
        description="Read the latest articles on web development, machine learning, soft skills, and cybersecurity from AH Career Academy experts."
        keywords="it blog, learn programming, cybersecurity tips, career advice"
      />
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
          AH Career <span className="text-[#f5a623]">Blog</span>
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl text-center">
          Insights, tutorials, and career advice from our industry experts to help you stay ahead.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Featured Blog */}
        {featuredBlog && (
          <Link to={`/blog/${featuredBlog.id}`} className="block mb-16 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row group hover:shadow-md transition-shadow cursor-pointer">
            <div className="lg:w-1/2 overflow-hidden">
              <img 
                src={featuredBlog.image} 
                alt={featuredBlog.title} 
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                  {featuredBlog.category}
                </span>
                <span className="text-gray-400 text-sm font-medium">{featuredBlog.date}</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-orange-500 transition-colors">
                {featuredBlog.title}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {featuredBlog.excerpt}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {featuredBlog.author.charAt(0)}
                </div>
                <div className="text-sm font-bold text-gray-900">{featuredBlog.author}</div>
              </div>
            </div>
          </Link>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-orange-500 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 text-xs">
                    {blog.author.charAt(0)}
                  </div>
                  <div className="text-xs font-bold text-gray-900">{blog.author}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full transition-colors">
            Load More Articles
          </button>
        </div>

      </div>
    </div>
  );
}

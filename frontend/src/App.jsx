import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingCourses from "./components/TrendingCourses";
import FeaturedCourses from "./components/FeaturedCourses";
import LearningJourney from "./components/LearningJourney";
import Services from "./components/Services";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollVelocity from "./components/ScrollVelocity";
import CompanyLogos from "./components/CompanyLogos";
import JobAccelerationProgram from "./components/JobAccelerationProgram";
import Chatbot from "./components/Chatbot";
import FloatingContact from "./components/FloatingContact";
import RecentJobDrive from "./components/RecentJobDrive";
import InternshipsSection from "./components/InternshipsSection";
import Certifications from "./components/Certifications";
import MiniCourses from "./components/MiniCourses";

// SEO & Loader
import SEO from "./components/SEO";
import Loader from "./components/Loader";

// Lazy Loaded Components
const ContactUs = lazy(() => import("./components/ContactUs"));
const Careers = lazy(() => import("./components/Careers"));
const Reviews = lazy(() => import("./components/Reviews"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const KidsTraining = lazy(() => import("./components/KidsTraining"));
const Blog = lazy(() => import("./components/Blog"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const JobReadyProgram = lazy(() => import("./pages/JobReadyProgram"));
const SkillCoursePage = lazy(() => import("./pages/SkillCoursePage"));
const JobAccelerationProgramPage = lazy(() => import("./pages/JobAccelerationProgramPage"));

const JobDetailsPage = lazy(() => import("./pages/JobDetailsPage"));
const CourseDetails = lazy(() => import("./pages/CourseDetails"));
const KidsCourseDetails = lazy(() => import("./pages/KidsCourseDetails"));
const CourseRegistrationPage = lazy(() => import("./pages/CourseRegistrationPage"));

// Pages
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Routes
import { GuestRoute, ProtectedRoute, AdminRoute } from "./routes/ProtectedRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={
            <main className="bg-[#F8FAFC] text-[#0F172A]">
              <SEO 
                title="Top Software Training Institute"
                description="AH Career Academy is a leading ISO 9001:2015 certified software training institute offering 100% practical training in Java, Python, UI/UX, Data Science, DevOps, and Digital Marketing with placement support."
                keywords="software training institute, learn coding, full stack java training, python course, data science certification, job oriented programs, placement support"
              />
              <Hero />
              <CompanyLogos />
              <JobAccelerationProgram />
              <TrendingCourses />
              <InternshipsSection />
              <FeaturedCourses />
              <MiniCourses />
              <LearningJourney />
              <RecentJobDrive />
              <Certifications />
              {/* Dynamic Marquee Section */}
              <div className="bg-[#020617] py-10 overflow-hidden select-none border-y border-[#38BDF8]/20 my-4">
                <ScrollVelocity
                  texts={[
                    "Python ✦ Java Full Stack ✦ Web Designing ✦ Advanced Excel ✦ Data Science & AI ✦ Digital Marketing ✦ Cyber Security ✦ DevOps ✦",
                    "100% Practical Training ✦ ISO 9001:2015 Certified ✦ 1000+ Placements Annually ✦ Tally Certified Partner ✦ Expert Industry Mentors ✦ Placement Support ✦"
                  ]}
                  velocity={80}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-white to-blue-400 font-extrabold tracking-tight opacity-75 hover:opacity-100 transition-opacity duration-300 mx-4"
                />
              </div>
              <Services />
              <Recognition />
              <Contact />
            </main>
          } />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/kids-training" element={<KidsTraining />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/programs/job-ready" element={<JobReadyProgram />} />
          <Route path="/programs/job-acceleration" element={<JobAccelerationProgramPage />} />
          <Route path="/kids-course/:id" element={<KidsCourseDetails />} />
          <Route path="/jobs/:idOrSlug" element={<JobDetailsPage />} />
          <Route path="/courses/skill-development/:slug" element={<SkillCoursePage />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/courses/:id/register" element={
            <ProtectedRoute>
              <CourseRegistrationPage />
            </ProtectedRoute>
          } />

          {/* Auth Routes */}
          <Route path="/login" element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          } />
          <Route path="/register" element={
            <GuestRoute>
              <RegisterPage />
            </GuestRoute>
          } />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin-dashboard" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <Chatbot />
      <FloatingContact />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}


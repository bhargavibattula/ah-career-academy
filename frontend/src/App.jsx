import { Routes, Route } from "react-router-dom";
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
import Chatbot from "./components/Chatbot";
import FloatingContact from "./components/FloatingContact";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import KidsTraining from "./components/KidsTraining";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import JobReadyProgram from "./pages/JobReadyProgram";

import JobDetailsPage from "./pages/JobDetailsPage";
import CourseDetails from "./pages/CourseDetails";
import KidsCourseDetails from "./pages/KidsCourseDetails";
import CourseRegistrationPage from "./pages/CourseRegistrationPage";

// Pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Routes
import { GuestRoute, ProtectedRoute, AdminRoute } from "./routes/ProtectedRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="bg-[#F8FAFC] text-[#0F172A]">
            <Hero />
            <CompanyLogos />
            <TrendingCourses />
            <FeaturedCourses />
            <LearningJourney />
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
        <Route path="/kids-course/:id" element={<KidsCourseDetails />} />
        <Route path="/jobs/:idOrSlug" element={<JobDetailsPage />} />
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
      </Routes>
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

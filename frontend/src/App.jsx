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
          <main>
            <Hero />
            <TrendingCourses />
            <FeaturedCourses />
            <LearningJourney />
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

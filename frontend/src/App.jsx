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
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import KidsTraining from "./components/KidsTraining";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

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
      </Routes>
      <Footer />
      <Chatbot />
    </div>
  );
}

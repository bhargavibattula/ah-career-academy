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

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrendingCourses />
        <FeaturedCourses />
        <LearningJourney />
        <Services />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

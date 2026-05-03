import "./index.css";
import { courseData } from "./data/courseData";
import HeroSection from "./components/HeroSection";
import BatchDetails from "./components/BatchDetails";
import CourseFeatures from "./components/CourseFeatures";
import AdditionalBenefits from "./components/AdditionalBenefits";
import SkillsMaster from "./components/SkillsMaster";
import Curriculum from "./components/Curriculum";
import CertificationSection from "./components/CertificationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <HeroSection data={courseData.hero} />
      <BatchDetails data={courseData.batch} />
      <CourseFeatures data={courseData.features} />
      <AdditionalBenefits data={courseData.benefits} />
      <SkillsMaster data={courseData.skills} />
      <Curriculum data={courseData.curriculum} />
      <CertificationSection data={courseData.certification} />
      <Footer data={courseData.institute} />
    </main>
  );
}

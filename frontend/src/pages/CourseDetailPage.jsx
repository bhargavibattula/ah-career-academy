import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseData } from "../data/courseData";

// User-designed components
import HeroSection from "../components/course/HeroSection";
import BatchDetails from "../components/course/BatchDetails";
import CourseFeatures from "../components/course/CourseFeatures";
import AdditionalBenefits from "../components/course/AdditionalBenefits";
import SkillsMaster from "../components/course/SkillsMaster";
import Curriculum from "../components/course/Curriculum";
import CertificationSection from "../components/course/CertificationSection";

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    // If the specific ID exists in our new courseData, use it
    // Fallback to 'full-stack-java-python' if the ID is not found, 
    // or to the first available course data for modularity.
    const foundData = courseData[id] || courseData["full-stack-java-python"];
    
    if (foundData) {
      setData(foundData);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="course-detail-modular">
      {/* 1. Hero Section with Form */}
      <HeroSection data={data.hero} />

      {/* 2. Batch Details & Schedule */}
      <BatchDetails data={data.batch} />

      {/* 3. Course Features & Highlights */}
      <CourseFeatures data={data.features} />

      {/* 4. Additional Benefits (Orange Section) */}
      <AdditionalBenefits data={data.benefits} />

      {/* 5. Skills Master Section */}
      <SkillsMaster data={data.skills} />

      {/* 6. Curriculum (Accordion) */}
      <Curriculum data={data.curriculum} />

      {/* 7. Certification Section */}
      <CertificationSection data={data.certification} />
      
      {/* 8. Footer (Already in App.jsx, but user provided a specific one too) */}
      {/* We use the global footer from App.jsx for consistency */}
    </div>
  );
}

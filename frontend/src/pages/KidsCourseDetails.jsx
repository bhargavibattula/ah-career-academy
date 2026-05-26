import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  PuzzlePieceIcon, 
  PaintBrushIcon, 
  ChatBubbleBottomCenterTextIcon, 
  CpuChipIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  StarIcon,
  RocketLaunchIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { kidsCourses } from "../data/kidsCourses";
import { toast } from "react-toastify";
import { createKidsRegistration } from "../services/kidsRegistrationService";

const IconMap = {
  PuzzlePieceIcon: <PuzzlePieceIcon className="w-12 h-12" />,
  PaintBrushIcon: <PaintBrushIcon className="w-12 h-12" />,
  ChatBubbleBottomCenterTextIcon: <ChatBubbleBottomCenterTextIcon className="w-12 h-12" />,
  CpuChipIcon: <CpuChipIcon className="w-12 h-12" />,
};

export default function KidsCourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const found = kidsCourses.find(c => c.id === id);
    if (found) {
      setCourse(found);
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const cleanedStudent = formData.studentName.trim();
    if (!cleanedStudent) {
      newErrors.studentName = "Student name is required.";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedStudent)) {
      newErrors.studentName = "Name must be letters & spaces (min 2 characters).";
    }

    const cleanedParent = formData.parentName.trim();
    if (!cleanedParent) {
      newErrors.parentName = "Parent name is required.";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedParent)) {
      newErrors.parentName = "Name must be letters & spaces (min 2 characters).";
    }

    const cleanedPhone = formData.phone.trim();
    if (!cleanedPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid 10-digit WhatsApp number starting with 6-9.";
    }

    const cleanedEmail = formData.email.trim();
    if (!cleanedEmail) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(cleanedEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    const cleanedAge = parseInt(formData.age, 10);
    if (!formData.age) {
      newErrors.age = "Age is required.";
    } else if (isNaN(cleanedAge) || cleanedAge < 4 || cleanedAge > 16) {
      newErrors.age = "Age must be between 4 and 16.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please correct the errors in the form.");
      setSubmitting(false);
      return;
    }

    setErrors({});
    try {
      const data = await createKidsRegistration({
        ...formData,
        course: course.title
      });
      if (data.success) {
        toast.success(data.message);
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          age: "",
          message: ""
        });
      }
    } catch (error) {
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!course) return <div className="min-h-screen flex items-center justify-center">Course not found.</div>;

  return (
    <div className="min-h-screen bg-white font-sans sc-body pb-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@600;700;800&display=swap');
        .sc-display { font-family: 'Baloo 2', cursive; }
        .sc-body { font-family: 'Nunito', sans-serif; }
      `}</style>

      {/* Hero Section */}
      <section className={`relative py-20 px-6 md:px-12 bg-gradient-to-br ${course.bg} border-b ${course.border}`}>
        <div className="max-w-7xl mx-auto">
          <Link to="/kids-training" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-bold mb-8 transition-colors">
            <ArrowLeftIcon className="w-5 h-5" /> Back to Camp
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${course.badge} font-black text-xs uppercase tracking-widest mb-6`}>
                <SparklesIcon className="w-4 h-4" /> Summer Camp 2025
              </div>
              <h1 className="sc-display text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl font-medium mb-8 leading-relaxed">
                {course.longDesc}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="bg-white/80 backdrop-blur px-6 py-3 rounded-2xl border border-white shadow-sm flex items-center gap-3">
                  <ClockIcon className="w-6 h-6 text-orange-500" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Duration</p>
                    <p className="font-black text-gray-900">{course.duration}</p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur px-6 py-3 rounded-2xl border border-white shadow-sm flex items-center gap-3">
                  <UserGroupIcon className="w-6 h-6 text-blue-500" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Age Group</p>
                    <p className="font-black text-gray-900">{course.ageGroup}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md lg:max-w-lg">
              <div className={`relative p-4 bg-white rounded-[3rem] border-4 ${course.border} shadow-2xl transform rotate-2`}>
                <div className={`w-full aspect-video bg-gradient-to-br ${course.bg} rounded-[2rem] flex items-center justify-center`}>
                   <div style={{ color: course.accent }}>
                     {IconMap[course.icon]}
                   </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                  <StarIcon className="w-8 h-8 fill-current" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                  <RocketLaunchIcon className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Details Column */}
          <div className="flex-1 space-y-16">
            {/* Learning Outcomes */}
            <div>
              <h2 className="sc-display text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <AcademicCapIcon className="w-8 h-8 text-orange-500" /> What Your Child Will Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0" />
                    <p className="text-gray-700 font-bold text-sm">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="sc-display text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <PuzzlePieceIcon className="w-8 h-8 text-blue-500" /> Course Topics
              </h2>
              <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
                <div className="space-y-4">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs border border-blue-100">
                        {i + 1}
                      </div>
                      <p className="text-gray-600 font-bold">{topic}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

             {/* Benefits */}
             <div>
              <h2 className="sc-display text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <StarIcon className="w-8 h-8 text-yellow-500" /> Why This Course?
              </h2>
              <ul className="space-y-4">
                {course.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <p className="text-gray-600 font-bold text-lg">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-[450px]">
            <div className="sticky top-24">
              <div className="bg-[#0b1257] rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                
                <div className="relative z-10 text-center mb-8">
                  <h3 className="sc-display text-3xl font-black mb-2">Register Now!</h3>
                  <p className="text-blue-200 text-sm font-bold">Reserve a spot for your child today</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-300 ml-2">Student Name</label>
                    <input 
                      type="text" 
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter student name"
                      className={`w-full bg-white/10 border rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-orange-500 ${
                        errors.studentName ? "border-red-400" : "border-white/20"
                      }`}
                    />
                    {errors.studentName && <p className="text-xs font-semibold text-red-300 mt-1 pl-2">{errors.studentName}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-300 ml-2">Parent Name</label>
                    <input 
                      type="text" 
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent name"
                      className={`w-full bg-white/10 border rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-orange-500 ${
                        errors.parentName ? "border-red-400" : "border-white/20"
                      }`}
                    />
                    {errors.parentName && <p className="text-xs font-semibold text-red-300 mt-1 pl-2">{errors.parentName}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-blue-300 ml-2">Age</label>
                      <input 
                        type="number" 
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                        className={`w-full bg-white/10 border rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-orange-500 ${
                          errors.age ? "border-red-400" : "border-white/20"
                        }`}
                      />
                      {errors.age && <p className="text-xs font-semibold text-red-300 mt-1 pl-2">{errors.age}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-blue-300 ml-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="WhatsApp #"
                        className={`w-full bg-white/10 border rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-orange-500 ${
                          errors.phone ? "border-red-400" : "border-white/20"
                        }`}
                      />
                      {errors.phone && <p className="text-xs font-semibold text-red-300 mt-1 pl-2">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-300 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email for communications"
                      className={`w-full bg-white/10 border rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-orange-500 ${
                        errors.email ? "border-red-400" : "border-white/20"
                      }`}
                    />
                    {errors.email && <p className="text-xs font-semibold text-red-300 mt-1 pl-2">{errors.email}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-300 ml-2">Message (Optional)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements?"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-orange-500 transition-all resize-none h-24"
                    />
                  </div>

                  <button 
                    disabled={submitting}
                    className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-500/20 transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-4 ${submitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {submitting ? "Submitting..." : "Complete Registration"}
                    <RocketLaunchIcon className="w-5 h-5" />
                  </button>
                  <p className="text-center text-[10px] text-white/40 font-bold uppercase tracking-widest pt-4 italic">
                    * Limited seats available for this batch
                  </p>
                </form>
              </div>

              {/* Info Cards */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                  <PhoneIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-[10px] text-green-700 font-black uppercase tracking-widest">Need Help?</p>
                    <p className="font-bold text-gray-900 text-sm">99892 41515</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <CalendarDaysIcon className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-[10px] text-blue-700 font-black uppercase tracking-widest">Schedule</p>
                    <p className="font-bold text-gray-900 text-sm">Mon - Sat · 10 AM - 12 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

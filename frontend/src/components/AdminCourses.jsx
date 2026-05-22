import { useState, useEffect } from "react";
import { getCourses, createCourse, updateCourse, deleteCourse } from "../services/courseService";
import { toast } from "react-toastify";
import { 
  PlusIcon, 
  PencilSquareIcon, 
  TrashIcon, 
  ClockIcon, 
  BanknotesIcon 
} from "@heroicons/react/24/outline";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "Software & Programming",
    description: "",
    longDescription: "",
    duration: "",
    fees: "Contact for Pricing",
    curriculum: "",
    skills: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await getCourses();
      setCourses(data.success ? data.data : []);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (course = null) => {
    if (course) {
      setEditingCourse(course);
      setFormData({
        ...course,
        curriculum: course.curriculum?.join("\n") || "",
        skills: course.skills?.join(", ") || "",
      });
    } else {
      setEditingCourse(null);
      setFormData({
        id: "",
        title: "",
        category: "Software & Programming",
        description: "",
        longDescription: "",
        duration: "2 Months",
        fees: "Contact for Pricing",
        curriculum: "",
        skills: "",
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      curriculum: formData.curriculum.split("\n").map(s => s.trim()).filter(s => s),
      skills: formData.skills.split(",").map(s => s.trim()).filter(s => s),
    };

    try {
      if (editingCourse) {
        await updateCourse(editingCourse.id, payload);
        toast.success("Course updated successfully!");
      } else {
        await createCourse(payload);
        toast.success("Course created successfully!");
      }
      setShowModal(false);
      fetchCourses();
    } catch (error) {
      console.error("Error saving course:", error);
      const errorMsg = error.response?.data?.message || error.message || "Error saving course.";
      toast.error(errorMsg);
    }
  };

  const handleDeleteCourse = async (id) => {
    const confirmDelete = () => {
      toast.dismiss();
      const deleteProcess = async () => {
        try {
          await deleteCourse(id);
          toast.success("Course deleted successfully");
          fetchCourses();
        } catch (error) {
          toast.error("Failed to delete course");
        }
      };
      deleteProcess();
    };

    toast(
      ({ closeToast }) => (
        <div className="p-2">
          <p className="font-bold mb-3 text-sm">Are you sure you want to delete this course?</p>
          <div className="flex gap-2 justify-end">
            <button 
              onClick={closeToast}
              className="px-3 py-1 bg-gray-600 text-white rounded-md text-xs"
            >
              Cancel
            </button>
            <button 
              onClick={() => { confirmDelete(); closeToast(); }}
              className="px-3 py-1 bg-red-600 text-white rounded-md text-xs font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeOnClick: false }
    );
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center bg-[#0F172A] p-6 rounded-3xl text-white shadow-xl">
        <div>
          <h2 className="text-2xl font-black">Course Management</h2>
          <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">Manage your training programs</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-2xl text-sm font-black transition-all active:scale-95 shadow-lg flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          ADD NEW COURSE
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100 text-left">
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Course Info</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Category</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              <tr><td colSpan="3" className="py-20 text-center"><div className="w-8 h-8 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin mx-auto"></div></td></tr>
            ) : courses.length === 0 ? (
              <tr><td colSpan="3" className="py-20 text-center text-gray-400 font-bold uppercase tracking-widest">No courses added yet</td></tr>
            ) : (
              courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="text-lg font-black text-[#0F172A] group-hover:text-blue-600 transition-colors">{course.title}</div>
                    <div className="flex gap-4 text-xs font-bold text-gray-400 mt-1 uppercase tracking-tighter">
                      <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" /> {course.duration}</span>
                      <span className="flex items-center gap-1"><BanknotesIcon className="w-4 h-4" /> {course.fees}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
                      {course.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleOpenModal(course)} className="p-3 hover:bg-blue-100 rounded-xl text-blue-600 transition-all active:scale-90 shadow-sm border border-gray-100 bg-white">
                        <PencilSquareIcon className="w-5 h-5" />
                      </button>
                      <button onClick={() => handleDeleteCourse(course.id)} className="p-3 hover:bg-red-100 rounded-xl text-red-600 transition-all active:scale-90 shadow-sm border border-gray-100 bg-white">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] w-full max-w-3xl p-8 overflow-y-auto max-h-[90vh] shadow-2xl">
            <h3 className="text-3xl font-black text-[#0F172A] mb-8">{editingCourse ? "Update Course" : "New Course"}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Course Title</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Slug/ID (Optional)</label>
                  <input 
                    type="text" 
                    value={formData.id}
                    onChange={e => setFormData({...formData, id: e.target.value})}
                    placeholder="e.g. python-fullstack"
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold" 
                    disabled={!!editingCourse}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Category</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold"
                  >
                    <option>Software & Programming</option>
                    <option>Design & Marketing</option>
                    <option>Accounts & Office Tools</option>
                    <option>Flagship Program</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Duration</label>
                  <input 
                    type="text" 
                    value={formData.duration}
                    onChange={e => setFormData({...formData, duration: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Fees</label>
                  <input 
                    type="text" 
                    value={formData.fees}
                    onChange={e => setFormData({...formData, fees: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold" 
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Short Description</label>
                <textarea 
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold h-20 resize-none"
                  placeholder="Summarize the course in 1-2 sentences..."
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Long Description</label>
                <textarea 
                  value={formData.longDescription}
                  onChange={e => setFormData({...formData, longDescription: e.target.value})}
                  className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold h-32"
                  placeholder="Detailed course description..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Curriculum (One module per line)</label>
                  <textarea 
                    value={formData.curriculum}
                    onChange={e => setFormData({...formData, curriculum: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-xs outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold h-32"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Skills (Comma separated)</label>
                  <textarea 
                    value={formData.skills}
                    onChange={e => setFormData({...formData, skills: e.target.value})}
                    className="w-full border-2 border-gray-100 rounded-2xl px-5 py-3.5 text-xs outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all font-bold h-32"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-gray-100 text-gray-500 py-4 rounded-2xl font-black text-sm hover:bg-gray-200 transition-colors">Discard</button>
                <button type="submit" className="flex-1 bg-[#2563EB] text-white py-4 rounded-2xl font-black text-sm hover:bg-[#1D4ED8] transition-all shadow-xl active:scale-95">Save Course</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

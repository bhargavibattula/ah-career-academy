import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { getJobs } from "../services/jobService";
import JobCard from "./jobs/JobCard";
import SEO from "./SEO";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copySuccess, setCopySuccess] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(Array.isArray(data) ? data : data.data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const sharePage = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess("Link copied");
    setTimeout(() => setCopySuccess(null), 3000);
  };

  // Safe search + category filter
  const filteredJobs = jobs.filter((job) => {
    const title = job.title || "";
    const category = job.category || "";
    const location = job.location || "";

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Extract unique categories dynamically
  const categories = ["All", ...new Set(jobs.map((job) => job.category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SEO 
        title="Jobs & Careers"
        description="Explore open software roles, trainer jobs, and administrative positions at AH Career Academy. Direct apply via WhatsApp."
        keywords="careers, software trainer jobs, coder openings, jobs in rajahmundry"
      />
      <section className="relative overflow-hidden bg-[#0F172A] px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_86%_28%,rgba(37,99,235,0.25),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
            <SparklesIcon className="h-4 w-4" />
            Hiring Now
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Build careers with AH Career Academy.
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-300">
                Explore open roles for trainers, creators, operations professionals, and career-focused educators.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["On-site", "Rajahmundry roles"],
                ["Freshers", "and experienced"],
                ["Training", "career impact"],
                ["Direct", "WhatsApp apply"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-xl font-black text-[#38BDF8]">{value}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-white px-12 py-4 text-base font-semibold text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20"
                placeholder="Search by role, category, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={sharePage}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#38BDF8] px-7 py-4 text-sm font-black text-[#0F172A] transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <ShareIcon className="h-5 w-5" />
              {copySuccess || "Share Careers"}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Open <span className="text-[#2563EB]">Positions</span>
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-500">
              Direct apply via WhatsApp, no login required
            </p>
          </div>
          <div className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#2563EB] shadow-sm ring-1 ring-blue-100">
            {filteredJobs.length} roles found
          </div>
        </div>

        {/* Dynamic Category Filter Chips */}
        {categories.length > 2 && (
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full border px-5 py-2.5 text-xs font-black transition-all ${
                  selectedCategory === cat
                    ? "bg-[#2563EB] border-[#2563EB] text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-200 hover:text-[#2563EB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="rounded-[2rem] border border-blue-100 bg-white p-16 text-center shadow-sm">
            <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-[#2563EB]" />
            <p className="text-sm font-black uppercase tracking-wider text-[#0F172A]">Discovering opportunities...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="rounded-[2rem] border border-blue-100 bg-white p-16 text-center shadow-sm">
            <MagnifyingGlassIcon className="mx-auto mb-5 h-14 w-14 text-[#2563EB]" />
            <h3 className="text-2xl font-black">Nothing found</h3>
            <p className="mt-2 text-sm font-medium text-slate-500">Try broadening your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-2xl shadow-blue-950/20 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_15%,rgba(56,189,248,0.26),transparent_30%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <BriefcaseIcon className="h-10 w-10 text-[#38BDF8]" />
              <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                Can&apos;t find a perfect match?
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-300">
                Send us your resume directly. We are always looking for trainers in Python, Java, AWS, Digital Marketing, Tally, and more.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:Info@ahcareer.in" className="rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#0F172A] transition-all hover:-translate-y-0.5 hover:bg-[#38BDF8]">
                  Email Resume
                </a>
                <a href="tel:9989241515" className="rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#0F172A]">
                  Call Support
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#38BDF8]">Permanent Benefits</h3>
              <div className="mt-5 space-y-3">
                {["Salary: 1.8 LPA - 3 LPA", "Working Hours: 9 Hours", "Open for Freshers & Experienced", "Location: Rajahmundry (On-site)"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-white">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

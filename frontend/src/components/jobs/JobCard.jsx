import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BanknotesIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import WhatsAppButton from "./WhatsAppButton";
import ShareButton from "./ShareButton";

export default function JobCard({ job }) {
  const {
    _id,
    slug,
    title,
    category,
    location,
    salary,
    jobType,
    createdAt,
    description,
  } = job;

  const postedDate = new Date(createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const jobPath = `/jobs/${slug || _id}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-2xl hover:shadow-blue-900/10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" />

      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="rounded-full bg-[#38BDF8]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#2563EB]">
          {category}
        </span>
        <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
          <CalendarDaysIcon className="h-4 w-4" />
          {postedDate}
        </span>
      </div>

      <Link to={jobPath}>
        <h3 className="text-xl font-black leading-tight text-[#0F172A] transition-colors group-hover:text-[#2563EB]">
          {title}
        </h3>
      </Link>

      <div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-500">
        <BuildingOffice2Icon className="h-4 w-4 text-[#2563EB]" />
        AH Career Academy
      </div>
      <div className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-500">
        <MapPinIcon className="h-4 w-4 text-[#2563EB]" />
        {location}
      </div>

      <p className="mt-5 flex-1 text-sm font-medium leading-6 text-slate-600 line-clamp-3">
        {description || `Join AH Career as a ${title}. We are looking for passionate individuals to join our team in ${location}.`}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-[#F8FAFC] p-3">
          <BanknotesIcon className="mb-2 h-5 w-5 text-[#2563EB]" />
          <div className="text-xs font-semibold text-slate-500">Salary</div>
          <div className="mt-1 text-sm font-black text-[#0F172A]">{salary}</div>
        </div>
        <div className="rounded-2xl bg-[#F8FAFC] p-3">
          <BriefcaseIcon className="mb-2 h-5 w-5 text-[#2563EB]" />
          <div className="text-xs font-semibold text-slate-500">Type</div>
          <div className="mt-1 text-sm font-black text-[#0F172A]">{jobType}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <WhatsAppButton jobTitle={title} />
        <div className="grid grid-cols-2 gap-2">
          <ShareButton jobId={_id} jobSlug={slug} className="py-3 text-sm" />
          <Link
            to={jobPath}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-3 py-3 text-sm font-black text-white transition-all hover:bg-[#1D4ED8] active:scale-95"
          >
            Details
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

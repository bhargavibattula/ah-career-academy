import { ChatBubbleBottomCenterTextIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

const reviewsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "Full Stack Java",
    rating: 5,
    text: "The training at AH Career completely transformed my career. The instructors are industry experts who provided real-world scenarios. I got placed in a top MNC right after completing the course.",
  },
  {
    id: 2,
    name: "Priya Patel",
    course: "Data Science",
    rating: 5,
    text: "Excellent curriculum and hands-on projects. The mock interviews and placement support were incredible. Highly recommend to anyone looking to transition into tech.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    course: "DevOps & Cloud",
    rating: 4,
    text: "Great learning experience. The trainers are very patient and clear all doubts. The lab facilities and recorded sessions really helped me master AWS.",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    course: "Python Full Stack",
    rating: 5,
    text: "I joined as a fresher with no IT background. The structured approach and daily assignments made learning Python easy. Today I am a working software developer.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    course: "Software Testing",
    rating: 5,
    text: "The best place to learn Automation Testing. The Selenium framework explanations were crystal clear. Got 3 offers within a month of course completion.",
  },
  {
    id: 6,
    name: "Neha Gupta",
    course: "Cyber Security",
    rating: 4,
    text: "Very comprehensive content covering the latest security trends. The practical labs gave me the confidence to handle real-world vulnerabilities.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function Stars({ rating, size = "h-5 w-5" }) {
  return (
    <div className="flex text-amber-400">
      {Array.from({ length: 5 }).map((_, index) =>
        index < rating ? (
          <StarSolid key={index} className={size} />
        ) : (
          <StarOutline key={index} className={`${size} text-slate-300`} />
        )
      )}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <section className="relative overflow-hidden bg-[#0F172A] px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_84%_30%,rgba(37,99,235,0.25),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-[#38BDF8]">
            <SparklesIcon className="h-4 w-4" />
            Student Reviews
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Career outcomes, told by our students.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-slate-300">
            Hear from alumni who built skills, gained confidence, and moved closer to professional opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 grid gap-6 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm md:grid-cols-[0.7fr_1.3fr] md:p-8">
          <div className="flex flex-col items-center justify-center rounded-3xl bg-[#0F172A] p-8 text-center text-white">
            <div className="text-6xl font-black text-[#38BDF8]">4.8</div>
            <Stars rating={5} size="h-6 w-6" />
            <div className="mt-3 text-sm font-semibold text-slate-300">Out of 2,500+ reviews</div>
          </div>
          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="grid grid-cols-[70px_1fr_42px] items-center gap-3">
                <div className="text-sm font-black text-slate-600">{star} Stars</div>
                <div className="h-3 overflow-hidden rounded-full bg-blue-50">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8]"
                    style={{ width: star === 5 ? "85%" : star === 4 ? "10%" : star === 3 ? "3%" : "1%" }}
                  />
                </div>
                <div className="text-right text-xs font-bold text-slate-400">{star === 5 ? "85%" : star === 4 ? "10%" : star === 3 ? "3%" : "1%"}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((review) => (
            <article
              key={review.id}
              className="group flex h-full flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <Stars rating={review.rating} />
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-[#2563EB]" />
              </div>

              <p className="flex-1 text-sm font-medium leading-7 text-slate-600">
                &quot;{review.text}&quot;
              </p>

              <div className="mt-6 flex items-center gap-4 border-t border-blue-100 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-sm font-black text-white">
                  {initials(review.name)}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0F172A]">{review.name}</h4>
                  <p className="mt-1 text-xs font-bold text-[#2563EB]">{review.course}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

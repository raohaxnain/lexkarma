"use client";

import DashboardSidebar from "@/app/Components/Sidebar";
import Link from "next/link";

// ── Figma asset URLs ──────────────────────────────────────────────────────────
const COURSE_BANNER  = "/images/course-banner.png";
const ICON_STAR      = "/images/star-filled-green.svg";
const ICON_CLOCK     = "/images/clock.svg";
const ICON_USERS     = "/images/user-gray.svg";
const ICON_PLAY_BTN  = "/images/play.svg";
const ICON_BACK      = "/images/arrow-left.svg";

// Module status icons
const ICON_CHECK_CIRCLE  = "/images/tick-circle.svg"; // completed
const ICON_PLAY_CIRCLE   = "/images/play-yellow.svg"; // in progress
const ICON_EMPTY_CIRCLE  = "/images/circle.svg"; // pending

// ── Module data ───────────────────────────────────────────────────────────────
type ModuleStatus = "Completed" | "In Progress" | "Pending";

interface Module {
  id: number;
  title: string;
  lessons: number;
  duration: string;
  status: ModuleStatus;
}

const MODULES: Module[] = [
  { id: 1,  title: "Introduction to AI in Legal Practice",  lessons: 4, duration: "45 min",  status: "Completed"   },
  { id: 2,  title: "Machine Learning Basics for Lawyers",   lessons: 5, duration: "60 min",  status: "Completed"   },
  { id: 3,  title: "Natural Language Processing",           lessons: 6, duration: "75 min",  status: "Completed"   },
  { id: 4,  title: "AI-Powered Legal Research",             lessons: 7, duration: "90 min",  status: "Completed"   },
  { id: 5,  title: "Document Analysis & Classification",    lessons: 6, duration: "80 min",  status: "Completed"   },
  { id: 6,  title: "Contract Review Automation",            lessons: 5, duration: "70 min",  status: "Completed"   },
  { id: 7,  title: "Predictive Analytics in Law",           lessons: 5, duration: "65 min",  status: "Completed"   },
  { id: 8,  title: "AI Ethics & Compliance",                lessons: 4, duration: "55 min",  status: "In Progress" },
  { id: 9,  title: "Implementing AI in Your Practice",      lessons: 6, duration: "85 min",  status: "Pending"     },
  { id: 10, title: "Case Studies & Best Practices",         lessons: 5, duration: "75 min",  status: "Pending"     },
  { id: 11, title: "AI Tool Evaluation Framework",          lessons: 4, duration: "60 min",  status: "Pending"     },
  { id: 12, title: "Future Trends & Final Project",         lessons: 7, duration: "90 min",  status: "Pending"     },
];

// ── Status config ─────────────────────────────────────────────────────────────
const STATUS_CONFIG: Record<ModuleStatus, {
  badgeBg: string; badgeText: string;
  rowBg: string; icon: string;
}> = {
  "Completed":   { badgeBg: "bg-[rgba(177,165,131,0.1)]",   badgeText: "text-golden-1000",  rowBg: "",                          icon: ICON_CHECK_CIRCLE  },
  "In Progress": { badgeBg: "bg-[rgba(251,203,128,0.1)]",   badgeText: "text-[#fbcb80]",    rowBg: "bg-[rgba(251,203,128,0.05)]", icon: ICON_PLAY_CIRCLE   },
  "Pending":     { badgeBg: "bg-[#f3f4f6]",                 badgeText: "text-[#99a1af]",    rowBg: "",                          icon: ICON_EMPTY_CIRCLE  },
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CourseDetailPage() {
  const completedCount = MODULES.filter(m => m.status === "Completed").length;
  const totalCount     = MODULES.length;
  const progressPct    = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
     <DashboardSidebar></DashboardSidebar>

      <main className="flex-1 min-w-0 p-4 pt-16 lg:px-6 lg:pt-10">
        <div className="flex flex-col gap-6">

          {/* ── Page header ── */}
          <div className="flex items-center md:justify-between md:flex-nowrap flex-wrap pt-2 lg:pt-0">
            <div className="flex flex-col md:order-1 order-2 gap-2">
              <h1 className="font-Inter font-semibold text-2xl sm:text-[32px] leading-6 text-black-1000">My Courses</h1>
              <p className="font-Inter font-normal text-base leading-6 text-gray-1600">Track your enrolled courses and learning progress</p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-1.5 md:px-4 px-0 md:order-2 order-1 py-2.5 rounded-xl text-sm font-medium text-black-1000 hover:bg-gray-1000 transition-colors w-[185px] md:justify-center"
            >
              <img src={ICON_BACK} alt="" className="size-4 object-contain" />
              Back to home
            </Link>
          </div>

          {/* ── Course progress banner ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl md:px-[25px] p-3 md:py-[25px]  shadow-sm">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Thumbnail */}
              <div className="relative w-[216px] h-[128px] rounded-lg overflow-hidden shrink-0 bg-gray-1300">
                <img src={COURSE_BANNER} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 flex flex-col gap-0 relative pb-6">
                {/* Title + provider */}
                <p className="font-Inter font-normal text-base leading-6 text-black-1000">Legal AI Fundamentals</p>
                <p className="font-Inter font-normal text-sm leading-[21px] text-gray-1600 mt-px">LexAcademy</p>

                {/* Meta row */}
                <div className="flex items-center gap-4 flex-wrap mt-[17px]">
                  <div className="flex items-center gap-1">
                    <img src={ICON_STAR} alt="" className="size-4 object-contain" />
                    <span className="font-Inter font-medium text-sm text-black-1000">4.8</span>
                    <span className="font-Inter font-normal text-sm text-gray-1600">(156 reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={ICON_CLOCK} alt="" className="size-4 object-contain" />
                    <span className="font-Inter font-normal text-sm text-gray-1600">12 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={ICON_USERS} alt="" className="size-4 object-contain" />
                    <span className="font-Inter font-normal text-sm text-gray-1600">342 enrolled</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-[17px] relative h-3 w-full rounded-full bg-gray-1300 border border-gray-1100 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                      width: `${progressPct}%`,
                      background: "linear-gradient(90deg, #B1A583 0%, #FBD380 100%)",
                    }}
                  />
                </div>

                {/* Progress text */}
                <p className="mt-[8px] font-Inter font-medium text-sm leading-[21px]">
                  <span className="text-green-1100">{progressPct}% Complete</span>
                  <span className="text-black-1000"> • {completedCount} of {totalCount} modules completed</span>
                </p>
              </div>

              {/* Continue Learning button */}
              <button
                type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-medium shrink-0 w-[185px] justify-center transition-opacity hover:opacity-90 self-start"
                style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
              >
                <img src={ICON_PLAY_BTN} alt="" className="size-4 object-contain brightness-0 invert" />
                Continue Learning
              </button>
            </div>
          </div>

          {/* ── Two column layout ── */}
          <div className="flex flex-col lg:flex-row items-start gap-6">

            {/* ── Left: Course Content ── */}
            <div className="lg:flex-1 lg:min-w-0 lg:w-auto w-full bg-white border border-gray-1100 rounded-2xl md:px-[25px] p-3 md:py-[25px] shadow-sm">
              <p className="font-Inter font-normal text-base leading-6 text-black-1000 mb-4">Course Content</p>

              <div className="flex flex-col gap-2">
                {MODULES.map((mod) => {
                  const cfg = STATUS_CONFIG[mod.status];
                  return (
                    <div
                      key={mod.id}
                      className={[
                        "border border-gray-1100 rounded-xl md:px-[17px] px-3 pt-[17px] pb-px",
                        cfg.rowBg,
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between pb-4">
                        {/* Left: icon + title + meta */}
                        <div className="flex items-start gap-2 flex-1 min-w-0">
                          <img src={cfg.icon} alt="" className="size-5 object-contain shrink-0 mt-0.5" />
                          <div className="flex flex-col gap-1 min-w-0">
                            <p className="font-Inter font-normal text-base leading-6 text-black-1000 truncate pr-4">
                              {mod.title}
                            </p>
                            <div className="flex items-center gap-3">
                              <span className="font-Inter font-normal text-sm text-gray-1600">{mod.lessons} lessons</span>
                              <span className="font-Inter font-normal text-sm text-gray-1600">•</span>
                              <span className="font-Inter font-normal text-sm text-gray-1600">{mod.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right: status badge */}
                        <span className={[
                          "inline-flex items-center px-3 py-[4px] rounded-[4px] font-Inter font-normal text-xs leading-[18px] shrink-0",
                          cfg.badgeBg, cfg.badgeText,
                        ].join(" ")}>
                          {mod.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Right: Instructor + Course Details ── */}
            <div className="flex flex-col gap-6 w-full xl:w-[450px] lg:w-[300px] w-full shrink-0">

              {/* Instructor card */}
              <div className="bg-white border border-gray-1100 rounded-2xl p-6 shadow-sm relative">
                <h3 className="font-Inter font-semibold text-xl leading-[30px] text-black-1000 mb-[22px]">Instructor</h3>

                <div className="flex items-start gap-3 mb-4">
                  <div className="size-12 rounded-full bg-gray-1300 border border-gray-1100 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-Inter font-medium text-base leading-6 text-black-1000">Dr. Sarah Chen</p>
                    <p className="font-Inter font-normal text-xs leading-[18px] text-gray-1600">Course Instructor</p>
                  </div>
                </div>

                <p className="font-Inter font-normal text-sm leading-[21px] text-black-1000">
                  AI researcher and legal tech consultant with 15+ years of experience in legal technology innovation.
                </p>
              </div>

              {/* Course Details card */}
              <div className="bg-white border border-gray-1100 rounded-2xl px-[25px] pt-[25px] pb-px shadow-sm">
                <p className="font-Inter font-normal text-base leading-6 text-black-1000 mb-4">Course Details</p>

                <div className="flex flex-col gap-3">
                  {[
                    { label: "Total Modules", value: "12" },
                    { label: "Duration",      value: "12 hours" },
                    { label: "Enrolled",      value: "342 students" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between border-b border-gray-1100 pb-[13px]"
                    >
                      <span className="font-Inter font-normal text-sm text-gray-1600">{row.label}</span>
                      <span className="font-Inter font-medium text-sm text-black-1000">{row.value}</span>
                    </div>
                  ))}

                  {/* Rating row — no bottom border */}
                  <div className="flex items-center justify-between pb-[13px]">
                    <span className="font-Inter font-normal text-sm text-gray-1600">Rating</span>
                    <div className="flex items-center gap-1">
                      <img src={ICON_STAR} alt="" className="size-4 object-contain" />
                      <span className="font-Inter font-medium text-sm text-black-1000">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
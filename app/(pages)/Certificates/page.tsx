"use client";
import DashboardSidebar from "@/app/Components/Sidebar";
import { useState, useRef, useEffect } from "react";
const ICON_FILTER      = "/images/filter.svg";
const ICON_ANGLE_DOWN  = "/images/angle-down.svg";
const ICON_CERTIFICATE = "/images/shield-icon2.svg";
const ICON_DOWNLOAD    = "/images/download.svg";
const ICON_SHARE       = "/images/share-icon2.svg";
interface Certificate {
  id: number;
  title: string;
  provider: string;
  student: string;
  completedDate: string;
  instructor: string;
  duration: string;
  status: "Verified" | "Pending" | "Expired";
  category: string;
}
const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Legal AI Fundamentals",
    provider: "LexAcademy",
    student: "John Doe",
    completedDate: "February 15, 2026",
    instructor: "Dr. Sarah Chen",
    duration: "12 hours",
    status: "Verified",
    category: "AI Tools",
  },
  {
    id: 2,
    title: "Contract Management Mastery",
    provider: "LexAcademy",
    student: "John Doe",
    completedDate: "January 30, 2026",
    instructor: "Prof. Marcus Weber",
    duration: "8 hours",
    status: "Verified",
    category: "Contract Management",
  },
];
const FILTER_OPTIONS = [
  "All",
  "AI Tools",
  "Contract Management",
  "Legal Research",
  "Compliance",
  "E-Discovery",
];
const STATUS_STYLES: Record<Certificate["status"], string> = {
  Verified: "bg-[rgba(177,165,131,0.1)] text-golden-1000",
  Pending:  "bg-yellow-50 text-yellow-600",
  Expired:  "bg-red-50 text-red-400",
};
function Dropdown({ trigger, children, align = "left" }: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen((v) => !v)}>{trigger}</div>
      {open && (
        <div className={[
          "absolute top-full mt-2 z-50 bg-white border border-gray-1100 rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.12)] min-w-[220px] overflow-hidden",
          align === "right" ? "right-0" : "left-0",
        ].join(" ")}>
          {children}
        </div>
      )}
    </div>
  );
}
function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <div className="bg-white rounded-2xl md:p-6 p-3 flex flex-col gap-4  hover:shadow-md transition-shadow">

      {/* ── Gradient certificate preview ── */}
      <div
        className="w-full rounded-2xl p-6 flex flex-col items-center justify-center gap-6 min-h-[310px] shadow-md"
        style={{ background: "linear-gradient(150.26deg, #B1A583 0%, #222121 100%)" }}
      >
        {/* Award icon */}
        <img
          src={ICON_CERTIFICATE}
          alt=""
          className="size-16 object-contain"
        />

        {/* Title block */}
        <div className="text-center flex flex-col gap-1">
          <p className="font-Inter font-normal text-base leading-6 text-white">
            Certificate of Completion
          </p>
          <p className="font-Inter font-bold text-base leading-[21px] text-white">
            {cert.title}
          </p>
          <p className="font-Inter font-normal text-sm leading-[21px] text-golden-1000">
            {cert.provider}
          </p>
        </div>

        {/* Student + divider + date */}
        <div className="w-full flex flex-col items-center gap-1">
          <p className="font-Inter font-medium text-base leading-6 text-white text-center">
            {cert.student}
          </p>
          <div className="w-full border-t border-[#959186] pt-3.5 flex flex-col items-center">
            <p className="font-Inter font-normal text-sm leading-[21px] text-gray-1400 text-center">
              Completed: {cert.completedDate}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
          <span className="font-Inter font-normal text-sm leading-[21px] text-gray-1600">Instructor:</span>
          <span className="font-Inter font-normal text-sm leading-[21px] text-black-1000">{cert.instructor}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-Inter font-normal text-sm leading-[21px] text-gray-1600">Duration:</span>
          <span className="font-Inter font-normal text-sm leading-[21px] text-black-1000">{cert.duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-Inter font-normal text-sm leading-[21px] text-gray-1600">Status:</span>
          <span className={[
            "inline-flex items-center px-2 py-1 rounded-[4px] font-Inter font-normal text-xs leading-[18px]",
            STATUS_STYLES[cert.status],
          ].join(" ")}>
            {cert.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        <button
          type="button"
          className="flex items-center justify-center gap-2 h-10 rounded-xl bg-golden-1000 text-white font-Inter font-normal text-sm hover:opacity-90 transition-opacity"
        >
          <img src={ICON_DOWNLOAD} alt="" className="size-4 object-contain brightness-0 invert" />
          Download
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 h-10 rounded-xl bg-white border border-gray-1100 text-black-1000 font-Inter font-normal text-sm hover:bg-gray-1000 transition-colors"
        >
          <img src={ICON_SHARE} alt="" className="size-4 object-contain" />
          Share
        </button>
      </div>
    </div>
  );
}
export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = CERTIFICATES.filter(
    (c) => activeFilter === "All" || c.category === activeFilter
  );
  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      <DashboardSidebar></DashboardSidebar>
      <main className="flex-1 min-w-0 p-4 pt-16 lg:px-6 lg:pt-10">
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-2 pt-2 lg:pt-0">
            <h1 className="font-Inter font-semibold text-2xl sm:text-[32px] leading-6 text-black-1000">
              Certificates
            </h1>
            <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
              View and download your course completion certificates
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Dropdown
              align="left"
              trigger={
                <button
                  type="button"
                  className={[
                    "flex items-center gap-1.5 px-3 py-2 border rounded-xl text-sm font-medium shadow-sm transition-colors",
                    activeFilter !== "All"
                      ? "bg-golden-1000 border-golden-1000 text-white"
                      : "bg-gray-1000 border-gray-1100 text-black-1100 hover:bg-gray-1300",
                  ].join(" ")}
                >
                  <img
                    src={ICON_FILTER}
                    alt=""
                    className={["size-4 object-contain", activeFilter !== "All" ? "brightness-0 invert" : ""].join(" ")}
                  />
                  {activeFilter !== "All" ? activeFilter : "Filters"}
                  <img
                    src={ICON_ANGLE_DOWN}
                    alt=""
                    className={["size-4 object-contain", activeFilter !== "All" ? "brightness-0 invert" : ""].join(" ")}
                  />
                </button>
              }
            >
              <div className="py-1">
                <p className="px-4 py-2 text-xs font-medium text-gray-1600 uppercase tracking-wide">
                  Filter by Category
                </p>
                {FILTER_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setActiveFilter(opt)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-black-1000 hover:bg-gray-1000 transition-colors text-left"
                  >
                    <span className={activeFilter === opt ? "font-medium text-golden-1000" : ""}>{opt}</span>
                    {activeFilter === opt && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#B1A583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))}
                {activeFilter !== "All" && (
                  <>
                    <div className="border-t border-gray-1100 my-1" />
                    <button
                      type="button"
                      onClick={() => setActiveFilter("All")}
                      className="w-full px-4 py-2.5 text-sm text-[#C70036] hover:bg-red-50 transition-colors text-left"
                    >
                      Clear filter
                    </button>
                  </>
                )}
              </div>
            </Dropdown>
          </div>
          {filtered.length === 0 ? (
            <div className="bg-white border border-gray-1100 rounded-2xl p-12 text-center shadow-sm">
              <img src={ICON_CERTIFICATE} alt="" className="size-12 mx-auto mb-4 opacity-30" />
              <p className="font-Inter font-normal text-base text-gray-1600">
                No certificates found for this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="mt-4 px-4 py-2 rounded-xl border border-gray-1100 text-sm font-medium text-black-1100 hover:bg-gray-1000 transition-colors"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((cert) => (
                <CertificateCard key={cert.id} cert={cert} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
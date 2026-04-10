"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

const AVATAR = "/images/avatar.png";
const PRODUCT_LOGO = "/images/logo-1.png";
const SCREENSHOT = "/images/screenshot.png";
const FLAG_CH = "/images/flag-ch.png";

const STAR_FILLED = "/images/star-filled.svg";
const STAR_HALF = "/images/star-half.svg";
const STAR_EMPTY = "/images/star-half.svg";
const CHECK_CIRCLE = "/images/check-circle.svg";
const THUMBS_UP = "/images/thumbs-up.svg";
const THUMBS_DOWN = "/images/thumbs-down.svg";
const SHIELD_ICON = "/images/shield-icon.svg";
const STAR_BADGE = "/images/star.svg";
const QUESTION_ICON = "/images/question-circle.svg";
const ANGLE_DOWN = "/images/angle-down.svg";

const ICON_OVERVIEW = "/images/compress.svg";
const ICON_SCREENSHOTS = "/images/table-column.svg";
const ICON_COMPLIANCE = "/images/file-shield.svg";
const ICON_PROS_CONS = "/images/thumbs-up.svg";
const ICON_REVIEWS = "/images/annotation.svg";

type TabKey = "overview" | "screenshots" | "compliance" | "proscons" | "reviews";

interface Tab {
  key: TabKey;
  label: string;
  icon: string;
}

const TABS: Tab[] = [
  { key: "overview", label: "Overview", icon: ICON_OVERVIEW },
  { key: "screenshots", label: "Product screenshots", icon: ICON_SCREENSHOTS },
  { key: "compliance", label: "Compliance & Legal Safety", icon: ICON_COMPLIANCE },
  { key: "proscons", label: "Pros & cons", icon: ICON_PROS_CONS },
  { key: "reviews", label: "Reviews", icon: ICON_REVIEWS },
];

const KEY_FEATURES = [
  ["Document automation tools", "Document automation tools"],
  ["E-discovery platforms", "E-discovery platforms"],
  ["Client management systems", "Client management systems"],
  ["Compliance tracking software", "Compliance tracking software"],
];

const PROS = [
  "Automated document generation",
  "Case management software",
  "Client communication platforms",
  "Legal research and analytics tools",
];

const CONS = [
  "High initial investment costs",
  "Potential for user resistance to new technology",
  "Limited customization options for specific legal needs",
  "Risk of data security breaches and confidentiality concerns",
];

const REVIEWS = [
  { name: "User Name 2", date: "30 March, 2026", text: "The document automation feature streamlined our workflow considerably, allowing us to generate contracts in minutes instead of hours." },
  { name: "User Name 2", date: "30 March, 2026", text: "The document automation feature streamlined our workflow considerably, allowing us to generate contracts in minutes instead of hours." },
  { name: "User Name 2", date: "30 March, 2026", text: "The document automation feature streamlined our workflow considerably, allowing us to generate contracts in minutes instead of hours." },
  { name: "User Name 2", date: "30 March, 2026", text: "The document automation feature streamlined our workflow considerably, allowing us to generate contracts in minutes instead of hours." },
  { name: "User Name 2", date: "30 March, 2026", text: "The document automation feature streamlined our workflow considerably, allowing us to generate contracts in minutes instead of hours." },
  { name: "User Name 2", date: "30 March, 2026", text: "The document automation feature streamlined our workflow considerably, allowing us to generate contracts in minutes instead of hours." },
];

const RATINGS = [
  { label: "Trust / Credibility", score: 5, color: "bg-green-1100" },
  { label: "Features / Functionality", score: 4, color: "bg-green-1100" },
  { label: "Security & Privacy", score: 4, color: "bg-green-1100" },
  { label: "Value for Money", score: 3, color: "bg-[#FF8A4C]" },
  { label: "Support", score: 2, color: "bg-[#C70036]" },
];

const LIKED_TAGS = ["Automated system", "Compliance tracking", "analytics"];

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white border border-gray-1100 rounded-2xl p-6 flex flex-col gap-[18px] w-full">
      <div className="border-b border-gray-1100 pb-2">
        <div
          role="heading"
          aria-level={2}
          className="font-Inter font-medium text-xl leading-6 text-black-1000"
        >
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}

function ComplianceBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-[9px] py-px h-6 rounded-[10px] bg-green-1100/10 border border-green-1200/20 shrink-0">
      <div className="relative size-3 shrink-0">
        <Image src={SHIELD_ICON} alt="" fill className="object-contain" />
      </div>
      <span className="font-Inter font-medium text-xs leading-[18px] text-green-1100 whitespace-nowrap">{label}</span>
    </span>
  );
}

function StarRow({ score, reviewCount }: { score: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="relative size-[13px] shrink-0">
          <Image
            src={i < Math.floor(score) ? STAR_FILLED : i === Math.floor(score) && score % 1 >= 0.5 ? STAR_HALF : STAR_EMPTY}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      ))}
      <span className="font-Inter font-normal text-base leading-6 text-black-1000/80">({reviewCount})</span>
    </div>
  );
}

function RatingBar({ label, score, color }: { label: string; score: number; color: string }) {
  const pct = (score / 5) * 100;
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-1">
        <span className="flex-1 font-Inter font-medium text-sm leading-6 text-black-1100">{label}</span>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="relative size-[13px] shrink-0">
              <Image src={i < score ? STAR_FILLED : STAR_EMPTY} alt="" fill className="object-contain" />
            </div>
          ))}
          <span className="font-Inter font-semibold text-2xl leading-6 text-black-1000/80">{score} </span>
          <span className="font-Inter font-normal text-base leading-6 text-black-1000/80">(45)</span>
        </div>
      </div>
      <div className="relative h-[10px] w-full rounded-xl bg-gray-1100">
        <div className={`absolute top-0 left-0 h-full rounded-xl ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function ReviewCard({ name, date, text }: { name: string; date: string; text: string }) {
  return (
    <div className="flex flex-col md:gap-[21px] gap-3 bg-white border border-gray-1100 rounded-xl px-4 py-4 shadow-3xl flex-1 min-w-0">
      <div className="flex items-start gap-2.5">
        <div className="relative size-10 rounded-full shrink-0 overflow-hidden">
          <Image src={AVATAR} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-1 items-start gap-2.5 min-w-0 xl:flex-nowrap flex-wrap">
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-Inter font-medium text-sm leading-4 text-black-1000 whitespace-nowrap">{name}</p>
            <p className="font-Inter font-normal text-sm leading-5 text-black-1100">{date}</p>
          </div>
          <StarRow score={4.5} reviewCount={45} />
        </div>
      </div>
      <p className="font-Inter font-normal text-base leading-6 text-black-1100">{text}</p>
    </div>
  );
}

export default function ProductDetailSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [reviewText, setReviewText] = useState("");

  return (
    <div className="max-w-[1298px] px-5 mx-auto">
    <div className="w-full  flex flex-col gap-6">
      {/* ── Tab Nav ── */}
      <div className="w-full border-b border-gray-1100 flex items-center gap-6 overflow-x-auto">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={[
                "flex items-center gap-1.5 pb-4 pt-0 shrink-0 transition-colors",
                isActive
                  ? "border-b border-golden-1000 text-black-1000"
                  : "border-b border-transparent text-black-1100 hover:text-black-1000",
              ].join(" ")}
            >
              <div className="relative size-4 shrink-0">
                <Image src={tab.icon} alt="" fill className="object-contain" />
              </div>
              <span className="font-Inter font-medium text-sm leading-5 whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Overview ── */}
      <SectionCard title="Overview">
        <p className="font-Inter font-normal text-base leading-6 text-[#404653]">
          This is a comprehensive legal tech solution designed for Swiss law firms. It provides document management, case tracking, and client communication tools in one integrated platform.
        </p>
        <p className="font-Inter font-medium text-base leading-6 text-black-1000">Key Features</p>
        <div className="flex flex-col gap-0.5 w-full">
          {KEY_FEATURES.map((row, i) => (
            <div
              key={i}
              className="flex items-start gap-2 md:flex-nowrap flex-wrap px-4 py-2 rounded-[13px] w-full"
              style={{
                background: "linear-gradient(to right, #F4EEEB, white 43%, #F4EEEB)",
              }}
            >
              {row.map((item, j) => (
                <div
                  key={j}
                  className={[
                    "flex md:flex-1 md:w-auto w-full items-center gap-3 min-w-0",
                    j === 0 ? "md:border-r md:border-b-0 border-b border-golden-1000 md:pr-2 md:pb-0 pb-2" : "",
                  ].join(" ")}
                >
                  <div className="relative size-[18px] shrink-0">
                    <Image src={CHECK_CIRCLE} alt="" fill className="object-contain" />
                  </div>
                  <span className="font-Inter font-normal text-base leading-6 text-black-1000/80 whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── Product Screenshots ── */}
      <SectionCard title="Product screenshots">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 flex-wrap gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative h-40 flex-1 rounded-xl overflow-hidden border border-gray-1100 bg-gray-1300">
              <Image src={SCREENSHOT} alt={`Screenshot ${i + 1}`} fill />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── Compliance & Legal Safety ── */}
      <SectionCard title="Compliance & Legal Safety">
        <div className="flex flex-col lg:flex-row gap-[18px]">
          {/* Data Protection */}
          <div
            className="flex flex-col gap-2.5 flex-1 p-4 rounded-xl border border-[#E1E1E1]"
            style={{ background: "linear-gradient(28.83deg, #ffffff 42.6%, #D0FAE5 102.2%)" }}
          >
            <div className="flex items-center gap-2.5">
              <p className="flex-1 font-Inter font-medium text-base leading-6 text-black-1000 whitespace-nowrap">Data Protection Status</p>
              <span className="inline-flex items-center gap-1 px-[9px] py-px h-10 rounded-[10px] bg-green-1100 border border-green-1200/20 shrink-0">
                <div className="relative size-3 shrink-0">
                  <Image src={SHIELD_ICON} alt="" fill className="object-contain invert" />
                </div>
                <span className="font-Inter font-medium text-xs leading-[18px] text-white whitespace-nowrap">Fully given</span>
              </span>
            </div>
            <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
              Complies with Swiss data protection regulations and GDPR standards.
            </p>
          </div>

          {/* Lawyer Secret */}
          <div
            className="flex flex-col gap-2.5 flex-1 p-4 rounded-xl border border-[#E1E1E1]"
            style={{ background: "linear-gradient(28.83deg, #ffffff 42.6%, #D0FAE5 102.2%)" }}
          >
            <div className="flex items-center gap-2.5">
              <p className="flex-1 font-Inter font-medium text-base leading-6 text-black-1000">Lawyer Secret Protection Status</p>
              <span className="inline-flex items-center gap-1 px-[9px] py-px h-10 rounded-[10px] bg-green-1100 border border-green-1200/20 shrink-0">
                <div className="relative size-3 shrink-0">
                  <Image src={SHIELD_ICON} alt="" fill className="object-contain invert" />
                </div>
                <span className="font-Inter font-medium text-xs leading-[18px] text-white whitespace-nowrap">Fully given</span>
              </span>
            </div>
            <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
              Full compliance with attorney-client privilege and professional secrecy requirements.
            </p>
          </div>

          {/* Hosting Location */}
          <div className="flex flex-col gap-2.5 flex-1 p-4 rounded-xl border border-[#E1E1E1] bg-white">
            <div className="flex items-center gap-2.5">
              <p className="flex-1 font-Inter font-medium text-base leading-6 text-black-1000 whitespace-nowrap">Hosting Location</p>
              <div className="flex items-center gap-2 px-3 py-[9px] h-10 rounded-xl bg-gray-1300/50 border border-gray-1100 shrink-0">
                <div className="relative size-4 shrink-0">
                  <Image src={FLAG_CH} alt="Switzerland" fill className="object-contain" />
                </div>
                <span className="font-Inter font-medium text-sm leading-[21px] text-black-1000 whitespace-nowrap">Switzerland</span>
              </div>
            </div>
            <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
              All data is hosted exclusively in Swiss data centers for maximum security and compliance.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* ── Pros & Cons ── */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <SectionCard title="Pros">
          <div className="flex flex-col gap-0.5">
            {PROS.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#F8F8F8] px-4 py-2 rounded-[13px]">
                <div className="relative md:size-8 size-5 shrink-0">
                  <Image src={THUMBS_UP} alt="" fill className="object-contain" />
                </div>
                <span className="font-Inter font-normal md:text-base text-sm leading-6 text-black-1000/80 whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard title="Cons">
          <div className="flex flex-col gap-0.5">
            {CONS.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#F8F8F8] px-4 py-2 rounded-[13px]">
                <div className="relative md:size-8 size-5 shrink-0 ">
                  <Image src={THUMBS_DOWN} alt="" fill className="object-contain" />
                </div>
                <span className="font-Inter font-normal md:text-base text-sm leading-6 text-black-1000/80">{item}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* ── User Reviews ── */}
      <SectionCard title="User Reviews">
        <div className="flex flex-col lg:flex-row gap-[18px]">

          {/* Reviews list + feedback form */}
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            {/* Sort button */}
            <button type="button" className="self-start flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-1000 border border-gray-1100 text-sm font-medium text-black-1100">
              Most useful
              <div className="relative size-4 shrink-0">
                <Image src={ANGLE_DOWN} alt="" fill className="object-contain" />
              </div>
            </button>

            {/* Review grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REVIEWS.map((r, i) => (
                <ReviewCard key={i} {...r} />
              ))}
            </div>

            {/* Feedback form */}
            <div className="flex flex-col gap-[21px] bg-gray-1400 border border-gray-1100 rounded-xl px-4 py-4 shadow-3xl w-full">
              <div className="flex items-center gap-2.5">
                <div className="relative size-10 rounded-full shrink-0 overflow-hidden">
                  <Image src={AVATAR} alt="You" fill className="object-cover" />
                </div>
                <p className="font-Inter font-medium text-sm leading-4 text-black-1000">John Doe, Add your feedback!</p>
              </div>
              <div className="flex flex-col gap-2.5 w-full">
                <div className="flex items-center gap-1">
                  <span className="font-Inter font-medium text-sm text-black-1000">Detailed Review</span>
                  <span className="text-[#C70036] font-medium text-sm">*</span>
                  <div className="relative size-[14px] shrink-0 ml-1">
                    <Image src={QUESTION_ICON} alt="" fill className="object-contain" />
                  </div>
                </div>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write text here ..."
                  rows={7}
                  className="w-full bg-gray-1000 border border-gray-1100 rounded-xl p-[14px] text-sm text-gray-1200 placeholder:text-gray-1200 outline-none resize-none shadow-3xl focus:ring-2 focus:ring-golden-1000 transition-all"
                />
              </div>
              <button
                type="button"
                className="self-start px-4 py-2.5 rounded-xl text-white text-sm font-medium shadow-3xl transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
              >
                Post Feedback
              </button>
            </div>
          </div>

          {/* Rating summary sidebar */}
          <div className="flex flex-col gap-[18px] xl:w-[414px] lg:w-[350px] shrink-0 pt-[52px]">
            {/* Overall score card */}
            <div className="flex flex-col gap-4 bg-gray-1300 border border-gray-1100 rounded-xl md:px-6 px-4 py-4 shadow-3xl">
              <div className="flex items-center md:gap-4 gap-1">
                <div className="relative md:size-[85px] size-[60px] md:rounded-[24px] rounded-lg border border-gray-1500 overflow-hidden shrink-0">
                  <Image src={PRODUCT_LOGO} alt="Product" fill className="object-cover" />
                </div>
                <div className="flex items-end md:gap-4 gap-2">
                  <span className="font-Inter font-normal md:text-[48px] text-[32px] leading-[33px] text-black-1000/80">4.8<span className="font-Inter font-normal md:text-2xl text-lg leading-[33px] text-black-1000/80">(45)</span></span>
          
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="relative size-[13px] shrink-0">
                        <Image src={i < 4 ? STAR_FILLED : STAR_HALF} alt="" fill className="object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-Inter font-semibold text-sm leading-6 text-black-1100">What users liked the most</p>
                <div className="flex flex-wrap gap-2">
                  {LIKED_TAGS.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-1 py-0.5 rounded-[6px] bg-blue-1000 border border-blue-1100">
                      <div className="relative size-3 shrink-0">
                        <Image src={STAR_BADGE} alt="" fill className="object-contain" />
                      </div>
                      <span className="font-Inter font-medium text-xs leading-4 text-blue-1200 whitespace-nowrap">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating bars */}
            <p className="font-Inter font-semibold text-sm leading-6 text-black-1100">Overall ratings</p>
            <div className="flex flex-col gap-4 w-full">
              {RATINGS.map((r) => (
                <RatingBar key={r.label} label={r.label} score={r.score} color={r.color} />
              ))}
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
    </div>
  );
}
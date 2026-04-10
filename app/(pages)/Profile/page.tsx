"use client";

import DashboardSidebar from "@/app/Components/Sidebar";
import Link from "next/link";

// ── Icons & images ────────────────────────────────────────────────────────────
const AVATAR          = "/images/Avatar-big.png";
const ICON_SHARE      = "/images/share-all.svg";
const ICON_EDIT       = "/images/user-edit.svg";
const ICON_TROPHY     = "/images/shield-icon3.svg";
const ICON_STAR       = "/images/star-icon2.svg";
const ICON_THUMBS_UP  = "/images/msg-icon.svg";
const STAR_RATING     = "/images/star-filled.svg";
const STAR_HALF     = "/images/star-half.svg";
// ── Data ──────────────────────────────────────────────────────────────────────
const REVIEWS = [
  { id: 1, toolName: "LexDoc Pro", date: "30 March, 2026", text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!" },
  { id: 2, toolName: "LexDoc Pro", date: "30 March, 2026", text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!" },
  { id: 3, toolName: "LexDoc Pro", date: "30 March, 2026", text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!" },
  { id: 4, toolName: "LexDoc Pro", date: "30 March, 2026", text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!" },
];

const COMMENTS = [
  { id: 1, toolName: "LexDoc Pro", date: "30 March, 2026", text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!" },
  { id: 2, toolName: "LexDoc Pro", date: "30 March, 2026", text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!" },
  { id: 3, toolName: "LexDoc Pro", date: "30 March, 2026", text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!" },
  { id: 4, toolName: "LexDoc Pro", date: "30 March, 2026", text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!" },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4].map(i => <img key={i} src={STAR_RATING} alt="" className="size-[13px] object-contain" />)}
     <img src={STAR_HALF} alt="" className="size-[13px] object-contain" />
    </div>
  );
}

function ActivityCard({ toolName, date, text }: { toolName: string; date: string; text: string }) {
  return (
    <div className="flex flex-col gap-[21px] bg-white border border-gray-1100 rounded-xl px-4 py-4 shadow-sm flex-1 min-w-0">
      <div className="flex items-start gap-2.5">
        <div className="size-10 rounded-full bg-gray-1400 shrink-0" />
        <div className="flex flex-1 items-start gap-2.5 min-w-0">
          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <p className="font-Inter font-medium text-sm leading-4 text-black-1000 whitespace-nowrap">{toolName}</p>
            <p className="font-Inter font-normal text-sm leading-5 text-black-1100">{date}</p>
          </div>
          <StarRow />
        </div>
      </div>
      <p className="font-Inter font-medium text-sm leading-4 text-black-1100">{text}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      <DashboardSidebar />

      <main className="flex-1 min-w-0 p-4 pt-16 lg:p-6 lg:pt-10">
        <div className="flex flex-col gap-6">

          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pt-2 lg:pt-0">
            <div className="flex flex-col gap-2">
              <h1 className="font-Inter font-semibold text-2xl sm:text-[32px] leading-6 text-black-1000">Your Profile</h1>
              <p className="font-Inter font-normal text-base leading-6 text-gray-1600">Manage your profile information and view your activity</p>
            </div>
            <div className="flex items-center gap-4">
              <button type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}>
                Share profile
                <img src={ICON_SHARE} alt="" className="size-4 object-contain brightness-0 invert" />
              </button>
              <button type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-gray-1100 text-sm font-medium text-black-1100 shadow-sm hover:bg-gray-1000 transition-colors">
                Edit profile
                <img src={ICON_EDIT} alt="" className="size-4 object-contain" />
              </button>
            </div>
          </div>

          {/* ── Profile header card ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img src={AVATAR} alt="John Doe" className="size-44 rounded-full object-cover shrink-0" />
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-Inter font-normal text-base leading-6 text-black-1000">John Doe</span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full font-Inter font-medium text-xs text-black-1000"
                    style={{ background: "linear-gradient(to right, #FFB36B, #F7DF90)" }}>
                    Expert Contributor
                  </span>
                </div>
                <p className="font-Inter font-normal text-base leading-6 text-black-1000/80 max-w-[630px]">
                  Corporate lawyer specializing in legal tech integration and digital transformation for Swiss law firms. Passionate about modernizing legal practice.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <span className="font-Inter font-medium text-base text-black-1000">Practice Area:</span>
                    <span className="font-Inter font-normal text-base text-gray-1600">Corporate Law</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-Inter font-medium text-base text-black-1000">Languages:</span>
                    <span className="font-Inter font-normal text-base text-gray-1600">German, French, English</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Reputation & Activity ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl md:p-6 p-3 flex flex-col gap-[18px] shadow-sm">
            <div className="border-b border-gray-1100 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Reputation & Activity</h3>
            </div>
            <div className="bg-white border border-gray-1100 rounded-2xl md:px-6 px-3 py-12 flex flex-col gap-8 shadow-sm">
              {/* Top: karma + level */}
              <div className="flex flex-col sm:flex-row items-start gap-8 border-b border-gray-1100 pb-6">
                {/* Karma */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-16 rounded-full shrink-0"
                    style={{ background: "linear-gradient(135deg, #B1A583, #FBD380)" }}>
                    <img src={ICON_TROPHY} alt="" className="size-8 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-Inter font-bold text-[30px] leading-9 text-black-1000">2450</p>
                    <p className="font-Inter font-normal text-base text-gray-1600">Karma Points</p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-16 bg-gray-1100" />

                {/* Level */}
                <div className="flex flex-col gap-1">
                  <p className="font-Inter font-semibold md:text-[32px] text-2xl md:leading-[44.8px] text-black-1000">Expert Contributor</p>
                  <p className="font-Inter font-normal text-base text-gray-1600">User Level</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-Inter font-normal text-sm text-gray-1600">Progress to next level</span>
                  <span className="font-Inter font-medium text-sm text-gray-1600">45%</span>
                </div>
                <div className="relative h-3 w-full bg-gray-1300 border border-gray-1100 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full rounded-full" style={{ width: "45%", background: "linear-gradient(90deg, #B1A583, #FBD380)" }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-Inter font-normal text-xs text-gray-1600">2450 points</span>
                  <span className="font-Inter font-normal text-xs text-gray-1600">3000 points (next level)</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-1400 rounded-xl px-4 pt-4 pb-6">
                  <img src={ICON_STAR} alt="" className="size-6 object-contain shrink-0" />
                  <div className="flex flex-col">
                    <p className="font-Inter font-bold text-[48px] leading-16 text-black-1000">4</p>
                    <p className="font-Inter font-normal text-sm text-gray-1600">Reviews Written</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-1400 rounded-xl px-4 pt-4 pb-6">
                  <img src={ICON_THUMBS_UP} alt="" className="size-6 object-contain shrink-0" />
                  <div className="flex flex-col">
                    <p className="font-Inter font-bold text-[48px] leading-16 text-black-1000">3</p>
                    <p className="font-Inter font-normal text-sm text-gray-1600">Comments Made</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Reviews Written ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl p-6 flex flex-col gap-[18px] shadow-sm">
            <div className="border-b border-gray-1100 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Reviews Written</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REVIEWS.map(r => <ActivityCard key={r.id} {...r} />)}
            </div>
          </div>

          {/* ── Comments Made ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl p-6 flex flex-col gap-[18px] shadow-sm">
            <div className="border-b border-gray-1100 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Comments Made</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMMENTS.map(c => <ActivityCard key={c.id} {...c} />)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

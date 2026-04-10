"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/Components/Sidebar";
const PRODUCT_LOGO = "/images/product-logo.svg";
const ICON_SEARCH = "/images/search-black.svg";
const ICON_STAR = "/images/golden-star.svg";
const ICON_BOOKMARK = "/images/bookmark-filled.svg";
const ICON_ARROW = "/images/angle-right-golden.svg";
const ICON_BELL = "/images/bell-green.svg";
const ICON_CALENDAR = "/images/calendar-week.svg";

const SAVED_TOOLS = [
  { name: "LegalTech Pro", category: "Document Management", rating: 4.7, logo: PRODUCT_LOGO },
  { name: "ContractFlow Pro", category: "Contract Management", rating: 4.5, logo: PRODUCT_LOGO },
  { name: "LexResearch AI", category: "Legal Research", rating: 4.9, logo: PRODUCT_LOGO },
];

const RECOMMENDED = [
  { name: "AI Contract Analyzer", category: "AI Tools", rating: 4.8, reviews: 156 },
  { name: "Case Management Pro", category: "Productivity", rating: 4.6, reviews: 89 },
  { name: "Legal Research Hub", category: "Research", rating: 4.9, reviews: 234 },
];

const NOTIFICATIONS = [
  { text: "Sarah liked your review", time: "1h ago", isNew: true },
  { text: "5 people liked your review", time: "1h ago", isNew: false },
  { text: "5 people liked your review", time: "1h ago", isNew: false },
  { text: "5 people liked your review", time: "1h ago", isNew: false },
  { text: "5 people liked your review", time: "1h ago", isNew: false },
  { text: "5 people liked your review", time: "1h ago", isNew: false },
  { text: "12 people liked your review", time: "3h ago", isNew: false },
  { text: "5 people liked your review", time: "1h ago", isNew: false },
  { text: "15 people liked your review", time: "4h ago", isNew: false },
  { text: "8 people liked your review", time: "2h ago", isNew: false },
  { text: "20 people liked your review", time: "5h ago", isNew: false },
];

const UPCOMING = [
  {
    title: "AI in Legal Practice Workshop",
    provider: "May 10 . 1:00 PM",
  },
  {
    title: "AI in Legal Practice Workshop",
    provider: "May 10 . 1:00 PM"
  },
  {
    title: "AI in Legal Practice Workshop",
     provider: "May 10 . 1:00 PM"
  },
  {
    title: "AI in Legal Practice Workshop",
       provider: "May 10 . 1:00 PM"
  },
  {
    title: "AI in Legal Practice Workshop",
      provider: "May 10 . 1:00 PM"
  },
  {
    title: "AI in Legal Practice Workshop",
       provider: "May 10 . 1:00 PM"
  },
  {
    title: "AI in Legal Practice Workshop",
    provider: "May 10 . 1:00 PM"
  },
];

type RightTab = "upcoming" | "notifications";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [rightTab, setRightTab] = useState<RightTab>("notifications");

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      <Sidebar></Sidebar>
      <main className="flex-1 min-w-0 p-4 pt-16 lg:px-6 lg:pt-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 lg:pt-0">
            <div>
              <h1 className="font-Inter font-semibold text-2xl sm:text-[32px] leading-tight text-black-1000">
                Hello, John Doe
              </h1>
              <p className="font-Inter font-normal text-sm sm:text-base leading-6 text-gray-1600 mt-1">
                Welcome back to your legal tech hub
              </p>
            </div>
            <div className="relative w-full sm:w-[380px] lg:w-[448px]">
              <img
                src={ICON_SEARCH}
                alt=""
                className="absolute left-3 top-1/2 -translate-y-1/2 size-5 object-contain pointer-events-none opacity-50"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools, training, workshops..."
                className="w-full bg-white border border-gray-1100 rounded-2xl pl-10 pr-4 py-2.5 text-sm text-black-1000/50 placeholder:text-black-1000/50 outline-none focus:ring-2 focus:ring-golden-1000 transition-all shadow-sm"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <div className="flex flex-col gap-6 flex-1 min-w-0 w-full">
              <div
                className="rounded-2xl p-5 sm:p-6 flex flex-col gap-6 shadow-md"
                style={{ background: "linear-gradient(162.71deg, #B1A583 0%, #222121 100%)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-Inter font-semibold text-xl text-white">Your Reputation</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 font-Inter font-medium text-sm text-white w-fit">
                      Advanced Reviewer
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-Inter font-bold text-4xl sm:text-[48px] leading-tight text-white">2,847</p>
                    <p className="font-Inter font-normal text-sm text-white/80">Karma Points</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { value: "24", label: "Reviews" },
                    { value: "38", label: "Comments" },
                    { value: "156", label: "Likes" },
                    { value: "12", label: "Saved" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1 bg-white/10 rounded-xl px-3 py-3">
                      <p className="font-Inter font-semibold text-xl text-white">{stat.value}</p>
                      <p className="font-Inter font-normal text-xs text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-1100 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-Inter font-semibold text-xl leading-[30px] text-black-1000">Saved Tools</h3>
                  <Link href="/dashboard/saved" className="font-Inter font-normal text-sm text-golden-1000 hover:underline">
                    View All
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  {SAVED_TOOLS.map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 border border-gray-1100 rounded-xl px-3 py-3">
                      <div className="relative size-12 rounded-xl overflow-hidden border border-[#D3D3D3] shrink-0">
                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <p className="font-Inter font-normal text-base leading-6 text-black-1000 truncate">{tool.name}</p>
                        <p className="font-Inter font-normal text-xs leading-[18px] text-gray-1600">{tool.category}</p>
                        <div className="flex items-center gap-1">
                          <img src={ICON_STAR} alt="" className="size-3 object-contain" />
                          <span className="font-Inter font-normal text-xs text-black-1000">{tool.rating}</span>
                        </div>
                      </div>
                      <img src={ICON_BOOKMARK} alt="" className="size-5 object-contain shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-1100 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-Inter font-semibold text-xl leading-[30px] text-black-1000">Recommended for You</h3>
                  <Link href="/products" className="flex items-center gap-1 font-Inter font-normal text-sm text-golden-1000 hover:underline">
                    View All
                    <img src={ICON_ARROW} alt="" className="size-4 object-contain" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {RECOMMENDED.map((item, i) => (
                    <div key={i} className="border border-gray-1100 rounded-xl p-4 flex flex-col gap-2 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="w-full h-20 bg-gray-1300 rounded-xl border border-gray-1100" />
                      <p className="font-Inter font-normal text-base leading-6 text-black-1000">{item.name}</p>
                      <p className="font-Inter font-normal text-xs leading-[18px] text-gray-1600">{item.category}</p>
                      <div className="flex items-center  gap-2">
                        <div className="flex items-center  gap-1">
                          <img src={ICON_STAR} alt="" className="size-3.5 object-contain" />
                          <span className="font-Inter font-medium text-sm text-black-1000">{item.rating}</span>
                        </div>
                        <span className="font-Inter font-normal text-xs text-gray-1600">({item.reviews})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[382px] xl:shrink-0">
              <div className="bg-white border border-gray-1100 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-sm">

                <div className="flex items-center gap-6 border-b border-gray-1100">
                  {([
                    { key: "upcoming" as RightTab, label: "Upcoming", icon: ICON_CALENDAR },
                    { key: "notifications" as RightTab, label: "Notifications", icon: ICON_BELL },
                  ] as const).map((tab) => {
                    const active = rightTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => setRightTab(tab.key)}
                        className={[
                          "flex items-center gap-1.5 pb-4 transition-colors shrink-0",
                          active
                            ? "border-b border-golden-1000 text-black-1000"
                            : "border-b border-transparent text-black-1100 hover:text-black-1000",
                        ].join(" ")}
                      >
                        <img
                          src={tab.icon}
                          alt=""
                          className={["size-4 object-contain transition-all", active ? "golden-icon" : ""].join(" ")}
                          style={active ? { filter: "invert(62%) sepia(30%) saturate(400%) hue-rotate(5deg) brightness(90%)" } : {}}
                        />
                        <span className="font-Inter font-medium text-sm leading-5">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {rightTab === "notifications" && (
                  <div className="flex flex-col gap-1 ">
                    {NOTIFICATIONS.map((n, i) => (
                      <div
                        key={i}
                        className={[
                          "flex flex-col px-4 py-2 rounded-xl",
                          n.isNew ? "bg-gray-1400" : "bg-[#F7F7F7]",
                        ].join(" ")}
                      >
                        <p className="font-Inter font-medium text-sm leading-[21px] text-black-1000">{n.text}</p>
                        <p className="font-Inter font-normal text-xs leading-[18px] text-gray-1600">{n.time}</p>
                      </div>
                    ))}
                  </div>
                )}

                {rightTab === "upcoming" && (
                  <div className="flex flex-col gap-3 pr-1">
                    {UPCOMING.map((item, i) => (
                      <div key={i} className="flex flex-col border border-gray-1100 rounded-xl p-3">
                        <p className="font-Inter font-medium text-sm leading-5 text-black-1000 flex-1">{item.title}</p>
                        <p className="font-Inter font-normal text-xs leading-[18px] text-gray-1600">{item.provider}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

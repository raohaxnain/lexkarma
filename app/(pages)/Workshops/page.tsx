"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import DashboardSidebar from "@/app/Components/Sidebar";

// ── Icons ─────────────────────────────────────────────────────────────────────
const ICON_SEARCH = "/images/search-black.svg";
const ICON_FILTER = "/images/filter.svg";
const ICON_ANGLE_DOWN = "/images/angle-down.svg";
const ICON_CHEVRON_SORT = "/images/chevron-sort.svg";
const ICON_QUESTION = "/images/question-circle.svg";
const ICON_MAP_PIN = "/images/map-pin.svg";
const ICON_ARROW_LEFT = "/images/angle-left.svg";
const ICON_ARROW_RIGHT = "/images/angle-right.svg";
const ICON_CHEVRON_RIGHT = "/images/angle-right.svg";
const WORKSHOP_BANNER = "/images/card-img1.png";
const ICON_CHEVRON_DOWN = "/images/angle-down.svg";
const ICON_TRASH = "/images/trash-bin.svg";
// ── Filter options ────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All Categories",
  "Document Management",
  "Contract Management",
  "Legal Research",
  "Case Management",
  "Time & Billing",
  "E-Discovery",
  "AI Tools",
  "Productivity",
  "Compliance",
  "E-Signature",
];

const ACTIONS_OPTIONS = [
  { label: "Remove Selected", value: "remove-selected", icon: ICON_TRASH },
  { label: "Export as CSV", value: "export-csv", icon: null },
  { label: "Mark as Reviewed", value: "mark-reviewed", icon: null },
];
// ── Data ──────────────────────────────────────────────────────────────────────
const UPCOMING = [
  {
    id: 1, title: "Legal Tech Workshop", provider: "LexAcademy",
    time: "9 AM", date: "23 mar, 2026", location: "Zurich",
    badge: "Upcoming", banner: WORKSHOP_BANNER,
  },
  {
    id: 2, title: "Legal Tech Workshop", provider: "LexAcademy",
    time: "9 AM", date: "23 mar, 2026", location: "Zurich",
    badge: "Upcoming", banner: WORKSHOP_BANNER,
  },
  {
    id: 3, title: "Legal Tech Workshop", provider: "LexAcademy",
    time: "9 AM", date: "23 mar, 2026", location: "Zurich",
    badge: "Upcoming", banner: WORKSHOP_BANNER,
  },
];

interface SavedTool {
  id: number;
  name: string;
  category: string;
  href: string;
}

const INITIAL_TOOLS: SavedTool[] = [
  { id: 1, name: "LegalTech Pro", category: "Document Management", href: "/products/1" },
  { id: 2, name: "ContractFlow Pro", category: "Contract Management", href: "/products/2" },
  { id: 3, name: "LexResearch AI", category: "Legal Research", href: "/products/3" },
  { id: 4, name: "CaseTracker Suite", category: "Case Management", href: "/products/4" },
  { id: 5, name: "TimeBill Legal", category: "Time & Billing", href: "/products/5" },
  { id: 6, name: "eDiscovery Plus", category: "E-Discovery", href: "/products/6" },
  { id: 7, name: "SecureVault Legal", category: "Document Management", href: "/products/7" },
  { id: 8, name: "LexAnalytics", category: "Legal Research", href: "/products/8" },
  { id: 9, name: "AI Contract Analyzer", category: "AI Tools", href: "/products/9" },
  { id: 10, name: "Case Management Pro", category: "Productivity", href: "/products/10" },
  { id: 11, name: "Legal Research Hub", category: "Legal Research", href: "/products/11" },
  { id: 12, name: "DocuSign Legal", category: "E-Signature", href: "/products/12" },
  { id: 13, name: "LexGuard Compliance", category: "Compliance", href: "/products/13" },
  { id: 14, name: "TimeLaw Tracker", category: "Time & Billing", href: "/products/14" },
  { id: 15, name: "SwissLex Database", category: "Legal Research", href: "/products/15" },
];

const PAGE_SIZE = 10;

// ── Dropdown ──────────────────────────────────────────────────────────────────
function Dropdown({
  trigger,
  children,
  align = "right",
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen((v) => !v)}>{trigger}</div>
      {open && (
        <div
          className={[
            "absolute top-full mt-2 z-50 bg-white border border-gray-1100 rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.12)] min-w-[200px] overflow-hidden",
            align === "right" ? "right-0" : "left-0",
          ].join(" ")}
        >
          {children}
        </div>
      )}
    </div>
  );
}


// ── Page ──────────────────────────────────────────────────────────────────────
export default function WorkshopsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [tools, setTools] = useState<SavedTool[]>(INITIAL_TOOLS);
  const [activeCategory, setActiveCategory] = useState("All Categories");

  // ── Filter logic ──────────────────────────────────────────────────────────
  const filtered = tools.filter((t) => {
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All Categories" || t.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // ── Checkbox logic ────────────────────────────────────────────────────────
  const allOnPageSelected =
    paginated.length > 0 && paginated.every((t) => selected.has(t.id));

  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allOnPageSelected) paginated.forEach((t) => next.delete(t.id));
      else paginated.forEach((t) => next.add(t.id));
      return next;
    });
  };

  const toggleOne = (id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const removeTool = (id: number) => {
    setTools((prev) => prev.filter((t) => t.id !== id));
    setSelected((prev) => { const n = new Set(prev); n.delete(id); return n; });
  };

  // ── Actions handler ───────────────────────────────────────────────────────
  const handleAction = (value: string) => {
    if (value === "remove-selected") {
      setTools((prev) => prev.filter((t) => !selected.has(t.id)));
      setSelected(new Set());
      setCurrentPage(1);
    }
    // extend for other actions
  };

  // ── Pagination ────────────────────────────────────────────────────────────
  const pageNumbers: (number | "...")[] = [];
  if (totalPages <= 10) {
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    pageNumbers.push(1, 2);
    if (currentPage > 4) pageNumbers.push("...");
    for (let i = Math.max(3, currentPage - 1); i <= Math.min(totalPages - 2, currentPage + 1); i++) {
      pageNumbers.push(i);
    }
    if (currentPage < totalPages - 3) pageNumbers.push("...");
    pageNumbers.push(totalPages - 1, totalPages);
  }

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      <DashboardSidebar />

      <main className="flex-1 min-w-0 p-4 pt-16 lg:p-6 lg:pt-10">
        <div className="flex flex-col gap-6">

          {/* Header */}
          <div className="flex flex-col gap-2 pt-2 lg:pt-0">
            <h1 className="font-Inter font-semibold text-2xl sm:text-[32px] leading-6 text-black-1000">My Workshops</h1>
            <p className="font-Inter font-normal text-base leading-6 text-gray-1600">Manage your registered workshops and sessions</p>
          </div>

          {/* ── Upcoming Workshops ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl md:p-6 p-3 flex flex-col gap-[18px] shadow-sm">
            <div className="border-b border-gray-1100 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Upcoming Workshops</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[18px]">
              {UPCOMING.map((ws) => (
                <div key={ws.id} className="bg-white border border-gray-1100 rounded-xl overflow-hidden flex flex-col shadow-sm">
                  <div className="relative w-full h-[193px] overflow-hidden rounded-lg m-2" style={{ width: "calc(100% - 16px)" }}>
                    <img src={ws.banner} alt={ws.title} className="w-full h-full object-cover" />
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-[6px] bg-[#FFF8F1] border border-[#FCD9BD] font-Inter font-normal text-sm text-[#8B0836]">
                      {ws.badge}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 px-5 pb-2">
                    <div>
                      <h3 className="font-Inter font-semibold text-xl leading-8 text-black-1000 tracking-tight">{ws.title}</h3>
                      <p className="font-Inter font-normal text-base leading-6 text-gray-1600">{ws.provider}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-1 py-0.5 rounded-[6px] bg-[#ECFDF5] border border-[#A4F4CF]">
                        <span className="font-Inter font-medium text-xs text-[#006045]">{ws.time}</span>
                        <span className="w-px h-3 bg-[#006045]/30" />
                        <span className="font-Inter font-medium text-xs text-[#006045]">{ws.date}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded-[6px] bg-gray-1000 border border-gray-1100">
                        <img src={ICON_MAP_PIN} alt="" className="size-3 object-contain" />
                        <span className="font-Inter font-medium text-xs text-black-1000">{ws.location}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 pb-4 pt-8">
                    <Link
                      href={`/workshops/${ws.id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
                    >
                      Join Meeting
                      <img src={ICON_CHEVRON_RIGHT} alt="" className="size-4 object-contain brightness-0 invert" />
                    </Link>
                    <Link href={`/workshops/${ws.id}`} className="flex-1 flex items-center justify-center py-2.5 text-black-1000 text-sm font-medium hover:bg-gray-1000 rounded-xl transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ── Completed Workshops table ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl flex flex-col gap-[18px] shadow-sm overflow-hidden">
            <div className="border-b border-gray-1100 px-6 pt-6 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Completed Workshops</h3>
            </div>
            {/* ── Top bar ── */}
            <div className="flex items-center justify-between px-5  flex-wrap gap-3">
              {/* Search */}
              <div className="flex items-center gap-2 bg-gray-1000 border border-gray-1100 rounded-xl px-2.5 py-2 w-64 shadow-sm">
                <img src={ICON_SEARCH} alt="" className="size-4 object-contain shrink-0 opacity-50" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                  placeholder="Search tools"
                  className="flex-1 bg-transparent outline-none text-sm text-gray-1200 placeholder:text-gray-1200"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">

                {/* ── Filter dropdown ── */}
                <Dropdown
                  align="right"
                  trigger={
                    <button
                      type="button"
                      className={[
                        "flex items-center gap-1.5 px-3 py-2 border rounded-xl text-sm font-medium shadow-sm transition-colors",
                        activeCategory !== "All Categories"
                          ? "bg-golden-1000 border-golden-1000 text-white"
                          : "bg-gray-1000 border-gray-1100 text-black-1100 hover:bg-gray-1300",
                      ].join(" ")}
                    >
                      <img
                        src={ICON_FILTER}
                        alt=""
                        className={["size-4 object-contain", activeCategory !== "All Categories" ? "brightness-0 invert" : ""].join(" ")}
                      />
                      {activeCategory !== "All Categories" ? activeCategory : "Filters"}
                      <img
                        src={ICON_CHEVRON_DOWN}
                        alt=""
                        className={["size-4 object-contain", activeCategory !== "All Categories" ? "brightness-0 invert" : ""].join(" ")}
                      />
                    </button>
                  }
                >
                  {/* Filter menu */}
                  <div className="py-1">
                    <p className="px-4 py-2 text-xs font-medium text-gray-1600 uppercase tracking-wide">
                      Filter by Category
                    </p>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                        className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-black-1000 hover:bg-gray-1000 transition-colors text-left"
                      >
                        <span className={activeCategory === cat ? "font-medium text-golden-1000" : ""}>
                          {cat}
                        </span>
                        {activeCategory === cat && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                            <path d="M2.5 7L5.5 10L11.5 4" stroke="#B1A583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>
                    ))}
                    {activeCategory !== "All Categories" && (
                      <>
                        <div className="border-t border-gray-1100 my-1" />
                        <button
                          type="button"
                          onClick={() => { setActiveCategory("All Categories"); setCurrentPage(1); }}
                          className="w-full px-4 py-2.5 text-sm text-[#C70036] hover:bg-red-50 transition-colors text-left"
                        >
                          Clear filter
                        </button>
                      </>
                    )}
                  </div>
                </Dropdown>

                {/* ── Actions dropdown ── */}
                <Dropdown
                  align="right"
                  trigger={
                    <button
                      type="button"
                      className="flex items-center gap-1.5 px-3 py-2 bg-gray-1000 border border-gray-1100 rounded-xl text-sm font-medium text-black-1100 shadow-sm hover:bg-gray-1300 transition-colors"
                    >
                      Actions
                      <img src={ICON_CHEVRON_DOWN} alt="" className="size-4 object-contain" />
                    </button>
                  }
                >
                  {/* Actions menu */}
                  <div className="py-1">
                    {/* Selected count badge */}
                    {selected.size > 0 && (
                      <div className="px-4 py-2 border-b border-gray-1100">
                        <span className="text-xs font-medium text-golden-1000">
                          {selected.size} item{selected.size > 1 ? "s" : ""} selected
                        </span>
                      </div>
                    )}
                    {ACTIONS_OPTIONS.map((action) => (
                      <button
                        key={action.value}
                        type="button"
                        disabled={action.value === "remove-selected" && selected.size === 0}
                        onClick={() => handleAction(action.value)}
                        className={[
                          "w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors",
                          action.value === "remove-selected"
                            ? selected.size > 0
                              ? "text-[#C70036] hover:bg-red-50"
                              : "text-gray-1600 cursor-not-allowed opacity-50"
                            : "text-black-1000 hover:bg-gray-1000",
                        ].join(" ")}
                      >
                        {action.icon && (
                          <img
                            src={action.icon}
                            alt=""
                            className={[
                              "size-4 object-contain shrink-0",
                              action.value === "remove-selected" && selected.size > 0 ? "hue-rotate-[-40deg] saturate-200" : "",
                            ].join(" ")}
                          />
                        )}
                        {action.label}
                      </button>
                    ))}
                  </div>
                </Dropdown>
              </div>
            </div>

            {/* ── Table ── */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-1000 border-y border-gray-1100">
                    {/* Select all checkbox */}
                    <th className="w-14 px-5 h-11">
                      <div
                        onClick={toggleAll}
                        className={[
                          "size-4 rounded-[4px] border cursor-pointer transition-colors flex items-center justify-center",
                          allOnPageSelected
                            ? "bg-[#222121] border-[#222121]"
                            : "bg-gray-1000 border-gray-1100 hover:border-golden-1000",
                        ].join(" ")}
                      >
                        {allOnPageSelected && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </th>

                    <th className="px-5 h-11 text-left bg-gray-1000">
                      <span className="font-Inter font-medium text-sm text-black-1100 capitalize">Tool name</span>
                    </th>

                    <th className="px-5 h-11 text-left">
                      <div className="flex items-center gap-1">
                        <span className="font-Inter font-medium text-sm text-black-1100 capitalize">Category</span>
                        <img src={ICON_CHEVRON_SORT} alt="" className="size-3.5 object-contain" />
                      </div>
                    </th>

                    <th className="px-5 h-11 text-left bg-gray-1000">
                      <div className="flex items-center gap-1 max-w-[227px] ml-auto">
                        <span className="font-Inter font-medium text-sm text-black-1100 capitalize">Actions</span>
                        <img src={ICON_QUESTION} alt="" className="size-3.5 object-contain" />
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {paginated.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-12 text-sm text-gray-1600">
                        No saved tools found.
                      </td>
                    </tr>
                  ) : (
                    paginated.map((tool) => (
                      <tr
                        key={tool.id}
                        className={[
                          "border-b border-gray-1100 transition-colors",
                          selected.has(tool.id) ? "bg-[#FAF7F2]" : "hover:bg-gray-1000/40",
                        ].join(" ")}
                      >
                        {/* Checkbox */}
                        <td className="w-14 px-5 h-14">
                          <div
                            onClick={() => toggleOne(tool.id)}
                            className={[
                              "size-4 rounded-[4px] border cursor-pointer transition-colors flex items-center justify-center",
                              selected.has(tool.id)
                                ? "bg-[#222121] border-[#222121]"
                                : "bg-gray-1000 border-gray-1100 hover:border-golden-1000",
                            ].join(" ")}
                          >
                            {selected.has(tool.id) && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </td>

                        {/* Tool name */}
                        <td className="px-5 h-14 bg-gray-1000/20">
                          <span className="font-Inter font-bold text-sm text-black-1100 truncate block max-w-[280px]">
                            {tool.name}
                          </span>
                        </td>

                        {/* Category */}
                        <td className="px-5 h-14">
                          <span className="font-Inter font-medium text-sm text-black-1000">
                            {tool.category}
                          </span>
                        </td>

                        {/* Row actions */}
                        <td className="px-5 h-14 bg-gray-1000/20">
                          <div className="flex items-center max-w-[227px] ml-auto w-full gap-2">
                            <Link
                              href={tool.href}
                              className="flex items-center justify-center px-3 py-1.5 bg-white border border-gray-1100 rounded-xl text-xs font-medium text-black-1100 shadow-sm hover:bg-gray-1000 transition-colors whitespace-nowrap"
                            >
                              Know more
                            </Link>
                            <button
                              type="button"
                              onClick={() => removeTool(tool.id)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-black-1000 hover:bg-red-50 hover:text-red-600 transition-colors whitespace-nowrap"
                            >
                              <img src={ICON_TRASH} alt="" className="size-3.5 object-contain" />
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* ── Footer / Pagination ── */}
            <div className="flex items-center justify-between px-5 py-5 border-t border-gray-1100 flex-wrap gap-3">
              <p className="font-Inter text-sm text-black-1100">
                Showing{" "}
                <span className="font-medium text-black-1000">
                  {filtered.length === 0
                    ? "0"
                    : `${(currentPage - 1) * PAGE_SIZE + 1}–${Math.min(currentPage * PAGE_SIZE, filtered.length)}`}
                </span>
                {" "}of{" "}
                <span className="font-medium text-black-1000">{filtered.length}</span>
              </p>

              {totalPages > 1 && (
                <div className="flex items-center ">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center size-9 bg-white border border-gray-1100 rounded-l-xl hover:bg-gray-1000 transition-colors disabled:opacity-40 disabled:cursor-not-allowed -mr-px"
                  >
                    <img src={ICON_ARROW_LEFT} alt="Prev" className="size-4 object-contain" />
                  </button>

                  {pageNumbers.map((p, i) =>
                    p === "..." ? (
                      <span
                        key={`e${i}`}
                        className="flex items-center justify-center w-9 h-9 bg-white border border-gray-1100 text-sm text-black-1100 -mr-px"
                      >
                        …
                      </span>
                    ) : (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setCurrentPage(p as number)}
                        className={[
                          "flex items-center justify-center w-9 h-9 border border-gray-1100 text-sm font-medium transition-colors -mr-px",
                          currentPage === p
                            ? "bg-gray-1000 text-black-1000 font-semibold"
                            : "bg-white text-black-1100 hover:bg-gray-1000",
                        ].join(" ")}
                      >
                        {p}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center size-9 bg-white border border-gray-1100 rounded-r-xl hover:bg-gray-1000 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <img src={ICON_ARROW_RIGHT} alt="Next" className="size-4 object-contain" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

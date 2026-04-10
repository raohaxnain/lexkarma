"use client";
import { useState, useRef, useEffect } from "react";
import DashboardSidebar from "@/app/Components/Sidebar";
const ICON_FILTER      = "/images/filter.svg";
const ICON_ANGLE_DOWN  = "/images/angle-down.svg";
const ICON_EDIT        = "/images/edit-pencil.svg";
const ICON_TRASH       = "/images/del-red.svg";
const ICON_THUMBS_UP   = "/images/thumbs-up-gray.svg";
const ICON_STAR_FILLED = "/images/star-filled.svg";
const ICON_STAR_HALF   = "/images/star-half.svg";
interface Review {
  id: number;
  toolName: string;
  rating: number;
  reviewCount: number;
  date: string;
  text: string;
  helpful: number;
  category: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    toolName: "LegalTech AI Pro",
    rating: 4.8,
    reviewCount: 45,
    date: "March 15, 2026",
    text: "Excellent AI-powered tool that has significantly improved our contract review process. The accuracy is impressive and it saves us hours of manual work. Highly recommend for any law firm looking to modernize their workflow.",
    helpful: 28,
    category: "AI Tools",
  },
  {
    id: 2,
    toolName: "Contract Management Suite",
    rating: 4.8,
    reviewCount: 45,
    date: "March 10, 2026",
    text: "Great contract management system with solid features. The automation capabilities are good, though the interface could be more intuitive. Overall a reliable tool for managing contract lifecycles.",
    helpful: 15,
    category: "Contract Management",
  },
  {
    id: 3,
    toolName: "Legal Research Platform",
    rating: 4.8,
    reviewCount: 45,
    date: "March 5, 2026",
    text: "Outstanding research tool! The case law analysis and citation tracking features are top-notch. Makes legal research much faster and more comprehensive.",
    helpful: 42,
    category: "Legal Research",
  },
  {
    id: 4,
    toolName: "Case Tracker Pro",
    rating: 4.8,
    reviewCount: 45,
    date: "February 28, 2026",
    text: "Solid case management tool with excellent deadline tracking. Helps keep our team organized and ensures nothing falls through the cracks.",
    helpful: 19,
    category: "Case Management",
  },
  {
    id: 5,
    toolName: "DocuSign Legal",
    rating: 4.5,
    reviewCount: 32,
    date: "February 20, 2026",
    text: "Very useful e-signature platform. Integration with our existing systems was seamless. Would highly recommend for firms dealing with high volumes of documents.",
    helpful: 11,
    category: "E-Signature",
  },
];

const FILTER_OPTIONS = [
  "All",
  "AI Tools",
  "Contract Management",
  "Legal Research",
  "Case Management",
  "E-Signature",
];

const SORT_OPTIONS = [
  { label: "Newest first", value: "newest" },
  { label: "Oldest first", value: "oldest" },
  { label: "Most helpful", value: "helpful" },
  { label: "Highest rated", value: "rating" },
];

function Dropdown({ trigger, children, align = "right" }: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen((v) => !v)}>{trigger}</div>
      {open && (
        <div className={[
          "absolute top-full mt-2 z-50 bg-white border border-gray-1100 rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.12)] min-w-[200px] overflow-hidden",
          align === "right" ? "right-0" : "left-0",
        ].join(" ")}>
          {children}
        </div>
      )}
    </div>
  );
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <img
            key={i}
            src={i <= Math.floor(rating) ? ICON_STAR_FILLED : ICON_STAR_HALF}
            alt=""
            className="size-[13px] object-contain"
          />
        ))}
      </div>
      <span className="font-Inter font-normal text-base leading-6 text-black-1000/80">
        {rating} ({count})
      </span>
    </div>
  );
}

function ReviewCard({
  review,
  onDelete,
  onEdit,
}: {
  review: Review;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}) {
  return (
    <div className="bg-white border border-gray-1100 rounded-2xl md:p-6 p-4 flex flex-col gap-4 shadow-sm w-full">
      {/* Top row: tool name + meta + actions */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {/* Tool name */}
          <p className="font-Inter font-normal text-base leading-6 text-black-1000">
            {review.toolName}
          </p>
          {/* Stars + date */}
          <div className="flex flex-wrap items-center gap-3">
            <StarRating rating={review.rating} count={review.reviewCount} />
            <span className="font-Inter font-normal text-sm leading-[21px] text-gray-1600">
              {review.date}
            </span>
          </div>
        </div>

        {/* Edit + Delete buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onEdit(review.id)}
            className="flex items-center justify-center size-8 rounded-xl hover:bg-gray-1000 transition-colors"
            title="Edit review"
          >
            <img src={ICON_EDIT} alt="Edit" className="size-4 object-contain" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(review.id)}
            className="flex items-center justify-center size-8 rounded-xl hover:bg-red-50 transition-colors"
            title="Delete review"
          >
            <img src={ICON_TRASH} alt="Delete" className="size-4 object-contain" />
          </button>
        </div>
      </div>

      {/* Review text */}
      <p className="font-Inter font-normal text-sm leading-[21px] text-black-1000">
        {review.text}
      </p>

      {/* Helpful */}
      <div className="flex items-center gap-2">
        <img src={ICON_THUMBS_UP} alt="" className="size-4 object-contain" />
        <span className="font-Inter font-normal text-sm leading-[21px] text-gray-1600">
          {review.helpful} people found this helpful
        </span>
      </div>
    </div>
  );
}

function EditModal({
  review,
  onSave,
  onClose,
}: {
  review: Review;
  onSave: (id: number, text: string) => void;
  onClose: () => void;
}) {
  const [text, setText] = useState(review.text);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-Inter font-semibold text-xl text-black-1000">Edit Review</h3>
          <button
            type="button"
            onClick={onClose}
            className="size-8 flex items-center justify-center rounded-xl hover:bg-gray-1000 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="#6A7282" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <p className="font-Inter font-normal text-sm text-gray-1600">
          Editing review for <span className="font-medium text-black-1000">{review.toolName}</span>
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="w-full bg-gray-1000 border border-gray-1100 rounded-xl p-3.5 text-sm text-black-1000 placeholder:text-gray-1200 outline-none resize-none focus:ring-2 focus:ring-golden-1000 transition-all"
        />
        <div className="flex items-center gap-3 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-gray-1100 text-sm font-medium text-black-1100 hover:bg-gray-1000 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => { onSave(review.id, text); onClose(); }}
            className="px-4 py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function MyReviewsPage() {
  const [reviews, setReviews]           = useState<Review[]>(INITIAL_REVIEWS);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort]     = useState("newest");
  const [editingId, setEditingId]       = useState<number | null>(null);

  // Filter
  const filtered = reviews.filter(
    (r) => activeFilter === "All" || r.category === activeFilter
  );

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (activeSort === "newest")  return b.id - a.id;
    if (activeSort === "oldest")  return a.id - b.id;
    if (activeSort === "helpful") return b.helpful - a.helpful;
    if (activeSort === "rating")  return b.rating - a.rating;
    return 0;
  });

  const handleDelete = (id: number) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const handleSave = (id: number, text: string) => {
    setReviews((prev) => prev.map((r) => r.id === id ? { ...r, text } : r));
  };

  const editingReview = reviews.find((r) => r.id === editingId) ?? null;

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
     <DashboardSidebar></DashboardSidebar>

      <main className="flex-1 min-w-0 p-4 pt-16 lg:px-6 lg:pt-10">
        <div className="flex flex-col gap-6">

          {/* ── Header ── */}
          <div className="flex flex-col gap-2 pt-2 lg:pt-0">
            <h1 className="font-Inter font-semibold text-2xl sm:text-[32px] leading-6 text-black-1000">
              My Reviews
            </h1>
            <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
              Reviews you've written for legal tech products
            </p>
          </div>

          {/* ── Filter / Sort bar ── */}
          <div className="flex items-center gap-3 flex-wrap">

            {/* Filter by category */}
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

          {/* ── Review cards ── */}
          {sorted.length === 0 ? (
            <div className="bg-white border border-gray-1100 rounded-2xl p-12 text-center shadow-sm">
              <p className="font-Inter font-normal text-base text-gray-1600">
                No reviews found for this category.
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
            <div className="flex flex-col gap-4">
              {sorted.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  onDelete={handleDelete}
                  onEdit={(id) => setEditingId(id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ── Edit modal ── */}
      {editingReview && (
        <EditModal
          review={editingReview}
          onSave={handleSave}
          onClose={() => setEditingId(null)}
        />
      )}
    </div>
  );
}
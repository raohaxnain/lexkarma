"use client";

import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FilterOption {
  label: string;
  count?: number;
}

export interface FilterGroup {
  title: string;
  options: FilterOption[];
  defaultOpen?: boolean;
}

interface FilterSidebarProps {
  groups: FilterGroup[];
}

// ── Products page filters ─────────────────────────────────────────────────────

export const PRODUCT_FILTERS: FilterGroup[] = [
  {
    title: "Category",
    defaultOpen: true,
    options: [
      { label: "Document Management", count: 3 },
      { label: "Case Management", count: 3 },
      { label: "Legal Research", count: 3 },
      { label: "Contract Management", count: 3 },
      { label: "Time Tracking", count: 3 },
    ],
  },
  {
    title: "Pricing Model",
    options: [
      { label: "Free", count: 3 },
      { label: "Freemium", count: 3 },
      { label: "Subscription", count: 3 },
      { label: "One-time", count: 3 },
    ],
  },
  {
    title: "Rating",
    options: [
      { label: "4+ stars", count: 3 },
      { label: "3+ stars", count: 3 },
    ],
  },
  {
    title: "Country",
    options: [
      { label: "Switzerland", count: 3 },
      { label: "Europe", count: 3 },
      { label: "Global", count: 3 },
    ],
  },
  {
    title: "Data Protection",
    options: [
      { label: "Fully given", count: 3 },
      { label: "Partially given", count: 3 },
      { label: "Not good at all", count: 3 },
    ],
  },
  {
    title: "Lawyer Secret Protection",
    options: [
      { label: "Fully given", count: 3 },
      { label: "Partially given", count: 3 },
      { label: "Not good at all", count: 3 },
    ],
  },
];

// ── Training/Courses page filters ─────────────────────────────────────────────

export const TRAINING_FILTERS: FilterGroup[] = [
  {
    title: "Topic",
    defaultOpen: true,
    options: [
      { label: "Legal Tech Basics", count: 3 },
      { label: "Document Automation", count: 3 },
      { label: "Legal AI", count: 3 },
      { label: "Data Protection", count: 3 },
      { label: "E-Discovery", count: 3 },
    ],
  },
  {
    title: "Provider",
    options: [
      { label: "LexAcademy", count: 3 },
      { label: "Swiss Legal Institute", count: 3 },
      { label: "TechLaw Training", count: 3 },
    ],
  },
  {
    title: "Rating",
    options: [
      { label: "4+ stars", count: 3 },
      { label: "3+ stars", count: 3 },
    ],
  },
  {
    title: "Price",
    options: [
      { label: "Free", count: 3 },
      { label: "Under CHF 500", count: 3 },
      { label: "CHF 500-1000", count: 3 },
      { label: "Over CHF 1000", count: 3 },
    ],
  },
  {
    title: "Language",
    options: [
      { label: "English", count: 3 },
      { label: "German", count: 3 },
      { label: "French", count: 3 },
    ],
  },
  {
    title: "Format",
    options: [
      { label: "Online", count: 3 },
      { label: "In-Person", count: 3 },
      { label: "Hybrid", count: 3 },
    ],
  },
  {
    title: "Location",
    options: [
      { label: "Zurich" },
      { label: "Bern" },
      { label: "Geneva" },
    ],
  },
];

// ── Workshop page filters ─────────────────────────────────────────────────────

export const WORKSHOP_FILTERS: FilterGroup[] = [
  {
    title: "Topic",
    defaultOpen: true,
    options: [
      { label: "Legal Tech Basics" },
      { label: "Document Automation" },
      { label: "Legal AI" },
      { label: "Data Protection" },
      { label: "E-Discovery" },
    ],
  },
  {
    title: "Provider / Organizer",
    options: [
      { label: "LexAcademy" },
      { label: "Swiss Legal Institute" },
      { label: "TechLaw Training" },
    ],
  },
  {
    title: "Location",
    options: [
      { label: "Zurich" },
      { label: "Bern" },
      { label: "Geneva" },
    ],
  },
  {
    title: "Price",
    options: [
      { label: "Free" },
      { label: "Under CHF 500" },
      { label: "CHF 500-1000" },
      { label: "Over CHF 1000" },
    ],
  },
  {
    title: "Language",
    options: [
      { label: "English" },
      { label: "German" },
      { label: "French" },
    ],
  },
  {
    title: "Format",
    options: [
      { label: "Online" },
      { label: "In-Person" },
      { label: "Hybrid" },
    ],
  },
];

// ── Internal sub-components ───────────────────────────────────────────────────

function ChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M12 10L8 6L4 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface FilterGroupSectionProps {
  group: FilterGroup;
  selected: Set<string>;
  onToggle: (key: string) => void;
}

function FilterGroupSection({ group, selected, onToggle }: FilterGroupSectionProps) {
  const [open, setOpen] = useState(group.defaultOpen ?? false);

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between px-2 py-1.5 rounded-xl w-full bg-golden-1000"
      >
        <span className="font-medium text-base leading-6 text-white whitespace-nowrap">
          {group.title}
        </span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      {open && (
        <div className="flex flex-col gap-4 px-2">
          {group.options.map((opt) => {
            const key = `${group.title}::${opt.label}`;
            const checked = selected.has(key);
            return (
              <label key={opt.label} className="flex items-center gap-2.5 cursor-pointer w-full">
                <div
                  onClick={() => onToggle(key)}
                  className={[
                    "flex items-center justify-center shrink-0 size-4 rounded-[4px] border cursor-pointer transition-colors",
                    checked
                      ? "bg-[#222121] border-[#222121]"
                      : "bg-gray-1000 border-gray-1100",
                  ].join(" ")}
                >
                  {checked && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-1 items-center justify-between min-w-0 whitespace-nowrap">
                  <span className="font-medium text-sm leading-4 text-black">
                    {opt.label}
                  </span>
                  {opt.count !== undefined && (
                    <span className="font-normal text-sm leading-5 text-black-1100">
                      {opt.count}
                    </span>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function FilterSidebar({ groups }: FilterSidebarProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <aside className="flex flex-col gap-4 w-full">
      {groups.map((group) => (
        <FilterGroupSection
          key={group.title}
          group={group}
          selected={selected}
          onToggle={toggle}
        />
      ))}
    </aside>
  );
}

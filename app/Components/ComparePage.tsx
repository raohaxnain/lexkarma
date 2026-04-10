"use client";

import { useEffect } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────
type ComplianceVal = "fully" | "partial" | "none";

interface Product {
  id: string;
  name: string;
  logo: string;
  category: string;
  version: string;
  pricingModel: string;
  startingPrice: string;
  priceHighlight?: string;
  isHighestPrice?: boolean;
  deploymentType: string;
  targetSize: string;
  features: Record<string, boolean>;
  integrations: Record<string, boolean>;
  security: Record<string, boolean>;
  compliance: {
    dataProtection: ComplianceVal;
    lawyerSecretProtection: ComplianceVal;
  };
  ratings: {
    userRating: number;
    usabilityScore: number;
    supportScore: number;
    valueForMoney: number;
    numberOfReviews: number;
    isHighestRated?: boolean;
  };
}

// ── Static product data (Figma exact) ────────────────────────────────────────
const PRODUCTS: Product[] = [
  {
    id: "legaltech-pro",
    name: "LegalTech Pro",
    logo: "/images/logo-1.png",
    category: "Case Management",
    version: "v2.5.1",
    pricingModel: "Subscription",
    startingPrice: "CHF 29/mo",
    deploymentType: "Cloud",
    targetSize: "Small to Medium",
    features: {
      "Document Management": true,
      "Case Tracking": true,
      "Time Tracking": true,
      "Client Portal": true,
      "E-Billing": true,
      "Mobile App": true,
      "Workflow Automation": true,
      "Document Templates": true,
      "Task Management": true,
      "Calendar Integration": true,
    },
    integrations: {
      "Microsoft 365": true,
      "Google Workspace": true,
      "Slack": true,
      "Salesforce": false,
    },
    security: {
      "Two-Factor Authentication": true,
      "Data Encryption": true,
      "Role-based Access": true,
      "Audit Logs": true,
    },
    compliance: { dataProtection: "fully", lawyerSecretProtection: "fully" },
    ratings: { userRating: 4.5, usabilityScore: 4.3, supportScore: 4.3, valueForMoney: 4.5, numberOfReviews: 48 },
  },
  {
    id: "contract-ai",
    name: "Contract AI",
    logo: "/images/logo-2.png",
    category: "Contract Management",
    version: "v3.0.0",
    pricingModel: "Subscription",
    startingPrice: "CHF 49/mo",
    priceHighlight: "Highest Price",
    isHighestPrice: true,
    deploymentType: "Cloud",
    targetSize: "Enterprise",
    features: {
      "Document Management": false,
      "Case Tracking": true,
      "Time Tracking": true,
      "Client Portal": false,
      "E-Billing": true,
      "Mobile App": true,
      "Workflow Automation": false,
      "Document Templates": true,
      "Task Management": true,
      "Calendar Integration": false,
    },
    integrations: {
      "Microsoft 365": true,
      "Google Workspace": false,
      "Slack": true,
      "Salesforce": true,
    },
    security: {
      "Two-Factor Authentication": true,
      "Data Encryption": true,
      "Role-based Access": true,
      "Audit Logs": false,
    },
    compliance: { dataProtection: "fully", lawyerSecretProtection: "partial" },
    ratings: { userRating: 4.2, usabilityScore: 4.0, supportScore: 4.0, valueForMoney: 4.1, numberOfReviews: 32 },
  },
  {
    id: "lawvault",
    name: "LawVault",
    logo: "/images/logo-3.png",
    category: "Document Management",
    version: "v4.1.0",
    pricingModel: "One-time + Subscription",
    startingPrice: "CHF 39/mo",
    deploymentType: "Cloud / On-premise",
    targetSize: "All Sizes",
    features: {
      "Document Management": true,
      "Case Tracking": true,
      "Time Tracking": true,
      "Client Portal": true,
      "E-Billing": true,
      "Mobile App": true,
      "Workflow Automation": true,
      "Document Templates": true,
      "Task Management": true,
      "Calendar Integration": true,
    },
    integrations: {
      "Microsoft 365": true,
      "Google Workspace": true,
      "Slack": false,
      "Salesforce": true,
    },
    security: {
      "Two-Factor Authentication": true,
      "Data Encryption": true,
      "Role-based Access": false,
      "Audit Logs": true,
    },
    compliance: { dataProtection: "partial", lawyerSecretProtection: "none" },
    ratings: { userRating: 4.7, usabilityScore: 4.6, supportScore: 4.6, valueForMoney: 4.7, numberOfReviews: 56, isHighestRated: true },
  },
];

// ── Cell helpers ──────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <div className="flex justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10.5L8 14.5L16 6" stroke="#22c55e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CrossIcon() {
  return (
    <div className="flex justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 6L14 14M14 6L6 14" stroke="#9CA3AF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FeatureCell({ val }: { val: boolean }) {
  return val ? <CheckIcon /> : <CrossIcon />;
}

function ComplianceCell({ val }: { val: ComplianceVal }) {
  const cfg = {
    fully: { bg: "bg-[rgba(34,197,94,0.1)]", border: "border-[rgba(34,197,94,0.2)]", text: "text-[#22c55e]", icon: "/images/green-shield.svg", label: "Fully given" },
    partial: { bg: "bg-[rgba(234,179,8,0.1)]", border: "border-[rgba(234,179,8,0.2)]", text: "text-[#eab308]", icon: "/images/yellow-shield.svg", label: "Partially given" },
    none: { bg: "bg-[rgba(199,0,54,0.1)]", border: "border-[rgba(199,0,54,0.2)]", text: "text-red-1000", icon: "/images/red-shield.svg", label: "Not good at all" },
  }[val];

  return (
    <div className="flex justify-center">
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-[10px] border text-xs font-medium ${cfg.bg} ${cfg.border} ${cfg.text}`}>
        
        {/* 👇 dot ki jaga image */}
        <img src={cfg.icon} alt="" className="w-3 h-3 shrink-0" />

        {cfg.label}
      </span>
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex items-center justify-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M7.01819 0.8631C7.04741 0.804074 7.09254 0.754388 7.14849 0.71965C7.20445 0.684912 7.269 0.666504 7.33486 0.666504C7.40072 0.666504 7.46527 0.684912 7.52122 0.71965C7.57718 0.754388 7.62231 0.804074 7.65153 0.8631L9.19153 3.98243C9.29298 4.18774 9.44273 4.36537 9.62794 4.50007C9.81315 4.63477 10.0283 4.72251 10.2549 4.75577L13.6989 5.25977C13.7641 5.26922 13.8254 5.29675 13.8759 5.33923C13.9263 5.38172 13.9638 5.43747 13.9842 5.50017C14.0046 5.56288 14.007 5.63004 13.9912 5.69406C13.9755 5.75808 13.9421 5.8164 13.8949 5.86243L11.4042 8.28777C11.2399 8.44783 11.117 8.64542 11.0461 8.86352C10.9751 9.08162 10.9582 9.31369 10.9969 9.53977L11.5849 12.9664C11.5964 13.0317 11.5893 13.0988 11.5645 13.1602C11.5397 13.2216 11.4981 13.2748 11.4446 13.3138C11.391 13.3527 11.3275 13.3758 11.2614 13.3804C11.1954 13.385 11.1293 13.3709 11.0709 13.3398L7.99219 11.7211C7.78934 11.6146 7.56365 11.5589 7.33453 11.5589C7.10541 11.5589 6.87971 11.6146 6.67686 11.7211L3.59886 13.3398C3.54041 13.3707 3.47446 13.3846 3.40849 13.3799C3.34253 13.3752 3.2792 13.3521 3.22572 13.3132C3.17224 13.2743 3.13075 13.2212 3.10596 13.1599C3.08118 13.0986 3.0741 13.0316 3.08553 12.9664L3.67286 9.54043C3.71166 9.31425 3.69485 9.08203 3.62388 8.8638C3.55292 8.64556 3.42993 8.44787 3.26553 8.28777L0.774859 5.8631C0.727255 5.81712 0.693521 5.7587 0.6775 5.69448C0.66148 5.63027 0.663817 5.56284 0.684245 5.49989C0.704672 5.43694 0.74237 5.38099 0.793043 5.33842C0.843716 5.29585 0.905328 5.26837 0.970859 5.2591L4.41419 4.75577C4.64103 4.72277 4.85645 4.63514 5.04191 4.50042C5.22738 4.36571 5.37733 4.18795 5.47886 3.98243L7.01819 0.8631Z" fill="#B1A583" stroke="#B1A583" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

function SectionHeaderRow({ title }: { title: string }) {
  return (
    <tr className="bg-gray-1300 border-b border-gray-1100">
      <td colSpan={4} className="px-4 py-3.75">
        <span className="font-Inter font-bold text-sm text-black-1000 uppercase tracking-wide">
          {title}
        </span>
      </td>
    </tr>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface ComparePageProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: Array<{ id: number; title: string }>;
  onRemove: (id: number) => void;
  onClear: () => void;
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ComparePage({
  isOpen,
  onClose,
  selectedProducts,
  onRemove,
  onClear,
}: ComparePageProps) {
  const count = selectedProducts.length;

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* ── Slide-up panel ── */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[70] transition-transform duration-500 ease-out ${isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        style={{ height: "92vh" }}
      >
        <div className="h-full bg-white rounded-t-[24px] flex flex-col overflow-hidden shadow-[0px_-10px_60px_rgba(0,0,0,0.2)]">

          {/* ── Sticky top bar (Figma exact) ── */}
          <div className="shrink-0 bg-white border-b border-gray-1100 shadow-[0px_4px_6px_rgba(0,0,0,0.05)] z-10">
            <div className="max-w-[1298px] px-5 mx-auto h-[81px] flex items-center justify-between gap-4">

              {/* Left */}
              <div className="flex items-center gap-4 flex-wrap">
                {/* Icon + text */}
                <div className="flex items-center gap-4">
                  <div className="size-6 shrink-0">
                    <img src="/images/product-icon.svg" alt="" />
                  </div>
                  <div>
                    <p className="font-Inter font-bold text-base leading-6 text-black-1000">
                      {count} Product{count > 1 ? "s" : ""} Selected
                    </p>
                    <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
                      Comparing {count} products
                    </p>
                  </div>
                </div>

              </div>

              {/* Badges */}
              <div className="flex items-center gap-4 flex-wrap">
                {selectedProducts.map((p) => (
                  <span
                    key={p.id}
                    className="flex items-center gap-1.5 bg-green-1300 border border-green-1400 text-black-1200  text-sm font-medium px-1.5 py-1 rounded-[6px]"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#006045" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p.title}
                    <span className="w-px h-3 bg-green-1400 mx-0.5" />
                    <button type="button" onClick={() => onRemove(p.id)} className="hover:opacity-70">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M10 4L4 10M4 4L10 10" stroke="#006045" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
              {/* Right buttons */}
              <div className="flex items-center gap-4 shrink-0">
                <button
                  type="button"
                  onClick={onClear}
                  className="flex items-center justify-center px-4 py-2.5 rounded-xl border border-red-1000 text-sm font-medium text-red-1000 hover:bg-red-50 transition-colors"
                >
                  Clear all
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-gray-1100 text-sm font-medium text-black-1100 hover:bg-gray-50 transition-colors"
                >
                  Close
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── Scrollable table area ── */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-[1298px] px-5 mx-auto py-8">
              <div className="rounded-2xl border border-gray-1100 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px] border-collapse">
                    {/* ── Header: logos + product names ── */}
                    <thead>
                      <tr className="bg-gray-1300 border-b border-gray-1100">
                        <th className="px-4 py-3.75 text-left w-[25%] border-r border-gray-1100">
                          <span className="font-Inter font-bold text-base text-black-1000">Comparison Criteria</span>
                        </th>
                        {PRODUCTS.map((p, i) => (
                          <th
                            key={p.id}
                            className={`px-4 pt-4 pb-3.75 text-center w-[25%] ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}
                          >
                            <div className="w-20 h-20 rounded-xl border border-gray-1100 bg-gray-1300 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                              <img
                                src={p.logo}
                                alt={p.name}
                                className="w-full h-full object-contain"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                              />
                            </div>
                            <p className="font-Inter font-bold text-base text-black-1000">{p.name}</p>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {/* Category */}
                      <tr className="bg-gray-1000 border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Category</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 font-Inter font-normal text-base text-center text-black-1000 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            {p.category}
                          </td>
                        ))}
                      </tr>

                      {/* Version */}
                      <tr className="bg-white border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Version</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 text-center ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <span className="inline-block font-Inter font-medium text-sm px-3 py-[4px] rounded-lg bg-gray-1300 text-black-1000">
                              {p.version}
                            </span>
                          </td>
                        ))}
                      </tr>

                      {/* Pricing Model */}
                      <tr className=" border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Pricing Model</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 font-Inter font-normal text-base text-center text-black-1000 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            {p.pricingModel}
                          </td>
                        ))}
                      </tr>

                      {/* Starting Price */}
                      <tr className="bg-gray-1000 border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Starting Price</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 text-center ${p.isHighestPrice ? "bg-gray-1300" : ""} ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <p className={`font-Inter text-center text-black-1000 ${p.isHighestPrice ? "text-xl font-semibold" : "text-base font-normal"}`}>
                              {p.startingPrice}
                            </p>
                            {p.priceHighlight && (
                              <p className="font-Inter font-normal text-sm text-black-1100 mt-0.5">{p.priceHighlight}</p>
                            )}
                          </td>
                        ))}
                      </tr>

                      {/* Deployment */}
                      <tr className=" border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Deployment Type</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 font-Inter font-normal text-base text-center text-black-1000 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            {p.deploymentType}
                          </td>
                        ))}
                      </tr>

                      {/* Target Size */}
                      <tr className="bg-gray-1000 border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Target Company Size</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 font-Inter font-normal text-base text-center text-black-1000 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            {p.targetSize}
                          </td>
                        ))}
                      </tr>

                      {/* ── KEY FEATURES ── */}
                      <SectionHeaderRow title="Key Features" />
                      {Object.keys(PRODUCTS[0].features).map((feat, idx) => (
                        <tr key={feat} className={`border-b border-gray-1100 ${idx % 2 === 0 ? "bg-white" : ""}`}>
                          <td className="px-4 py-3.75 font-Inter font-normal text-base text-black-1000 border-r border-gray-1100">{feat}</td>
                          {PRODUCTS.map((p, i) => (
                            <td key={p.id} className={`px-4 py-3.75 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                              <FeatureCell val={p.features[feat]} />
                            </td>
                          ))}
                        </tr>
                      ))}

                      {/* ── INTEGRATIONS ── */}
                      <SectionHeaderRow title="Integrations" />
                      {Object.keys(PRODUCTS[0].integrations).map((item, idx) => (
                        <tr key={item} className={`border-b border-gray-1100 ${idx % 2 !== 0 ? "bg-white" : ""}`}>
                          <td className="px-4 py-3.75 font-Inter font-normal text-base text-black-1000 border-r border-gray-1100">{item}</td>
                          {PRODUCTS.map((p, i) => (
                            <td key={p.id} className={`px-4 py-3.75 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                              <FeatureCell val={p.integrations[item]} />
                            </td>
                          ))}
                        </tr>
                      ))}

                      {/* ── SECURITY FEATURES ── */}
                      <SectionHeaderRow title="Security Features" />
                      {Object.keys(PRODUCTS[0].security).map((item, idx) => (
                        <tr key={item} className={`border-b border-gray-1100 ${idx % 2 === 0 ? "bg-white" : ""}`}>
                          <td className="px-4 py-3.75 font-Inter font-normal text-base text-black-1000 border-r border-gray-1100">{item}</td>
                          {PRODUCTS.map((p, i) => (
                            <td key={p.id} className={`px-4 py-3.75 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                              <FeatureCell val={p.security[item]} />
                            </td>
                          ))}
                        </tr>
                      ))}

                      <SectionHeaderRow title="Compliance & Legal Safety" />

                      <tr className="bg-white border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Data Protection</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <ComplianceCell val={p.compliance.dataProtection} />
                          </td>
                        ))}
                      </tr>

                      <tr className="border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Lawyer Secret Protection</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <ComplianceCell val={p.compliance.lawyerSecretProtection} />
                          </td>
                        ))}
                      </tr>

                      {/* User Ratings */}
                      <tr className="bg-gray-1300 border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">User Ratings</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 text-center ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <StarRow />
                            <p className="font-Inter font-medium text-base text-black-1000 mt-1">{p.ratings.userRating}</p>
                            {p.ratings.isHighestRated && (
                              <p className="font-Inter font-normal text-base text-gray-1600 mt-0.5">Highest Rated</p>
                            )}
                          </td>
                        ))}
                      </tr>

                      {/* Usability Score */}
                      <tr className="bg-white border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Usability Score</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 text-center ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <p className="font-Inter font-semibold text-xl text-black-1000">{p.ratings.usabilityScore}</p>
                            <p className="font-Inter font-normal text-sm text-gray-1600">out of 5</p>
                          </td>
                        ))}
                      </tr>

                      {/* Support Score */}
                      <tr className="bg-gray-1300 border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Support Score</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 text-center ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <p className="font-Inter font-semibold text-xl text-black-1000">{p.ratings.supportScore}</p>
                            <p className="font-Inter font-normal text-sm text-gray-1600">out of 5</p>
                          </td>
                        ))}
                      </tr>

                      {/* Value for Money */}
                      <tr className="bg-white border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Value for Money Score</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 text-center ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <p className="font-Inter font-semibold text-xl text-black-1000">{p.ratings.valueForMoney}</p>
                            <p className="font-Inter font-normal text-sm text-gray-1600">out of 5</p>
                          </td>
                        ))}
                      </tr>

                      {/* Number of Reviews */}
                      <tr className="bg-gray-1300 border-b border-gray-1100">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Number of Reviews</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-3.75 font-Inter font-medium text-base text-center text-black-1000 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            {p.ratings.numberOfReviews} reviews
                          </td>
                        ))}
                      </tr>

                      {/* Actions */}
                      <tr className="bg-white">
                        <td className="px-4 py-3.75 font-Inter font-bold text-base text-black-1000 border-r border-gray-1100">Actions</td>
                        {PRODUCTS.map((p, i) => (
                          <td key={p.id} className={`px-4 py-4 ${i < PRODUCTS.length - 1 ? "border-r border-gray-1100" : ""}`}>
                            <div className="flex flex-col gap-2">
                              <Link
                                href={`/products/${p.id}`}
                                className="w-full h-11 flex items-center justify-center rounded-xl bg-golden-1000 text-white font-Inter font-normal text-base hover:opacity-90 transition-opacity"
                              >
                                View Product
                              </Link>
                              <button
                                type="button"
                                className="w-full h-[46px] flex items-center justify-center rounded-xl border border-gray-1100 bg-gray-1000 font-Inter font-normal text-base text-black-1100 hover:bg-gray-100 transition-colors"
                              >
                                Visit Website
                              </button>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
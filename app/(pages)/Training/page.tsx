"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/ui/Button";
import CategoriesGrid from "@/app/Components/CategoriesGrid";
import CourseCard from "@/app/Components/CourseCard";
import TrustedBySection from "@/app/Components/Trustedbysection";
import TestimonialsSection from "@/app/Components/TestimonialsSection";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import FilterSidebar, { TRAINING_FILTERS } from "@/app/Components/FilterSidebar";
import DocumentCard from "@/app/Components/DocumentCard";
const SEARCH_ICON = "/images/search-black.svg";


export default function Home() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const catalogueCourses = [
    {
      title: "Legal Tech Fundamentals",
      provider: "LexAcademy",
      banner: "/images/course-img1.png",
      duration: "8 Hours",
      mode: "online",
      description: "Streamline your legal operations with our powerful solution",
      rating: 4.8,
      reviews: 45,
    },
    {
      title: "Document Automation Mastery",
      provider: "LexAcademy",
      banner: "/images/course-img2.png",
      duration: "6 Hours",
      mode: "online",
      description: "Learn automation tools for legal workflows",
      rating: 4.7,
      reviews: 38,
    },
    {
      title: "Legal AI & Machine Learning",
      provider: "Swiss Legal Institute",
      banner: "/images/course-img3.png",
      duration: "10 Hours",
      mode: "online",
      description: "Explore artificial intelligence applications in the legal sector",
      rating: 4.9,
      reviews: 52,
    },
    {
      title: "Data Protection & GDPR",
      provider: "TechLaw Training",
      banner: "/images/course-img4.png",
      duration: "5 Hours",
      mode: "online",
      description: "Master data protection laws and compliance requirements",
      rating: 4.6,
      reviews: 31,
    },
    {
      title: "E-Discovery Essentials",
      provider: "LexAcademy",
      banner: "/images/course-img1.png",
      duration: "7 Hours",
      mode: "hybrid",
      description: "Learn the foundations of electronic discovery in legal cases",
      rating: 4.5,
      reviews: 27,
    },
    {
      title: "Contract Management Systems",
      provider: "Swiss Legal Institute",
      banner: "/images/course-img2.png",
      duration: "6 Hours",
      mode: "in-person",
      description: "Manage contracts efficiently using modern tech platforms",
      rating: 4.7,
      reviews: 44,
    },
    {
      title: "Legal Research & Analytics",
      provider: "TechLaw Training",
      banner: "/images/course-img3.png",
      duration: "9 Hours",
      mode: "online",
      description: "Advanced research techniques and analytics for legal professionals",
      rating: 4.8,
      reviews: 60,
    },
    {
      title: "Cybersecurity for Lawyers",
      provider: "LexAcademy",
      banner: "/images/course-img4.png",
      duration: "4 Hours",
      mode: "online",
      description: "Protect sensitive client data with cybersecurity best practices",
      rating: 4.4,
      reviews: 22,
    },
    {
      title: "Legal Project Management",
      provider: "Swiss Legal Institute",
      banner: "/images/course-img1.png",
      duration: "8 Hours",
      mode: "hybrid",
      description: "Apply project management principles to legal practice",
      rating: 4.6,
      reviews: 35,
    },
  ];

 const cards = [
    {
      title: "Bennon",
      category: "Document Management",
      description: "Streamline your legal operations with our powerful solution",
      logo: "/images/logo-1.png",
      banner: "/images/banner-1.png",
      features: [
        { label: "Data Protection", status: "Fully given" },
        { label: "Lawyer Secret", status: "Fully given" },
      ],
      rating: 4.8,
      reviews: 45,
    },
    {
      title: "LexPro",
      category: "Legal Automation",
      description: "Automate workflows and boost legal productivity",
      logo: "/images/logo-2.png",
      banner: "/images/banner-2.png",
      features: [
        { label: "Automation", status: "Enabled" },
        { label: "Cloud Sync", status: "Available" },
      ],
      rating: 4.6,
      reviews: 38,
    },
    {
      title: "DocuSafe",
      category: "Secure Storage",
      description: "Keep your documents safe and encrypted",
      logo: "/images/logo-3.png",
      banner: "/images/banner-3.png",
      features: [
        { label: "Encryption", status: "AES-256" },
        { label: "Backup", status: "Daily" },
      ],
      rating: 4.7,
      reviews: 52,
    },
    {
      title: "LawSync",
      category: "Collaboration",
      description: "Collaborate with your legal team in real-time",
      logo: "/images/logo-4.png",
      banner: "/images/banner-4.png",
      features: [
        { label: "Team Access", status: "Unlimited" },
        { label: "Chat", status: "Integrated" },
      ],
      rating: 4.5,
      reviews: 29,
    },
  ];

  return (
    <div className="">
      <Header />

      <section className="bg-[url(/images/product-bg.png)] bg-no-repeat md:bg-cover bg-auto md:py-20 py-10">
        <div className="max-w-[1298px] px-5 mx-auto">
          <div className="text-start">
            <h1 className="md:text-[32px] text-[26px] font-semibold md:leading-[58px] text-gradient">
              Training Catalogue
            </h1>
            <p className="md:text-base text-sm mt-2 mb-4 font-normal leading-6 text-green-1000">
              Advance your legal tech skills with expert-led courses
            </p>
          </div>
        </div>
      </section>

      {/* ── Catalogue section with sidebar + Compare buttons ── */}
      <section className="md:pb-10 md:pt-2.5 py-12">
        <div className="max-w-[1298px] px-5 mx-auto">
          <ul className="flex items-center gap-2.5 lg:mb-12 mb-5">
            <li>
              <Link href="/" className="flex items-center gap-1.5 text-sm font-medium leading-5 text-black-1100">
                <img src="/images/home.svg" alt="" />
                Home
                <img src="/images/angle-right.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center gap-1.5 text-sm font-medium leading-5 text-black-1100">
                Training
              </Link>
            </li>
          </ul>

          <div className="flex lg:flex-nowrap flex-wrap gap-5">

            {/* Sidebar — desktop */}
            <div className="lg:w-3/12 w-full">
              <aside className="hidden lg:block shrink-0">
                <FilterSidebar groups={TRAINING_FILTERS} />
              </aside>

              {/* Mobile sidebar drawer */}
              {sidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                  <div
                    className="absolute inset-0 bg-black/40"
                    onClick={() => setSidebarOpen(false)}
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-[298px] bg-white overflow-y-auto p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-Inter font-semibold text-lg text-black-1000">Filters</h3>
                      <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        className="text-black-1100 hover:text-black-1000 p-1"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    <FilterSidebar groups={TRAINING_FILTERS} />
                  </div>
                </div>
              )}
            </div>

            {/* Main content */}
            <div className="lg:w-9/12 w-full">
              <div className="flex mb-10 items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-1100 bg-white text-sm font-medium text-black-1100 shrink-0 hover:bg-gray-1300 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Filters
                </button>
                <div className="flex items-stretch rounded-xl shadow-3xl h-10 flex-1">
                  <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-gray-1000 border border-gray-1100 rounded-l-xl">
                    <div className="relative size-4 shrink-0">
                      <Image src={SEARCH_ICON} alt="" fill className="object-contain opacity-50" />
                    </div>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search courses..."
                      className="w-full bg-transparent outline-none text-sm text-gray-1200 placeholder:text-gray-1200"
                    />
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2.5 rounded-r-xl text-white text-sm font-medium transition-colors hover:opacity-90"
                    style={{ backgroundColor: "#B1A583" }}
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* All courses — View course + Compare */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-y-10">
                {catalogueCourses.map((course, index) => (
                  <CourseCard key={index} actionVariant="compare" {...course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-1100 md:py-[74px] py-12">
        <div className="max-w-[1298px] px-5 mx-auto">
          <div className="text-center">
            <h3 className="md:text-[32px] text-[26px] leading-6 font-semibold mb-2 text-black-1000">
              Popular Categories
            </h3>
            <p className="text-base font-normal leading-6 text-golden-1000">
              Explore legal tech solutions by category
            </p>
          </div>
          <CategoriesGrid />
        </div>
      </section>

      {/* ── Featured section — View course only, no Compare ── */}
      <section className="md:py-[74px] py-12">
        <div className="max-w-[1298px] px-5 mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="md:text-[32px] text-[26px] flex-1 leading-6 font-semibold text-black-1000">
              Featured Training Courses
            </h3>
            <Button text="View all" />
          </div>
          <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-10">
              {cards.map((card, index) => (
              <DocumentCard actionVariant="visit" {...card} key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      <TrustedBySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
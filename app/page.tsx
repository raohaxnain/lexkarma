"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "./Components/Header";
import Image from "next/image";
import Button from "./ui/Button";
import DocumentCard from "./Components/DocumentCard";
import CategoriesGrid from "./Components/CategoriesGrid";
import CourseCard from "./Components/CourseCard";
import TrustedBySection from "./Components/Trustedbysection";
import HowItWorksSection from "./Components/HowItWorksSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import Footer from "./Components/Footer";
const SEARCH_ICON_URL = "/images/search.svg";

const CATEGORIES = [
  "All categories",
  "Legal Services",
  "Training & Courses",
  "Templates",
  "Consulting",
  "Research",
]
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


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
    {
      title: "CaseFlow",
      category: "Case Management",
      description: "Manage all your legal cases efficiently",
      logo: "/images/logo-1.png",
      banner: "/images/banner-1.png",
      features: [
        { label: "Tracking", status: "Real-time" },
        { label: "Reports", status: "Detailed" },
      ],
      rating: 4.9,
      reviews: 61,
    },
    {
      title: "SecureDocs",
      category: "Data Security",
      description: "Advanced security for sensitive legal data",
      logo: "/images/logo-2.png",
      banner: "/images/banner-2.png",
      features: [
        { label: "Firewall", status: "Active" },
        { label: "Monitoring", status: "24/7" },
      ],
      rating: 4.4,
      reviews: 22,
    },
    {
      title: "LegalTrack",
      category: "Analytics",
      description: "Track performance and legal insights",
      logo: "/images/logo-3.png",
      banner: "/images/banner-3.png",
      features: [
        { label: "Analytics", status: "Advanced" },
        { label: "Dashboard", status: "Customizable" },
      ],
      rating: 4.6,
      reviews: 34,
    },
    {
      title: "FileMaster",
      category: "File Management",
      description: "Organize and manage files effortlessly",
      logo: "/images/logo-4.png",
      banner: "/images/banner-4.png",
      features: [
        { label: "Sorting", status: "Smart" },
        { label: "Search", status: "Fast" },
      ],
      rating: 4.7,
      reviews: 41,
    },
  ];


  const courses = [
    {
      title: "Legal Tech Course Title 1",
      provider: "LexAcademy",
      banner: "/images/course-img1.png",
      duration: "8 Hours",
      mode: "online",
      description: "Streamline your legal operations with our powerful solution",
      rating: 4.8,
      reviews: 45,
    },
    {
      title: "Legal Tech Course Title 2",
      provider: "LexAcademy",
      banner: "/images/course-img2.png",
      duration: "6 Hours",
      mode: "online",
      description: "Learn automation tools for legal workflows",
      rating: 4.7,
      reviews: 38,
    },
    {
      title: "Legal Tech Course Title 2",
      provider: "LexAcademy",
      banner: "/images/course-img3.png",
      duration: "6 Hours",
      mode: "online",
      description: "Learn automation tools for legal workflows",
      rating: 4.7,
      reviews: 38,
    },
    {
      title: "Legal Tech Course Title 2",
      provider: "LexAcademy",
      banner: "/images/course-img4.png",
      duration: "6 Hours",
      mode: "online",
      description: "Learn automation tools for legal workflows",
      rating: 4.7,
      reviews: 38,
    },
    {
      title: "Legal Tech Course Title 1",
      provider: "LexAcademy",
      banner: "/images/course-img1.png",
      duration: "8 Hours",
      mode: "online",
      description: "Streamline your legal operations with our powerful solution",
      rating: 4.8,
      reviews: 45,
    },
    {
      title: "Legal Tech Course Title 2",
      provider: "LexAcademy",
      banner: "/images/course-img2.png",
      duration: "6 Hours",
      mode: "online",
      description: "Learn automation tools for legal workflows",
      rating: 4.7,
      reviews: 38,
    },
    {
      title: "Legal Tech Course Title 2",
      provider: "LexAcademy",
      banner: "/images/course-img3.png",
      duration: "6 Hours",
      mode: "online",
      description: "Learn automation tools for legal workflows",
      rating: 4.7,
      reviews: 38,
    },
    {
      title: "Legal Tech Course Title 2",
      provider: "LexAcademy",
      banner: "/images/course-img4.png",
      duration: "6 Hours",
      mode: "online",
      description: "Learn automation tools for legal workflows",
      rating: 4.7,
      reviews: 38,
    },
  ];
  return (
    <div className="">
      <Header></Header>
      <section className="bg-[url(/images/hero-bg.png)] bg-no-repeat md:bg-cover bg-auto md:py-[154px] py-20">
        <div className="max-w-[596px] px-4 mx-auto">
          <div className="text-center">
            <h6 className="text-base font-medium leading-6 text-white mb-4">Switzerland's Leading Legal Tech Platform</h6>
            <h1 className="md:text-5xl text-3xl font-normal leading-[58px] text-gradient">Swiss Legal Tech Hub</h1>
            <p className="md:text-base text-sm mt-2 mb-4 font-normal leading-6 text-green-1000"> <Link href="/" className="text-green-1000">Discover legal tech tools</Link> | <Link href="/" className="text-green-1000"> Compare solutions</Link> | <Link href="/" className="text-green-1000">Find training</Link> | <Link href="/" className="text-green-1000">Hire experts</Link></p>
            <div className="flex items-stretch rounded-xl shadow-3xl h-10">
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="h-full flex items-center md:gap-1.5 gap-0.5 md:px-3 px-1 bg-gray-1000 border border-r-0 border-gray-1100 rounded-l-xl md:text-sm text-xs text-gray-1200  hover:bg-gray-1100 transition-colors"
                >
                  <img src="/images/grid.svg" alt="" />
                  <span>{selectedCategory}</span>
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 z-50 bg-white border border-gray-1100 rounded-xl shadow-lg min-w-[160px] py-1 overflow-hidden">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => { setSelectedCategory(cat); setDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-gray-1000 ${cat === selectedCategory ? "text-golden-1000 font-medium" : "text-gray-1200 font-normal"}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-gray-1000 border border-gray-1100  text-sm text-gray-1200 placeholder:text-gray-1200">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, trainings"
                  className="w-full bg-transparent outline-none text-sm text-gray-1200 placeholder:text-gray-1200"
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className="flex items-center gap-[6px] px-4 py-3 bg-golden-1000 hover:bg-[#a39470] transition-colors rounded-r-xl text-white text-sm font-medium "
              >
                <div className="relative w-4 h-4 shrink-0">
                  <Image
                    src={SEARCH_ICON_URL}
                    alt="Search"
                    fill
                    className="object-contain"
                  />
                </div>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-[74px] py-12">
        <div className="max-w-[1298px] px-5 mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="md:text-[32px] text-[26px] flex-1 leading-6 font-semibold text-black-1000">Featured Legal Tech Tools</h3>
            <Button text="View all"></Button>
          </div>
          <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-y-10">
            {cards.map((card, index) => (
              <DocumentCard actionVariant="visit" {...card} key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-yellow-1100 md:py-[74px] py-12">
        <div className="max-w-[1298px] px-5 mx-auto">
          <div className="text-center">
            <h3 className="md:text-[32px] text-[26px] leading-6 font-semibold mb-2 text-black-1000">Popular Categories</h3>
            <p className="text-base font-normal leading-6 text-golden-1000">Explore legal tech solutions by category</p>
          </div>
          <CategoriesGrid></CategoriesGrid>
        </div>
      </section>
      <section className="md:py-[74px] py-12">
        <div className="max-w-[1298px] px-5 mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="md:text-[32px] text-[26px] flex-1 leading-6 font-semibold text-black-1000">Featured Training Courses</h3>
            <Button text="View all"></Button>
          </div>
          <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-10">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>
      <TrustedBySection></TrustedBySection>
      <HowItWorksSection></HowItWorksSection>
      <TestimonialsSection></TestimonialsSection>
      <Footer></Footer>
    </div>
  );
}

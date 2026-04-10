"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import TestimonialsSection from "@/app/Components/TestimonialsSection";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import ProductDetailSection from "@/app/Components/Productdetailsection";
import CourseHeroBanner from "@/app/Components/CourseHeroBanner";
import CourseDetailSection from "@/app/Components/Coursedetailsection";

export default function Home() {
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

     return (
          <div className="">
               <Header />
               <CourseHeroBanner
                    title="Legal Tech Course Title 1"
                    provider="LexAcademy"
                    duration="8 Hours"
                    mode="online"
                    rating={4.8}
                    reviews={45}
                    price="850"
                      variant="course"
               />
               <div className="max-w-[1298px] w-full px-5 py-2 mx-auto">
                    <ul className="flex items-center gap-2.5">
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
                                   <img src="/images/angle-right.svg" alt="" />
                              </Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-1.5 text-sm font-medium leading-5 text-black-1100">
                                  Legal Tech Course Title 1
                              </Link>
                         </li>
                    </ul>
               </div>
               <div className="bg-gray-1400 py-10">
                   <CourseDetailSection></CourseDetailSection>
               </div>
               <TestimonialsSection />
               <Footer />
          </div>
     );
}

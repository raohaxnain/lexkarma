"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LanguageDropdown from "./Languagedropdown";
import Button from "../ui/Button";

const LOGO_URL = "/images/logo.svg";
const SEARCH_ICON_URL = "/images/search.svg";

type NavLink = {
     label: string;
     href: string;
};

const NAV_LINKS: NavLink[] = [
     { label: "Home", href: "/" },
     { label: "Products", href: "/ProductCatalogue" },
     { label: "Training", href: "/Training" },
     { label: "Workshop", href: "/Workshops" },
];

export default function Header() {
     const pathname = usePathname(); // Current route track karne ke liye
     const [searchQuery, setSearchQuery] = useState("");
     const [menuOpen, setMenuOpen] = useState(false);
     const [searchOpen, setSearchOpen] = useState(false);

     return (
          <header className="w-full bg-white">
               <div className="h-[75px] px-4 sm:px-6 xl:px-5 max-w-[1298px] mx-auto flex items-center justify-between gap-3 xl:gap-6">

                    {/* Logo */}
                    <Link href="/" className="relative flex items-center shrink-0">
                         <div className="relative w-[130px] sm:w-[163px] h-[34px]">
                              <Image src={LOGO_URL} alt="LexKarma" fill className="object-contain" />
                         </div>
                    </Link>

                    {/* Nav Links — hidden below lg */}
                    <nav className="hidden lg:flex items-center h-[75px] gap-1 xl:gap-4">
                         {NAV_LINKS.map((link) => {
                              const isActive = pathname === link.href;
                              return (
                                   <Link
                                        key={link.label}
                                        href={link.href}
                                        className={[
                                             "flex items-center h-full px-2 xl:px-1 xl:text-base text-sm leading-6 text-black-1000/80 transition-colors whitespace-nowrap",
                                             isActive
                                                  ? "font-semibold border-b-4 border-golden-1000"
                                                  : "font-medium border-b-4 border-transparent",
                                        ].join(" ")}
                                   >
                                        {link.label}
                                   </Link>
                              );
                         })}
                    </nav>

                    {/* Search bar — hidden below xl */}
                    <div className="flex-1 max-w-[371px] hidden xl:block">
                         <div className="flex items-stretch rounded-xl shadow-3xl h-10">
                              <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-gray-1000 border border-gray-1100 rounded-l-xl">
                                   <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products, trainings"
                                        className="w-full bg-transparent outline-none text-sm text-gray-1200 placeholder:text-gray-1200"
                                   />
                              </div>
                              <button
                                   type="button"
                                   className="flex items-center gap-[6px] px-4 py-3 bg-golden-1000 hover:bg-[#a39470] transition-colors rounded-r-xl text-white text-sm font-medium"
                              >
                                   <div className="relative w-4 h-4 shrink-0">
                                        <Image src={SEARCH_ICON_URL} alt="Search" fill className="object-contain" />
                                   </div>
                                   Search
                              </button>
                         </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2 xl:gap-3 shrink-0">

                         {/* Search icon — visible below xl */}
                         <button
                              type="button"
                              aria-label="Toggle search"
                              onClick={() => setSearchOpen((v) => !v)}
                              className="xl:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-1300 transition-colors"
                         >
                              <div className="relative w-5 h-5">
                                   <Image src={SEARCH_ICON_URL} alt="" fill className="object-contain" />
                              </div>
                         </button>

                         <LanguageDropdown />
                         <Button variant="gradient" text="Sign up for free"></Button>

                         {/* Hamburger — visible below lg */}
                         <button
                              type="button"
                              aria-label="Toggle menu"
                              onClick={() => setMenuOpen((v) => !v)}
                              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg hover:bg-gray-1300 transition-colors shrink-0"
                         >
                              <span
                                   className={[
                                        "block w-5 h-0.5 bg-black-1000 transition-transform duration-200",
                                        menuOpen ? "translate-y-[6.5px] rotate-45" : "",
                                   ].join(" ")}
                              />
                              <span
                                   className={[
                                        "block w-5 h-0.5 bg-black-1000 transition-opacity duration-200",
                                        menuOpen ? "opacity-0" : "",
                                   ].join(" ")}
                              />
                              <span
                                   className={[
                                        "block w-5 h-0.5 bg-black-1000 transition-transform duration-200",
                                        menuOpen ? "-translate-y-[6.5px] -rotate-45" : "",
                                   ].join(" ")}
                              />
                         </button>
                    </div>
               </div>

               {/* Mobile search bar */}
               {searchOpen && (
                    <div className="xl:hidden px-4 sm:px-6 pb-3 border-t border-gray-1100">
                         <div className="flex items-stretch rounded-xl shadow-3xl h-10 mt-3">
                              <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-gray-1000 border border-gray-1100 rounded-l-xl">
                                   <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products, trainings"
                                        className="w-full bg-transparent outline-none text-sm text-gray-1200 placeholder:text-gray-1200"
                                   />
                              </div>
                              <button
                                   type="button"
                                   className="flex items-center gap-[6px] px-4 py-3 bg-golden-1000 hover:bg-[#a39470] transition-colors rounded-r-xl text-white text-sm font-medium"
                              >
                                   <div className="relative w-4 h-4 shrink-0">
                                        <Image src={SEARCH_ICON_URL} alt="Search" fill className="object-contain" />
                                   </div>
                                   Search
                              </button>
                         </div>
                    </div>
               )}

               {/* Mobile nav drawer */}
               {menuOpen && (
                    <nav className="lg:hidden border-t border-gray-1100 bg-white px-4 sm:px-6 py-4 flex flex-col gap-1">
                         {NAV_LINKS.map((link) => {
                              const isActive = pathname === link.href;
                              return (
                                   <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={[
                                             "flex items-center px-3 py-2.5 rounded-lg text-sm leading-6 text-black-1000/80 transition-colors",
                                             isActive
                                                  ? "font-semibold bg-gray-1300 text-black-1000"
                                                  : "font-medium hover:bg-gray-1300",
                                        ].join(" ")}
                                   >
                                        {link.label}
                                   </Link>
                              );
                         })}
                         <div className="sm:hidden mt-2 pt-2 border-t border-gray-1100">
                              <Link
                                   href="/signup"
                                   className="flex items-center justify-center px-4 py-2.5 rounded-xl text-white text-sm font-medium leading-5 transition-opacity hover:opacity-90"
                                   style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
                              >
                                   Sign up for free
                              </Link>
                         </div>
                    </nav>
               )}
          </header>
     );
}
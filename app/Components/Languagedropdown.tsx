"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────
// Language config — swap image paths as needed
// Place flag images in /public/flags/
// ─────────────────────────────────────────────
type Language = {
     code: string;
     label: string;
     shortLabel: string;
     flag: string; // relative path from /public
};

const LANGUAGES: Language[] = [
     {
          code: "en",
          label: "English",
          shortLabel: "En",
          flag: "/images/en.png",
     },
     {
          code: "fr",
          label: "French",
          shortLabel: "Fr",
          flag: "/images/fr.png",
     },
     {
          code: "es",
          label: "Espaniol",
          shortLabel: "Es",
          flag: "/images/es.png",
     },
     {
          code: "de",
          label: "Deutch",
          shortLabel: "De",
          flag: "/images/de.png",
     },
     {
          code: "it",
          label: "Italiano",
          shortLabel: "It",
          flag: "/images/it.png",
     },
     {
          code: "zh",
          label: "中文 (繁體)",
          shortLabel: "中文",
          flag: "/images/zh.png",
     },
];

// ─────────────────────────────────────────────
// Chevron icon (inline SVG — no image needed)
// ─────────────────────────────────────────────
function ChevronDown({ className }: { className?: string }) {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path fillRule="evenodd" clipRule="evenodd" d="M7.5286 11.1381C7.78895 11.3984 8.21106 11.3984 8.47141 11.1381L13.1381 6.47141C13.3984 6.21107 13.3984 5.78895 13.1381 5.52861C12.8777 5.26826 12.4556 5.26826 12.1953 5.52861L8.00001 9.72387L3.80474 5.52861C3.54439 5.26826 3.12228 5.26826 2.86193 5.52861C2.60158 5.78895 2.60158 6.21107 2.86193 6.47141L7.5286 11.1381Z" fill="#222121" />
          </svg>
     );
}

// ─────────────────────────────────────────────
// Dropdown Menu (standalone, reusable)
// ─────────────────────────────────────────────
interface LanguageDropdownProps {
     /** Initial language code (defaults to "en") */
     defaultLanguage?: string;
     /** Called when user selects a language */
     onChange?: (language: Language) => void;
}

export default function LanguageDropdown({
     defaultLanguage = "en",
     onChange,
}: LanguageDropdownProps) {
     const [isOpen, setIsOpen] = useState(false);
     const [selected, setSelected] = useState<Language>(
          () => LANGUAGES.find((l) => l.code === defaultLanguage) ?? LANGUAGES[0]
     );

     const containerRef = useRef<HTMLDivElement>(null);

     // Close on outside click
     useEffect(() => {
          function handleClickOutside(e: MouseEvent) {
               if (
                    containerRef.current &&
                    !containerRef.current.contains(e.target as Node)
               ) {
                    setIsOpen(false);
               }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
     }, []);

     // Close on Escape
     useEffect(() => {
          function handleKeyDown(e: KeyboardEvent) {
               if (e.key === "Escape") setIsOpen(false);
          }
          document.addEventListener("keydown", handleKeyDown);
          return () => document.removeEventListener("keydown", handleKeyDown);
     }, []);

     function handleSelect(lang: Language) {
          setSelected(lang);
          setIsOpen(false);
          onChange?.(lang);
     }

     return (
          <div ref={containerRef} className="relative inline-block">
               {/* ── Trigger button ── */}
               <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    className="flex items-center cursor-pointer gap-[6px] p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b1a583]"
               >
                    <div className="relative w-4 h-4 overflow-hidden rounded-full shrink-0">
                         <Image
                              src={selected.flag}
                              alt={selected.label}
                              fill
                              className="object-cover"
                         />
                    </div>
                    <span className="text-sm font-medium text-black-1100 leading-[14px] ">
                         {selected.shortLabel}
                    </span>
                    <ChevronDown
                         className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                              }`}
                    />
               </button>

               {/* ── Dropdown panel ── */}
               {isOpen && (
                    <div
                         role="listbox"
                         aria-label="Select language"
                         className={[
                              "absolute right-0 top-full mt-2 z-50",
                              "bg-white border border-gray-1100 rounded-xl",
                              "shadow-3xl",
                              "p-2 flex flex-col gap-[6px] min-w-[208px]",
                              "animate-in fade-in slide-in-from-top-1 duration-150",
                         ].join(" ")}
                    >
                         {LANGUAGES.map((lang) => {
                              const isActive = lang.code === selected.code;
                              return (
                                   <button
                                        key={lang.code}
                                        role="option"
                                        aria-selected={isActive}
                                        type="button"
                                        onClick={() => handleSelect(lang)}
                                        className={[
                                             "flex items-center gap-1.5 px-2 py-2 rounded-lg w-full text-left transition-colors",
                                             isActive
                                                  ? "bg-gray-1300 text-black-1000 font-semibold"
                                                  : "text-black-1100 font-medium hover:bg-[#f9fafb]",
                                        ].join(" ")}
                                   >
                                        <div className="relative w-4 h-4 overflow-hidden rounded-full shrink-0">
                                             <Image
                                                  src={lang.flag}
                                                  alt={lang.label}
                                                  fill
                                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                  className="object-cover"
                                             />
                                        </div>
                                        <span className="text-[14px] leading-[14px] ">
                                             {lang.label}
                                        </span>
                                   </button>
                              );
                         })}
                    </div>
               )}
          </div>
     );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LOGO_MARK = "/images/logo.svg";
const AVATAR = "/images/Avatar-big.png";
const ICON_DASHBOARD = "/images/grid-icon2.svg";
const ICON_SAVED = "/images/bookmark.svg";
const ICON_REVIEWS = "/images/annotation2.svg";
const ICON_CERTIFICATES = "/images/certificate.svg";
const ICON_COURSES = "/images/graduation.svg";
const ICON_WORKSHOPS = "/images/calendar2.svg";
const ICON_PROFILE = "/images/user.svg";
const ICON_SETTINGS = "/images/settings.svg";
const ICON_CLOSE = "/images/close.svg";

const NAV_ITEMS = [
     { label: "Dashboard", icon: ICON_DASHBOARD, href: "/Dashboard" },
     { label: "Saved Tools", icon: ICON_SAVED, href: "/SavedTools" },
     { label: "My Reviews", icon: ICON_REVIEWS, href: "/Review" },
     { label: "Certificates", icon: ICON_CERTIFICATES, href: "/Certificates" },
     { label: "Courses", icon: ICON_COURSES, href: "/Courses" },
     { label: "Workshops", icon: ICON_WORKSHOPS, href: "/Workshops" },
     { label: "Profile", icon: ICON_PROFILE, href: "/Profile" },
     { label: "Account Settings", icon: ICON_SETTINGS, href: "/AccountSetting" },
];

interface DashboardSidebarProps {
     userName?: string;
     userEmail?: string;
     userAvatar?: string;
}

function SidebarContent({
     userName,
     userEmail,
     userAvatar,
     pathname,
     onClose,
}: {
     userName: string;
     userEmail: string;
     userAvatar: string;
     pathname: string;
     onClose?: () => void;
}) {
     const isActive = (href: string) => {
          if (href === "/dashboard") return pathname === "/dashboard";
          return pathname === href || pathname.startsWith(href + "/");
     };

     return (
          <div className="flex flex-col h-full">

               {/* Logo */}
               <div className="flex items-center md:justify-center justify-between h-[79px] px-6 border-b border-gray-1100 shrink-0">
                    <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                         <img src={LOGO_MARK} alt="" className="h-6 w-auto object-contain" />
                    </Link>
                    {onClose && (
                         <button type="button" onClick={onClose} className="p-1 text-black-1100 hover:text-black-1000 lg:hidden">
                              <img src={ICON_CLOSE} alt="Close" className="size-5 object-contain" />
                         </button>
                    )}
               </div>

               {/* User info */}
               <div className="flex flex-col items-center gap-3 px-4 pt-4 pb-4 border-b border-gray-1100 shrink-0">
                    <img src={userAvatar} alt={userName} className="size-20 rounded-full object-cover" />
                    <div className="text-center">
                         <p className="font-Inter font-medium text-base leading-6 text-black-1000">{userName}</p>
                         <p className="font-Inter font-normal text-xs leading-[18px] text-gray-1600">{userEmail}</p>
                    </div>
               </div>

               {/* Nav */}
               <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                    {NAV_ITEMS.map((item) => {
                         const active = isActive(item.href);
                         return (
                              <Link
                                   key={item.href}
                                   href={item.href}
                                   onClick={onClose}
                                   className={[
                                        "flex items-center gap-3 h-11 px-4 rounded-xl transition-colors",
                                        active
                                             ? "bg-golden-1000 text-white"
                                             : "text-black-1000 hover:bg-gray-1000",
                                   ].join(" ")}
                              >
                                   {/* Icon — on active: show golden variant; on inactive: show normal */}
                                   <span className="relative size-5 shrink-0">
                                        {/* Normal icon */}
                                        <img
                                             src={item.icon}
                                             alt=""
                                             className={["absolute inset-0 size-full object-contain transition-opacity", active ? "opacity-0" : "opacity-100"].join(" ")}
                                        />
                                        {/* Golden (inverted to white on golden bg) icon */}
                                        <img
                                             src={item.icon}
                                             alt=""
                                             className={["absolute inset-0 size-full object-contain brightness-0 invert transition-opacity", active ? "opacity-100" : "opacity-0"].join(" ")}
                                        />
                                   </span>
                                   <span className="font-Inter font-normal text-base leading-6 whitespace-nowrap">
                                        {item.label}
                                   </span>
                              </Link>
                         );
                    })}
               </nav>
          </div>
     );
}

export default function DashboardSidebar({
     userName = "John Doe",
     userEmail = "johndoe@gmail.com",
     userAvatar = AVATAR,
}: DashboardSidebarProps) {
     const pathname = usePathname();
     const [open, setOpen] = useState(false);

     const sharedProps = { userName, userEmail, userAvatar, pathname };

     return (
          <>
               {/* ── Mobile hamburger button ── */}
               <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="fixed top-4 left-4 z-40 flex items-center flex-col gap-1 justify-center size-10 bg-white rounded-xl shadow-3xl border border-gray-1100 lg:hidden"
                    aria-label="Open menu"
               >
                    <span className="block w-5 h-0.5 bg-black-1000 transition-transform duration-200 "></span>
                    <span className="block w-5 h-0.5 bg-black-1000 transition-transform duration-200 "></span>
                    <span className="block w-5 h-0.5 bg-black-1000 transition-transform duration-200 "></span>
               </button>

               {/* ── Mobile drawer overlay ── */}
               {open && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                         <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
                         <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl overflow-hidden">
                              <SidebarContent {...sharedProps} onClose={() => setOpen(false)} />
                         </div>
                    </div>
               )}

               {/* ── Desktop sidebar ── */}
               <aside className="hidden lg:flex w-64 shrink-0 bg-white border-r border-gray-1100 flex-col min-h-screen sticky top-0">
                    <SidebarContent {...sharedProps} />
               </aside>
          </>
     );
}

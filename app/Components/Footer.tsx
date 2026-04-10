"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

const imgLexKarma =
     "/images/logo.svg";

interface FooterLink {
     label: string;
     href: string;
}

interface FooterColumn {
     heading: string;
     links: FooterLink[];
}

const columns: FooterColumn[] = [
     {
          heading: "Company",
          links: [
               { label: "About", href: "#" },
               { label: "Contact", href: "#" },
          ],
     },
     {
          heading: "Legal",
          links: [
               { label: "Privacy Policy", href: "#" },
               { label: "Terms", href: "#" },
          ],
     },
];

function FooterColumn({ heading, links }: FooterColumn) {
     return (
          <div className="flex flex-col gap-4 shrink-0">
               <p className="font-bold text-base leading-6 text-black-1000">
                    {heading}
               </p>
               <div className="flex flex-col gap-2">
                    {links.map(({ label, href }) => (
                         <Link
                              key={label}
                              href={href}
                              className="font-normal text-base leading-6 text-gray-1600 hover:text-[#B1A583] transition-colors "
                         >
                              {label}
                         </Link>
                    ))}
               </div>
          </div>
     );
}

export default function Footer() {
     const [email, setEmail] = useState("");

     return (
          <footer className="w-full bg-white border-t border-gray-1100">
               <div className="max-w-[1298px] px-5 mx-auto">
                    <div className="flex flex-col gap-8 pt-12 ">
                         <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-0 gap-y-5">
                              <div className="flex flex-col gap-4  shrink-0">
                                   <div className="relative flex items-center h-[34px]">
                                        <img
                                             src={imgLexKarma}
                                             alt="LexKarma"
                                             className=""
                                        />
                                   </div>
                                   <p className="font-normal text-base leading-6 text-gray-1600 ">
                                        Swiss Legal Tech Hub
                                   </p>
                              </div>

                              {columns.map((col) => (
                                   <FooterColumn key={col.heading} {...col} />
                              ))}

                              <div className="flex flex-col gap-4  shrink-0">
                                   <p className="font-Inter font-bold text-base leading-6 text-black-1000">
                                        Newsletter
                                   </p>
                                   <div className="flex gap-2 h-[42px] md:flex-nowrap flex-wrap">
                                        <input
                                             type="email"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             placeholder="Email"
                                             className="flex-1 min-w-0 h-[42px] bg-gray-1000 border border-gray-1100 rounded-xl px-3 py-2 font-Inter font-normal text-base text-black-1000 placeholder:text-black-1000/50 outline-none focus:ring-2 focus:ring-[#B1A583] transition-all"
                                        />
                                        <Button text="Subscribe" className=""></Button>
                                   </div>
                              </div>
                         </div>
                         <div className="border-t border-gray-1100 flex items-center justify-center py-6">
                              <p className="font-normal text-base leading-6 text-gray-1600 text-center ">
                                   Version no.3.0.1 &nbsp;|&nbsp; © 2026 LexKarma. All rights reserved.
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     );
}
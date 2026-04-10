"use client";

import { useState } from "react";
import Button from "../ui/Button";

const imgAvatar = "/images/user-avatar.png";
const imgAvatarMask = "/images/user-avatar.png";

interface Testimonial {
     name: string;
     role: string;
     quote: string;
}

const testimonials: Testimonial[] = [
     {
          name: "Mila McSabbu",
          role: "Freelance Designer",
          quote:
               "We test and compare the best project management software for collaborating with a team, hitting deadlines.",
     },
     {
          name: "Mila McSabbu",
          role: "Freelance Designer",
          quote:
               "We test and compare the best project management software for collaborating with a team, hitting deadlines.",
     },
     {
          name: "Mila McSabbu",
          role: "Freelance Designer",
          quote:
               "We test and compare the best project management software for collaborating with a team, hitting deadlines.",
     },
];

function TestimonialCard({ name, role, quote }: Testimonial) {
     return (
          <div className="flex flex-1 flex-col bg-white rounded-[10px] pt-9 pb-10 xl:px-10 px-5 min-w-0 min-h-[250px]">
               <div className="flex items-center gap-0">
                    <div className="relative shrink-0 w-[70px] h-[70px] rounded-full overflow-hidden">
                         <img
                              src={imgAvatar}
                              alt={name}
                              className="absolute inset-0 size-[70px] w-full h-full object-cover"
                              style={{
                                   maskImage: `url('${imgAvatarMask}')`,
                                   WebkitMaskImage: `url('${imgAvatarMask}')`,
                                   maskRepeat: "no-repeat",
                                   WebkitMaskRepeat: "no-repeat",
                              }}
                         />
                    </div>
                    <div className="ml-6">
                         <p className="font-semibold text-xl leading-7 text-black-1000">
                              {name}
                         </p>
                         <p className="font-normal text-sm leading-6 text-black-1000 opacity-70 mt-0.5">
                              {role}
                         </p>
                    </div>
               </div>
               <p className="font-normal text-base leading-6 text-black-1100 mt-5">
                    {quote}
               </p>
          </div>
     );
}

export default function TestimonialsSection() {
     const [email, setEmail] = useState("");

     return (
          <section
               className="w-full flex flex-col items-center justify-center md:py-[95px] py-20 bg-black-1300"
          >
               <div className="flex flex-col md:gap-[95px] gap-10 items-start w-full max-w-[1298px] px-5 mx-auto">
                    <div className="flex flex-col gap-[10px] items-center w-full">
                         <div className="flex flex-col gap-2 items-center w-full text-center">
                              <h3 className="font-semibold md:text-[32px] text-[26px] md:leading-6 text-white ">
                                   Trusted by Legal Professionals
                              </h3>
                              <p className="font-normal text-base leading-6 text-golden-1000">
                                   Join thousands of legal professionals using LexKarma
                              </p>
                         </div>

                         <div className="lg:flex grid md:grid-cols-2 gap-[14px] items-start w-full mt-2.5">
                              {testimonials.map((t, i) => (
                                   <TestimonialCard key={i} {...t} />
                              ))}
                         </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center px-4 w-full">
                         <div className="flex flex-col gap-2 items-center w-full text-center">
                              <h3 className="font-semibold text-[32px] leading-6 text-white ">
                                   Stay Updated
                              </h3>
                              <p className="font-normal text-base leading-6 text-golden-1000" >
                                   Get the latest legal tech news and updates delivered to your inbox
                              </p>
                         </div>

                         <div className="flex gap-2 md:flex-nowrap flex-wrap items-center w-full max-w-[448px] h-[42px]">
                              <input
                                   type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Your email address"
                                   className="flex-1 bg-gray-1000 border border-gray-1100 rounded-xl px-4 py-2 font-normal text-base text-black-1000 placeholder:text-black-1000/50 outline-none focus:ring-2 focus:ring-[#B1A583] transition-all"
                              />
                              <Button className="border-0! md:w-auto! text-center! w-full! px-6 h-[42px]" text="Subscribe"></Button>
                         </div>
                    </div>
               </div>
          </section>
     );
}
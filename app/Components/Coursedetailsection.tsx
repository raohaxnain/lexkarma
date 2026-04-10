"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const AVATAR = "/images/avatar.png";
const INSTRUCTOR_AVATAR = "/images/instructor-avatar.png";
const COURSE_BANNER = "/images/course-banner.png";

const STAR_FILLED = "/images/star-filled.svg";
const STAR_HALF = "/images/star-half.svg";
const CHECK_CIRCLE = "/images/check-circle.svg";
const QUESTION_ICON = "/images/question-circle.svg";
const ANGLE_DOWN = "/images/angle-down.svg";
const CLOCK_ICON = "/images/clock.svg";
const EXPAND_ICON = "/images/angle-down.svg";
const CALENDAR_ICON = "/images/calendar.svg";
const PHONE_ICON = "/images/phone.svg";
const MERGE_ICON = "/images/merge-or-split.svg";

const ICON_OVERVIEW = "/images/compress.svg";
const ICON_INSTRUCTOR = "/images/table-column.svg";
const ICON_AGENDA = "/images/file-shield.svg";
const ICON_SCHEDULE = "/images/thumbs-up.svg";
const ICON_REVIEWS = "/images/annotation.svg";

const SOCIAL_1 = "/images/social-linkedin.svg";
const SOCIAL_2 = "/images/social-twitter.svg";
const SOCIAL_3 = "/images/social-facebook.svg";
const SOCIAL_4 = "/images/social-web.svg";

const INCLUDED_1 = "/images/video-icon.svg";
const INCLUDED_2 = "/images/book-icon.svg";
const INCLUDED_3 = "/images/certificate-icon.svg";
const INCLUDED_4 = "/images/infinity-icon.svg";

// ── Data ──────────────────────────────────────────────────────────────────────
type TabKey = "overview" | "instructor" | "agenda" | "schedule" | "reviews";

const TABS = [
     { key: "overview" as TabKey, label: "Overview", icon: ICON_OVERVIEW },
     { key: "instructor" as TabKey, label: "Instructor", icon: ICON_INSTRUCTOR },
     { key: "agenda" as TabKey, label: "Course Agenda", icon: ICON_AGENDA },
     { key: "schedule" as TabKey, label: "Schedule", icon: ICON_SCHEDULE },
     { key: "reviews" as TabKey, label: "User Reviews", icon: ICON_REVIEWS },
];

const LEARNING_POINTS = [
     { text: "Techniques to enhance legal research efficiency through AI tools", bold: true },
     { text: "Methods for leveraging AI to analyze and ensure compliance", bold: false },
     { text: "Utilizing AI to forecast case outcomes and inform legal strategies.", bold: false },
     { text: "Understanding the ethical implications and responsibilities", bold: false },
     { text: "Techniques to enhance legal research efficiency through AI tools", bold: false },
     { text: "Methods for leveraging AI to analyze and ensure compliance", bold: false },
     { text: "Utilizing AI to forecast case outcomes and inform legal strategies.", bold: false },
     { text: "Understanding the ethical implications and responsibilities", bold: false },
];

const MODULES = [
     { num: 1, title: "Module 1", subtitle: "Legal Tech Landscape Overview", duration: "2 hours" },
     { num: 2, title: "Module 2", subtitle: "Needs Assessment and Tool Selection", duration: "3 hours" },
     { num: 3, title: "Module 3", subtitle: "Implementation Planning", duration: "3 hours" },
     { num: 4, title: "Module 4", subtitle: "Change Management", duration: "2 hours" },
     { num: 5, title: "Module 5", subtitle: "Training and Adoption", duration: "3 hours" },
     { num: 6, title: "Module 6", subtitle: "Measuring Success", duration: "2 hours" },
     { num: 7, title: "Module 7", subtitle: "Q&A and Case Studies", duration: "1 hour" },
];

const REVIEWS = [
     {
          name: "User Name 2",
          date: "30 March, 2026",
          text: "Excellent course with practical insights. The instructor was very knowledgeable and provided real-world examples from Swiss law firms. Highly recommended!",
     },
     {
          name: "User Name 2",
          date: "30 March, 2026",
          text: "The document automation feature streamlined our workflow considerably, allowing us to generate contracts in minutes instead of hours.",
     },
     {
          name: "User Name 2",
          date: "30 March, 2026",
          text: "The document automation feature streamlined our workflow considerably, allowing us to generate contracts in minutes instead of hours.",
     },
];

const INCLUDED = [
     { icon: INCLUDED_1, text: "16 hours of expert instruction" },
     { icon: INCLUDED_2, text: "Comprehensive course materials" },
     { icon: INCLUDED_3, text: "Certificate of completion" },
     { icon: INCLUDED_4, text: "Lifetime access to resources" },
     { icon: INCLUDED_4, text: "Q&A with instructor" },
     { icon: INCLUDED_4, text: "Full refund within 7 days" },
];

const AVATARS = [
     "/images/avatar-1.png",
     "/images/avatar-2.png",
     "/images/avatar-3.png",
     "/images/avatar-4.png",
     "/images/avatar-5.png",
];

// ── Sub-components ────────────────────────────────────────────────────────────
function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
     return (
          <div className="bg-white border border-gray-1100 rounded-2xl md:p-6 p-4 flex flex-col gap-[18px] w-full">
               <div className="border-b border-gray-1100 pb-2">
                    <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">{title}</h3>
               </div>
               {children}
          </div>
     );
}

function LearningItem({ text, bold }: { text: string; bold: boolean }) {
     return (
          <div
               className="flex items-center gap-3 px-4 py-2 rounded-[13px] w-full"
               style={{ background: "linear-gradient(to right, #F4EEEB, white 43%, #F4EEEB)" }}
          >
               <img src={CHECK_CIRCLE} alt="" className="size-[18px] object-contain shrink-0" />
               <span className={`font-Inter ${bold ? "font-semibold" : "font-normal"} text-base leading-6 text-black-1000/80`}>
                    {text}
               </span>
          </div>
     );
}

function ReviewCard({ name, date, text }: { name: string; date: string; text: string }) {
     return (
          <div className="flex flex-col gap-[21px] bg-white border border-gray-1100 rounded-xl px-4 py-4 shadow-3xl w-full">
               <div className="flex items-start gap-2.5">
                    <img src={AVATAR} alt={name} className="size-10 rounded-full object-cover shrink-0" />
                    <div className="flex flex-1 items-start gap-2.5 min-w-0">
                         <div className="flex flex-1 flex-col gap-1">
                              <p className="font-Inter font-medium text-sm leading-4 text-black-1000 whitespace-nowrap">{name}</p>
                              <p className="font-Inter font-normal text-sm leading-5 text-black-1100">{date}</p>
                         </div>
                         <div className="flex items-center text-yellow-1000 gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                   <Star key={i} size={13} fill={i < 4 ? "currentColor" : "none"} strokeWidth={i < 4 ? 0 : 1.5} />
                              ))}
                         </div>
                    </div>
               </div>
               <p className="font-Inter font-medium text-sm leading-4 text-black-1100">{text}</p>
          </div>
     );
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function CourseDetailSection() {
     const [activeTab, setActiveTab] = useState<TabKey>("overview");
     const [reviewText, setReviewText] = useState("");

     return (
          <div className="w-full bg-gray-1400">
               <div className="flex gap-6 lg:flex-nowrap flex-wrap items-start max-w-[1298px] px-5 mx-auto">

                    {/* ── Left: main content ── */}
                    <div className="flex flex-col gap-6 lg:flex-1 min-w-0">

                         {/* Tab nav */}
                         <div className="w-full border-b border-gray-1100 flex items-center gap-6 overflow-x-auto">
                              {TABS.map((tab) => (
                                   <button
                                        key={tab.key}
                                        type="button"
                                        onClick={() => setActiveTab(tab.key)}
                                        className={[
                                             "flex items-center gap-1.5 pb-4 shrink-0 transition-colors",
                                             activeTab === tab.key
                                                  ? "border-b border-golden-1000 text-black-1000"
                                                  : "border-b border-transparent text-black-1100 hover:text-black-1000",
                                        ].join(" ")}
                                   >
                                        <img src={tab.icon} alt="" className="size-4 object-contain shrink-0" />
                                        <span className="font-Inter font-medium text-sm leading-5 whitespace-nowrap">{tab.label}</span>
                                   </button>
                              ))}
                         </div>

                         <SectionCard title="Overview">
                              <p className="font-Inter font-normal text-base leading-6 text-[#404653]">
                                   This is a comprehensive legal tech solution designed for Swiss law firms. It provides document
                                   management, case tracking, and client communication tools in one integrated platform.
                              </p>
                              <p className="font-Inter font-medium text-base leading-6 text-black-1000">
                                   At the end of this course, you'll get to know about
                              </p>
                              <div className="flex flex-col gap-0.5 w-full">
                                   {LEARNING_POINTS.map((item, i) => (
                                        <LearningItem key={i} {...item} />
                                   ))}
                              </div>
                         </SectionCard>
                         <SectionCard title="Instructor">
                              <div className="flex gap-4 items-start">
                                   <img src={INSTRUCTOR_AVATAR} alt="Dr. Maria Schmidt" className="size-16 rounded-full object-cover shrink-0" />
                                   <div className="flex flex-col gap-1 flex-1 min-w-0">
                                        <h3 className="font-Inter font-semibold text-xl leading-[30px] text-black-1000">
                                             Dr. Maria Schmidt
                                        </h3>
                                        <p className="font-Inter font-normal text-sm leading-[21px] text-gray-1600">
                                             Legal Tech Consultant | 15+ years experience
                                        </p>
                                        <p className="font-Inter font-normal text-sm leading-[21px] text-black-1000/80 mt-2">
                                             Dr. Schmidt has advised over 50 Swiss law firms on technology adoption and digital transformation.
                                             She holds a PhD in Legal Informatics and regularly speaks at international legal tech conferences.
                                        </p>
                                        <div className="flex items-center gap-3 mt-3">
                                             {[SOCIAL_1, SOCIAL_2, SOCIAL_3, SOCIAL_4].map((icon, i) => (
                                                  <button
                                                       key={i}
                                                       type="button"
                                                       className="flex items-center justify-center size-9 rounded-xl bg-gray-1000 border border-gray-1100 hover:bg-gray-1300 transition-colors"
                                                  >
                                                       <img src={icon} alt="" className="size-4 object-contain" />
                                                  </button>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         </SectionCard>

                         <SectionCard title="Course Agenda">
                              <div className="flex flex-col gap-3 w-full">
                                   {MODULES.map((mod) => (
                                        <div
                                             key={mod.num}
                                             className="flex items-center justify-between px-4 h-[80px] border border-gray-1100 rounded-xl"
                                        >
                                             <div className="flex items-center md:gap-4 gap-2">
                                                  <div className="flex items-center justify-center md:size-12 size-8 rounded-full bg-[rgba(177,165,131,0.15)] border border-gray-1100 shrink-0">
                                                       <span className="font-Inter font-bold text-base leading-6 text-golden-1000">{mod.num}</span>
                                                  </div>
                                                  <div className="flex flex-col">
                                                       <span className="font-Inter font-medium md:text-base text-sm md:leading-6 leading-4 text-black-1000">{mod.title}</span>
                                                       <span className="font-Inter font-normal md:text-base text-sm md:leading-6 leading-4 text-black-1000/80">{mod.subtitle}</span>
                                                  </div>
                                             </div>
                                             <div className="flex items-center md:gap-4">
                                                  <div className="flex items-center gap-2">
                                                       <img src={CLOCK_ICON} alt="" className="size-4 object-contain" />
                                                       <span className="font-Inter font-normal md:text-base text-sm leading-6 text-gray-1600">{mod.duration}</span>
                                                  </div>
                                                  <img src={EXPAND_ICON} alt="" className="size-5 object-contain" />
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </SectionCard>
                         <SectionCard title="Schedule & Dates">
                              <div className="flex gap-4 flex-col sm:flex-row">
                                   {["Session 1", "Session 2"].map((session) => (
                                        <div
                                             key={session}
                                             className="flex flex-col gap-2.5 flex-1 p-4 rounded-xl border border-[#E1E1E1] bg-gray-1400"
                                        >
                                             <div className="flex items-center gap-2">
                                                  <img src={CALENDAR_ICON} alt="" className="size-5 object-contain" />
                                                  <span className="font-Inter font-medium text-base leading-6 text-black-1000">{session}</span>
                                             </div>
                                             <p className="font-Inter font-normal text-base leading-6 text-black-1000/80">April 15-16, 2026</p>
                                             <p className="font-Inter font-normal text-base leading-6 text-gray-1600">Online (Zoom)</p>
                                             <p className="font-Inter font-medium text-base leading-6 text-[#8B0836]">10 spots left</p>
                                        </div>
                                   ))}
                              </div>
                         </SectionCard>

                         <SectionCard title="User Reviews">
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-1300 border border-gray-1100 rounded-xl px-6 py-4 shadow-3xl">
                                   <div className="flex flex-col gap-1 flex-1">
                                        <p className="font-Inter font-semibold text-sm leading-6 text-black-1100">Overall ratings</p>
                                        <div className="flex items-end gap-2">
                                             <span className="font-Inter font-normal text-[48px] leading-[33px] text-black-1000/80">4.8</span>
                                             <span className="font-Inter font-normal text-2xl leading-[33px] text-black-1000/80">(45)</span>
                                        </div>
                                        <div className="flex items-center gap-0.5 mt-1">
                                             {[...Array(5)].map((_, i) => (
                                                  <img
                                                       key={i}
                                                       src={i < 4 ? STAR_FILLED : STAR_HALF}
                                                       alt=""
                                                       className="size-[13px] object-contain"
                                                  />
                                             ))}
                                        </div>
                                   </div>
                                   <div className="flex flex-col gap-2 flex-1">
                                        <p className="font-Inter text-sm text-black-1100">
                                             Join <strong className="font-extrabold">500+ learners</strong> who've taken this course
                                        </p>
                                        <div className="flex items-center">
                                             {AVATARS.map((src, i) => (
                                                  <img
                                                       key={i}
                                                       src={src}
                                                       alt=""
                                                       className="size-11 rounded-full object-cover border-2 border-white -mr-4 last:mr-0"
                                                  />
                                             ))}
                                        </div>
                                   </div>
                              </div>
                              <div className="flex flex-col gap-4">
                                   <button
                                        type="button"
                                        className="self-start flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-1000 border border-gray-1100 text-sm font-medium text-black-1100"
                                   >
                                        Most useful
                                        <img src={ANGLE_DOWN} alt="" className="size-4 object-contain" />
                                   </button>

                                   <div className="flex flex-col gap-3">
                                        {REVIEWS.map((r, i) => (
                                             <ReviewCard key={i} {...r} />
                                        ))}
                                   </div>

                                   {/* Feedback form */}
                                   <div className="flex flex-col gap-[21px] bg-gray-1400 border border-gray-1100 rounded-xl px-4 py-4 shadow-3xl w-full">
                                        <div className="flex items-center gap-2.5">
                                             <img src={AVATAR} alt="You" className="size-10 rounded-full object-cover shrink-0" />
                                             <p className="font-Inter font-medium text-sm leading-4 text-black-1000">
                                                  John Doe, Add your feedback!
                                             </p>
                                        </div>
                                        <div className="flex flex-col gap-2.5 w-full">
                                             <div className="flex items-center gap-1">
                                                  <span className="font-Inter font-medium text-sm text-black-1000">Detailed Review</span>
                                                  <span className="text-[#C70036] font-medium text-sm">*</span>
                                                  <img src={QUESTION_ICON} alt="" className="size-[14px] object-contain ml-1" />
                                             </div>
                                             <textarea
                                                  value={reviewText}
                                                  onChange={(e) => setReviewText(e.target.value)}
                                                  placeholder="Write text here ..."
                                                  rows={7}
                                                  className="w-full bg-gray-1000 border border-gray-1100 rounded-xl p-[14px] text-sm text-gray-1200 placeholder:text-gray-1200 outline-none resize-none shadow-3xl focus:ring-2 focus:ring-golden-1000 transition-all"
                                             />
                                        </div>
                                        <button
                                             type="button"
                                             className="self-start px-4 py-2.5 rounded-xl text-white text-sm font-medium shadow-3xl transition-opacity hover:opacity-90"
                                             style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
                                        >
                                             Post Feedback
                                        </button>
                                   </div>
                              </div>
                         </SectionCard>
                    </div>
                    <div className=" shrink-0 xl:w-[432px] lg:w-[350px] w-full">
                         <div className="bg-white border border-gray-1100 rounded-2xl p-6 flex flex-col gap-[18px]">
                              <div className="border-b border-gray-1100 pb-2">
                                   <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Enroll in Course</h3>
                              </div>
                              <div className="bg-white border border-gray-1100 rounded-xl overflow-hidden pt-2 pb-4 px-2 flex flex-col gap-4 shadow-3xl">
                                   <div className="relative w-full h-[193px] rounded-lg overflow-hidden">
                                        <img src={COURSE_BANNER} alt="course" className="absolute inset-0 w-full h-full object-cover" />
                                   </div>
                                   <div className="flex flex-col gap-3 px-5">
                                        <h3 className="font-Inter font-semibold text-xl leading-8 text-black-1000 tracking-tight">
                                             Legal Tech Course Title 1
                                        </h3>
                                        <p className="font-Inter font-normal text-base leading-6 text-gray-1600">LexAcademy</p>
                                        <span className="inline-flex items-center gap-1.5 px-1 py-0.5 rounded-[6px] bg-green-1300 border border-green-1400 self-start">
                                             <span className="font-Inter font-medium text-xs leading-4 text-black-1200">8 Hours</span>
                                             <span className="w-px h-3 bg-black-1200/30" />
                                             <span className="font-Inter font-normal text-xs leading-4 text-black-1200">online</span>
                                        </span>
                                        <p className="font-Inter font-normal text-base leading-6 text-black-1100">
                                             Streamline your legal operations with our powerful solution
                                        </p>
                                        <div className="flex items-center gap-1.5">
                                             <div className="flex items-center text-yellow-1000">
                                                  {[...Array(5)].map((_, i) => (
                                                       <Star key={i} size={13} fill={i < 4 ? "currentColor" : "none"} strokeWidth={i < 4 ? 0 : 1.5} />
                                                  ))}
                                             </div>
                                             <span className="font-Inter font-normal text-base leading-6 text-black-1000/80">4.8 (45)</span>
                                        </div>
                                        <div className="flex flex-col">
                                             <span className="font-Inter font-normal text-base leading-6 text-black-1000">Course Price</span>
                                             <div className="flex items-baseline gap-1">
                                                  <span className="font-Inter font-semibold text-xl leading-[48px] text-black-1000">CHF</span>
                                                  <span className="font-Inter font-semibold text-[32px] leading-[48px] text-black-1000">850</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {[
                                   { label: "First name", placeholder: "Your full name", type: "text" },
                                   { label: "Email Address", placeholder: "Your email address", type: "email" },
                              ].map((field) => (
                                   <div key={field.label} className="flex flex-col gap-2.5">
                                        <label className="font-Inter font-medium text-sm leading-5 text-black-1000">
                                             {field.label} <span className="text-[#C70036]">*</span>
                                        </label>
                                        <input
                                             type={field.type}
                                             placeholder={field.placeholder}
                                             className="w-full bg-gray-1000 border border-gray-1100 rounded-xl px-[14px] py-3 text-base text-gray-1200 placeholder:text-gray-1200 outline-none focus:ring-2 focus:ring-golden-1000 shadow-3xl transition-all"
                                        />
                                   </div>
                              ))}

                              <div className="flex flex-col gap-2.5">
                                   <label className="font-Inter font-medium text-sm leading-5 text-black-1000">
                                        Phone Number <span className="text-[#C70036]">*</span>
                                   </label>
                                   <div className="flex items-center gap-2 bg-gray-1000 border border-gray-1100 rounded-xl px-[14px] py-3 shadow-3xl">
                                        <img src={PHONE_ICON} alt="" className="size-5 object-contain shrink-0" />
                                        <input
                                             type="tel"
                                             placeholder="+41 XX XXX XX XX"
                                             className="flex-1 bg-transparent outline-none text-base text-gray-1200 placeholder:text-gray-1200"
                                        />
                                   </div>
                              </div>

                              <div className="flex flex-col gap-2.5">
                                   <label className="font-Inter font-medium text-sm leading-5 text-black-1000">
                                        Organization <span className="text-[#C70036]">*</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="Your law firm or company"
                                        className="w-full bg-gray-1000 border border-gray-1100 rounded-xl px-[14px] py-3 text-base text-gray-1200 placeholder:text-gray-1200 outline-none focus:ring-2 focus:ring-golden-1000 shadow-3xl transition-all"
                                   />
                              </div>

                              <div className="flex flex-col gap-2.5">
                                   <label className="font-Inter font-medium text-sm leading-5 text-black-1000">
                                        Select Session <span className="text-[#C70036]">*</span>
                                   </label>
                                   <div className="relative">
                                        <select
                                             className="w-full appearance-none bg-gray-1000 border border-gray-1100 rounded-xl px-[14px] py-3 text-base text-gray-1200 outline-none focus:ring-2 focus:ring-golden-1000 shadow-3xl transition-all cursor-pointer pr-10"
                                        >
                                             <option value="">Select a session</option>
                                             <option value="session1">12 March, 2026</option>
                                             <option value="session2">April 15-16, 2026</option>
                                             <option value="session3">April 22-23, 2026</option>
                                        </select>
                                        <img
                                             src={ANGLE_DOWN}
                                             alt=""
                                             className="size-4 object-contain shrink-0 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                        />
                                   </div>
                              </div>

                              {[
                                   "I agree to the terms and conditions and privacy policy",
                                   "Send me updates about new courses and events",
                              ].map((label, i) => (
                                   <label key={i} className="flex items-start gap-2.5 cursor-pointer">
                                        <div className="flex items-center justify-center shrink-0 size-4 rounded-[4px] bg-[#222121] border border-[#222121] mt-0.5">
                                             <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                             </svg>
                                        </div>
                                        <span className="font-Inter font-medium text-sm leading-4 text-black">{label}</span>
                                   </label>
                              ))}

                              <div className="flex flex-col gap-3">
                                   <button
                                        type="button"
                                        className="w-full h-14 rounded-xl text-white text-sm font-medium shadow-3xl transition-opacity hover:opacity-90"
                                        style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
                                   >
                                        Complete Enrollment
                                   </button>
                                   <p className="font-Inter font-semibold text-sm leading-[21px] text-black-1000 text-center">
                                        Secure payment • Instant confirmation
                                   </p>
                              </div>

                              <div className="border-t border-gray-1100 pt-6 flex flex-col gap-3">
                                   <p className="font-Inter font-medium text-base leading-6 text-black-1000">What's Included</p>
                                   {INCLUDED.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                             <img src={item.icon} alt="" className="size-5 object-contain shrink-0" />
                                             <span className="font-Inter font-normal text-base leading-6 text-black-1000/80">{item.text}</span>
                                        </div>
                                   ))}
                              </div>

                              <div className="border-t border-gray-1100 pt-6 flex flex-col gap-1">
                                   <p className="font-Inter font-medium text-sm leading-[21px] text-black-1000">Questions?</p>
                                   <p className="font-Inter font-normal text-sm leading-[21px] text-black-1000/80">
                                        Contact our support team:
                                   </p>
                                   <p className="font-Inter font-normal text-sm leading-[21px] text-golden-1000">
                                        training@lexacademy.ch
                                   </p>
                                   <p className="font-Inter font-normal text-sm leading-[21px] text-golden-1000">
                                        +41 44 123 45 67
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
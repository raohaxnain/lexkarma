"use client";
import DashboardSidebar from "@/app/Components/Sidebar";
import { useState } from "react";
const imgCourseThumbnail = "/images/course-img1.png";
const imgStatIcon1 = "/images/icon1.svg";
const imgStatIcon2 = "/images/icon2.svg";
const imgStatIcon3 = "/images/icon3.svg";
const imgStatIcon4 = "/images/icon4.svg";
const imgStarFilled = "/images/star-filled.svg";
const imgStarHalf = "/images/star-half.svg";
const imgChevronRight = "/images/chevron-right.svg";
const imgHourglass = "/images/hourglass.svg";
const imgCheckCircle = "/images/check-circle2.svg";
const ICON_DOWNLOAD = "/images/download.svg";
const ICON_SHARE = "/images/share-icon2.svg";
type TabType = "inProgress" | "completed";
interface Course {
     id: number;
     title: string;
     provider: string;
     progress: number;
     rating: number;
     ratingCount: number;
     status: "In Progress" | "Completed";
}
const COURSES: Course[] = [
     { id: 1, title: "Legal AI Fundamentals", provider: "LexAcademy", progress: 75, rating: 4.8, ratingCount: 45, status: "In Progress" },
     { id: 2, title: "Contract Management Mastery", provider: "LexAcademy", progress: 75, rating: 4.8, ratingCount: 45, status: "In Progress" },
     { id: 3, title: "Legal Research Essentials", provider: "LexAcademy", progress: 75, rating: 4.8, ratingCount: 45, status: "In Progress" },
     { id: 4, title: "E-Discovery Fundamentals", provider: "LexAcademy", progress: 100, rating: 4.8, ratingCount: 45, status: "Completed" },
     { id: 5, title: "Compliance & Regulation", provider: "LexAcademy", progress: 100, rating: 4.8, ratingCount: 45, status: "Completed" },
     { id: 6, title: "Legal Writing Mastery", provider: "LexAcademy", progress: 100, rating: 4.8, ratingCount: 45, status: "Completed" },
];
function StarRating({ rating, count }: { rating: number; count: number }) {
     const fullStars = Math.floor(rating);
     const hasHalf = rating % 1 >= 0.5;
     return (
          <div className="flex items-center gap-1.5">
               <div className="flex items-center gap-[1px]">
                    {Array.from({ length: fullStars }).map((_, i) => (
                         <img key={i} src={imgStarFilled} alt="★" className="w-[13px] h-[13px] object-contain" />
                    ))}
                    {hasHalf && (
                         <img src={imgStarHalf} alt="½" className="w-[13px] h-[13px] object-contain" />
                    )}
               </div>
               <span className="font-Inter font-normal text-base leading-6 text-[rgba(16,24,40,0.8)]">
                    {rating} ({count})
               </span>
          </div>
     );
}

function ProgressBar({ progress }: { progress: number }) {
     return (
          <div className="relative h-[6px] w-full rounded-full bg-[#F4EEEB]">
               <div
                    className="absolute top-0 left-0 h-[6px] rounded-full"
                    style={{
                         width: `${progress}%`,
                         background: "linear-gradient(180deg, #FFB36B 0%, #F7DF90 100%)",
                    }}
               />
          </div>
     );
}

function CourseCard({ course }: { course: Course }) {
     const isCompleted = course.status === "Completed";

     return (
          <div className="bg-white border border-gray-1100 rounded-xl overflow-hidden flex flex-col gap-4 pt-2 px-2 pb-4 shadow-[0px_1px_0.5px_0.05px_rgba(29,41,61,0.02)] hover:shadow-md transition-shadow relative">

               <div className="relative h-[193px] w-full rounded-lg overflow-hidden shrink-0">
                    <img
                         src={imgCourseThumbnail}
                         alt={course.title}
                         className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                         className={[
                              "absolute top-4 right-4 flex items-center justify-center px-1.5 py-1 rounded-md border text-sm font-Inter font-normal leading-4",
                              isCompleted
                                   ? "bg-blue-1000 border-blue-1100 text-blue-1200 hidden"
                                   : "bg-green-1300 border-green-1400 text-black-1200 block",
                         ].join(" ")}
                    >
                         {course.status}
                    </div>
               </div>

               <div className="flex flex-col gap-3 pb-4 md:px-5 px-3">
                    <div className="flex flex-col">
                         <h3 className="font-Inter font-semibold text-xl leading-8 tracking-[-0.4px] text-black-1000">
                              {course.title}
                         </h3>
                         <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
                              {course.provider}
                         </p>
                    </div>

                    {!isCompleted ? (
                         <div className="flex flex-col gap-2">
                              <span className="font-Inter font-medium text-[15px] leading-6 text-black-1300">
                                   {course.progress}% completed
                              </span>
                              <ProgressBar progress={course.progress} />
                         </div>
                    ) : (
                         <div className="flex flex-col gap-2">
                              <span className="font-Inter font-normal text-sm text-gray-1600">
                                   Completed on 23, March, 2026
                              </span>
                              <div className="relative h-1.5 w-full rounded-full bg-gray-1400">
                                   <div className="absolute top-0 left-0 h-1.5 w-full bg-green-500 rounded-full"></div>
                              </div>
                         </div>
                    )}

                    {!isCompleted ? (
                         <StarRating rating={course.rating} count={course.ratingCount} />
                    ) : (
                         <div className="hidden">
                              <StarRating rating={course.rating} count={course.ratingCount} />
                         </div>
                    )}

               </div>

               <div className="px-2">
                    {!isCompleted ? (
                         <button
                              type="button"
                              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-Inter font-medium leading-5 hover:opacity-90 active:scale-[0.98] transition-all"
                              style={{ background: "linear-gradient(180deg, #222121 0%, #615A45 100%)" }}
                         >
                              Continue Reading
                              <img src={imgChevronRight} alt="" />
                         </button>
                    ) : (
                         <div className="grid grid-cols-2 gap-2 w-full">
                              <button
                                   type="button"
                                   className="flex items-center justify-center gap-2 h-10 rounded-xl bg-golden-1000 text-white font-Inter font-normal text-sm hover:opacity-90 transition-opacity"
                              >
                                   <img src={ICON_DOWNLOAD} alt="" className="size-4 object-contain brightness-0 invert" />
                                   Download
                              </button>
                              <button
                                   type="button"
                                   className="flex items-center justify-center gap-2 h-10 rounded-xl bg-white border border-gray-1100 text-black-1000 font-Inter font-normal text-sm hover:bg-gray-1000 transition-colors"
                              >
                                   <img src={ICON_SHARE} alt="" className="size-4 object-contain" />
                                   Share
                              </button>
                         </div>
                    )}
               </div>
          </div>
     );
}

export default function MyCoursesPage() {
     const [activeTab, setActiveTab] = useState<TabType>("inProgress");

     const inProgress = COURSES.filter((c) => c.status === "In Progress");
     const completed = COURSES.filter((c) => c.status === "Completed");
     const displayed = activeTab === "inProgress" ? inProgress : completed;

     return (
          <div className="flex min-h-screen bg-[#FAF7F2]">
               <DashboardSidebar />
               <main className="flex-1 min-w-0 px-6 pt-16 lg:pt-10">
                    <div className="flex flex-col gap-6">
                         <div className="flex flex-col gap-2 pt-2 lg:pt-0">
                              <h1 className="font-Inter font-semibold text-2xl sm:text-[32px] leading-6 text-black-1000">
                                   My Courses
                              </h1>
                              <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
                                   Track your enrolled courses and learning progress
                              </p>
                         </div>
                         <div className="flex md:gap-6 gap-4 flex-wrap sm:flex-nowrap">
                              <div
                                   className="flex-1 min-w-[140px] flex flex-col gap-6 p-6 rounded-2xl justify-between shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                                   style={{ background: "linear-gradient(153.62deg, #B1A583 0%, #222121 100%)" }}
                              >
                                   <div className="flex items-center justify-between w-full">
                                        <img src={imgStatIcon1} alt="" className="w-6 h-6 object-contain" />
                                   </div>
                                   <div className="flex items-end gap-6 w-full">
                                        <p className="flex-1 font-Inter font-normal text-sm leading-[21px] text-white">Total Enrolled</p>
                                        <span className="font-Inter font-normal text-[48px] leading-[43px] text-white text-right">7</span>
                                   </div>
                              </div>
                              <div
                                   className="flex-1 min-w-[180px] flex flex-col gap-6 p-6 rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                                   style={{ background: "linear-gradient(153.62deg, #B1A583 0%, #222121 100%)" }}
                              >
                                   <div className="flex md:w-auto w-full items-center justify-between w-full">
                                        <img src={imgStatIcon2} alt="" className="w-6 h-6 object-contain" />
                                   </div>
                                   <div className="flex md:w-auto w-full flex-col gap-2 w-full">
                                        <div className="flex items-end w-full">
                                             <div className="flex-1 flex flex-col">
                                                  <span className="font-Inter font-semibold text-[8px] leading-[15px] uppercase tracking-wide text-white">
                                                       In Progress
                                                  </span>
                                                  <span className="font-Inter font-bold text-xs leading-[15px] text-white">
                                                       Legal AI Fundamentals
                                                  </span>
                                             </div>
                                             <span className="font-Inter font-bold text-[10px] text-gray-1400 text-right whitespace-nowrap">
                                                  75% completed
                                             </span>
                                        </div>
                                        <div className="relative h-[6px] w-full rounded-full bg-gray-1400">
                                             <div
                                                  className="absolute top-0 left-0 h-[6px] rounded-full"
                                                  style={{
                                                       width: "75%",
                                                       background: "linear-gradient(180deg, #FFB36B 0%, #F7DF90 100%)",
                                                  }}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div
                                   className="flex-1 md:w-auto w-full min-w-[140px] flex flex-col justify-between gap-6 p-6 rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                                   style={{ background: "linear-gradient(153.62deg, #B1A583 0%, #222121 100%)" }}
                              >
                                   <div className="flex items-center justify-between w-full">
                                        <img src={imgStatIcon3} alt="" className="w-6 h-6 object-contain" />
                                   </div>
                                   <div className="flex items-end gap-6 w-full">
                                        <p className="flex-1 font-Inter font-normal text-sm leading-[21px] text-white">Completed</p>
                                        <span className="font-Inter font-normal text-[48px] leading-[43px] text-white text-right">3</span>
                                   </div>
                              </div>
                              <div
                                   className="md:flex-1 md:w-auto w-full min-w-[140px] flex flex-col justify-between gap-6 p-6 rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                                   style={{ background: "linear-gradient(153.62deg, #B1A583 0%, #222121 100%)" }}
                              >
                                   <div className="flex items-center justify-between w-full">
                                        <img src={imgStatIcon4} alt="" className="w-6 h-6 object-contain" />
                                   </div>
                                   <div className="flex items-end gap-6 w-full">
                                        <p className="flex-1 font-Inter font-normal text-sm leading-[21px] text-white">Hours Learned</p>
                                        <span className="font-Inter font-normal text-[48px] leading-[43px] text-white text-right">56</span>
                                   </div>
                              </div>
                         </div>
                         <div className="border-b border-gray-1100 flex gap-6 items-center">
                              <button
                                   type="button"
                                   onClick={() => setActiveTab("inProgress")}
                                   className={[
                                        "flex items-center gap-1.5 pb-4 text-sm font-Inter font-medium leading-5 border-b-2 -mb-px transition-colors",
                                        activeTab === "inProgress"
                                             ? "border-golden-1000 text-black-1300"
                                             : "border-transparent text-black-1100 hover:text-black-1000",
                                   ].join(" ")}
                              >
                                   <img src={imgHourglass} alt="" className="w-4 h-4 object-contain" />
                                   In Progress
                              </button>
                              <button
                                   type="button"
                                   onClick={() => setActiveTab("completed")}
                                   className={[
                                        "flex items-center gap-1.5 pb-4 text-sm font-Inter font-medium leading-5 border-b-2 -mb-px transition-colors",
                                        activeTab === "completed"
                                             ? "border-golden-1000 text-black-1300"
                                             : "border-transparent text-black-1100 hover:text-black-1000",
                                   ].join(" ")}
                              >
                                   <img src={imgCheckCircle} alt="" className="w-4 h-4 object-contain" />
                                   Completed
                              </button>
                         </div>
                         <div className="bg-white border border-gray-1100 rounded-2xl md:p-6 p-3 flex flex-col gap-[18px]">
                              <div className="border-b border-gray-1100 pb-2">
                                   <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">
                                        {activeTab === "inProgress" ? "In Progress" : "Completed"}
                                   </h3>
                              </div>
                              {displayed.length === 0 ? (
                                   <div className="py-12 text-center">
                                        <p className="font-Inter font-normal text-base text-gray-1600">No courses found.</p>
                                   </div>
                              ) : (
                                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
                                        {displayed.map((course) => (
                                             <CourseCard key={course.id} course={course} />
                                        ))}
                                   </div>
                              )}
                         </div>
                    </div>
               </main>
          </div>
     );
}
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

interface Feature {
     label: string;
     status: string;
}

interface DocumentCardProps {
     title: string;
     category: string;
     description: string;
     logo: string;
     banner: string;
     badge?: string;
     features: Feature[];
     rating: number;
     reviews: number;
     href?: string;
     actionVariant?: "visit" | "compare";
     isCompareSelected?: boolean;
     isCompareDisabled?: boolean;
     onCompareToggle?: () => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
     title,
     category,
     description,
     logo,
     banner,
     badge = "Top Rated",
     features,
     rating,
     reviews,
     href = "/",
     actionVariant = "visit",
     isCompareSelected = false,
     isCompareDisabled = false,
     onCompareToggle,
}) => {
     return (
          <div
               className={`rounded-2xl border bg-white border-gray-1100 shadow-3xl overflow-hidden p-2 w-full transition-all duration-200
                }`}
          >
               {/* Banner */}
               <div className="relative w-full min-h-[114px]">
                    <Image
                         src={banner}
                         alt="banner"
                         fill
                         className="object-cover w-full rounded-lg"
                    />

                    {/* Logo */}
                    <div className="absolute -bottom-[33px] left-5 bg-white border border-gray-1500 rounded-[14px]">
                         <Image src={logo} alt="logo" width={66} height={66} className="rounded-[14px]" />
                    </div>

                   
               </div>

               {/* Content */}
               <div className="pt-8 px-5">
                    <h3 className="text-xl leading-8 font-semibold text-black-1000">{title}</h3>
                    <p className="text-base font-normal leading-6 text-gray-1600">{category}</p>

                    {/* Badge */}
                    <span className="w-fit mt-3 flex items-center gap-1 text-xs px-1 py-0.5 rounded-md font-medium bg-blue-1000 text-blue-1200 border border-blue-1100">
                         <img src="/images/star.svg" alt="" /> {badge}
                    </span>

                    {/* Description */}
                    <p className="mt-3 text-base text-black-1100 leading-6">
                         {description}
                    </p>

                    {/* Features */}
                    <div className="mt-2">
                         {features.map((feature, index) => (
                              <div key={index} className="flex items-center py-2 border-b border-gray-1000 justify-between">
                                   <span className="text-black-1100 text-xs font-normal leading-6 block">{feature.label}</span>
                                   <span className="text-green-1100 bg-green-1100/10 flex items-center gap-1 border border-green-1200/20 px-2 py-0.5 rounded-[10px] text-xs">
                                        <img src="/images/shield-icon.svg" alt="" /> {feature.status}
                                   </span>
                              </div>
                         ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-4">
                         <div className="flex text-yellow-1000">
                              {[...Array(5)].map((_, i) => (
                                   <Star key={i} size={16} fill="currentColor" />
                              ))}
                         </div>
                         <span className="text-base font-normal leading-6 text-black-1000/80">
                              {rating} ({reviews})
                         </span>
                    </div>
               </div>

               {/* Actions */}
               <div className="grid grid-cols-2 pb-2 gap-4 mt-6">
                    <Button text="Know more" showArrow variant="gradient" />

                    {actionVariant === "visit" ? (
                         <Link
                              href={href}
                              className="flex items-center justify-center gap-1.5 py-3 px-[14.5px] text-sm font-medium leading-5 text-black-1000"
                         >
                              Visit website
                              <img src="/images/arrow-up-right-from-square.svg" alt="" />
                         </Link>
                    ) : (
                         <button
                              type="button"
                              onClick={onCompareToggle}
                              disabled={isCompareDisabled}
                              className={`flex items-center gap-1.5 text-sm justify-center font-medium leading-5 py-2.5 px-4 shadow-3xl rounded-xl border transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${
                                   isCompareSelected
                                        ? "bg-green-1100  text-white"
                                        : "border-gray-1100 text-black-1100 hover:border-[#B1A583] hover:text-[#8a7d63]"
                              }`}
                         >
                              {isCompareSelected ? (
                                   <>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M2 7.5L6 11.5L13 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Added
                                   </>
                              ) : (
                                   <>
                                        Compare
                                        <img src="/images/merge-or-split.svg" alt="" />
                                   </>
                              )}
                         </button>
                    )}
               </div>
          </div>
     );
};

export default DocumentCard;

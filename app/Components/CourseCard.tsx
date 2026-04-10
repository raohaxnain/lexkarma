import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  provider: string;
  banner: string;
  duration: string;
  mode: string;
  description: string;
  rating: number;
  reviews: number;
  href?: string;
  /**
   * Controls which action buttons appear at the bottom of the card.
   * "default"  → View course only              (home page)
   * "compare"  → View course + Compare         (training/courses page)
   * "view"     → View Details only             (workshop page)
   */
  actionVariant?: "default" | "compare" | "view";
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  provider,
  banner,
  duration,
  mode,
  description,
  rating,
  reviews,
  href = "/",
  actionVariant = "default",
}) => {
  return (
    <div className="rounded-2xl border border-gray-1100 bg-white shadow-3xl overflow-hidden p-2 w-full">

      {/* Banner */}
      <div className="relative w-full min-h-[193px]">
        <Image
          src={banner}
          alt="banner"
          fill
          className="object-cover w-full rounded-lg"
        />
      </div>
      <div className="pt-4 px-5">
        <h3 className="text-xl leading-8 font-semibold text-black-1000">{title}</h3>
        <p className="text-base font-normal leading-6 text-gray-1600">{provider}</p>
        <div className="flex items-center gap-2 text-xs font-medium text-black-1200 leading-4 py-0.5 px-1 mt-3 bg-green-1300 w-fit rounded-md border border-green-1400">
          <span className="inline-block pr-1.5 border-r border-green-1400">
            {duration}
          </span>
          <span>{mode}</span>
        </div>
        <p className="text-base text-black-1100 leading-6 mt-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-2 mt-3">
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
      {actionVariant === "default" && (
        <div className="mt-4 pb-2">
          <Button text="View course" showArrow variant="gradient" href={href} />
        </div>
      )}
      {actionVariant === "compare" && (
        <div className="grid grid-cols-2 gap-4 mt-4 pb-2">
          <Button text="View course" showArrow variant="gradient" href={href} />
          <Link
            href={href}
            className="flex items-center justify-center gap-1.5 text-sm font-medium leading-5 text-black-1100 py-2.5 px-6 shadow-3xl rounded-xl border border-gray-1100"
          >
            Compare
            <img src="/images/merge-or-split.svg" alt="" />
          </Link>
        </div>
      )}
      {actionVariant === "view" && (
        <div className="mt-4 pb-2">
          <Button text="View Details" showArrow variant="gradient" href={href} />
        </div>
      )}
    </div>
  );
};

export default CourseCard;
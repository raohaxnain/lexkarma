import Image from "next/image";
import { Star } from "lucide-react";


interface CourseHeroBannerProps {
  title: string;
  provider: string;
  duration: string;
  mode: string;
  rating: number;
  reviews: number;
  price: string;
    dateTime?: string;
  location?: string;
  
  variant: "course" | "event";
}

export default function CourseHeroBanner({
  title,
  provider,
  duration,
  mode,
  rating,
  reviews,
  price,
  dateTime,
  location,
  variant,
}: CourseHeroBannerProps) {
  return (
    <section
      className="relative w-full min-h-[243px] py-10 overflow-hidden flex items-center bg-[url(/images/product-bg.png)] bg-cover bg-no-repeat"

    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1298px] mx-auto px-5">
        <div className="flex flex-col">

          {/* Title + Provider */}
          <div className="flex flex-col gap-[11px]">
            <h1 className="font-Inter font-semibold text-[32px] md:leading-6 leading-10 text-white">
              {title}
            </h1>
            <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
              {provider}
            </p>
          </div>

          {/* Badge + Stars */}
          <div className="flex items-center gap-3 mt-2 mb-4">
            {variant === "course" && (
              <>
                {/* Duration + Mode badge */}
                <span className="inline-flex items-center gap-1.5 px-1.5 py-1 rounded-[6px] bg-green-1300 border border-green-1400">
                  <span className="font-Inter font-medium text-sm text-black-1200">
                    {duration}
                  </span>
                  <span className="w-px h-3 bg-black-1200/30" />
                  <span className="font-Inter font-medium text-sm text-black-1200">
                    {mode}
                  </span>
                </span>

                {/* Star rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-yellow-1000">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill={i < Math.floor(rating || 0) ? "currentColor" : "none"}
                        strokeWidth={i < Math.floor(rating || 0) ? 0 : 1.5}
                      />
                    ))}
                  </div>
                  <span className="text-white">
                    {rating} ({reviews})
                  </span>
                </div>
              </>
            )}

            {variant === "event" && (
              <>
                {/* Date badge */}
                <span className="px-2 py-1 rounded bg-green-1300 text-black-1200 text-sm">
                  {dateTime}
                </span>

                {/* Location badge */}
                <span className="px-2 py-1 rounded bg-green-1300 text-black-1000 text-sm flex items-center gap-1">
                  <img src="/images/map-pin.svg" alt="" /> {location}
                </span>
              </>
            )}
          </div>
          
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="font-Inter font-semibold text-xl leading-[48px] text-white">
              CHF
            </span>
            <span className="font-Inter font-semibold text-[32px] leading-[48px] text-white">
              {price}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
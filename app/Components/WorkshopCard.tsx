import Image from "next/image";
import React from "react";
import Link from "next/link";

const MAP_PIN_ICON = "/images/map-pin.svg";
const SEATS_ICON = "/images/users.svg";

interface WorkshopCardProps {
  title: string;
  organizer: string;
  banner: string;
  time: string;
  date: string;
  location: string;
  seatsLeft: number;
  totalSeats: number;
  href?: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({
  title,
  organizer,
  banner,
  time,
  date,
  location,
  seatsLeft,
  totalSeats,
  href = "/",
}) => {
  const seatsPct = Math.round((seatsLeft / totalSeats) * 100);

  return (
    <div className="rounded-2xl border border-gray-1100 bg-white shadow-3xl overflow-hidden pt-2 pb-4 px-2 w-full flex flex-col gap-4">

      {/* Banner */}
      <div className="relative w-full h-[193px] rounded-lg overflow-hidden shrink-0">
        <Image
          src={banner}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 px-5">

        {/* Title + Organizer */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <h3 className="font-Inter font-semibold text-xl leading-8 text-black-1000 tracking-tight">
              {title}
            </h3>
            <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
              {organizer}
            </p>
          </div>

          {/* Badges row */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Time + Date badge */}
            <span className="inline-flex items-center gap-1.5 px-1 py-0.5 rounded-[6px] bg-green-1300 border border-green-1400">
              <span className="font-Inter font-medium text-xs leading-4 text-black-1200 whitespace-nowrap">
                {time}
              </span>
              <span className="w-px h-3 bg-black-1200/30" />
              <span className="font-Inter font-medium text-xs leading-4 text-black-1200 whitespace-nowrap">
                {date}
              </span>
            </span>

            {/* Location badge */}
            <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded-[6px] bg-gray-1000 border border-gray-1100">
              <div className="relative size-3 shrink-0">
                <Image src={MAP_PIN_ICON} alt="" fill className="object-contain" />
              </div>
              <span className="font-Inter font-medium text-xs leading-4 text-black-1000 whitespace-nowrap">
                {location}
              </span>
            </span>
          </div>
        </div>

        {/* Seats + Progress bar */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <div className="relative size-4 shrink-0">
              <Image src={SEATS_ICON} alt="" fill className="object-contain" />
            </div>
            <span className="font-Inter font-medium text-xs leading-6 text-black-1000/80 whitespace-nowrap">
              {seatsLeft} / {totalSeats} seats left
            </span>
          </div>

          {/* Progress bar */}
          <div className="relative h-1.5 w-full rounded-xl bg-gray-1400">
            <div
              className="absolute top-0 left-0 h-full rounded-xl"
              style={{
                width: `${seatsPct}%`,
                background: "linear-gradient(to bottom, #FFB36B, #F7DF90)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Action button */}
      <div className="pt-4 px-2">
        <Link
          href={href}
          className="flex w-full items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-medium leading-5 shadow-3xl transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
        >
          View Details
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="rotate-180">
            <path d="M5 1L1 5L5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopCard;

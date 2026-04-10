import Image from "next/image";
import Link from "next/link";

const STAR_ICON = "/images/star.svg";
const ARROW_ICON = "/images/arrow-up-right.svg";

interface ProductHeroBannerProps {
     name: string;
     category: string;
     logo: string;
     badge?: string;
     websiteUrl?: string;
}

export default function ProductHeroBanner({
     name,
     category,
     logo,
     badge = "Top Rated",
     websiteUrl = "#",
}: ProductHeroBannerProps) {
     return (
          <div className="relative w-full h-[226px] overflow-hidden bg-[url(/images/banner.png)] bg-cover bg-no-repeat">
               {/* Text content */}
               <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="max-w-[1298px] w-full px-5 mx-auto">
                         <div className="flex items-center gap-4">
                              {/* Logo badge */}
                              <div className="md:w-[132px] w-[87px] md:rounded-[36px] rounded-[24px] border border-gray-1500 bg-white overflow-hidden shrink-0 z-10">
                                   <Image
                                        src={logo}
                                        alt={`${name} logo`}
                                        fill
                                        className="object-cover !static  w-[132px] rounded-[36px]"
                                   />
                              </div>
                              <div className="flex flex-col gap-2">
                                   <h1 className="font-Inter font-semibold md:text-[32px] text-2xl leading-6 text-white">
                                        {name}
                                   </h1>
                                   <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
                                        {category}
                                   </p>
                                   <div className="flex items-center gap-[7px]">
                                        {/* Top Rated badge */}
                                        <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded-[6px] bg-blue-1000 border border-blue-1100 shrink-0">
                                             <div className="relative size-3 shrink-0">
                                                  <Image src={STAR_ICON} alt="" fill className="object-contain" />
                                             </div>
                                             <span className="font-Inter font-medium text-xs leading-4 text-blue-1200 whitespace-nowrap">
                                                  {badge}
                                             </span>
                                        </span>

                                        {/* Visit website button */}
                                        <Link
                                             href={websiteUrl}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-medium leading-5 transition-opacity hover:opacity-80"
                                        >
                                             Visit website
                                             <div className="relative size-4 shrink-0">
                                                  <Image src={ARROW_ICON} alt="" fill className="object-contain" />
                                             </div>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
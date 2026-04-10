import Image from "next/image";

const imgIcon = "/images/gift-icon.svg";
const imgIcon1 = "/images/users-icon.svg";
const imgIcon2 = "/images/course-icon.svg";
const imgIcon3 = "/images/user-tick.svg";

interface StatItem {
     icon: string;
     value: string;
     label: string;
}

const stats: StatItem[] = [
     { icon: imgIcon, value: "800+", label: "Legal Tech Tools" },
     { icon: imgIcon1, value: "50,000+", label: "Legal Professionals" },
     { icon: imgIcon2, value: "1,200+", label: "Training Courses" },
     { icon: imgIcon3, value: "500+", label: "Verified Freelancers" },
];

function StatCard({ icon, value, label }: StatItem) {
     return (
          <div className="flex flex-1 items-center xl:gap-[29px] gap-2.5 min-w-0">
               <div
                    className="flex shrink-0 items-center icon-bg2 justify-center rounded-full md:size-16 size-12"
               >
                    <div className="relative md:size-8 size-5">
                         <img
                              src={icon}
                              alt={label}
                              className="absolute inset-0 block size-full object-contain"
                         />
                    </div>
               </div>

               <div className="flex flex-col md:gap-[3px] shrink-0">
                    <p
                         className="font-Inter font-medium xl:text-[40px] md:text-[32px] text-[26px] xl:leading-[48px] leading-9 text-white "
                    >
                         {value}
                    </p>
                    <p className=" font-medium md:text-base text-sm leading-6 text-white ">
                         {label}
                    </p>
               </div>
          </div>
     );
}

export default function TrustedBySection() {
     return (
          <section
               className="relative w-full overflow-hidden bg-[url(/images/trust-bg.png)] lg:py-39.25 py-20 bg-cover bg-no-repeat">
               <div className="relative z-10 flex flex-col items-center gap-12 px-5 w-full max-w-[1298px] mx-auto">
                    <div className="flex flex-col items-center gap-2 text-center">
                         <h3
                              className="font-semibold md:text-[32px] text-[26px] md:leading-6 text-white "
                         >
                              Trusted by Legal Professionals
                         </h3>
                         <p
                              className="font-normal text-base leading-6 text-golden-1000"
                         >
                              Join thousands of legal professionals using LexKarma
                         </p>
                    </div>

                    <div className="lg:flex grid md:grid-cols-2 gap-5 items-start w-full">
                         {stats.map((stat) => (
                              <StatCard key={stat.label} {...stat} />
                         ))}
                    </div>
               </div>
          </section >
     );
}
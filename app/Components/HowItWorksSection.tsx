const imgIcon = "/images/search-icon.svg";
const imgIcon1 = "/images/star-icon.svg";
const imgIcon2 = "/images/tick-cricle.svg";
const imgIcon3 = "/images/trend-up.svg";

interface Step {
     icon: string;
     step: string;
     title: string;
     description: string;
}

const steps: Step[] = [
     {
          icon: imgIcon,
          step: "Step 1",
          title: "Discover",
          description: "Browse and compare legal tech solutions tailored to your needs",
     },
     {
          icon: imgIcon1,
          step: "Step 2",
          title: "Evaluate",
          description: "Read reviews, check ratings, and try demos before committing",
     },
     {
          icon: imgIcon2,
          step: "Step 3",
          title: "Implement",
          description: "Get training and expert support for seamless integration",
     },
     {
          icon: imgIcon3,
          step: "Step 4",
          title: "Optimize",
          description: "Track ROI and get ongoing assistance for maximum value",
     },
];

function StepCard({ icon, step, title, description }: Step) {
     return (
          <div className="flex flex-1 flex-col items-center text-center min-w-0">
               <div className="relative flex items-center justify-center size-16 rounded-full border-4 border-white bg-white shrink-0 z-10">
                    <div
                         className="flex items-center justify-center size-14 rounded-full px-3"
                         style={{
                              backgroundImage: "linear-gradient(135deg, #B1A583 0%, #FBCB80 100%)",
                         }}
                    >
                         <img src={icon} alt={title} className="size-8 object-contain" />
                    </div>
               </div>

               <p className="mt-4 font-Inter font-semibold text-sm leading-[21px] tracking-[0.7px] uppercase text-golden-1000">
                    {step}
               </p>

               <p className="mt-2 font-Inter font-semibold text-xl leading-7 text-black-1000">
                    {title}
               </p>

               <p className="mt-2 font-Inter font-normal text-sm leading-5 text-black-1100 max-w-[272px]">
                    {description}
               </p>
          </div>
     );
}

export default function HowItWorksSection() {
     return (
          <section className="w-full bg-white py-14 md:py-20 lg:py-24">
               <div className="max-w-[1298px] mx-auto px-5">

                    {/* Heading */}
                    <div className="flex flex-col mb-10 lg:mb-12 items-center gap-2 text-center">
                         <h3 className="font-semibold text-2xl sm:text-[28px] lg:text-[32px] leading-tight text-black-1000">
                              How It Works
                         </h3>
                         <p className="font-Inter font-normal text-base leading-6 text-golden-1000">
                              Get started with LexKarma in 4 simple steps
                         </p>
                    </div>

                    {/* ── Mobile (< sm): vertical stepper ── */}
                    <div className="flex sm:hidden flex-col items-center">
                         {steps.map((step, idx) => (
                              <div key={step.step} className="flex flex-col items-center w-full">
                                   <StepCard {...step} />
                                   {idx < steps.length - 1 && (
                                        <div
                                             className="w-1 h-10 my-2 rounded-full shrink-0"
                                             style={{
                                                  backgroundImage: "linear-gradient(to bottom, #B1A583, #FBCB80)",
                                             }}
                                        />
                                   )}
                              </div>
                         ))}
                    </div>

                    {/* ── Tablet (sm → lg): 2×2 grid ── */}
                    <div className="hidden sm:grid lg:hidden grid-cols-2 gap-x-8 gap-y-12">
                         {steps.map((step, idx) => (
                              <div key={step.step} className="relative flex flex-col items-center">
                                   {/* Horizontal connector — only after col 1 in each row */}
                                   {idx % 2 === 0 && (
                                        <div
                                             className="absolute top-[32px] left-[calc(50%+32px)] right-[-50%] h-[4px] z-0"
                                             style={{
                                                  backgroundImage: "linear-gradient(to right, #B1A583, #FBCB80)",
                                             }}
                                        />
                                   )}
                                   <StepCard {...step} />
                              </div>
                         ))}
                    </div>

                    {/* ── Desktop (≥ lg): horizontal stepper ── */}
                    <div className="hidden lg:block relative w-full">
                         <div
                              className="absolute top-[32px] h-[4px] z-0"
                              style={{
                                   left: "calc(12.5%)",
                                   right: "calc(12.5%)",
                                   backgroundImage: "linear-gradient(to right, #B1A583, #FBCB80)",
                              }}
                         />
                         <div className="relative z-10 flex items-start w-full">
                              {steps.map((step) => (
                                   <StepCard key={step.step} {...step} />
                              ))}
                         </div>
                    </div>

               </div>
          </section>
     );
}

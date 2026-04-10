const categories = [
     {
          title: "Document Management",
          tools: "145 tools available",
          icon: "/images/document-icon.svg",
     },
     {
          title: "Contract Analysis",
          tools: "98 tools available",
          icon: "/images/scale-icon.svg",
     },
     {
          title: "Legal Research",
          tools: "112 tools available",
          icon: "/images/scale-icon.svg",
     },
     {
          title: "Case Management",
          tools: "87 tools available",
          icon: "/images/gift-icon.svg",
     },
     {
          title: "E-Discovery",
          tools: "56 tools available",
          icon: "/images/cms-icon.svg",
     },
     {
          title: "Time & Billing",
          tools: "73 tools available",
          icon: "/images/timer-icon.svg",
     },
];

const CategoriesGrid = () => {
     return (
          <div className="grid md:grid-cols-3 lg:gap-x-6 gap-x-3 gap-y-[18px] md:mt-12 mt-5">
               {categories.map((item, index) => (
                    <div
                         key={index}
                         className="border border-gray-1100 cursor-pointer bg-white rounded-2xl lg:p-6 p-4 group transition-all ease-in-out duration-500 categories-card hover:bg-black"
                    >
                         <div className="w-14 h-14 rounded-full flex items-center justify-center icon-bg">
                              <img src={item.icon} alt={item.title} />
                         </div>

                         <h4 className="text-xl transition ease-in-out duration-500 group-hover:text-white font-semibold mt-3 leading-7 text-black-1000">
                              {item.title}
                         </h4>

                         <p className="text-base font-normal leading-6 text-gray-1600 group-hover:text-gray-300">
                              {item.tools}
                         </p>
                    </div>
               ))}
          </div>
     );
};

export default CategoriesGrid;
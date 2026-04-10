import Link from "next/link";
import React from "react";

interface ButtonProps {
     href?: string;
     text?: string;
     variant?: "default" | "gradient";
     className?: string;
     showArrow?: boolean;
}

function Button({
     href = "/",
     text = "View all",
     variant = "default",
     className = "",
     showArrow = false,
}: ButtonProps) {
     const baseClasses =
          "text-sm font-medium leading-5 py-2.5 px-[14px] rounded-xl transition-all";

     const styles = {
          default: "text-gray-1400 bg-golden-1000 border border-gray-1100 hover:bg-golden-1100",
          gradient:
               "flex items-center justify-center gap-[6px] text-white shadow-3xl hover:opacity-90",
     } as const;
     
     return (
          <Link
               href={href}
               className={`${baseClasses} ${styles[variant]} ${className}`}
               style={
                    variant === "gradient"
                         ? {
                              background: "linear-gradient(to bottom, #222121, #615a45)",
                         }
                         : {}
               }
          >
               <span>{text}</span>

               {showArrow && (
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                         <img src="/images/chevron-right.svg" alt="" />
                    </span>
               )}
          </Link>
     );
}

export default Button;
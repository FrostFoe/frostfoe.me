"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { hoverBorderContent } from "@/lib/content";

const AceternityLogo = ({ className }: { className?: string }) => (
  <svg
    width="66"
    height="65"
    viewBox="0 0 66 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
      stroke="currentColor"
      strokeWidth="15"
      strokeMiterlimit="3.86874"
      strokeLinecap="round"
    />
  </svg>
);

export function HoverBorderGradientDemo() {
  const c = hoverBorderContent;
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName={c.rounded}
        as="button"
        className={`${c.buttonBgLight} ${c.buttonBgDark} ${c.textColorLight} ${c.textColorDark} flex items-center space-x-2`}
      >
        <AceternityLogo
          className={`h-3 w-3 ${c.logoColorLight} ${c.logoColorDark}`}
        />
        <span>{c.buttonText}</span>
      </HoverBorderGradient>
    </div>
  );
}

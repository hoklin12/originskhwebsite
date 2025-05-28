


import type React from "react";
import { MotionValue } from "framer-motion";
import NavBarWithLogoOnly from "../ui/navbar-withlogo-only";

interface SectionLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  navBackground: MotionValue<string>;
}

export default function SecondaryLayout({
  children,
  activeSection,
  scrollToSection,
  navBackground,
}: SectionLayoutProps) {
  return (
    <div className="relative bg-white text-black">
      <NavBarWithLogoOnly
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navBackground={navBackground.get()} // <-- get the raw string value
        />
      <main className="pt-24">{children}</main>
    </div>
  );
}


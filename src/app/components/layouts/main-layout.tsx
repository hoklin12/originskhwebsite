
import type React from "react";
import { MotionValue } from "framer-motion";
import NavigationBar from "../ui/navigation-bar";

interface MainLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  navBackground: MotionValue<string>;
}

export default function MainLayout({
  children,
  activeSection,
  scrollToSection,
  navBackground,
}: MainLayoutProps) {
  return (
    <div className="relative bg-white text-black">
      <NavigationBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        // navBackground={navBackground}
      navBackground={navBackground.get()} // <-- get the raw string value

      />
      <main className="pt-24">{children}</main>
    </div>
  );
}



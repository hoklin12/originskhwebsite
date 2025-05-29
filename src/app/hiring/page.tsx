"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import Footer from "../components/ui/footer";
import IntroHiringSection from "../components/sections/hiring/intro-hiring-section";
import FindUrJobSection from "../components/sections/hiring/find-ur-job-section";
import SecondaryLayout from "../components/layouts/secondary-layout";


export default function HiringPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <SecondaryLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroHiringSection/>
      <FindUrJobSection/>
      <Footer />
    </SecondaryLayout>
  );
}
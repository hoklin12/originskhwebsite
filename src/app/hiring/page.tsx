"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import MainLayout from "../components/layouts/main-layout";
import Footer from "../components/ui/footer";
import IntroHiringSection from "../components/sections/hiring/intro-hiring-section";
import FindUrJobSection from "../components/sections/hiring/find-ur-job-section";


export default function HiringPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroHiringSection/>
      <FindUrJobSection/>
      <Footer />
    </MainLayout>
  );
}
"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../hooks/use-navigation";
import MainLayout from "../layouts/main-layout";
import Footer from "../ui/footer";
import UnderConstruction from "../sections/under-construction";


export default function HiringPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <UnderConstruction />
      <Footer />
    </MainLayout>
  );
}
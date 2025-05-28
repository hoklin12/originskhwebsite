"use client";
import { useScroll, useTransform } from "framer-motion";
import MainLayout from "../components/layouts/main-layout";
import UnderConstruction from "../components/sections/under-construction";
import Footer from "../components/ui/footer";
import { useNavigation } from "../components/hooks/use-navigation";



export default function ContactPage() {
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
"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../hooks/use-navigation";
import MainLayout from "../layouts/main-layout";
import IntroStudiosSection from "../sections/studio/intro-studio-section";
import DetailStudiosSection from "../sections/studio/detail-studios-section";
import OurServicesSection from "../sections/studio/our-services-section";
import GetInTouchSection from "../sections/studio/get-in-touch-section";
import Footer from "../ui/footer";


export default function StudioPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroStudiosSection/>
      <DetailStudiosSection/>
      <OurServicesSection/>
      <GetInTouchSection/>
      <Footer />
    </MainLayout>
  );
}
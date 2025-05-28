"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import MainLayout from "../components/layouts/main-layout";
import IntroStudiosSection from "../components/sections/studios/intro-studio-section";
import DetailStudiosSection from "../components/sections/studios/detail-studios-section";
import OurServicesSection from "../components/sections/studios/our-services-section";
import GetInTouchSection from "../components/sections/studios/get-in-touch-section";
import Footer from "../components/ui/footer";


export default function StudiosPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroStudiosSection />
      <DetailStudiosSection/>
      <OurServicesSection/>
      <GetInTouchSection/>
      <Footer />
    </MainLayout>
  );
}
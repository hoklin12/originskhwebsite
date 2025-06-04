"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import MainLayout from "../components/layouts/main-layout";
import DetailPortfolioSection from "../components/sections/portfolio/detail-portfolio-section";
import Footer from "../components/ui/footer";
import ServiceSection from "../components/sections/service-seaction";
import LogoOriginsSection from "../components/sections/logo-origins-section";


export default function PortfolioPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <LogoOriginsSection/>
      <DetailPortfolioSection/>
      <ServiceSection/>
      <Footer  />
    </MainLayout>
  );
}


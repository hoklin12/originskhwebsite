"use client";
import { useScroll, useTransform } from "framer-motion";
import MainLayout from "../components/layouts/main-layout";
import Footer from "../components/ui/footer";
import { useNavigation } from "../components/hooks/use-navigation";
import IntroAboutSection from "../components/sections/about/intro-about-section";
import OurOValuesSection from "../components/sections/about/our-o-value-section";
import OurOriginsSection from "../components/sections/about/our-origins-section";
import OurInformationTeamSection from "../components/sections/about/our-information-team-section";
import TeamSection from "../components/sections/about/our-team-section";
import ServiceSection from "../components/sections/service-seaction";



export default function ContactPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroAboutSection/>
      <OurOValuesSection/>
      <ServiceSection/>
      <OurOriginsSection/>
      <OurInformationTeamSection/>
      <TeamSection/>
      <Footer />
    </MainLayout>
  );
}
// export default function Home() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600">
//         Tailwind CSS is Working! 🚀
//       </h1>
//       <img src="/originlogo.png" alt="" />
//     </main>
//   );
// }

"use client";
import { useScroll, useTransform } from "framer-motion";
import MainLayout from "./components/layouts/main-layout";
import Footer from "./components/ui/footer";
import IntroHomeSection from "./components/sections/home/intro-home-section";
import { useNavigation } from "./components/hooks/use-navigation";

export default function HomePage() {
  const { activeSection, sections, addToSectionRefs, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroHomeSection/>
      {/* <OurWorkSection/>
      <OurStudiosSection/>
      <OurClientsSection/>
      <RelatedReading/> */}
      <Footer />
    </MainLayout>
  );
}



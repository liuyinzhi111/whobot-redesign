import DigitalHumanIntro from "@/components/DigitalHumanIntro"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import MetricsSection from "@/components/sections/MetricsSection"
import EmployeeShowcase from "@/components/sections/EmployeeShowcase"
import ChallengeSection from "@/components/sections/ChallengeSection"
import AdvantageSection from "@/components/sections/AdvantageSection"
import TestimonialSection from "@/components/sections/TestimonialSection"
import FinalCTA from "@/components/sections/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <DigitalHumanIntro />
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <EmployeeShowcase />
      <ChallengeSection />
      <AdvantageSection />
      <TestimonialSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}

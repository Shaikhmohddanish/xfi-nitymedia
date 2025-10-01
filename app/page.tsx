import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import AboutSection from "./components/AboutSection"
import WhyChooseSection from "./components/WhyChooseSection"
import StatsSection from "./components/StatsSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"
import StickyPhoneButton from "./components/StickyPhoneButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <StatsSection />
      <CTASection />
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import StickyPhoneButton from "@/app/components/StickyPhoneButton"
import ServiceHero from "./_components/service-hero"
import ServiceGrid from "./_components/service-grid"
import AboutCTA from "@/app/components/about/AboutCTA"

export default function SoftwareConsultancyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <ServiceGrid />
      <AboutCTA />
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

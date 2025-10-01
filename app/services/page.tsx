import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import StickyPhoneButton from "@/app/components/StickyPhoneButton"
import ServicesHero from "@/app/services/_components/services-hero"
import ServicesOverview from "@/app/services/_components/services-overview"
import AdditionalServices from "@/app/services/_components/additional-services"
import ServicesCTA from "@/app/services/_components/services-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesOverview />
      <AdditionalServices />
      <ServicesCTA />
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

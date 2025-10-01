import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import StickyPhoneButton from "@/app/components/StickyPhoneButton"
import PricingHero from "./_components/pricing-hero"
import PricingTable from "./_components/pricing-table"
import Faq from "./_components/faq"
import AboutCTA from "@/app/components/about/AboutCTA"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PricingHero />
      <PricingTable />
      <Faq />
      <AboutCTA />
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

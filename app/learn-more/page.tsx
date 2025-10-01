import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import StickyPhoneButton from "@/app/components/StickyPhoneButton"
import LearnMoreHero from "./_components/learn-more-hero"
import OurPhilosophy from "./_components/our-philosophy"
import OurProcess from "./_components/our-process"
import OurCommitment from "./_components/our-commitment"
import MeetTheExperts from "./_components/meet-the-experts"
import AboutCTA from "@/app/components/about/AboutCTA"

export default function LearnMorePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LearnMoreHero />
      <OurPhilosophy />
      <OurProcess />
      <OurCommitment />
      <MeetTheExperts />
      <AboutCTA />
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

import Header from "../components/Header"
import Footer from "../components/Footer"
import StickyPhoneButton from "../components/StickyPhoneButton"
import AboutHero from "../components/about/AboutHero"
import AboutCards from "../components/about/AboutCards"
import ProjectApproach from "../components/about/ProjectApproach"
import WhyChooseUs from "../components/about/WhyChooseUs"
import AboutStats from "../components/about/AboutStats"
import AboutCTA from "../components/about/AboutCTA"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutCards />
      <ProjectApproach />
      <WhyChooseUs />
      <AboutStats />
      <AboutCTA />
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

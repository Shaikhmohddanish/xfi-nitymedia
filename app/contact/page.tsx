import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import StickyPhoneButton from "@/app/components/StickyPhoneButton"
import ContactHero from "./_components/contact-hero"
import ContactDetails from "./_components/contact-details"
import ContactForm from "./_components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import StickyPhoneButton from "@/app/components/StickyPhoneButton"
import QuoteHero from "./_components/quote-hero"
import QuoteForm from "./_components/quote-form"

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <QuoteHero />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <QuoteForm />
        </div>
      </div>
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import StickyPhoneButton from "@/app/components/StickyPhoneButton"
import PayHero from "./_components/pay-hero"
import PaypalForm from "./_components/paypal-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Lock } from "lucide-react"

export default function PayPage() {
  const paypalClientId = "ATLP3hfDjiVBKlzJTX7vJq6ZdZAdD0Ikobs1HPQh0g5MkU4gqMwZH4qWISPhLp-3SXxcHNUaLieMb8QJ"

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <PayHero />
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto bg-gray-100 p-3 rounded-full w-fit mb-4">
                <Lock className="w-8 h-8 text-gray-600" />
              </div>
              <CardTitle className="text-3xl">Secure Payment</CardTitle>
              <CardDescription className="text-lg">Complete your payment in a few simple steps.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">1. Enter Your Payment Amount</h3>
                <p className="text-gray-500">Please enter the total amount in USD as specified on your invoice.</p>
              </div>
              <PaypalForm paypalClientId={paypalClientId} />
            </CardContent>
            <CardFooter className="flex-col items-center text-center text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>All transactions are secure and encrypted by PayPal.</span>
              </div>
              <p className="mt-2">
                You will be redirected to PayPal to complete your payment. You can use your PayPal balance or a
                credit/debit card.
              </p>
              <img
                src="/images/payment-logo.jpg"
                alt="Secure payment provider logos including PayPal, Visa, and Mastercard"
                className="mt-4 h-10 object-contain"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
      <StickyPhoneButton />
    </main>
  )
}

import Link from "next/link"

export default function ServicesCTA() {
  return (
    <section className="py-16 bg-gray-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Partner with xfi-nitymedia to elevate your brand, reach your audience, and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-gray-600 px-8 py-3 rounded-md hover:bg-gray-50 font-medium"
            >
              REQUEST A QUOTE
            </Link>
            <Link
              href="/contact"
              className="bg-gray-600 text-white border border-white px-8 py-3 rounded-md hover:bg-gray-700 font-medium"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

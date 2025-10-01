import Link from "next/link"

export default function AboutCTA() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">Get Started With Us Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to take your business to the next level? Contact us today to schedule a consultation and discover
                how xfi-nitymediacan help you achieve your goals. Let's transform your vision into reality, together.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="tel:8889291991"
                className="bg-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-700 font-medium inline-block"
              >
                888 929 1991
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

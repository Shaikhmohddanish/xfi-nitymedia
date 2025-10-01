import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Get Started With Us Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to take your business to the next level? Contact us today to schedule a consultation and discover
                how xfint-mediacan help you achieve your goals. Let's transform your vision into reality, together.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="tel:8884040304"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium inline-block"
              >
                888 404 0304
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

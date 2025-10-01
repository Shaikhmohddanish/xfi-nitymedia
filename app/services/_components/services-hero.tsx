import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesHero() {
  return (
    <section className="bg-blue-500 text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 leading-relaxed">
            Comprehensive digital solutions tailored to grow your business and establish a powerful online presence.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium"
          >
            Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

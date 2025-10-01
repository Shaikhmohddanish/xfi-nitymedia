import Link from "next/link"

export default function MeetTheExperts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Meet Our Team of Experts</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Our greatest asset is our team of passionate designers, developers, strategists, and marketers. Each member
          brings a wealth of experience and a creative spirit to the table, working collaboratively to solve complex
          challenges and deliver outstanding results.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium inline-block"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  )
}

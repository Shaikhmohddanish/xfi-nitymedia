import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-blue-500 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Create amazing business websites and marketing solutions.
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Xfint-media – Powering Connectivity, Driving Success!
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Join the power of digital transformation with xfint-media—your go-to destination for cutting-edge web
            design, development, business consultation, and digital marketing solutions. We blend creativity,
            technology, and strategy to elevate your brand and deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/learn-more"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium text-center"
            >
              LEARN MORE
            </Link>
            <Link
              href="tel:8884040304"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium text-center"
            >
              888 404 0304
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

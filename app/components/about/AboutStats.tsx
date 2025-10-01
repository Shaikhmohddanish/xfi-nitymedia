import Link from "next/link"

export default function AboutStats() {
  const stats = [
    { number: "87", label: "Satisfied Clients" },
    { number: "150", label: "Projects Completed" },
    { number: "28", label: "Accolades Earned" },
    { number: "56K+", label: "Lines of Code" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Some Numbers</h2>
          <p className="text-gray-600 max-w-md">
            Integrity, professionalism, and excellence are at the core of everything we do.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-blue-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="tel:8884040304"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium inline-block"
          >
            888 404 0304
          </Link>
        </div>
      </div>
    </section>
  )
}

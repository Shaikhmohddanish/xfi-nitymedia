export default function StatsSection() {
  const stats = [
    { number: "7+", label: "Years of Experience" },
    { number: "350+", label: "Happy Clients" },
    { number: "7500+", label: "Hours of Work" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-600 mb-12">
          Let's create something extraordinary, together.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-gray-600 mb-2">{stat.number}</div>
              <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

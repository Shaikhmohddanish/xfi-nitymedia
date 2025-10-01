export default function AboutHero() {
  return (
    <section className="bg-gray-500 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      ></div>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-500/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Welcome to The xfi-nitymedia</h2>
          <p className="text-lg md:text-xl mb-4">
            Where innovation, expertise, and dedication converge to drive digital excellence.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            As a leading provider of web design, development, business consultation, and marketing solutions, we are
            committed to helping businesses thrive in today's ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

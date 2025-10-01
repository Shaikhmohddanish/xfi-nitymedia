export default function LearnMoreHero() {
  return (
    <section className="bg-gray-800 text-white py-20 md:py-28 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/learn-more-hero.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Driving Digital Transformation</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover how Xfint-media partners with businesses to turn ambitious ideas into tangible success stories. We
          don't just build websites; we build digital futures.
        </p>
      </div>
    </section>
  )
}

export default function ServiceHero() {
  return (
    <section className="bg-gray-700 text-white py-20 md:py-28 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/web-design.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Designing And Development Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We specialize in creating visually stunning, user-friendly, and responsive websites that effectively represent
          your brand and drive results. Whether you're a small business looking to establish an online presence or a
          large corporation in need of a custom web solution, our experienced team of designers and developers is here
          to bring your vision to life.
        </p>
      </div>
    </section>
  )
}

export default function ServiceHero() {
  return (
    <section className="bg-gray-700 text-white py-20 md:py-28 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/digital-marketing.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Marketing Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We deliver data-driven digital marketing strategies that drive traffic, generate leads, and boost your ROI.
          Our holistic approach covers all aspects of online marketing to help you connect with your audience and grow
          your brand.
        </p>
      </div>
    </section>
  )
}

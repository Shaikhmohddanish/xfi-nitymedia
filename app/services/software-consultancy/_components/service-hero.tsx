export default function ServiceHero() {
  return (
    <section className="bg-gray-700 text-white py-20 md:py-28 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/software-consultancy.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Consultancy Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We provide expert software consultancy to help you navigate the complexities of technology. From strategy to
          implementation, our team offers tailored solutions to optimize your operations, drive innovation, and achieve
          your business goals.
        </p>
      </div>
    </section>
  )
}

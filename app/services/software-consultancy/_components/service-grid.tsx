import { Code2, Cloud, Briefcase, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function ServiceGrid() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "We build bespoke software solutions from the ground up, designed to meet your unique business requirements. Our development process is agile, transparent, and focused on delivering high-quality, scalable, and maintainable code.",
    },
    {
      icon: Briefcase,
      title: "Enterprise Software Solutions",
      description:
        "Streamline your business processes with our enterprise software solutions. We specialize in developing and integrating systems for ERP, CRM, and other core business functions to improve efficiency and data management across your organization.",
    },
    {
      icon: Cloud,
      title: "Cloud Application Development",
      description:
        "Leverage the power of the cloud with our custom cloud application development services. We build secure, scalable, and resilient applications on leading platforms like AWS, Azure, and Google Cloud, enabling you to innovate faster and reduce infrastructure costs.",
    },
    {
      icon: Lightbulb,
      title: "IT Strategy & Consulting",
      description:
        "Our experienced consultants work with you to develop a comprehensive IT strategy that aligns with your business objectives. We provide insights on technology roadmaps, digital transformation, and process optimization to give you a competitive edge.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/software-detail.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-500 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-md mr-4">
                  <service.icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="tel:8889291991"
            className="bg-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-700 font-medium inline-block"
          >
            888 929 1991
          </Link>
        </div>
      </div>
    </section>
  )
}

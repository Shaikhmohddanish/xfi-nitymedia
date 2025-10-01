import { Edit, Monitor, Send } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      icon: Edit,
      title: "Web Design & Development",
      description:
        "Create engaging digital experiences that captivate your audience and make a lasting impact. From modern designs to seamless user interfaces, we craft standout websites. Our expert developers build custom, scalable solutions tailored to your business needs.",
      link: "/services/web-design-development",
    },
    {
      icon: Monitor,
      title: "Software Consultancy",
      description:
        "Empower your business with expert software consultancy and strategic solutions. Whether you're a startup innovating in the market or an established enterprise optimizing operations, our experienced consultants guide you every step of the way. We deliver tailored software solutions to enhance efficiency, scalability, and growth.",
      link: "/services/software-consultancy",
    },
    {
      icon: Send,
      title: "Digital Marketing",
      description:
        "Drive traffic, generate leads, and maximize conversions with our comprehensive marketing services. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management and content marketing, we help you reach your target audience and achieve measurable results.",
      link: "/services/digital-marketing",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link
                href={service.link}
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 font-medium inline-block"
              >
                LEARN MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

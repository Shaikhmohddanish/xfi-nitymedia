import { ArrowRight, Code, Layout, LineChart, MonitorSmartphone, PenTool, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesOverview() {
  const services = [
    {
      icon: Layout,
      title: "Web Design & Development",
      description:
        "Create engaging digital experiences that captivate your audience and make a lasting impact. From modern designs to seamless user interfaces, we craft standout websites.",
      features: ["Responsive Design", "Custom UI/UX", "E-commerce Solutions", "CMS Integration"],
      image: "/images/web-design.jpg",
      link: "/services/web-design-and-development",
    },
    {
      icon: Code,
      title: "Software Consultancy",
      description:
        "Empower your business with expert software consultancy and strategic solutions. We deliver tailored software solutions to enhance efficiency, scalability, and growth.",
      features: ["Software Architecture", "Technical Strategy", "Technology Selection", "Performance Optimization"],
      image: "/images/software-consultancy.jpg",
      link: "/services/software-consultancy",
    },
    {
      icon: Send,
      title: "Digital Marketing",
      description:
        "Drive traffic, generate leads, and maximize conversions with our comprehensive marketing services that help you reach your target audience and achieve measurable results.",
      features: ["SEO & Content Marketing", "Social Media Management", "PPC Advertising", "Email Marketing"],
      image: "/images/digital-marketing.jpg",
      link: "/services/digital-marketing",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Comprehensive Digital Solutions</h2>
          <p className="text-gray-600 text-lg">
            We offer a full range of services to help your business thrive in the digital landscape, from stunning
            websites to strategic marketing campaigns.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="relative">
                <div className="bg-blue-100 rounded-lg aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <service.icon className="w-10 h-10" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-blue-100 text-blue-600 w-6 h-6 rounded-full mr-3 mt-0.5">
                        <span className="text-sm font-bold">{i + 1}</span>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Learn more about {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

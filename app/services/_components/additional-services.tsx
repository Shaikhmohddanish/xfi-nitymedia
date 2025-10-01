import { Clock, Award, CheckCircle2, BarChart, Globe2, Users } from "lucide-react"

export default function AdditionalServices() {
  const additionalServices = [
    {
      icon: Clock,
      title: "Website Maintenance",
      description: "Keep your website up-to-date, secure, and running smoothly with our maintenance services.",
    },
    {
      icon: Award,
      title: "Branding & Identity",
      description: "Develop a cohesive brand identity that resonates with your audience and sets you apart.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Rigorous testing to ensure your digital products are bug-free and deliver an exceptional experience.",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Gain insights into your website performance and user behavior to make data-driven decisions.",
    },
    {
      icon: Globe2,
      title: "Multilingual Solutions",
      description: "Expand your reach with multilingual websites and content strategies for global audiences.",
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training and ongoing support to help you manage your digital platforms.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-600">Additional Services</h2>
          <p className="text-gray-600 text-lg">
            Beyond our core offerings, we provide a range of specialized services to meet all your digital needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

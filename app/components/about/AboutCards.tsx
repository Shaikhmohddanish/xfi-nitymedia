export default function AboutCards() {
  const services = [
    "Graphic/Logo Design",
    "UI UX Design",
    "Website Development",
    "Digital Marketing",
    "Social Media",
    "2D Animation/Explainer Videos",
    "eCommerce Store",
    "Business Consultation",
    "Web Application",
    "Mobile Application",
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Who Are We */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-12 h-1 bg-gray-600 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-400 mb-6">Who Are We</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to revolutionize the way businesses approach digital transformation, xfi-nitymediahas
              quickly emerged as a trusted partner for organizations seeking to maximize their online potential. With a
              team of passionate professionals, each bringing a unique set of skills and experiences to the table, we
              have built a culture of collaboration, creativity, and continuous improvement.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-12 h-1 bg-gray-600 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-400 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At xfi-nitymedia, our mission is simple: to empower businesses to succeed in the digital age. Whether it's
              creating stunning websites, developing cutting- edge software solutions, or devising strategic marketing
              campaigns, we are driven by a relentless commitment to delivering results that exceed expectations.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-12 h-1 bg-gray-600 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-400 mb-6">What We Do</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

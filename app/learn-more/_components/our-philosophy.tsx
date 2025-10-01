import { Lightbulb, Users, Shield } from "lucide-react"

export default function OurPhilosophy() {
  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation at the Core",
      description:
        "We believe that true progress is born from a relentless pursuit of innovation. Our team stays at the forefront of technology and design trends to deliver solutions that are not just current, but future-proof.",
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description:
        "Your vision is our blueprint. We work with you, not just for you. This partnership approach ensures that the final product is a true reflection of your goals, infused with our expertise.",
    },
    {
      icon: Shield,
      title: "Unwavering Integrity",
      description:
        "Trust is the foundation of every successful project. We are committed to transparency, honest communication, and ethical practices in everything we do, ensuring a professional and reliable experience.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Our Guiding Principles</h2>
          <p className="text-lg text-gray-600">
            These are the values that guide our work, our partnerships, and our commitment to excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <principle.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

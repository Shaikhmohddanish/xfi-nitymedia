import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "499",
      description: "For small businesses and startups.",
      features: ["Custom Website Design (5 pages)", "Responsive Design", "Basic SEO Setup", "1 Month Support"],
      isPopular: false,
    },
    {
      name: "Standard",
      price: "999",
      description: "For growing businesses.",
      features: [
        "Custom Website Design (10 pages)",
        "Responsive Design",
        "Advanced SEO Setup",
        "CMS Integration",
        "3 Months Support",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      price: "1999",
      description: "For established enterprises.",
      features: [
        "Custom Website Design (Unlimited pages)",
        "E-commerce Functionality",
        "Advanced SEO & Marketing",
        "Dedicated Project Manager",
        "6 Months Support",
      ],
      isPopular: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg p-8 flex flex-col ${
                plan.isPopular ? "border-2 border-blue-600" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="bg-gray-600 text-white text-sm font-bold uppercase tracking-wider px-4 py-1 rounded-full self-center -mt-12 mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-center mb-6">{plan.description}</p>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/one-time</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gray-600 hover:bg-gray-700">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

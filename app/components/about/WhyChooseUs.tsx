"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function WhyChooseUs() {
  const [openSection, setOpenSection] = useState("Best Quality Designs")

  const sections = [
    {
      title: "Best Quality Designs",
      content:
        "We thrive on innovation, constantly pushing the boundaries of creativity and technology to deliver cutting-edge solutions. Whether it's incorporating the latest design trends or leveraging emerging technologies, we stay ahead of the curve to ensure your business remains competitive in today's digital landscape.",
    },
    {
      title: "Client-Centric Approach",
      content:
        "Our approach is centered around understanding your unique needs and delivering personalized solutions that align with your business objectives.",
    },
    {
      title: "Result Oriented Projects",
      content:
        "Every project we undertake is designed to deliver measurable results and drive your business forward with proven strategies and methodologies.",
    },
    {
      title: "Dynamic Adaptability",
      content:
        "We adapt quickly to changing requirements and market conditions, ensuring your projects remain relevant and effective.",
    },
    {
      title: "Customized Solutions",
      content:
        "No two businesses are alike, which is why we create tailored solutions that perfectly match your specific requirements and goals.",
    },
    {
      title: "Professional Support",
      content:
        "Our dedicated support team is always available to assist you with any questions or concerns throughout your project journey.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/why-choose-us.jpg"
              alt="A team collaborating on digital solutions in a modern office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-8">Why Choose Us?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With a team of seasoned professionals in web design, development, business consultation, and marketing, we
              bring a wealth of expertise to every project. Our diverse skill set allows us to tackle challenges from
              multiple angles, delivering comprehensive solutions that drive success.
            </p>

            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenSection(openSection === section.title ? "" : section.title)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                  >
                    <span
                      className={`font-medium ${openSection === section.title ? "text-gray-600" : "text-gray-700"}`}
                    >
                      {section.title}
                    </span>
                    {openSection === section.title ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openSection === section.title && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

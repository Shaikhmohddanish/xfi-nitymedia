export default function WhyChooseSection() {
  const reasons = [
    {
      number: "1.",
      title: "Innovative Approach:",
      description:
        "We thrive on pushing the boundaries of creativity and technology to deliver solutions that inspire and engage.",
    },
    {
      number: "2.",
      title: "Customized Solutions:",
      description:
        "No two businesses are alike, which is why we take a personalized approach to every project, ensuring our solutions align with your unique goals and objectives.",
    },
    {
      number: "3.",
      title: "Collaborative Partnership:",
      description:
        "We believe in fostering strong, long-term relationships with our clients built on trust, transparency, and open communication.",
    },
    {
      number: "4.",
      title: "Proven Track Record:",
      description:
        "With years of experience and a diverse portfolio of successful projects, we have the expertise to deliver results that exceed expectations.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Xfint-media?</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <span className="font-bold text-lg flex-shrink-0">{reason.number}</span>
              <div>
                <span className="font-bold text-lg">{reason.title}</span>
                <span className="text-gray-600 ml-1">{reason.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

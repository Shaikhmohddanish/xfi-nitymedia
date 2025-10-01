import Link from "next/link"

export default function ProjectApproach() {
  const approachSteps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We begin by delving deep into your business to understand your unique challenges, goals, and opportunities. Through thorough discovery sessions, we uncover valuable insights that inform our strategic approach.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "We work closely with you to define your goals, objectives, and desired outcomes. By clearly defining your vision from the outset, we ensure that every aspect of our work aligns with your overarching mission, guiding our efforts towards achieving meaningful results.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Armed with a thorough understanding of your business, we employ design thinking principles to develop creative and innovative solutions. From user-centric designs to intuitive user experiences, we prioritize human-centered design to drive engagement and satisfaction.",
    },
    {
      number: "04",
      title: "Develop",
      description:
        "With a team of skilled developers, we bring your vision to life with precision and expertise. Our development process is guided by industry best practices and quality standards, ensuring robust, scalable, and future-proof solutions.",
    },
    {
      number: "05",
      title: "Deploy",
      description:
        "Our deployment process is methodical and efficient, ensuring seamless integration and minimal disruption to your operations. From web applications to marketing campaigns, we deploy your digital assets with care and expertise, enabling you to launch confidently and achieve immediate impact.",
    },
    {
      number: "06",
      title: "Deliver",
      description:
        "Our commitment to your success doesn't end with project delivery. We provide ongoing support and maintenance to ensure your digital assets remain secure, up-to-date, and optimized for performance. Your success is our priority, and we're here to support you every step of the way.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-400 mb-16">Our Project Approach</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {approachSteps.slice(0, 3).map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-gray-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-gray-400 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {approachSteps.slice(3, 6).map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-gray-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-gray-400 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
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

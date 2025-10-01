import { Search, MousePointerClick, Share2, FileText } from "lucide-react"
import Link from "next/link"

export default function ServiceGrid() {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Increase your visibility on search engines and attract organic traffic. We use proven on-page, off-page, and technical SEO techniques to improve your rankings for keywords that matter most to your business.",
    },
    {
      icon: MousePointerClick,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Get immediate results with targeted PPC campaigns. We manage your ads on platforms like Google Ads and Bing Ads, optimizing for clicks, conversions, and a high return on ad spend (ROAS).",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage with your audience and build a loyal community on social media. We create and execute strategies for platforms like Facebook, Instagram, LinkedIn, and Twitter to increase brand awareness and drive engagement.",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Attract and retain a clearly defined audience with valuable, relevant content. From blog posts and articles to videos and infographics, we create content that establishes your authority and drives profitable customer action.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/marketing-detail.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-md mr-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="tel:8884040304"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium inline-block"
          >
            888 404 0304
          </Link>
        </div>
      </div>
    </section>
  )
}

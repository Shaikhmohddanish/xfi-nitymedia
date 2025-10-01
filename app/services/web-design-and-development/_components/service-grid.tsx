import { LayoutDashboard, Code, ShoppingCart, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ServiceGrid() {
  const services = [
    {
      icon: LayoutDashboard,
      title: "Custom Website Design",
      description:
        "Our team will work closely with you to understand your brand, goals, and target audience, and create a custom website design that reflects your unique identity and meets your business objectives. From concept to completion, we'll ensure that your website is visually appealing, easy to navigate, and optimized for conversions.",
    },
    {
      icon: Code,
      title: "Website Development and Maintenance",
      description:
        "With the increasing use of mobile devices, it's essential to have a responsive website that adapts seamlessly to different screen sizes and devices. Our developers will build a responsive website that delivers a consistent and user-friendly experience across desktops, tablets, and smartphones, ensuring that your website looks great and functions flawlessly on all devices.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Whether you're selling products or services online, we'll design and develop an e-commerce website that meets your specific needs and goals. From intuitive product catalogs and secure payment gateways to inventory management and order tracking, we'll create a seamless and secure online shopping experience for your customers.",
    },
    {
      icon: BookOpen,
      title: "Content Management Systems (CMS)",
      description:
        "We'll integrate a user-friendly content management system (CMS) into your website, such as WordPress, Joomla, or Drupal, that allows you to easily update and manage your website's content without any technical knowledge. With a CMS-powered website, you'll have full control over your website's content, making it easy to keep your site fresh, relevant, and engaging.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/web-design-detail.jpg')" }}
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

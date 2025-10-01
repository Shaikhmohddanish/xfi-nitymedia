import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-lg leading-relaxed">
              xfi-nitymedia is your reliable partner for seamless and high-speed digital solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <nav className="space-y-2">
              <Link href="/" className="block hover:text-gray-200">
                Home
              </Link>
              <Link href="/about" className="block hover:text-gray-200">
                About
              </Link>
              <Link href="/services" className="block hover:text-gray-200">
                Services
              </Link>
              <Link href="/contact" className="block hover:text-gray-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p>Email: support@xfi-nitymedia.com</p>
              <p>Toll free number : 888 929 1991</p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="hover:text-gray-200">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-300 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p>Copyright © 2024 - All right reserved by xfi-nitymedia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

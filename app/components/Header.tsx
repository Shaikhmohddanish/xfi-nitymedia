"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = ["Web Design And Development", "Software Consultancy", "Digital Marketing"]

  const handleLinkClick = () => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  const handleServiceLinkClick = () => {
    window.scrollTo(0, 0)
    setIsServicesOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="bg-gray-500 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={handleLinkClick}>
              <Image src="/logo.png" alt="xfi-nitymedia" width={40} height={40} className="w-10 h-10" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-gray-200 font-medium" onClick={handleLinkClick}>
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-200 font-medium" onClick={handleLinkClick}>
                About
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-white hover:text-gray-200 font-medium"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-600 rounded-md shadow-lg py-2 z-50">
                    <Link
                      href="/services"
                      className="block px-4 py-3 text-white hover:bg-gray-700 border-b border-blue-500"
                      onClick={handleServiceLinkClick}
                    >
                      All Services
                    </Link>
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-3 text-white hover:bg-gray-700 border-b border-blue-500 last:border-b-0"
                        onClick={handleServiceLinkClick}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/contact" className="text-white hover:text-gray-200 font-medium" onClick={handleLinkClick}>
                Contact
              </Link>
              <Link href="/pricing" className="text-white hover:text-gray-200 font-medium" onClick={handleLinkClick}>
                Pricing
              </Link>
              <Link href="/pay" className="text-white hover:text-gray-200 font-medium" onClick={handleLinkClick}>
                Pay
              </Link>
              <Link
                href="/quote"
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 font-medium"
                onClick={handleLinkClick}
              >
                REQUEST QUOTE
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-600 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-white hover:text-gray-200 font-medium px-4" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-gray-200 font-medium px-4"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
                <div className="px-4">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center text-white hover:text-gray-200 font-medium w-full"
                  >
                    Services
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link
                        href="/services"
                        className="block text-white hover:text-gray-200 py-1"
                        onClick={handleServiceLinkClick}
                      >
                        All Services
                      </Link>
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-white hover:text-gray-200 py-1"
                          onClick={handleServiceLinkClick}
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200 font-medium px-4"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
                <Link
                  href="/pricing"
                  className="text-white hover:text-gray-200 font-medium px-4"
                  onClick={handleLinkClick}
                >
                  Pricing
                </Link>
                <Link href="/pay" className="text-white hover:text-gray-200 font-medium px-4" onClick={handleLinkClick}>
                  Pay
                </Link>
                <Link
                  href="/quote"
                  className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 font-medium mx-4 text-center"
                  onClick={handleLinkClick}
                >
                  REQUEST QUOTE
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

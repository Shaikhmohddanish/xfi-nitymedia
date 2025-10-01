"use client"

import Link from "next/link"

export default function StickyPhoneButton() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Link
        href="tel:8889291991"
        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 font-medium shadow-lg transition-colors duration-200"
      >
        888 929 1991
      </Link>
    </div>
  )
}

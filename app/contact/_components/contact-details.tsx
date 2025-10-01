import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactDetails() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Have a question or a project in mind? We'd love to hear from you. Use the form or the contact details below to
        get in touch. Our team will get back to you as soon as possible.
      </p>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="p-3 bg-gray-100 rounded-md mr-4">
            <MapPin className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
            <p className="text-gray-600">123 Digital Avenue, Tech City, TX 75001</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="p-3 bg-gray-100 rounded-md mr-4">
            <Phone className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
            <p className="text-gray-600">888 929 1991</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="p-3 bg-gray-100 rounded-md mr-4">
            <Mail className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
            <p className="text-gray-600">support@xfi-nitymedia.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

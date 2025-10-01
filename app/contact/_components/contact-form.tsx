"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    alert("Thank you for your message!")
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="font-semibold">
            Your Name
          </Label>
          <Input id="name" type="text" placeholder="John Doe" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email" className="font-semibold">
            Your Email
          </Label>
          <Input id="email" type="email" placeholder="john.doe@example.com" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="subject" className="font-semibold">
            Subject
          </Label>
          <Input id="subject" type="text" placeholder="Project Inquiry" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="message" className="font-semibold">
            Your Message
          </Label>
          <Textarea id="message" placeholder="Tell us about your project..." required className="mt-2" rows={5} />
        </div>
        <Button type="submit" className="w-full bg-gray-600 hover:bg-gray-700">
          Send Message
        </Button>
      </form>
    </div>
  )
}

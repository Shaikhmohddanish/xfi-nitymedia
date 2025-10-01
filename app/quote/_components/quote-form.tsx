"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
    file: null as File | null,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, file: e.target.files?.[0] || null }))
    }
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form Data Submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Alert variant="default" className="bg-green-50 border-green-200">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-800">Thank You!</AlertTitle>
        <AlertDescription className="text-green-700">
          Your quote request has been submitted successfully. Our team will review your project details and get back to
          you shortly.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-2">Project Details</h2>
        <p className="text-gray-500 text-center">Step {step} of 3</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
          <div
            className="bg-gray-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" value={formData.name} onChange={handleChange} required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="company">Company Name (Optional)</Label>
              <Input id="company" value={formData.company} onChange={handleChange} className="mt-2" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Project Details</h3>
            <div>
              <Label htmlFor="service">What service are you interested in?</Label>
              <Select onValueChange={(value) => handleSelectChange("service", value)} value={formData.service}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-design">Web Design & Development</SelectItem>
                  <SelectItem value="software-consultancy">Software Consultancy</SelectItem>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">What is your estimated budget?</Label>
              <Select onValueChange={(value) => handleSelectChange("budget", value)} value={formData.budget}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select a budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value=">25k">Over $25,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="timeline">What is your desired timeline?</Label>
              <Select onValueChange={(value) => handleSelectChange("timeline", value)} value={formData.timeline}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select a timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<1m">Under 1 Month</SelectItem>
                  <SelectItem value="1-3m">1-3 Months</SelectItem>
                  <SelectItem value="3-6m">3-6 Months</SelectItem>
                  <SelectItem value=">6m">Over 6 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Additional Information</h3>
            <div>
              <Label htmlFor="description">Please describe your project in detail</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="mt-2"
                placeholder="Tell us about your goals, target audience, required features, etc."
              />
            </div>
            <div>
              <Label htmlFor="file">Attach a file (e.g., project brief, mockups)</Label>
              <Input id="file" type="file" onChange={handleFileChange} className="mt-2" />
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
          )}
          <div /> {/* Spacer */}
          {step < 3 && (
            <Button type="button" onClick={nextStep} className="bg-gray-600 hover:bg-gray-700">
              Next
            </Button>
          )}
          {step === 3 && (
            <Button type="submit" className="bg-gray-600 hover:bg-gray-700">
              Submit Quote Request
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

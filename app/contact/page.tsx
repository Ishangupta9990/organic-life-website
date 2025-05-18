'use client';

import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import CatalogDownloadButton from "@/components/catalog-download-button"

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on submit
  
    const form = e.currentTarget; // Get form element
    const formData = new FormData(form); // Read all form fields
  
    // Create a JSON object to send to backend
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
  
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send data as JSON
      });
  
      if (res.ok) {
        alert("✅ Message sent successfully!");
        form.reset(); // Clear the form
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Email send error:", error);
      alert("⚠️ Something went wrong.");
    }
  };
  
  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out to us for any queries about our organic products.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-green-700 text-white p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p>+91-9555930712</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p>info@organiclifenow.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <p>ORGANIC LIFE ENTERPRISES</p>
                    <p>FATEHPUR, U.P-212601</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-green-100 text-lg font-medium mb-2">Our Mission</p>
                <p className="text-green-100">
                  At Organic Life Enterprises, we are committed to providing high-quality organic products that are good
                  for nature and good for you.
                </p>
              </div>

              {/* Catalog Download Button */}
              <div className="mt-8">
                <p className="text-green-100 text-lg font-medium mb-3">Explore Our Products</p>
                <CatalogDownloadButton className="bg-white text-green-700 hover:bg-green-100" />
              </div>
            </div>

            <div className="lg:w-3/5 p-8">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Send us a message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission logic here (API call, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Page Header */}
      <div className="mb-12 border-b pb-4">
        <h1 className="font-header text-5xl font-bold mt-2 text-charcoal">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          We'd love to hear from you. Whether it's a question about our products
          or ethical sourcing, our team is ready to help.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="font-header text-3xl font-bold text-charcoal mb-6">
            Send Us a Message
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-ruby focus:border-ruby transition duration-150"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-ruby focus:border-ruby transition duration-150"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-ruby focus:border-ruby transition duration-150"
                  placeholder="Inquiry about Yak Cheese / Press Request"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-ruby focus:border-ruby transition duration-150"
                  placeholder="I would like to know more about the harvesting process..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-ruby text-white font-semibold py-3 rounded-lg shadow-md hover:bg-red-900 transition duration-300"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-lg">
              <p className="font-semibold">Thank You!</p>
              <p>
                Your message has been received. A Ruby Valley representative will
                respond to you within 24–48 hours.
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Details & Map */}
        <div className="lg:col-span-1 space-y-8">
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-header text-2xl font-bold text-charcoal mb-4 border-b pb-2">
              Our Details
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <span className="text-ruby text-xl">📍</span>
                <div>
                  <p className="font-semibold">Headquarters & Distribution:</p>
                  <p>145 Peakview Plaza, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-ruby text-xl">📞</span>
                <div>
                  <p className="font-semibold">Phone Support:</p>
                  <p>+977 123 4567 (Mon–Fri, 9am – 5pm NPT)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-ruby text-xl">📧</span>
                <div>
                  <p className="font-semibold">Customer Service:</p>
                  <a
                    href="mailto:support@rubyvalley.com"
                    className="text-ruby hover:underline"
                  >
                    support@rubyvalley.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-header text-2xl font-bold text-charcoal mb-3">
              Our Location
            </h3>
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 italic">
              [Map Placeholder: Himalayan Office]
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

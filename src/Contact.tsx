import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80"
            alt="Coastal office"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coastal-sky/80 to-coastal-water/80" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Contact Us</h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            We're here to help bring your vision to life. Reach out to us for any questions or concerns.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-coastal-sky">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-coastal-water mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">(910) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-coastal-water mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">contact@hasinskipainting.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-coastal-water mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">123 Coastal Way<br />Wilmington, NC 28401</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-coastal-water mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 h-64 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106162.91874606534!2d-77.95644354179687!3d34.225726899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f5a20debaed5%3A0x5e66493884093032!2sWilmington%2C%20NC!5e0!3m2!1sen!2sus!4v1645564奇迹"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-coastal-sky mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-2" />
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-coastal-water text-white px-6 py-3 rounded-md hover:bg-coastal-sky transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
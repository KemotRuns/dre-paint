import React from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Paintbrush as Paint, Star } from 'lucide-react';

interface LocationPageProps {
  location: {
    name: string;
    description: string;
  };
  onBack: () => void;
}

function LocationPage({ location, onBack }: LocationPageProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const emailBody = `
Location: ${location.name}
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone')}
Message: ${formData.get('message')}
    `.trim();

    const mailtoLink = `mailto:ahasinski95@gmail.com?subject=Inquiry from ${location.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] bg-gradient-to-r from-coastal-sky to-coastal-water" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <button
              onClick={onBack}
              className="flex items-center text-white mb-8 hover:text-coastal-sand transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Service Areas
            </button>
            <h1 className="text-4xl font-bold text-white mb-4">Professional Painting Services in {location.name}</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {location.description}
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-coastal-sky mb-6">Our Services in {location.name}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Paint className="h-6 w-6 text-coastal-water mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interior Painting</h3>
                  <p className="text-gray-600">
                    Transform your {location.name} home with our premium interior painting services, 
                    tailored to the coastal lifestyle and local architectural styles.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Paint className="h-6 w-6 text-coastal-water mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Exterior Painting</h3>
                  <p className="text-gray-600">
                    Protect your home from {location.name}'s coastal weather while enhancing its curb appeal 
                    with our durable exterior painting solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Paint className="h-6 w-6 text-coastal-water mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Specialized Coastal Finishes</h3>
                  <p className="text-gray-600">
                    We use specialized coatings and techniques designed to withstand the unique 
                    coastal environment of {location.name}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-coastal-sky mb-6">Why Choose Us in {location.name}</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-coastal-water mr-3" />
                <p className="text-gray-700">Local expertise in {location.name}'s architectural styles</p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-coastal-water mr-3" />
                <p className="text-gray-700">Understanding of coastal weather challenges</p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-coastal-water mr-3" />
                <p className="text-gray-700">Premium, weather-resistant materials</p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-coastal-water mr-3" />
                <p className="text-gray-700">Experienced local team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-coastal-sky mb-6">Contact Us in {location.name}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                required
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

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-coastal-water mr-3" />
              <div>
                <p className="text-sm text-gray-500">Call us</p>
                <p className="text-lg font-semibold">1 (910) 599-7008</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-coastal-water mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email us</p>
                <p className="text-lg font-semibold">ahasinski95@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-coastal-water mr-3" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-semibold">{location.name}, NC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
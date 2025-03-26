import React, { useState } from 'react';
import { Paintbrush as Paint, Phone, Mail, Calendar } from 'lucide-react';

function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    projectSize: '',
    preferredDate: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
            alt="Paint swatches"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coastal-sky/80 to-coastal-water/80" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Request a Free Quote</h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a detailed estimate.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-coastal-sky flex items-center">
                <Paint className="h-6 w-6 mr-2" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Property Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-coastal-sky flex items-center">
                <Mail className="h-6 w-6 mr-2" />
                Project Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="color-consultation">Color Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700">Project Size</label>
                  <select
                    id="projectSize"
                    name="projectSize"
                    value={formData.projectSize}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (1-2 rooms)</option>
                    <option value="medium">Medium (3-5 rooms)</option>
                    <option value="large">Large (6+ rooms)</option>
                    <option value="full-house">Full House</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                  placeholder="Please provide any additional details about your project..."
                  required
                />
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-coastal-sky flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                Preferred Schedule
              </h2>
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Preferred Start Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coastal-water focus:ring-coastal-water"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-coastal-water text-white px-8 py-3 rounded-md hover:bg-coastal-sky transition-colors"
            >
              Submit Quote Request
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-coastal-sky mb-6">Need Immediate Assistance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-coastal-water mr-3" />
              <div>
                <p className="text-sm text-gray-500">Call us at</p>
                <p className="text-lg font-semibold">(910) 599-7008</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-coastal-water mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email us at</p>
                <p className="text-lg font-semibold">ahasinski95@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
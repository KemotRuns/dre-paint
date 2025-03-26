import React from 'react';
import { Paintbrush as Paint, Brush, Droplets, Home, Palette, Shield, Sun, PenTool as Tool } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Home className="h-12 w-12" />,
      title: 'Interior Painting',
      description: 'Transform your indoor spaces with our premium interior painting services.',
      features: [
        'Wall and ceiling painting',
        'Trim and molding finishing',
        'Cabinet refinishing',
        'Color consultation',
        'Texture and faux finish application'
      ],
      image: 'https://plus.unsplash.com/premium_photo-1706140675031-1e0548986ad1?q=80&w=3132&auto=format&fit=crop',
      benefits: 'Enhance your living space with expert craftsmanship and attention to detail.'
    },
    {
      icon: <Brush className="h-12 w-12" />,
      title: 'Exterior Painting',
      description: "Protect and beautify your home's exterior with our comprehensive painting solutions.",
      features: [
        'House siding painting',
        'Trim and soffit finishing',
        'Door and window frame painting',
        'Deck and fence staining',
        'Weather-resistant coating application'
      ],
      image: 'https://images.unsplash.com/photo-1511840636560-acee95b3a83f?q=80&w=2048&auto=format&fit=crop',
      benefits: 'Increase curb appeal and protect your home from coastal weather conditions.'
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      title: 'Pressure Washing',
      description: 'Restore your surfaces to like-new condition with our professional pressure washing.',
      features: [
        'House exterior cleaning',
        'Deck and patio washing',
        'Driveway and sidewalk cleaning',
        'Fence restoration',
        'Pre-painting surface preparation'
      ],
      image: 'https://images.unsplash.com/photo-1584986152939-01133e0d31a2?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      benefits: 'Remove dirt, mildew, and salt residue common in coastal environments.'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'Color Consultation',
      description: 'Expert guidance in selecting the perfect colors for your coastal home.',
      features: [
        'Professional color scheme development',
        'Coastal palette recommendations',
        'Digital color visualization',
        'Sample testing',
        'Trend and style guidance'
      ],
      image: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&q=80',
      benefits: "Create a cohesive look that complements your home's architecture and surroundings."
    }
  ];

  const specializedServices = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Weather Protection',
      description: 'Special coastal-grade protective coatings'
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: 'UV-Resistant Finishes',
      description: 'Protection against harsh sun exposure'
    },
    {
      icon: <Tool className="h-8 w-8" />,
      title: 'Minor Repairs',
      description: 'Surface preparation and damage repair'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
            alt="Painting services"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coastal-sky/80 to-coastal-water/80" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-6">Our Professional Services</h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Delivering exceptional painting services to Wilmington and surrounding coastal communities with a focus on quality, durability, and beauty.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="text-coastal-water">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-coastal-sky">{service.title}</h2>
                  <p className="text-lg text-gray-600">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Paint className="h-5 w-5 text-coastal-water mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-coastal-water font-medium">{service.benefits}</p>
                </div>
                <div className={`relative h-96 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-coastal-water/10 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialized Services */}
      <div className="bg-coastal-sand/20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-coastal-sky mb-12">
            Specialized Services for Coastal Homes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-coastal-water mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-coastal-sky mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-coastal-sky to-coastal-water py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <button className="bg-white text-coastal-sky px-8 py-3 rounded-md hover:bg-coastal-sand transition-colors">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
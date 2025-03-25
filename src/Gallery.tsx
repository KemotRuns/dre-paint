import React from 'react';
import { Image } from 'lucide-react';

function Gallery() {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      title: 'Coastal Home Exterior',
      description: 'Modern beach house with fresh paint'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
      title: 'Living Room Transformation',
      description: 'Bright and airy coastal living space'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
      title: 'Kitchen Makeover',
      description: 'Contemporary coastal kitchen design'
    },
    {
      url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
      title: 'Master Bedroom',
      description: 'Serene coastal bedroom retreat'
    },
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
      title: 'Modern Coastal Home',
      description: 'Complete exterior transformation'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80',
      title: 'Dining Room',
      description: 'Elegant coastal dining space'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
      title: 'Beach House Exterior',
      description: 'Classic coastal architecture'
    },
    {
      url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80',
      title: 'Cozy Living Area',
      description: 'Warm and inviting coastal living room'
    },
    {
      url: 'https://images.unsplash.com/photo-1613685703237-6628ce5d7de3?auto=format&fit=crop&q=80',
      title: 'Modern Bathroom',
      description: 'Spa-like coastal bathroom design'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80"
            alt="Gallery hero"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coastal-sky/80 to-coastal-water/80" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Our Work</h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Explore our portfolio of beautiful coastal homes and interior transformations
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm text-white/80">{image.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Image className="h-5 w-5 text-coastal-water" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-coastal-water/10 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-coastal-sky mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you create your dream coastal home
          </p>
          <button className="bg-coastal-water text-white px-8 py-3 rounded-md hover:bg-coastal-sky transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
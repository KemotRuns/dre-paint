import React from 'react';
import { Image } from 'lucide-react';

function Gallery() {
  const instagramUrl = "https://www.instagram.com/andrzejmollie/";
  const instagramHandle = "@andrzejmollie";

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
            Follow us on Instagram {instagramHandle} to see our latest projects and transformations
          </p>
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a 
            href={instagramUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="relative h-80 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
          >
            <img
              src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68"
              alt="Coastal Home Exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">View on Instagram</h3>
              <p className="text-sm text-white/80">Follow {instagramHandle} for our latest projects</p>
            </div>
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-coastal-water/10 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-coastal-sky mb-6">Follow Us on Instagram</h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest projects and transformations
          </p>
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coastal-water text-white px-8 py-3 rounded-md hover:bg-coastal-sky transition-colors inline-flex items-center"
          >
            <Image className="w-5 h-5 mr-2" />
            Follow {instagramHandle}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
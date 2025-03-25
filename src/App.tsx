import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Paintbrush as Paint } from 'lucide-react';
import Services from './Services';
import Quote from './Quote';
import Contact from './Contact';
import Gallery from './Gallery';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'quote':
        return <Quote />;
      case 'contact':
        return <Contact />;
      case 'gallery':
        return <Gallery />;
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative pt-20">
              <div className="absolute inset-0">
                <img
                  className="w-full h-[600px] object-cover"
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80"
                  alt="Beautiful coastal home in Wilmington"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 to-blue-900/50 mix-blend-multiply" />
              </div>
              <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Bringing Coastal Beauty<br />to Wilmington Homes
                </h1>
                <p className="mt-6 max-w-3xl text-xl text-white">
                  Professional painting services inspired by the natural beauty of North Carolina's coast.
                  Serving Wilmington and surrounding areas with colors that reflect our beautiful shoreline.
                </p>
                <div className="mt-10 flex gap-4">
                  <button 
                    onClick={() => setCurrentPage('quote')}
                    className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition flex items-center"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setCurrentPage('services')}
                    className="bg-white/90 text-gray-900 px-8 py-3 rounded-md hover:bg-white transition"
                  >
                    View Our Services
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Work Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
                      alt="Coastal home exterior"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold">Coastal Elegance</h3>
                      <p className="text-white/80 mt-2">Exterior painting in Wrightsville Beach</p>
                    </div>
                  </div>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                      alt="Modern interior"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold">Modern Living</h3>
                      <p className="text-white/80 mt-2">Interior transformation in downtown Wilmington</p>
                    </div>
                  </div>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80"
                      alt="Beach house"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold">Beachside Beauty</h3>
                      <p className="text-white/80 mt-2">Complete exterior renovation in Carolina Beach</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                    <Phone className="h-6 w-6 text-teal-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Call us</p>
                      <p className="text-lg font-semibold text-gray-900">(910) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                    <Mail className="h-6 w-6 text-teal-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-lg font-semibold text-gray-900">contact@hasinskipainting.com</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                    <MapPin className="h-6 w-6 text-teal-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <p className="text-lg font-semibold text-gray-900">Wilmington, NC</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Paint className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Andrzej Hasinski Painting</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentPage('services')}
                className="text-gray-600 hover:text-teal-600"
              >
                Services
              </button>
              <button
                onClick={() => setCurrentPage('gallery')}
                className="text-gray-600 hover:text-teal-600"
              >
                Gallery
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="text-gray-600 hover:text-teal-600"
              >
                Contact
              </button>
              <button 
                onClick={() => setCurrentPage('quote')}
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
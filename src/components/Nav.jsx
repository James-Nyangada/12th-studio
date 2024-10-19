import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['PORTFOLIO', 'SERVICES',  'CONTACT'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all pt-5 pb-5 duration-300 ${isScrolled ? 'bg-dirt shadow-md bg-opacity-15' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/">
            <img src="/12thstudiologo.webp" alt="Olivia" className="h-[120px] w-[120px] object-cover scale-150" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-black-800 hover:text-black-600 px-3 py-2 rounded-md text-md font-bold transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black-800 hover:text-black-600 font-bold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className={`text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium text-center transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
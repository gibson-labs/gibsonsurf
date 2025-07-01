import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold">
              <span className="text-slate-800">Gibson</span>
              <span className="text-slate-600 text-xl ml-2">Surf Boards</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">Lagos, Portugal</p>
          </div>
          
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('boards')}
                className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Boards
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('boards')}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 w-full text-left"
              >
                Boards
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
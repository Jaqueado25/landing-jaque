import React, { useEffect } from 'react';
import JaqueLogo from './JaqueLogo';

const Header = () => {
  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      const toggleMenu = () => mobileMenu.classList.toggle('hidden');
      mobileMenuButton.addEventListener('click', toggleMenu);
      // Cerrar menú al hacer click en un link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
      return () => {
        mobileMenuButton.removeEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
          link.removeEventListener('click', () => {
            mobileMenu.classList.add('hidden');
          });
        });
      };
    }
  }, []);

  return (
    <header className="fixed w-full bg-surface/80 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <JaqueLogo />
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-600 hover:text-primary transition-colors">Servicios</a>
            <a href="#beneficios" className="text-gray-600 hover:text-primary transition-colors">Beneficios</a>
            <a href="#proceso" className="text-gray-600 hover:text-primary transition-colors">Proceso</a>
            <a href="#contacto" className="btn btn-primary">Contactar</a>
          </nav>
          {/* Mobile menu button */}
          <button id="mobile-menu-button" className="md:hidden text-gray-600 hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="md:hidden hidden pt-4">
          <div className="flex flex-col space-y-3">
            <a href="#servicios" className="py-2 text-gray-600 hover:text-primary transition-colors">Servicios</a>
            <a href="#beneficios" className="py-2 text-gray-600 hover:text-primary transition-colors">Beneficios</a>
            <a href="#proceso" className="py-2 text-gray-600 hover:text-primary transition-colors">Proceso</a>
            <a href="#contacto" className="btn btn-primary w-full mt-2">Contactar</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
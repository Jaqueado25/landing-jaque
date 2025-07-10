import React from 'react';
import JaqueLogo from './JaqueLogo';

const currentYear = new Date().getFullYear();

const PUBLIC_FACEBOOK_PAGE = import.meta.env.VITE_PUBLIC_FACEBOOK_PAGE || '';
const PUBLIC_LINKEDIN_COMPANY = import.meta.env.VITE_PUBLIC_LINKEDIN_COMPANY || '';
const PUBLIC_INSTAGRAM_USER = import.meta.env.VITE_PUBLIC_INSTAGRAM_USER || '';
const PUBLIC_CONTACT_EMAIL = import.meta.env.VITE_PUBLIC_CONTACT_EMAIL || '';
const PUBLIC_CONTACT_PHONE = import.meta.env.VITE_PUBLIC_CONTACT_PHONE || '';
const PUBLIC_CONTACT_ADDRESS = import.meta.env.VITE_PUBLIC_CONTACT_ADDRESS || '';
const PUBLIC_SITE_NAME = import.meta.env.VITE_PUBLIC_SITE_NAME || '';

const Footer = () => (
  <footer className="bg-surface border-t border-gray-200 mt-16 pt-12 pb-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo y descripción */}
        <div className="md:col-span-1">
          <div className="mb-6">
            <JaqueLogo />
          </div>
          <p className="text-gray-400 mb-6">
            Soluciones de automatización para potenciar tu negocio y aumentar tus ganancias.
          </p>
          <div className="flex space-x-4">
            <a href={`https://facebook.com/${PUBLIC_FACEBOOK_PAGE}`} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={`https://linkedin.com/company/${PUBLIC_LINKEDIN_COMPANY}`} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={`https://instagram.com/${PUBLIC_INSTAGRAM_USER}`} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.137.353.3.882.344 1.857.048 1.055.058 1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
            <li><a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Beneficios</a></li>
            <li><a href="#proceso" className="text-gray-400 hover:text-white transition-colors">Proceso</a></li>
            <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Contacto</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-400">{PUBLIC_CONTACT_EMAIL}</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-400">{PUBLIC_CONTACT_PHONE}</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-400">{PUBLIC_CONTACT_ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8">
        <p className="text-gray-400 text-sm text-center">
          &copy; {currentYear} {PUBLIC_SITE_NAME} company.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer; 
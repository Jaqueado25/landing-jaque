import React from 'react';

const Hero = () => (
  <section className="bg-gradient-to-br from-primary/5 to-white pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforma tu negocio con <span className="text-primary">automatización</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Soluciones personalizadas para optimizar procesos, reducir costos y aumentar las ganancias de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contacto"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-105 focus:ring-4 focus:ring-primary/20 focus:outline-none"
            >
              <span className="relative z-10">Solicitar consulta gratuita</span>
              <span className="absolute right-0 flex items-center justify-center w-8 h-8 mr-2 transition-all duration-300 transform translate-x-12 group-hover:translate-x-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-in-out transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:translate-x-1"></span>
            </a>
            <a
              href="#servicios"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden font-medium text-primary-700 border-2 border-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300 hover:shadow-md"
            >
              <span className="relative z-10">Conocer más</span>
              <span className="absolute right-0 flex items-center justify-center w-8 h-8 mr-2 transition-all duration-300 transform translate-x-12 group-hover:translate-x-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-in-out transform translate-x-10 bg-primary-100 opacity-50 rounded-full group-hover:translate-x-1"></span>
            </a>
          </div>
          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Confían en nosotros:</p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+50</div>
                <div className="text-sm text-gray-500">Clientes</div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+100</div>
                <div className="text-sm text-gray-500">Proyectos</div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-500">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
        {/* Image/Illustration */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/asistente.png"
              alt="Automatización de procesos"
              className="w-full h-auto object-cover"
              width="600"
              height="500"
              loading="eager"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/5 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 
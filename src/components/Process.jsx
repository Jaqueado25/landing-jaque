import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Consulta Inicial',
    description: 'Analizamos tus necesidades y objetivos en una reunión inicial sin compromiso.',
    icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
  },
  {
    number: '02',
    title: 'Análisis y Planificación',
    description: 'Estudiamos tus procesos actuales y diseñamos una solución personalizada.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Implementamos la solución utilizando las mejores tecnologías y prácticas del mercado.',
    icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
  },
  {
    number: '04',
    title: 'Implementación',
    description: 'Desplegamos la solución y nos aseguramos de que todo funcione perfectamente.',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
  },
  {
    number: '05',
    title: 'Capacitación',
    description: 'Te enseñamos a usar la nueva herramienta y documentamos todo el proceso.',
    icon: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm13.06 0a.75.75 0 10-1.5 0 .75.75 0 001.5 0z'
  },
  {
    number: '06',
    title: 'Soporte Continuo',
    description: 'Te brindamos soporte continuo y mejoras basadas en tus comentarios.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zM13.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
  }
];

const Process = () => (
  <>
    <section id="proceso" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">Nuestro Proceso</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Así es como trabajamos</h2>
          <p className="text-lg text-gray-600">
            Un enfoque probado para garantizar el éxito de tu proyecto de automatización.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2"></div>
          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Step content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-primary mr-3">{step.number}</span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Step icon */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold z-10 mx-8 flex-shrink-0">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5}
                    stroke="currentColor" 
                    className="w-8 h-8"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d={step.icon} 
                    />
                  </svg>
                </div>
                {/* Empty space for alignment */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución de automatización para tus necesidades.
            </p>
            <a 
              href="#contacto" 
              className="btn btn-primary inline-flex items-center"
            >
              Hablar con un experto
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Wave divider */}
    <div className="bg-white">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto rotate-180">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
      </svg>
    </div>
  </>
);

export default Process; 
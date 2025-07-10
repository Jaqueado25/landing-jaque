import React from 'react';

const testimonials = [
  {
    name: 'María González',
    role: 'Directora de Operaciones',
    company: 'TechSolutions SA',
    content: 'La automatización de nuestros procesos ha sido un antes y un después para nuestra empresa. Hemos reducido el tiempo de facturación en un 70% y el equipo está mucho más motivado al no tener que realizar tareas repetitivas.',
    avatar: '/images/avatars/avatar-1.jpg',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Fundador',
    company: 'InnovaStartup',
    content: 'Excelente servicio de principio a fin. El equipo entendió perfectamente nuestras necesidades y desarrolló una solución que se adapta como un guante a nuestro negocio. ¡Altamente recomendados!',
    avatar: '/images/avatars/avatar-2.jpg',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    role: 'Gerente de Proyectos',
    company: 'GlobalCorp',
    content: 'Trabajar con su equipo ha sido una experiencia excepcional. La implementación fue impecable y el soporte post-venta es de primera categoría. Hemos visto un retorno de inversión en solo 3 meses.',
    avatar: '/images/avatars/avatar-3.jpg',
    rating: 5
  },
  {
    name: 'Juan Pérez',
    role: 'CEO',
    company: 'DigitalMind',
    content: 'La solución de automatización que implementaron ha transformado nuestra operación. Ahora podemos manejar el triple de clientes con el mismo personal. Increíble el impacto en nuestra productividad.',
    avatar: '/images/avatars/avatar-4.jpg',
    rating: 4
  },
  {
    name: 'Laura Sánchez',
    role: 'Directora de TI',
    company: 'FuturoTec',
    content: 'Como empresa de tecnología, somos muy exigentes con las soluciones que implementamos. Quedamos impresionados con el conocimiento técnico del equipo y la calidad del producto final.',
    avatar: '/images/avatars/avatar-5.jpg',
    rating: 5
  },
  {
    name: 'Diego Ramírez',
    role: 'Gerente General',
    company: 'LogiPro',
    content: 'La integración con nuestros sistemas existentes fue perfecta. El equipo supo entender nuestros flujos de trabajo y los optimizó significativamente. El servicio al cliente es excepcional.',
    avatar: '/images/avatars/avatar-6.jpg',
    rating: 5
  }
];

const stats = [
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Soporte disponible' },
  { value: '4.9/5', label: 'Valoración promedio' },
  { value: '100%', label: 'Compromiso con la calidad' }
];

const Testimonials = () => (
  <>
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600">
            Descubre cómo hemos ayudado a empresas como la tuya a transformar sus operaciones.
          </p>
        </div>
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <div className="mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}>&#9733;</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 flex-grow">"{testimonial.content}"</p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-500">Ver caso de estudio</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* Wave divider */}
    <div className="bg-gray-50">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto rotate-180">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
      </svg>
    </div>
  </>
);

export default Testimonials; 
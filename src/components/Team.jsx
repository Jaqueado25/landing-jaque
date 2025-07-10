import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'Gonzalo Flamenci',
    title: 'Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHOlQJRrfpxCg/profile-displayphoto-shrink_200_200/B4DZagjsMcGgAY-/0/1746450433418?e=2147483647&v=beta&t=C0y34sGWinznbwhj0mv6So8ImNyshhSHvBwf3i5lJgk',
    description: 'Emprendedor y desarrollador Fullstack con profunda especialización en backend. Aporta ideas, creatividad y visión, liderando proyectos y equipos para construir soluciones robustas y escalables que transforman el panorama tecnológico.',
    linkedin: 'https://www.linkedin.com/in/gonza-flamenci/',
    initials: 'GF'
  },
  {
    name: 'Álvaro Mauricio López',
    title: 'Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFpJDtX-BTdxA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727834435771?e=1756944000&v=beta&t=zGhk-gReF8DJhiEbN8P-D1IoLV7dBZ1jMi7jEW4Tkhs',
    description: 'Un visionario en el desarrollo frontend. Se distingue por su enfoque en la acción y la ejecución práctica, liderando la creación de experiencias de usuario innovadoras y funcionales con un compromiso inquebrantable con la calidad y la mejora continua.',
    linkedin: 'https://www.linkedin.com/in/alvaro-mauricio-lopez/',
    initials: 'AL'
  },
  {
    name: 'Gibson Gil',
    title: 'Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQFx3B62Wc2X3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678646467443?e=1756944000&v=beta&t=jbpym8jqmmD0zrbO44Xo95V2cAp_Ua2rif5Pq1h9zU0',
    description: 'Apasionado por el desarrollo full-stack, Gibson crea soluciones de alto impacto con un enfoque perfeccionista y adaptable. Su fortaleza reside en la infraestructura, organización y compromiso, diseñando aplicaciones escalables y centradas en el usuario.',
    linkedin: 'https://www.linkedin.com/in/gibsongil/',
    initials: 'GG'
  },
];

const TeamMemberCard = ({ member, index }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const AvatarFallback = ({ initials, name }) => (
    <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
      {initials}
    </div>
  );

  return (
    <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
      {member.linkedin ? (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block">
          {imageError ? (
            <AvatarFallback initials={member.initials} name={member.name} />
          ) : (
            <img 
              src={member.image} 
              alt={member.name} 
              width="120" 
              height="120" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg hover:scale-105 transition-transform duration-300" 
              onError={handleImageError}
            />
          )}
        </a>
      ) : (
        imageError ? (
          <AvatarFallback initials={member.initials} name={member.name} />
        ) : (
          <img 
            src={member.image} 
            alt={member.name} 
            width="120" 
            height="120" 
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" 
            onError={handleImageError}
          />
        )
      )}
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-lg text-blue-600 mb-4 font-medium">{member.title}</p>
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline mt-2 block font-medium transition-colors duration-200">
          Ver perfil de LinkedIn
        </a>
      )}
      <p className="text-gray-700 leading-relaxed mt-4">{member.description}</p>
    </div>
  );
};

const Team = () => (
  <section id="team" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
        Nuestro Equipo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Team; 
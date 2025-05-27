import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExternalLinkAlt, 
  faCode, 
  faServer, 
  faMobileAlt,
  faHome,
  faShoppingCart,
  faSchool,
  faSearch,
  faImage,
  faUserLock,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portal Imóveis Aracoiaba",
      description: "Plataforma completa para imobiliárias com cadastro de propriedades, busca avançada e integração com mapas.",
      url: "https://www.portalimoveisaracoiaba.com.br/",
      icon: faHome,
      iconColor: "#3b82f6",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      features: [
        { text: "Sistema de cadastro de imóveis", icon: faHome },
        { text: "Busca com filtros avançados", icon: faSearch },
        { text: "Galeria de fotos interativa", icon: faImage },
        { text: "Área restrita para corretores", icon: faUserLock },
        { text: "Integração com mapas", icon: faMapMarkerAlt }
      ]
    },
    {
      id: 2,
      title: "E-commerce Fashion",
      description: "Loja virtual completa com integração de pagamentos e gestão de estoque.",
      icon: faShoppingCart,
      iconColor: "#8b5cf6",
      technologies: ["React", "Redux", "Express", "PostgreSQL"],
      features: [
        { text: "Carrinho de compras", icon: faShoppingCart },
        { text: "Checkout seguro", icon: faCode },
        { text: "Sistema de avaliações", icon: faServer },
        { text: "Painel administrativo", icon: faUserLock }
      ]
    },
    {
      id: 3,
      title: "Sistema de Gestão Escolar",
      description: "Plataforma para gestão de instituições de ensino com controle de matrículas e notas.",
      icon: faSchool,
      iconColor: "#10b981",
      technologies: ["Angular", "NestJS", "MySQL"],
      features: [
        { text: "Cadastro de alunos e professores", icon: faUserLock },
        { text: "Lançamento de notas", icon: faCode },
        { text: "Relatórios personalizados", icon: faServer },
        { text: "Comunicação com pais", icon: faMobileAlt }
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projetos Destacados</h2>
        <p className="section-subtitle">Soluções personalizadas que entregamos para nossos clientes</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.id === 1 && <div className="featured-badge">Destaque</div>}
              
              <div className="project-icon" style={{ color: project.iconColor }}>
                <FontAwesomeIcon icon={project.icon} size="3x" />
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  <h4>
                    <FontAwesomeIcon icon={faCode} />
                    Tecnologias utilizadas:
                  </h4>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-features">
                  <h4>
                    <FontAwesomeIcon icon={faServer} />
                    Principais funcionalidades:
                  </h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={feature.icon} />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Visitar site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
// components/Project/Project.jsx
import React, { useState } from 'react';
import './Project.css';

const projectsData = [
  {
    id: 1,
    title: "E-commerce App",
    category: "React / Node.js",
    description: "Application e-commerce complète avec panier, authentification Stripe et dashboard admin.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/johary/ecommerce",
    demo: "https://ecommerce-demo.com",
    date: "2024",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    title: "Portfolio Design",
    category: "UI/UX Design",
    description: "Design système complet pour portfolio créatif avec animations et mode sombre.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
    tech: ["Figma", "Adobe XD", "Illustrator"],
    github: "https://github.com/johary/portfolio-design",
    demo: "https://design-demo.com",
    date: "2024",
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 3,
    title: "Weather App",
    category: "JavaScript / API",
    description: "Application météo avec prévisions 7 jours, cartes interactives et animations.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
    tech: ["JavaScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com/johary/weather-app",
    demo: "https://weather-demo.com",
    date: "2023",
    color: "from-green-400 to-green-600"
  },
  {
    id: 4,
    title: "Task Manager",
    category: "Vue.js / Firebase",
    description: "Gestionnaire de tâches collaboratif avec notifications en temps réel.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/johary/task-manager",
    demo: "https://task-demo.com",
    date: "2023",
    color: "from-red-400 to-red-600"
  },
  {
    id: 5,
    title: "AI Chatbot",
    category: "Python / TensorFlow",
    description: "Chatbot intelligent avec NLP et apprentissage automatique.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    github: "https://github.com/johary/chatbot",
    demo: "https://chatbot-demo.com",
    date: "2024",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    id: 6,
    title: "Mobile Game",
    category: "React Native",
    description: "Jeu mobile éducatif avec scores en ligne et niveaux progressifs.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800",
    tech: ["React Native", "Redux", "Socket.io"],
    github: "https://github.com/johary/mobile-game",
    demo: "https://game-demo.com",
    date: "2023",
    color: "from-orange-400 to-orange-600"
  }
];

const Project = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const openFolder = () => setIsFolderOpen(true);
  const closeFolder = () => {
    setIsFolderOpen(false);
    setSelectedProject(null);
    setIsProjectOpen(false);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setTimeout(() => setIsProjectOpen(true), 100);
  };

  const closeProject = () => {
    setIsProjectOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projets" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projets</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">Explorez mon travail en ouvrant le dossier</p>
        </div>

        {/* Dossier principal - Design réaliste */}
        <div className="flex justify-center perspective-1000">
          <div 
            className={`folder-wrapper cursor-pointer transition-all duration-700 transform-gpu ${isFolderOpen ? 'scale-110' : 'hover:scale-105'}`}
            onClick={openFolder}
          >
            {/* Ombre portée réaliste */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-8 bg-black/20 blur-xl rounded-full"></div>
            
            {/* Dossier 3D */}
            <div className="relative w-80 h-64 folder-3d">
              {/* Partie arrière du dossier */}
              <div className="absolute bottom-0 w-full h-52 bg-amber-600 rounded-t-xl rounded-b-lg shadow-2xl 
                            border-2 border-amber-700 transform-gpu folder-back">
                {/* Texture papier */}
                <div className="absolute inset-0 opacity-10" 
                     style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px)' }}>
                </div>
              </div>
              
              {/* Partie avant du dossier (rabat) */}
              <div className="absolute bottom-0 w-full h-48 bg-amber-500 rounded-t-xl rounded-b-lg 
                            border-2 border-amber-600 shadow-xl transform-gpu folder-front
                            transition-all duration-300 hover:-translate-y-1 hover:rotate-x-2">
                
                {/* Onglet du dossier */}
                <div className="absolute -top-7 left-6 w-32 h-10 bg-amber-600 rounded-t-lg 
                              border-t-2 border-l-2 border-r-2 border-amber-700 
                              flex items-center justify-center shadow-md">
                  <span className="text-xs font-bold text-amber-200 tracking-wider">PROJECTS • 2024</span>
                </div>
                
                {/* Zone d'étiquette */}
                <div className="absolute top-4 right-6 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full 
                              border-2 border-amber-400/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
                  </svg>
                </div>
                
                {/* Papiers qui dépassent (effet réaliste) */}
                <div className="absolute -bottom-1 left-4 right-4">
                  <div className="h-1 bg-amber-400/50 rounded-full mb-1 w-3/4"></div>
                  <div className="h-1 bg-amber-400/50 rounded-full mb-1 w-2/3"></div>
                  <div className="h-1 bg-amber-400/50 rounded-full w-1/2"></div>
                </div>
                
                {/* Coins usés */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-amber-400 to-transparent opacity-50 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-amber-400 to-transparent opacity-50 rounded-tr-xl"></div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 font-medium">Cliquez pour ouvrir le dossier</p>
          </div>
        </div>
      </div>

      {/* Modal du dossier ouvert - Fichiers flottants */}
      {isFolderOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeFolder}
        >
          {/* Overlay léger */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          
          {/* Conteneur des fichiers flottants */}
          <div 
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête flottant */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                          bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg
                          border border-gray-200/50 z-10">
              <span className="text-gray-700 font-medium">
                📁 Dossier Projets • {projectsData.length} fichiers
              </span>
            </div>

            {/* Grille de fichiers flottants */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className="file-float group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openProject(project)}
                >
                  {/* Ombre portée du fichier */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                                w-24 h-4 bg-black/10 blur-md rounded-full
                                group-hover:w-28 transition-all duration-300"></div>
                  
                  {/* Fichier - Design moderne et réaliste */}
                  <div className="relative w-40 h-48 bg-white rounded-xl shadow-2xl 
                                transform transition-all duration-300 group-hover:-translate-y-4 group-hover:rotate-2
                                border border-gray-200/50 overflow-hidden">
                    
                    {/* Bordure supérieure (comme une feuille) */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    
                    {/* Coin plié */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gray-200 to-transparent"></div>
                    
                    {/* Contenu du fichier */}
                    <div className="p-4 pt-6">
                      {/* Icône de fichier */}
                      <div className="flex justify-center mb-3">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} 
                                      flex items-center justify-center text-white text-3xl shadow-lg
                                      transform group-hover:scale-110 transition-transform duration-300`}>
                          📄
                        </div>
                      </div>
                      
                      {/* Informations */}
                      <h3 className="text-sm font-bold text-gray-800 text-center mb-1 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 text-center mb-2">
                        {project.category}
                      </p>
                      
                      {/* Tags minimalistes */}
                      <div className="flex flex-wrap gap-1 justify-center">
                        {project.tech.slice(0, 2).map((tech, i) => (
                          <span key={i} className="text-[8px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 2 && (
                          <span className="text-[8px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                  bg-gradient-to-tr from-white/0 via-white/20 to-white/0 
                                  transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Nom du fichier (tooltip moderne) */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                opacity-0 group-hover:opacity-100 transition-all duration-300
                                bg-gray-800 text-white text-xs py-1 px-3 rounded-full whitespace-nowrap">
                    {project.title}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 
                                  w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal du projet ouvert - 80% écran */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-500 ${
            isProjectOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeProject}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
          
          {/* Projet - 80% de l'écran */}
          <div 
            className={`relative bg-white rounded-2xl shadow-2xl w-11/12 md:w-4/5 max-w-6xl max-h-[85vh] 
                        overflow-hidden transition-all duration-500 transform
                        ${isProjectOpen ? 'scale-100' : 'scale-90'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête avec gradient */}
            <div className={`bg-gradient-to-r ${selectedProject.color} p-4 flex items-center justify-between`}>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <span className="text-white font-medium ml-2 flex items-center gap-2">
                  <span className="text-2xl">📄</span>
                  {selectedProject.title}
                </span>
              </div>
              <button 
                onClick={closeProject}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Corps du projet */}
            <div className="overflow-y-auto max-h-[calc(85vh-80px)]">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 
                             transition-colors flex items-center gap-2 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    Code source
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 bg-gradient-to-r ${selectedProject.color} text-white 
                              rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Voir la démo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
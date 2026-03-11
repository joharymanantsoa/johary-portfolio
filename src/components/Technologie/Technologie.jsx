// components/Technologie/Technologie.jsx
import React, { useState, useEffect, useRef } from 'react';
import react from '../../assets/technologie/react.png';
import figma from '../../assets/technologie/figma.png';
import javascript from '../../assets/technologie/javascript.png';
import nodejs from '../../assets/technologie/nodejs.png';
import mysql from '../../assets/technologie/mysql.png';
import symfony from '../../assets/technologie/symfony.png';
import python from '../../assets/technologie/python.png';
import wordpress from '../../assets/technologie/wordpress.png';
import './Technologie.css';

function Technologie() {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [terminalLines, setTerminalLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const terminalRef = useRef(null);

    const technologies = [
        { id: 1, name: 'React', icon: react, category: 'Frontend', experience: '3 ans', color: 'from-blue-400 to-cyan-400' },
        { id: 2, name: 'Figma', icon: figma, category: 'Design', experience: '2 ans', color: 'from-purple-400 to-pink-400' },
        { id: 3, name: 'Node.js', icon: nodejs, category: 'Backend', experience: '3 ans', color: 'from-green-400 to-emerald-400' },
        { id: 4, name: 'JavaScript', icon: javascript, category: 'Langage', experience: '4 ans', color: 'from-yellow-400 to-amber-400' },
        { id: 5, name: 'MySQL', icon: mysql, category: 'Base de données', experience: '3 ans', color: 'from-blue-500 to-indigo-500' },
        { id: 6, name: 'Symfony', icon: symfony, category: 'Framework', experience: '2 ans', color: 'from-gray-700 to-gray-900' },
        { id: 7, name: 'Python', icon: python, category: 'Langage', experience: '2 ans', color: 'from-yellow-500 to-blue-500' },
        { id: 8, name: 'WordPress', icon: wordpress, category: 'CMS', experience: '3 ans', color: 'from-blue-600 to-cyan-600' }
    ];

    // Données mock pour le terminal
    const terminalData = [
        { type: 'command', text: 'johary@portfolio:~$ whoami' },
        { type: 'output', text: 'Johary - Développeur Full Stack & UI/UX Designer' },
        { type: 'command', text: 'johary@portfolio:~$ cat about.txt' },
        { type: 'output', text: '📍 Basé à Paris, France' },
        { type: 'output', text: '🎓 Diplômé en Informatique - EPITECH 2023' },
        { type: 'output', text: '💼 4 ans d\'expérience en développement web' },
        { type: 'command', text: 'johary@portfolio:~$ ls -la skills/' },
        { type: 'output', text: 'drwxr-xr-x  frontend/' },
        { type: 'output', text: 'drwxr-xr-x  backend/' },
        { type: 'output', text: 'drwxr-xr-x  design/' },
        { type: 'output', text: '-rw-r--r--  react.js' },
        { type: 'output', text: '-rw-r--r--  node.js' },
        { type: 'output', text: '-rw-r--r--  python.py' },
        { type: 'command', text: 'johary@portfolio:~$ echo $SPECIALITY' },
        { type: 'output', text: 'Full Stack Development & UI/UX Design' },
        { type: 'command', text: 'johary@portfolio:~$ git log --oneline -n 3' },
        { type: 'output', text: 'a1b2c3d Projet E-commerce - Frontend React' },
        { type: 'output', text: 'e4f5g6h Application Météo - API Integration' },
        { type: 'output', text: 'i7j8k9l Portfolio Personnel - Design Moderne' },
        { type: 'command', text: 'johary@portfolio:~$ df -h /passion' },
        { type: 'output', text: 'Filesystem      Size  Used Avail Use% Mounted on' },
        { type: 'output', text: '/dev/creative   256G  128G  128G  50% /code' },
        { type: 'output', text: '/dev/design     128G   96G   32G  75% /ui' },
        { type: 'command', text: 'johary@portfolio:~$ systemctl status passion' },
        { type: 'output', text: '● passion.service - "La passion du code"' },
        { type: 'output', text: '   Loaded: loaded (/etc/systemd/system/passion.service; enabled)' },
        { type: 'output', text: '   Active: active (running) since 2024-01-01' },
        { type: 'output', text: '   Status: "Toujours en apprentissage, toujours en création"' },
        { type: 'command', text: 'johary@portfolio:~$ cal 2024' },
        { type: 'output', text: 'Objectif 2024: 12 projets, 6 articles tech, 3 conférences' },
        { type: 'command', text: 'johary@portfolio:~$ curl -I future.com' },
        { type: 'output', text: 'HTTP/1.1 200 OK' },
        { type: 'output', text: 'Status: Prêt pour de nouveaux défis' },
        { type: 'output', text: 'Location: open-to-work' },
        { type: 'command', text: 'johary@portfolio:~$ ./contact_me.sh' },
        { type: 'output', text: '📧 Email: johary@portfolio.dev' },
        { type: 'output', text: '💼 LinkedIn: /in/johary' },
        { type: 'output', text: '🐙 GitHub: @johary-dev' },
        { type: 'output', text: '📱 Téléphone: +33 6 XX XX XX XX' },
    ];

    // Effet de défilement du terminal
    useEffect(() => {
        if (isTerminalOpen && currentLine < terminalData.length) {
            const timer = setTimeout(() => {
                setTerminalLines(prev => [...prev, terminalData[currentLine]]);
                setCurrentLine(prev => prev + 1);
                
                // Auto-scroll vers le bas
                if (terminalRef.current) {
                    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
                }
            }, 100 + Math.random() * 100); // Délai variable pour effet naturel
            
            return () => clearTimeout(timer);
        }
    }, [isTerminalOpen, currentLine, terminalData]);

    const handleIconClick = (tech, event) => {
        setSelectedIcon(tech);
        setIconPosition({ x: event.clientX, y: event.clientY });
    };

    const closeContextMenu = () => {
        setSelectedIcon(null);
    };

    const openTerminal = () => {
        setIsTerminalOpen(true);
        setTerminalLines([]);
        setCurrentLine(0);
    };

    const closeTerminal = () => {
        setIsTerminalOpen(false);
        setTerminalLines([]);
        setCurrentLine(0);
    };

    const clearTerminal = () => {
        setTerminalLines([]);
        setCurrentLine(0);
    };

    return (
        <section id="technologies" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 relative overflow-hidden">
            {/* Bruit de fond style papier peint Linux */}
            <div className="absolute inset-0 opacity-5"
                 style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 }}>
            </div>

            {/* Barre des tâches Linux (en haut) avec bouton terminal */}
            <div className="fixed top-0 left-0 right-0 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 z-40 px-4 py-1 flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                    <span className="text-2xl">🐧</span>
                    <span className="text-white font-bold">Debian 12</span>
                </div>
                <div className="flex space-x-1">
                    <button className="px-3 py-1 text-gray-300 hover:bg-gray-700 rounded">Applications</button>
                    <button className="px-3 py-1 text-gray-300 hover:bg-gray-700 rounded">Places</button>
                    <button className="px-3 py-1 text-gray-300 hover:bg-gray-700 rounded">Système</button>
                </div>
                <div className="flex-1"></div>
                
                {/* Bouton Terminal */}
                <button 
                    onClick={openTerminal}
                    className="flex items-center space-x-2 px-3 py-1 bg-gray-900/80 hover:bg-gray-700 
                             rounded-lg border border-gray-600 transition-all duration-200 group"
                >
                    <span className="text-xl group-hover:animate-pulse">⌨️</span>
                    <span className="text-gray-300">Terminal</span>
                    <span className="text-xs text-gray-500">Ctrl+Alt+T</span>
                </button>
                
                <div className="flex items-center space-x-3 text-gray-300">
                    <span>Wi-Fi 📶</span>
                    <span>🔊 75%</span>
                    <span>🔋 98%</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">{new Date().toLocaleTimeString()}</span>
                </div>
            </div>

            {/* Bureau principal avec icônes */}
            <div className="pt-12 min-h-screen relative">
                {/* Icônes du bureau */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-8">
                    {technologies.map((tech) => (
                        <div
                            key={tech.id}
                            className="desktop-icon group relative flex flex-col items-center cursor-pointer"
                            onClick={(e) => handleIconClick(tech, e)}
                            onDoubleClick={() => window.open(`#tech-${tech.name}`, '_blank')}
                        >
                            <div className={`
                                relative w-20 h-20 md:w-24 md:h-24 
                                bg-gradient-to-br ${tech.color} 
                                rounded-xl shadow-lg 
                                transform transition-all duration-200
                                group-hover:scale-110 group-hover:shadow-2xl
                                ${selectedIcon?.id === tech.id ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
                                flex items-center justify-center
                                icon-glow
                            `}>
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name}
                                    className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-md"
                                />
                                
                                {selectedIcon?.id === tech.id && (
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full 
                                                  flex items-center justify-center text-white text-xs border-2 border-white">
                                        ✓
                                    </div>
                                )}
                            </div>
                            
                            <span className="mt-2 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-white text-xs 
                                           font-medium group-hover:bg-blue-500/60 transition-colors duration-200
                                           border border-white/10">
                                {tech.name}
                            </span>
                            
                            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                                           text-[8px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                {tech.category}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Terminal Window */}
                {isTerminalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
                         onClick={closeTerminal}>
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                        
                        <div 
                            className="relative w-4/5 max-w-3xl bg-gray-900 rounded-xl shadow-2xl border border-gray-700
                                      transform transition-all duration-300 animate-terminalAppear"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Barre de titre du terminal */}
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-xl border-b border-gray-700">
                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"
                                             onClick={closeTerminal}></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
                                             onClick={clearTerminal}></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
                                    </div>
                                    <span className="text-gray-400 text-sm ml-2">johary@portfolio: ~</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs text-gray-500">bash</span>
                                    <span className="text-xs text-gray-600">80x24</span>
                                </div>
                            </div>
                            
                            {/* Contenu du terminal */}
                            <div 
                                ref={terminalRef}
                                className="p-4 font-mono text-sm h-96 overflow-y-auto terminal-content"
                                style={{ backgroundColor: '#1e1e1e' }}
                            >
                                {/* ASCII Art Header */}
                                <pre className="text-green-400 text-xs mb-4">
{`    _       _    _               
   | | ___ | |_| |__   ___ _ _ __ 
   | |/ _ \\| __| '_ \\ / _ \\ | '__|
   | | (_) | |_| | | |  __/ | |   
   |_|\\___/ \\__|_| |_|\\___|_|_|   `}
                                </pre>
                                
                                {/* Lignes du terminal avec animation */}
                                {terminalLines.map((line, index) => (
                                    <div key={index} className="mb-1">
                                        {line.type === 'command' ? (
                                            <div className="flex">
                                                <span className="text-green-400 mr-2">$</span>
                                                <span className="text-blue-300">{line.text}</span>
                                            </div>
                                        ) : (
                                            <div className="text-gray-300 ml-4 animate-slideIn">
                                                {line.text}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                
                                {/* Curseur clignotant */}
                                {currentLine < terminalData.length && (
                                    <div className="flex items-center mt-2">
                                        <span className="text-green-400 mr-2">$</span>
                                        <span className="w-2 h-5 bg-green-400 animate-pulse"></span>
                                    </div>
                                )}
                                
                                {/* Message de fin */}
                                {currentLine >= terminalData.length && (
                                    <div className="mt-4 text-yellow-400 animate-pulse">
                                        -- Fin de la présentation. Tapez 'help' pour plus de commandes --
                                    </div>
                                )}
                            </div>
                            
                            {/* Barre d'état du terminal */}
                            <div className="px-4 py-1 bg-gray-800 rounded-b-xl border-t border-gray-700 
                                          flex items-center justify-between text-xs text-gray-500">
                                <div className="flex items-center space-x-4">
                                    <span>⚡ johary@portfolio</span>
                                    <span>📁 ~/presentation</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-green-400">●</span>
                                    <span>En cours d'exécution</span>
                                    <span className="text-gray-600">|</span>
                                    <span>{terminalLines.length} lignes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Widgets style Linux */}
                <div className="fixed bottom-4 right-4 z-30 space-y-2">
                    <div className="bg-gray-800/90 backdrop-blur-md rounded-lg p-3 border border-gray-700 shadow-xl">
                        <div className="text-2xl text-white font-light">
                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div className="text-xs text-gray-400">
                            {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                        </div>
                    </div>
                    
                    <div className="bg-gray-800/90 backdrop-blur-md rounded-lg p-2 border border-gray-700 shadow-xl 
                                  flex items-center space-x-2 hover:bg-gray-700/90 cursor-pointer transition-colors">
                        <span className="text-2xl">🗑️</span>
                        <span className="text-white text-sm">Corbeille</span>
                        <span className="text-gray-400 text-xs">(vide)</span>
                    </div>
                </div>

                {/* Menu contextuel */}
                {selectedIcon && (
                    <div 
                        className="fixed inset-0 z-50"
                        onClick={closeContextMenu}
                    >
                        <div 
                            className="absolute bg-gray-800/95 backdrop-blur-md rounded-lg shadow-2xl 
                                      border border-gray-700 py-2 min-w-[200px]"
                            style={{ 
                                top: iconPosition.y - 100, 
                                left: iconPosition.x - 50,
                                animation: 'menuAppear 0.2s ease-out'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="px-4 py-2 border-b border-gray-700">
                                <div className="flex items-center space-x-2">
                                    <div className={`w-8 h-8 rounded bg-gradient-to-br ${selectedIcon.color} 
                                                  flex items-center justify-center`}>
                                        <img src={selectedIcon.icon} alt="" className="w-5 h-5 object-contain" />
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">{selectedIcon.name}</div>
                                        <div className="text-xs text-gray-400">{selectedIcon.category}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="py-1">
                                <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 
                                                 flex items-center space-x-2 transition-colors">
                                    <span className="text-lg">📂</span>
                                    <span>Ouvrir</span>
                                </button>
                                <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 
                                                 flex items-center space-x-2 transition-colors">
                                    <span className="text-lg">ℹ️</span>
                                    <span>Propriétés</span>
                                    <span className="text-xs text-gray-500 ml-auto">Exp: {selectedIcon.experience}</span>
                                </button>
                                <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 
                                                 flex items-center space-x-2 transition-colors">
                                    <span className="text-lg">📋</span>
                                    <span>Copier</span>
                                </button>
                                <div className="border-t border-gray-700 my-1"></div>
                                <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-700 
                                                 flex items-center space-x-2 transition-colors">
                                    <span className="text-lg">🗑️</span>
                                    <span>Déplacer vers corbeille</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Pied de page */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-md border-t border-gray-700 
                          z-40 px-4 py-1 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center space-x-4">
                    <span>🐧 Bureau 1</span>
                    <span>📊 8 icônes</span>
                    <span>💾 256 GB libres</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span>🔒 Mode privé</span>
                    <span>🔄 Mise à jour disponible</span>
                </div>
            </div>
        </section>
    );
}

export default Technologie;
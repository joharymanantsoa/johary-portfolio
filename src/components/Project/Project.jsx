import react from '../../assets/technologie/react.png'
import wordpress from '../../assets/technologie/wordpress.png'
import symfony from '../../assets/technologie/symfony.png'


function Project(){
    return(
        <>
            <div className="min-h-screen md:min-h-[calc(100vh-64px)]">
                <div className="text-5xl">
                    Some of my projects...
                </div>
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="project-card bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-xl font-bold mb-2">Site vitrine</h3>
                            <p className="text-gray-700 mb-4">I built a **WordPress website** as a hands-on learning experience to master the platform. This project allowed me to explore WordPress's core functionalities, including theme customization, plugin integration, and content management, providing a practical foundation in web development with the world's most popular CMS.</p>
                            <div className="logo h-25 w-25 mb-4 rounded-lg flex items-center justify-center hover:animate-spin">
                                <img src={wordpress} alt="" />
                            </div>
                            <a href="https://joharywordpress.faaaster.dev/?t=3b9bffee" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                        <div className="project-card bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-xl font-bold mb-2">Reservation d'avocat en ligne</h3>
                            <p className="text-gray-700 mb-4">I developed a web application for **managing lawyer appointments**, built with **Symfony** for robust backend logic and **Bootstrap** for a responsive, intuitive user interface. This platform streamlines the booking process, allowing clients to easily schedule consultations while providing lawyers with an efficient system to manage their availability and appointments.</p>
                            <div className="logo h-25 w-25 mb-4 rounded-lg flex items-center justify-center hover:animate-spin">
                                <img src={symfony} alt="" />
                            </div>
                            <a href="https://github.com/joharymanantsoa/SRA" className="text-blue-500 hover:underline">View source code</a>
                        </div>
                        <div className="project-card bg-white shadow-lg rounded-lg p-4 ">
                            <h3 className="text-xl font-bold mb-2">This portfolio </h3>
                            <p className="text-gray-700 mb-4">A portfolio is a personal online showcase, a dynamic collection of your best work, projects, and achievements. It's designed to highlight your skills and expertise to potential employers or clients. This specific portfolio was crafted with **React**, leveraging its component-based architecture for a highly interactive and responsive user experience.</p>
                            <div className="logo h-25 w-25 mb-4 rounded-lg flex items-center justify-center hover:animate-spin">
                                <img src={react} alt="" />
                            </div>
                            <a href="https://github.com/joharymanantsoa/johary-portfolio" className="text-blue-500 hover:underline">View Source code</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project; 
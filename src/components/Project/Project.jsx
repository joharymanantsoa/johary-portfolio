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
                            <h3 className="text-xl font-bold mb-2">P</h3>
                            <p className="text-gray-700 mb-4">Brief description of the project.</p>
                            <a href="#" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                        <div className="project-card bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
                            <p className="text-gray-700 mb-4">Brief description of the project.</p>
                            <a href="#" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                        <div className="project-card bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-xl font-bold mb-2">This portfolio </h3>
                            <p className="text-gray-700 mb-4">A portfolio is a personal online showcase, a dynamic collection of your best work, projects, and achievements. It's designed to highlight your skills and expertise to potential employers or clients. This specific portfolio was crafted with **React**, leveraging its component-based architecture for a highly interactive and responsive user experience.</p>
                            <a href="https://github.com/joharymanantsoa/johary-portfolio" className="text-blue-500 hover:underline">View Source code</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project; 
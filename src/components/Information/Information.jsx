import './Information.css'
import profil from '../../assets/johary_fond_gris.jpeg'
import johary from '../../../src/CV_johary.pdf'

function Information() {
    return(
        <>
            <div className="hero flex flex-wrap justify-between items-center min-h-screen" id='home'>
                <div className="flex flex-col justify-center">
                    <div className="hi mb-2 text-3xl">Hi, I'm</div>
                    <div className="nom md:text-8xl text-xl font-handwritten mb-2">JOHARY MANANTSOA</div>
                    <div className="ligne2 text-3xl font-bold mb-2">Web Developper</div>

                </div>
                <div className=" h-[256px] w-[256px] md:h-[346px] md:w-[346px] shadow-2xl rounded-lg overflow-hidden flex-shrink-0 m-5">
                    <img src={profil} alt="Johary Manantsoa" className="profil w-full h-full object-cover" />
                </div>
            </div>
            <div className=" bottom-8 right-16 flex flex-col items-center">
                <a href={johary} download="CV_johary.pdf" className=" flex flex-col items-center text-base border-2 border-blue p-4 rounded-lg shadow-lg bg-white hover:bg-blue-400 hover:text-red-300 transition-colors duration-300 animate-pulse">
                    Download my Resume
                    <span className="text-3xl mt-1 animate-bounce">&#8595;</span>
                </a>
            </div>
        </>
    )
}

export default Information
import react from '../../assets/technologie/react.png'
import figma from '../../assets/technologie/figma.png'
import javascript from '../../assets/technologie/javascript.png'
import nodejs from '../../assets/technologie/nodejs.png'
import mysql from '../../assets/technologie/mysql.png'
import symfony from '../../assets/technologie/symfony.png'
import python from '../../assets/technologie/python.png'
import wordpress from '../../assets/technologie/wordpress.png'
import './Technologie.css'


function Technologie() {
    return(
        <>
            <div className="min-h-screen">
                <div className="text-5xl">
                    What can I use...
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="tech  height-[128px] w-[128px] md:h-[256px] md:w-[256px] rounded-lg overflow-hidden flex-shrink-0 m-5 object-cover hover:animate-spin">
                        <img src={react} alt="react logo" />
                    </div>
                    <div className="tech height-[128px] w-[128px] md:h-[256px] md:w-[256px] rounded-lg overflow-hidden flex-shrink-0 m-5 hover:animate-pulse">
                        <img src={figma} alt="figma logo" />
                    </div>
                    <div className="tech height-[128px] w-[128px] md:h-[256px] md:w-[256px] rounded-lg overflow-hidden flex-shrink-0 m-5 hover:animate-spin">
                        <img src={nodejs} alt="nodejs logo" />
                    </div>
                     <div className="tech height-[128px] w-[128px] md:h-[256px] md:w-[256px] rounded-lg overflow-hidden flex-shrink-0 m-5  hover:animate-bounce">
                        <img src={javascript} alt="javascript logo" />
                    </div>
                    {/* </div> */}
                    {/* <div className="flex"> */}
                    <div className="tech height-[128px] w-[128px] md:h-[256px] md:w-[256px] rounded-lg overflow-hidden flex-shrink-0 m-5 hover:animate-bounce">
                        <img src={mysql} alt="mysql logo" />
                    </div>
                    <div className="tech height-[128px] w-[128px] md:h-[256px] md:w-[256px] rounded-lg overflow-hidden flex-shrink-0 m-5 hover:animate-spin">
                        <img src={symfony} alt="symfony logo" />
                    </div>
                    <div className="tech height-[128px] w-[128px] md:h-[256px] md:w-[256px] rounded-lg overflow-hidden flex-shrink-0 m-5 hover:animate-pulse">
                        <img src={python} alt="python logo" />
                    </div>
                    <div className="tech height-[128px] w-[128px] md:h-[256px] md:w-[256px] rounded-lg overflow-hidden flex-shrink-0 m-5 hover:animate-bounce">
                        <img src={wordpress} alt="wordpress logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technologie;
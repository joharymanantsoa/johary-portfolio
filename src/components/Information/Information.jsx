import './Information.css'
import profil from '../../assets/johary_fond_gris.jpeg'

function Information() {

    return(
        <>

            <div className="hero flex">
                <div className="ligne1">
                    
                    <div className="hi px-4">
                        Hi, I'm 
                    </div>
                    
                    <a href="#" className="nom">
                        Johary Manantsoa
                    </a>

                </div><br />

                {/* <div className="ligne2">
                    Web developper
                </div> */}
                <div className="h-[128px] w-[128px]  mx-10">
                    <img src={profil} alt="Johary Manantsoa" className="profil" />
                </div>
            </div>

        </>
    )
}

export default Information
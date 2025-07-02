import contact from "../Contact/contact.js";


function Footer(){
    const year = new Date().getFullYear();
    return(
        <>
            <footer className="flex bg-gray-500 py-4 w-auto">
                <div className="w-[30%] mx-auto text-center justify-center items-center p-5"> 
                    <a href=".home">JOHARY</a>
                </div>
                <div className="container w-[40%] mx-auto text-center">
                    <p className="text-sm">© {year} Johary. All rights reserved.</p>
                    <p className="text-sm">Made with ❤️ using React</p>
                </div>
                <div className="contact  w-[30%] md:flex hidden mx-auto flex justify-center items-center">
                {contact.map((item) => (
                        <div key={item.id} className="mx-1">
                            <a className={item.icon} href={item.link}></a>
                        </div>
                    ))}
            </div>
            </footer>
            
        </>
    )
}

export default Footer; 
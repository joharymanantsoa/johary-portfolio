import contact from './contact.js';


function Contact(){
    return(
        <>
            <div className="min-h-screen md:min-h-[calc(100vh-64px)]">
                <div className="text-5xl">
                    How to contact me?
                </div>
                <ul>
                    {contact.map((item) => (
                        <li key={item.id} className="flex items-center justify-center my-5">
                            {item.icon && <i className={item.icon} ></i>}
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className='mx-5 py-10 text-3xl'>{item.name}</a>
                            ) : (
                                <span className="mx-5 py-10 text-4xl ">{item.name}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Contact;
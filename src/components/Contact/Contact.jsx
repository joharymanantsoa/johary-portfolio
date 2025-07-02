import contact from './contact.js';
import './Contact.css'


function Contact(){
    return(
        <>
            <div className="min-h-screen">
                <div className="text-5xl">
                    How to contact me?
                </div>
                <ul>
                    {contact.map((item) => (
                        <li key={item.id} className="flex items-center justify-center my-5">
                            {item.icon && <i className={item.icon} ></i>}
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className='mx-5 text-4xl'>{item.name}</a>
                            ) : (
                                <span className="mx-5 text-4xl ">{item.name}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Contact;
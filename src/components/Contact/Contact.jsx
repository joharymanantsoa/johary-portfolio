import contact from './contact.js';


function Contact(){
    return(
        <>
            <h1>
                Contactez-moi
            </h1>
            <ul>
                {contact.map((item) => (
                    <li key={item.id} className="flex items-center justify-center my-5">
                        {item.icon && <i className={item.icon}></i>}
                        {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className='mx-5'>{item.name}</a>
                        ) : (
                            <span className="mx-5">{item.name}</span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Contact;
import contact from './contact.js';


function Contact(){
    return(
        <>
            <h1>
                Contactez-moi
            </h1>
            <ul>
                {contact.map((contact) => (
                    <li key={contact.id}>
                        {contact.icon && <i className={contact.name}></i>}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Contact;
import contact from "../Contact/contact.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row bg-gray-400 py-4 w-full">
      {/* Nom stylisé */}
      <div className="w-full md:w-[30%] text-center md:text-left p-5 flex justify-center md:justify-start items-center">
        <a
          href=".home"
          className="text-2xl font-extrabold tracking-wide hover:text-white transition duration-300"
        >
          Johary Manantsoa
        </a>
      </div>

      {/* Texte central */}
      <div className="w-full md:w-[40%] text-center p-5">
        <p className="text-sm">© {year} Johary. All rights reserved.</p>
        <p className="text-sm">Made with ❤️ using React</p>
      </div>

      {/* Icônes de contact */}
      <div className="w-full md:w-[30%] flex justify-center md:justify-end items-center p-5">
        {contact.map((item) => (
          <div key={item.id} className="mx-2">
            <a
              className={`${item.icon} text-xl hover:text-white transition duration-300`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

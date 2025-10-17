import contact from "../Contact/contact.js";
import { useState } from "react";

function Footer() {
  const year = new Date().getFullYear();
  const [showCard, setShowCard] = useState(false);

  return (
    <footer className="flex flex-col md:flex-row bg-gray-400 py-4 w-full relative">
      {/* Partie nom + carte */}
      <div
        className="w-full md:w-[30%] text-center md:text-left p-5 flex justify-center md:justify-start items-center relative"
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
      >
        <a
          href=".home"
          className="text-2xl font-extrabold tracking-wide text-gray-800 hover:text-white transition duration-300 relative z-10"
        >
          Johary Manantsoa
        </a>

        {/* Carte de visite centrée à l’écran */}
        {showCard && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-800 p-4 rounded-md shadow-lg w-64 z-50 transition-opacity duration-300">
            <p className="font-bold text-lg">Johary Manantsoa</p>
            <p className="text-sm">Développeur Front-End</p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Email:</span>{" "}
              johary@example.com
            </p>
            <p className="text-sm">
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/johary"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                /johary
              </a>
            </p>
          </div>
        )}
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

import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="bg-juicy-blue-space-light py-4 text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/logo.png"
              alt="Centro Educacional Estrela Dalva"
              className="w-40 mx-auto sm:mx-0"
            />
          </div>
          <div className="flex items-center justify-center text-center sm:text-center mt-2 sm:mt-0">
            <p className="text-lg mb-2">
              &copy; {currentYear} Centro Educacional Estrela Dalva
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xl mr-3.5 font-black">Contato</p>
            <div className="flex items-center justify-center sm:justify-end">
              <a
                href="https://api.whatsapp.com/send?phone=5583996907686"
                className="text-lg mr-3.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com Dalva
              </a>
              <IoLogoWhatsapp className="text-2xl mr-2" />
            </div>
            <div className="flex items-center justify-center sm:justify-end">
              <a
                href="https://api.whatsapp.com/send?phone=5583998212733"
                className="text-lg mr-3.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com Ricardo
              </a>
              <IoLogoWhatsapp className="text-2xl mr-2" />
            </div>
            <div className="flex items-center justify-center sm:justify-end">
              <a
                href="https://www.instagram.com/ceestreladalva/"
                className="text-lg mr-3.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Siga-nos no Instagram
              </a>
              <AiFillInstagram className="text-2xl mr-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;

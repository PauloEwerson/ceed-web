import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="bg-juicy-blue-space-light text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-4">Entre em Contato</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <a
            href="https://wa.me/5583996907686"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-500"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Dalva: (83) 9.9690-7686</span>
          </a>
          <a
            href="https://wa.me/5583998212733"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-500"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Ricardo: (83) 9.9821-2733</span>
          </a>
          <a
            href="https://www.instagram.com/ceestreladalva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-500"
          >
            <FaInstagram className="text-2xl" />
            <span>@ceestreladalva</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-xl font-bold mb-4 md:mb-0">Main Yapı</div>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-blue-400 transition duration-300">Anasayfa</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition duration-300">Hakkımızda</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projeler</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition duration-300">İletişim</a></li>
          </ul>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} mainyapi.com Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
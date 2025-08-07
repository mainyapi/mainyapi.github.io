// src/components/Header.tsx
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-2 py flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <a href="#" className="flex items-center">
<img
  src="/images/main-yapi.jpg"
  alt="Main Yapı Logo"
  className="h-20 w-auto object-contain"
/>
      </a>
    </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
<ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-full shadow-md md:shadow-none py-4 md:py-0 text-center`}>
  <li><a href="#hero" className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 transition duration-300">Anasayfa</a></li>
  <li><a href="#about" className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 transition duration-300">Hakkımızda</a></li>
  <li><a href="#projects" className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 transition duration-300">Projeler</a></li>
  <li><a href="#contact" className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 transition duration-300">İletişim</a></li>
</ul>
      </nav>
    </header>
  );
};

export default Header;
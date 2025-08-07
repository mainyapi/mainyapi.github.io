// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';
import heroImages from '../data/heroImages.json';

interface HeroImage {
  id: number;
  src: string;
  alt: string;
}

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // 5 saniyede bir görsel değişimi

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
           style={{ backgroundImage: `url(${heroImages[currentImageIndex].src})` }}>
      </div>
 
    </section>
  );
};

export default Hero;
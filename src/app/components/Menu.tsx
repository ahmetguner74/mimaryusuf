"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "905446932627";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  // Menü açıkken scroll'u kilitle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Menü dışına tıklandığında kapat
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Menü Butonu */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className={`
          fixed top-8 right-8 z-50 
          w-12 h-12 
          flex flex-col justify-center items-center gap-1.5 
          bg-white/80 backdrop-blur-sm
          rounded-full 
          shadow-lg hover:shadow-xl
          transition-all duration-300
          hover:scale-110
          group
          border border-gray-100
        `}
      >
        <span className={`
          w-5 h-0.5 
          bg-gray-800 
          transition-all duration-300 ease-in-out
          group-hover:w-6
          ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
        `}></span>
        <span className={`
          w-5 h-0.5 
          bg-gray-800 
          transition-all duration-300 ease-in-out
          group-hover:w-4
          ${isMenuOpen ? 'opacity-0' : ''}
        `}></span>
        <span className={`
          w-5 h-0.5 
          bg-gray-800 
          transition-all duration-300 ease-in-out
          group-hover:w-6
          ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
        `}></span>
      </button>

      {/* Karartma Overlay'i */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={handleClickOutside}
        ></div>
      )}

      {/* Menü Paneli */}
      <div 
        className={`fixed top-0 right-0 w-full md:w-96 h-screen bg-white shadow-2xl z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 pt-24">
          <nav className="space-y-6">
            <Link 
              href="/" 
              className="block text-2xl font-light hover:text-gray-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ANA SAYFA
            </Link>
            <Link 
              href="/hakkinda" 
              className="block text-2xl font-light hover:text-gray-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HAKKINDA
            </Link>
            <Link 
              href="/projeler" 
              className="block text-2xl font-light hover:text-gray-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJELER
            </Link>
            <a 
              href="mailto:ozdamaryusuf@gmail.com" 
              className="block text-2xl font-light hover:text-gray-600 transition duration-300"
            >
              İLETİŞİM
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-2xl font-light hover:text-gray-600 transition duration-300"
            >
              WHATSAPP
            </a>
          </nav>
        </div>
      </div>
    </>
  );
} 
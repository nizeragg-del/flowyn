import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { images } from '../config/images';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'SERVIÇOS', href: '#servicos' },
    { label: 'PROJETOS', href: '#projetos' },
    { label: 'SOBRE A FLOWYN', href: '#sobre' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F19]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={images.logo}
            alt="Flowyn Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 border border-white/20 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="text-xs font-medium text-gray-300 hover:text-white px-4 py-1 transition-colors tracking-wider">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="text-xs font-bold text-white px-4 py-1 hover:text-cyan-400 transition-colors tracking-wider">
            CONTATO
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19] border-t border-white/10 p-6 flex flex-col space-y-4">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
            CONTATO
          </a>
        </div>
      )}
    </nav>
  );
};
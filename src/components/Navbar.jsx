// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, X, Phone, Search, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PAGES', href: '#pages' },
    { name: 'OTHERS', href: '#others' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5C15 5 12 8 12 12C12 14 13 16 15 17C13 18 10 20 10 24C10 28 13 32 20 32C27 32 30 28 30 24C30 20 27 18 25 17C27 16 28 14 28 12C28 8 25 5 20 5Z"
                fill="#0B7AD1"
              />
            </svg>
            <div>
              <div className="text-2xl font-bold text-[#0B7AD1] leading-none">
                Simbo Dental Clinic
              </div>
              <div className="text-[10px] text-gray-600 leading-none">
                Your Trusted Dental Care Partner
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-[#0B7AD1] font-semibold text-sm transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#0B7AD1] p-2">
              <Search size={20} />
            </button>
            <button className="relative text-gray-700 hover:text-[#0B7AD1] p-2">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#0B7AD1] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-[#0B7AD1] p-2">
              <Phone size={20} />
            </button>
            <div className="text-right">
              <div className="text-xs text-[#0B7AD1]">Hotline Number:</div>
              <div className="text-sm font-bold text-gray-900">+123-7767-8989</div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-[#0B7AD1]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-gray-700 hover:text-[#0B7AD1] font-semibold py-2"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <div className="text-xs text-[#0B7AD1]">Hotline Number:</div>
              <div className="text-sm font-bold text-gray-900">+123-7767-8989</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

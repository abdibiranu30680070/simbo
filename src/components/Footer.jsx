// src/components/Footer.jsx
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Dental Implants',
    'Orthodontics',
    'Pediatric Dentistry',
    'Emergency Care',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-34 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Social */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">Simbo Dental Clinic</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              Your trusted partner in dental health. We provide comprehensive dental care with a focus on comfort and excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-teal-500 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex items-start space-x-3">
                <MapPin className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                <span>
                  123 Dental Street, Suite 456<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-teal-500 flex-shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-teal-500 flex-shrink-0" size={20} />
                <span>info@simbodental.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-sm sm:text-base">
              © {new Date().getFullYear()} Simbo Dental Clinic. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm sm:text-base">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

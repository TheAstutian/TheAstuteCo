import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Monitor, Zap, Twitter, Instagram, Share2, Mail, Phone, MapPin } from 'lucide-react'; 
import { Link } from 'react-router-dom';


export const bgcolor= '#16161a' //bg-zinc-600


export const Navbar = ({ activeView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', target: '/' },
    { name: 'Services', target: '/services' },
    { name: 'Packages', target: '/packages' }
    
  ];

  {/* name: 'Projects', target: 'projects' },*/}
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className={`sticky top-0 z-50 bg-black  `}>
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <h1 className=" text-lg md:text-xl text-cyan-50 tracking-tight cursor-pointer font-LibreFranklin" onClick={() => scrollToSection('hero')}>
          <Link to="/">The Astute Company</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden  md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={`${item.target}`}
              className="text-gray-50 font-LibreFranklin hover:text-gray-700 transition duration-300 text-md hover:cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/conversion">
        <button
          className=" font-LibreFranklin md:inline-flex items-center px-4 py-2 rounded border-1 border-black bg-[#16161a] text-sm font-extrabold text-cyan-50 hover:bg-zinc-600 hover:cursor-pointer "
        >
          Get Started! {/* Book your session <ArrowRight className="ml-2 w-4 h-4" />*/}
        </button>
        </Link>

        {/*-----------------------*/}

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>



      {/* Mobile Menu */}
      {isOpen && (
        <div className={` absolute w-full md:hidden shadow-xl bg-[${bgcolor}]`}>
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={`${item.target}`}
              className=" block w-full text-left px-6 py-3 text-cyan-50 font-LibreFranklin transition duration-150"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))} 
        </div>
      )}
    </div>
  );
};

// --- Footer Component ---
export const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 border-b pb-6 border-gray-700">
        
        {/* Brand Info */}
        <div>
          <h5 className="text-2xl font-extrabold text-white mb-4">
            <span className="text-cyan-50">The Astute Company</span>
          </h5>
          <p className="text-gray-400 text-sm max-w-[12rem]">
            Engineered for growth. We deliver results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Quick Links</h6>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/conversion" className="hover:text-neutral-500 transition">Get Started</Link></li>
            <li><Link to="/packages" className="hover:text-neutral-500 transition">Our Packages </Link></li>
            <li><Link to="/services" className="hover:text-neutral-500 transition"> Our Services</Link></li>
            <li><Link to="/" className="hover:text-neutral-500 transition">Client Results</Link></li>
            <li><Link to="/services" className="hover:text-neutral-500 transition">Our Method</Link></li>
            
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Get In Touch</h6>
          <div className="space-y-3 text-sm">
            <div className="flex items-center text-gray-400">
              <Mail className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <a href="mailto:strategy@astutians.com" className="hover:text-green-400 transition">strategy@theastutecompany.com</a>
            </div>
            <div className="flex items-center text-gray-400">
              <Phone className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <a href="tel:+1-555-ASTUTE" className="hover:text-green-400 transition">+44 750 7095524 </a>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <span>Doncaster, United Kingdom</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Connect</h6>
          <div className="flex space-x-4">
            <a href="https://twitter.com/TheAstutians" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition duration-300">
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a href="https://instagram.com/TheAstutians" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition duration-300">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="https://tiktok.com/@TheAstutians" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition duration-300">
              {/* Using Share2 as a stand-in for TikTok, as a dedicated icon is not available in Lucide */}
              <Share2 className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} The Astute Company. All rights reserved. | <a href="#" className="hover:text-white transition">Privacy Policy</a> | <a href="#" className="hover:text-white transition">Terms</a></p>
      </div>
    </div>
  </footer>
);

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { IconMenu2, IconX } from '@tabler/icons-react';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#', label: 'Home' },
  { href: '#our-properties', label: 'Properties' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#booking', label: 'Book Now' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#cancellation-policy', label: 'Policy' },
  // { href: '#location', label: 'Location' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Smooth scroll to section
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white border-b border-gray-200'
          : 'bg-transparent'
      }`}
      ref={menuRef}
    >
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14 sm:h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a
              href='#'
              onClick={(e) => handleNavClick(e, '#')}
              className='flex gap-2 items-center cursor-pointer'
            >
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={40}
                height={40}
                className='w-10 h-10 bg-white rounded-full'
              />
              <span
                className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'
                }`}
              >
                TravellersEscape
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className='hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1 lg:gap-2'>
            {navLinks.map((link: NavLink) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base font-medium relative group transition-colors duration-300 cursor-pointer ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white hover:text-gray-100'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full -translate-x-1/2 ${
                    isScrolled ? 'bg-gray-900' : 'bg-gray-100'
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className='hidden md:block'>
            <a
              href='#booking'
              onClick={(e) => handleNavClick(e, '#booking')}
              className={`px-4 lg:px-6 py-2  rounded-full text-sm lg:text-base font-medium transition-colors duration-300 cursor-pointer ${
                isScrolled
                  ? 'text-white hover:text-gray-200 bg-black'
                  : 'text-black hover:text-gray-600 bg-white'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 touch-manipulation ${
              isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'
            }`}
            aria-expanded={isMenuOpen}
          >
            <span className='sr-only'>Open main menu</span>
            {!isMenuOpen ? (
              <IconMenu2 className='w-6 h-6' stroke={2} />
            ) : (
              <IconX className='w-6 h-6' stroke={2} />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 max-h-[500px] visible'
            : 'opacity-0 max-h-0 invisible'
        }`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 max-w-7xl mx-auto'>
          {navLinks.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className='block px-3 py-3 rounded-md text-base text-center cursor-pointer font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 touch-manipulation'
            >
              {link.label}
            </a>
          ))}
          <a
            href='#booking'
            onClick={(e) => handleNavClick(e, '#booking')}
            className='block px-3 py-3 rounded-md text-base cursor-pointer font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-center mt-2 touch-manipulation'
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

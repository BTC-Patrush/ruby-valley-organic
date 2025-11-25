// components/MobileMenu.tsx
'use client'; 

import { useState } from 'react';
import Link from 'next/link'; // Use Next.js Link for navigation

const navItems = [
  { name: 'Shop', href: '/shop' },
  { name: 'Our Story', href: '/story' },
  
  { name: 'Contact', href: '/contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button onClick={toggleMenu} className="md:hidden text-charcoal focus:outline-none">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Content */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg`}>
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={closeMenu} className="block text-charcoal hover:text-ruby text-lg font-medium transition">
              {item.name}
            </Link>
          ))}
          <button onClick={closeMenu} className="w-full bg-ruby text-white px-4 py-3 rounded-lg hover:bg-red-900 transition shadow-md mt-4">
            Cart (0) {/* This would become its own Client Component for Cart status */}
          </button>
        </div>
      </div>
    </>
  );
}
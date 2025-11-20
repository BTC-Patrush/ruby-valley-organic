// components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from '../ui/MobileMenu';

export default function Header() {
  const pathname = usePathname();

  // Helper: check if link is active
  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white/90 sticky top-0 z-50 shadow-sm border-b border-gray-100 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="text-3xl font-header font-bold text-ruby">
          Ruby Valley
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: '/shop', label: 'Shop' },
            { href: '/story', label: 'Our Story' },
            // { href: '/crystals', label: 'Crystals' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition duration-300 ${
                isActive(href)
                  ? 'text-ruby font-bold'
                  : 'text-charcoal hover:text-ruby'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Cart Button */}
        <button className="bg-ruby text-white px-4 py-2 rounded-lg hover:bg-red-900 transition duration-300 shadow-md hidden md:block">
          Cart (0)
        </button>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
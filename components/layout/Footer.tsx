// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Mission */}
        <div>
          <h3 className="text-2xl font-header font-bold text-white mb-4">
            Ruby Valley
          </h3>
          <p className="text-sm text-gray-300">
            Sourcing Nepal&apos;s purest natural goods and sharing the high-altitude story with the cities.
          </p>
        </div>

        {/* Shop Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Shop Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/shop#produce"
                className="text-gray-200 hover:text-ruby transition duration-300"
              >
                Organic Produce
              </Link>
            </li>
            <li>
              <Link
                href="/shop#crystals"
                className="text-gray-200 hover:text-ruby transition duration-300"
              >
                Himalayan Crystals
              </Link>
            </li>
            <li>
              <Link
                href="/shop#dairy"
                className="text-gray-200 hover:text-ruby transition duration-300"
              >
                Dairy &amp; Cheese
              </Link>
            </li>
            <li>
              <Link
                href="/shop#water"
                className="text-gray-200 hover:text-ruby transition duration-300"
              >
                Pure Glacial Water
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about#mission"
                className="text-gray-200 hover:text-ruby transition duration-300"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="text-gray-200 hover:text-ruby transition duration-300"
              >
                Shipping &amp; Delivery
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-gray-200 hover:text-ruby transition duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-ruby transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
          <p className="text-sm text-gray-300 mb-2">Email: sales@rubyvalley.com.np</p>
          <p className="text-sm text-gray-300">Serving: Kathmandu, Pokhara, &amp; Beyond</p>

          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-200 hover:text-ruby transition duration-300"
              aria-label="Follow us on Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.125 8.438 9.873V14h-2.54v-3h2.54V9.356c0-2.503 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.772-1.63 1.563V11h2.77l-.443 3h-2.327v7.873C18.343 21.125 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-200 hover:text-ruby transition duration-300"
              aria-label="Follow us on Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 15.5h-7A2.5 2.5 0 0 1 5 15.5v-7A2.5 2.5 0 0 1 7.5 6h7A2.5 2.5 0 0 1 17 8.5v7a2.5 2.5 0 0 1-2.5 2.5zm0-11h-7A1.5 1.5 0 0 0 6 8.5v7A1.5 1.5 0 0 0 7.5 17h7A1.5 1.5 0 0 0 16 15.5v-7a1.5 1.5 0 0 0-1.5-1.5zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.5-8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Ruby Valley Trading. All Rights Reserved.
      </div>
    </footer>
  );
}
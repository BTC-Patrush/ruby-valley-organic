'use client'; // <-- ADDED THIS LINE TO FIX THE ERROR

// import Link from 'next/link'; // Replaced with standard <a> tags to resolve build error

export default function Footer() {
  return (
    <>
      {/* This style tag imports the Bootstrap Icons. 
        If you already import this in your main layout.tsx or globals.css,
        you can remove this style tag.
      */}
      <style jsx global>{`
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
      `}</style>
      
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
                <a
                  href="/shop#produce"
                  className="text-gray-200 hover:text-ruby transition duration-300"
                >
                  Organic Produce
                </a>
              </li>
              <li>
                <a
                  href="/shop#crystals"
                  className="text-gray-200 hover:text-ruby transition duration-300"
                >
                  Himalayan Crystals
                </a>
              </li>
              <li>
                <a
                  href="/shop#dairy"
                  className="text-gray-200 hover:text-ruby transition duration-300"
                >
                  Dairy &amp; Cheese
                </a>
              </li>
              <li>
                <a
                  href="/shop#water"
                  className="text-gray-200 hover:text-ruby transition duration-300"
                >
                  Pure Glacial Water
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about#mission"
                  className="text-gray-200 hover:text-ruby transition duration-300"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="text-gray-200 hover:text-ruby transition duration-300"
                >
                  Shipping &amp; Delivery
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-200 hover:text-ruby transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-200 hover:text-ruby transition duration-300"
                >
                  Contact Us
                </a>
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
                className="text-xl text-gray-200 transition duration-300"
                aria-label="Follow us on Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-200 transition duration-300"
                aria-label="Follow us on Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              
              {/* === YOUTUBE (Bootstrap Icon) === */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-200 transition duration-300"
                aria-label="Follow us on YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
              
              {/* === TIKTOK (Bootstrap Icon) === */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-200 transition duration-300"
                aria-label="Follow us on TikTok"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ruby Valley Trading. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
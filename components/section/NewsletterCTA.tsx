"use client";

import React, { useState } from "react";

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual subscription logic
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-16 bg-ruby">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-header font-bold text-white mb-4">
          Unlock Exclusive Himalayan Harvests
        </h2>
        <p className="text-lg text-red-100 mb-8">
          Be the first to know about new seasonal produce, rare crystal finds,
          and exclusive city delivery alerts.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 p-4 rounded-xl border-2 border-white bg-white focus:ring-4 focus:ring-red-300 focus:outline-none text-charcoal"
          />
          <button
            type="submit"
            className="w-full sm:w-1/3 text-white font-bold py-4 px-6 rounded-xl shadow-lg bg-gray-700 transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;

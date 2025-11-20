"use client";

import React from "react";


const DeliverySection: React.FC = () => {
  

  return (
    <section className="py-12 bg-white border-b border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-header font-bold mb-8 text-charcoal">Guaranteed Delivery: Kathmandu & Pokhara</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-4 rounded-xl border border-gray-200">
                <span className="text-2xl text-ruby font-bold block mb-2">1. Freshness</span>
                <p className="text-gray-600">Specialized cold-chain logistics ensure organic produce and dairy maintain peak freshness from the Valley to your kitchen.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200">
                <span className="text-2xl text-ruby font-bold block mb-2">2. Reliability</span>
                <p className="text-gray-600">We partner with trusted carriers to guarantee reliable, scheduled delivery windows within Kathmandu and Pokhara.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200">
                <span className="text-2xl text-ruby font-bold block mb-2">3. Tracking</span>
                <p className="text-gray-600">Receive real-time tracking updates so you know exactly when your Himalayan treasures will arrive.</p>
              </div>
            </div>
          </div>
        </section>
  );
};

export default DeliverySection;

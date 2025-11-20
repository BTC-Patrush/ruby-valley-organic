"use client";

import React from "react";

type Testimonial = {
  id: number;
  text: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: `"The difference in the apples is unreal—so crisp and flavorful. The cold chain delivery to Kathmandu was flawless. I feel connected to the source."`,
    author: "- Anjana T., Health Food Store Owner (Kathmandu)",
  },
  {
    id: 2,
    text: `"My Himalayan Quartz cluster is breathtaking. The detailed story of how it was found in the valley made it a truly special purchase."`,
    author: "- Bimal K., Collector (Pokhara)",
  },
  {
    id: 3,
    text: `"I haven't had Yak cheese this pure since I was trekking. The quality speaks for itself. It arrived perfectly packaged and fresh."`,
    author: "- Dawa G., Gourmet Chef (Kathmandu)",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-header font-bold text-center mb-12 text-charcoal">
          Trusted by the City. Sourced from the Peaks.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-ruby"
            >
              <p className="text-xl italic text-charcoal mb-4">{testimonial.text}</p>
              <p className="font-semibold text-charcoal">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

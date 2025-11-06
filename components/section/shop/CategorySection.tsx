"use client";

import React, { ReactNode, useRef } from "react";

interface CategorySectionProps {
  title: string;
  subtitle: string;
  bgColor?: string;
  categoryId: string;
  children: ReactNode;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  subtitle,
  bgColor = "bg-white",
  categoryId,
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8; // scroll 80% of container width
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className={`relative ${bgColor} rounded-xl p-6 sm:p-8 my-8`}>
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-header font-bold text-charcoal">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1">
          {subtitle}
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        >
          {/* <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {/* <HiChevronLeft className="w-6 h-6 text-charcoal" /> */}
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          {/* <HiChevronRight className="w-6 h-6 text-charcoal" /> */}
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto overflow-y-hidden scroll-smooth -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {children}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

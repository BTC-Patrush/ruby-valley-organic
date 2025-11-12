
// import { allProducts } from '@/data/products';
// import Image from 'next/image';

// interface Props {
//   params: Promise<{ slug: string }>; // 👈 params is now a Promise
// }

// export default async function ProductPage({ params }: Props) {
//   const { slug } = await params; // 👈 must await here

//   const product = allProducts.find((p) => p.slug === slug);
  

//   if (!product) {
//     return (
//       <div className="py-20 text-center">
//         <h1 className="text-2xl font-semibold text-gray-700">Product not found</h1>
//         <p className="text-gray-400 mt-2">{slug}</p>
//       </div>
//     );
//   }

//   return (
    

//   <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
//       {/* Breadcrumb */}
//       <nav className="text-sm mb-6">
//         <a href="/shop" className="text-gray-500 hover:text-ruby">Shop</a>
//         <span className="mx-2 text-gray-400">/</span>
//         <a href="#" className="text-gray-500 hover:text-ruby">{product.category}</a>
//         <span className="mx-2 text-gray-400">/</span>
//         <span className="text-ruby">{product.name}</span>
//       </nav>

//       {/* Product Grid */}
//       <div className="lg:grid lg:grid-cols-2 lg:gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">

//         {/* Left: Image Gallery + Quick Info */}
//         <div className="lg:sticky lg:top-32 h-fit mb-10 lg:mb-0">

//           {/* Main Image */}
//           <Image
//             src={`/images/${product.category.toLowerCase()}/${product.image}.png`}
//             alt={product.name}
//             width={600}
//             height={450}
//             className="w-full h-auto rounded-xl shadow-lg border border-gray-100 object-cover mb-4 cursor-pointer transition-transform hover:scale-[1.01]"
//           />

//           {/* Thumbnail Gallery */}
//           <div className="grid grid-cols-3 gap-2">
//             {Array(3).fill(0).map((_, i) => (
//               <Image
//                 key={i}
//                 src={`/images/${product.category.toLowerCase()}/${product.image}.png`}
//                 alt={product.name + ' thumbnail'}
//                 width={200}
//                 height={150}
//                 className="w-full h-auto rounded-md border-2 border-gray-200 cursor-pointer hover:border-ruby transition"
//                 // onClick={() => changeImage(`/images/${product.category.toLowerCase()}/${product.image}.png`)}
//               />
//             ))}
//           </div>

//           {/* Quick Info Card */}
//           <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
//             <h1 className="font-header text-4xl font-bold text-charcoal mb-2">{product.name}</h1>
//             <p className="text-lg text-gray-600 mb-4">Unit: {product.unit}</p>

//             {/* Rating */}
//             <div className="flex items-center mb-4">
//               <span className="text-yellow-500">{'★'.repeat(product.id)}</span>
//               <span className="ml-2 text-sm text-gray-600">({product.description} reviews)</span>
//             </div>

//             {/* Dynamic Price */}
//             <div className="flex flex-col mb-6 border-t pt-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p id="price-display" className="text-ruby font-extrabold text-3xl">NPR <span>{product.price}</span></p>
//                   {product.price && (
//                     <p id="original-price" className="text-gray-500 text-sm line-through">NPR {product.price}</p>
//                   )}
//                 </div>
//                 <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${product.category ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                   {product.category ? 'In Stock' : 'Out of Stock'}
//                 </span>
//               </div>
//             </div>

//             {/* Quantity Selector */}
//             <div className="flex items-center mb-6">
//               <span className="text-charcoal font-medium mr-4">Quantity:</span>
//               <div className="flex items-center border border-gray-300 rounded-lg">
//                 <button  className="w-10 h-10 text-charcoal hover:bg-gray-100 transition">–</button>
//                 <input type="number" readOnly className="w-16 text-center font-medium text-charcoal border-x border-gray-300" />
//                 <button  className="w-10 h-10 text-charcoal hover:bg-gray-100 transition">+</button>
//               </div>
//             </div>

//             {/* Add to Cart */}
//             <button className="w-full bg-ruby text-white text-xl font-medium py-4 rounded-lg shadow-md hover:bg-red-900 transition duration-300 flex items-center justify-center space-x-2">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//               </svg>
//               <span>Add to Cart</span>
//             </button>

//           </div>
//         </div>

//         {/* Right: Story + Details */}
//         <div>
//           <span className="text-sm font-semibold uppercase tracking-wider bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full mb-4 inline-block">{product.category}</span>
//           <h2 className="font-header text-5xl font-bold text-charcoal mb-6">The Origin Story</h2>
//           <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-10">
//             {product.description}
//           </div>
//         </div>

//       </div>
//     </main>
    
//   )};

// // Example: you can replace this with your real data import

'use client';

import React, { useState, useEffect } from 'react';

// A reusable component for the star rating for better accessibility
const StarRating = ({ rating = 5, reviews }: { rating?: number; reviews: number }) => {
    return (
        <div className="flex items-center mb-4">
            <div className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.182c.969 0 1.371 1.24.588 1.81l-3.383 2.457a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.457a1 1 0 00-1.175 0l-3.383 2.457c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.28 9.401c-.783-.57-.38-1.81.588-1.81h4.182a1 1 0 00.95-.69l1.287-3.974z" />
                    </svg>
                ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 sr-only">{rating} out of 5 stars</span>
            <span className="ml-2 text-sm text-gray-600">({reviews} reviews)</span>
        </div>
    );
};

// Main Product Page Component
export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState({
        src: 'https://placehold.co/600x450/A0D2EB/FFFFFF?text=Glacial+Water',
        alt: 'Ruby Glacial Water - 5,200m Purity',
    });
    const [isWholesaleFormOpen, setIsWholesaleFormOpen] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const basePrice = 800;
    const total = basePrice * quantity;
    const formQuantityText = `${quantity} ${quantity === 1 ? 'bottle' : 'bottles'}`;

    // Handler for quantity buttons
    const handleQuantityChange = (change: number) => {
        setQuantity((prev) => Math.max(1, Math.min(24, prev + change)));
    };

    // Handler for thumbnail clicks
    const handleThumbnailClick = (src: string, alt: string) => {
        setMainImage({ src, alt });
    };

    // Effect for closing lightbox with 'Escape' key
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsLightboxOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    // Thumbnail data
    const thumbnails = [
        { src: 'https://placehold.co/200x150/A0D2EB/FFFFFF?text=Glacier+Source', alt: 'Glacier source' },
        { src: 'https://placehold.co/200x150/B3E5FC/FFFFFF?text=Bottle+Closeup', alt: 'Bottle close-up' },
        { src: 'https://placehold.co/200x150/81D4FA/FFFFFF?text=Pouring+Water', alt: 'Pouring water' },
    ];

    return (
        <>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                {/* Breadcrumb */}
                <nav className="text-sm mb-6">
                    <a href="shop.html" className="text-gray-500 hover:text-ruby">Shop</a>
                    <span className="mx-2 text-gray-400">/</span>
                    <a href="#" className="text-gray-500 hover:text-ruby">Beverages</a>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-ruby">Ruby Glacial Water</span>
                </nav>

                {/* Product Grid */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                    {/* Left: Image Gallery + Quick Info */}
                    <div className="lg:sticky lg:top-32 h-fit mb-10 lg:mb-0">
                        {/* Main Image */}
                        <img
                            id="main-image"
                            src={mainImage.src}
                            alt={mainImage.alt}
                            onClick={() => setIsLightboxOpen(true)}
                            className="w-full h-auto rounded-xl shadow-lg border border-gray-100 object-cover mb-4 cursor-pointer transition-transform hover:scale-[1.01]"
                        />

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-3 gap-2">
                            {thumbnails.map((thumb) => (
                                <img
                                    key={thumb.src}
                                    src={thumb.src}
                                    alt={thumb.alt}
                                    className="w-full h-auto rounded-md border-2 border-gray-200 cursor-pointer hover:border-ruby transition"
                                    onClick={() => handleThumbnailClick(thumb.src, thumb.alt)}
                                />
                            ))}
                        </div>

                        {/* Quick Info Card */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
                            <h1 className="font-header text-4xl font-bold text-charcoal mb-2">Ruby Glacial Water</h1>
                            <p className="text-lg text-gray-600 mb-4">Unit: 1 Liter Bottle</p>

                            {/* Rating */}
                            <StarRating reviews={68} />

                            {/* Dynamic Price Display */}
                            <div className="flex flex-col mb-6 border-t pt-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p id="price-display" className="text-ruby font-extrabold text-3xl">
                                            NPR <span>{total.toLocaleString()}</span>
                                        </p>
                                        {/* Original price display (hidden) */}
                                        <p id="original-price" className="text-gray-500 text-sm line-through hidden">
                                            NPR {total.toLocaleString()}
                                        </p>
                                    </div>
                                    <span id="stock-status" className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                        In Stock
                                    </span>
                                </div>
                                {/* Savings badges (hidden) */}
                                <p id="savings-badge" className="mt-2 text-green-600 font-semibold text-sm hidden">
                                    Save NPR <span id="savings-amount">0</span>!
                                </p>
                                <p id="subscription-badge" className="mt-1 text-purple-600 font-medium text-sm hidden">
                                    <span id="subscription-text">Subscribe & Save 15%</span>
                                </p>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center mb-6">
                                <span className="text-charcoal font-medium mr-4">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button onClick={() => handleQuantityChange(-1)} className="w-10 h-10 text-charcoal hover:bg-gray-100 transition">–</button>
                                    <input
                                        type="number"
                                        id="quantity"
                                        value={quantity}
                                        min="1"
                                        max="24"
                                        className="w-16 text-center font-medium text-charcoal border-x border-gray-300"
                                        readOnly
                                    />
                                    <button onClick={() => handleQuantityChange(1)} className="w-10 h-10 text-charcoal hover:bg-gray-100 transition">+</button>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button id="add-to-cart-btn" className="w-full bg-ruby text-white text-xl font-medium py-4 rounded-lg shadow-md hover:bg-red-900 transition duration-300 flex items-center justify-center space-x-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                <span>Add to Cart</span>
                            </button>

                            {/* Wholesale Inquiry Button */}
                            <button onClick={() => setIsWholesaleFormOpen(!isWholesaleFormOpen)} className="mt-4 w-full bg-charcoal text-white text-lg font-medium py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
                                Wholesale Inquiry
                            </button>

                            {/* Wholesale Form */}
                            {isWholesaleFormOpen && (
                                <div id="wholesale-form" className="mt-6">
                                    <form id="wholesaleForm" action="mailto:wholesale@rubyvalley.com.np" method="post" encType="text/plain" className="space-y-4">
                                        <input type="hidden" id="form-product" name="Product" value="Ruby Glacial Water" />
                                        <input type="hidden" id="form-quantity" name="Requested Quantity" value={formQuantityText} />
                                        <input type="hidden" id="form-subscription" name="Subscription" value="One-time" />

                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
                                            <input type="text" name="Name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ruby focus:outline-none" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1">Email *</label>
                                            <input type="email" name="Email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ruby focus:outline-none" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1">Company / Store (Optional)</label>
                                            <input type="text" name="Company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ruby focus:outline-none" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1">Message</label>
                                            <textarea name="Message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ruby focus:outline-none" placeholder="Tell us about your business, delivery location, or any questions..."></textarea>
                                        </div>

                                        <button type="submit" className="w-full bg-ruby text-white font-medium py-3 rounded-lg shadow-md hover:bg-red-900 transition">
                                            Send Wholesale Inquiry
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* Share Buttons */}
                            <div className="mt-6 flex justify-center space-x-3">
                                <span className="text-sm text-gray-600">Share:</span>
                                <a href="#" className="text-gray-500 hover:text-ruby"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></a>
                                <a href="#" className="text-gray-500 hover:text-ruby"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg></a>
                                <a href="#" className="text-gray-500 hover:text-ruby"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.47-9.96 9.96 0 4.41 2.86 8.15 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.91-.62 0-.61 0-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A9.96 9.96 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" /></svg></a>
                            </div>
                        </div>

                        {/* Price Transparency */}
                        <div className="mt-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-header text-xl font-bold text-charcoal mb-4">Our Price Transparency</h4>
                            <p className="text-sm text-gray-700 mb-4">
                                We believe in honesty. Here's a breakdown of your NPR 800 purchase and our commitment to giving back.
                            </p>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Production & Bottling:</span>
                                    <span className="font-medium text-charcoal">NPR 350</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Operations & Logistics:</span>
                                    <span className="font-medium text-charcoal">NPR 250</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Cost:</span>
                                    <span className="font-medium text-charcoal">NPR 600</span>
                                </div>
                                <div className="flex justify-between border-t pt-3 mt-3">
                                    <span className="text-gray-600">Our Profit Margin:</span>
                                    <span className="font-medium text-charcoal">NPR 200</span>
                                </div>
                                <div className="flex justify-between font-bold text-ruby">
                                    <span>50% to Charity:</span>
                                    <span>NPR 100</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4">
                                50% of our profit from every bottle sold is donated to glacier conservation and local community funds in Ruby Valley.
                            </p>
                        </div>

                        {/* Pre-Order Note */}
                        <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 text-xs text-purple-800">
                            <p className="font-medium text-purple-900"><span className="font-bold">Pre-Order Note:</span> As this is a 100% natural, small-batch product, first-time clients are requested to pre-order to guarantee supply.</p>
                        </div>

                    </div>

                    {/* Right: Story + Details */}
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wider bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full mb-4 inline-block">Beverages</span>
                        <h2 className="font-header text-5xl font-bold text-charcoal mb-6">The Origin Story</h2>

                        <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-10">
                            <p><strong>From the Roof of the World.</strong> Ruby Glacial Water is sourced from a pristine, untouched glacier at 5,200 meters in the Ruby Valley — one of the highest natural water sources on Earth. Over centuries, snow falls, compacts into ice, and slowly filters through ancient rock layers, emerging as liquid crystal.</p>
                            <p>No pumps. No pipes. No treatment. The water is captured at the glacier's edge using gravity-fed systems, then bottled in recyclable glass within 24 hours to preserve its living mineral structure and energetic purity.</p>
                            <p>Every sip carries the silence of the high peaks — clean, crisp, and alive. This is water as nature intended: untouched, balanced, and deeply hydrating.</p>
                        </div>

                        {/* Highlights */}
                        <div className="bg-ice p-6 rounded-lg border border-cyan-200 mb-10">
                            <h3 className="font-header text-2xl font-bold text-ruby mb-4">Why You'll Love It</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-ruby mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Naturally alkaline (pH 7.8–8.2)
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-ruby mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Rich in trace minerals: calcium, magnesium, silica
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-ruby mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Zero additives, zero treatment
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-ruby mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Supports local glacier conservation
                                </li>
                            </ul>
                        </div>

                        {/* Purity & Sourcing */}
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h3 className="font-header text-xl font-bold text-charcoal mb-3">Purity Standard</h3>
                                <p className="text-gray-700">TDS: 42 ppm<br />pH: 8.0<br />Zero nitrates, zero contaminants</p>
                            </div>
                            <div>
                                <h3 className="font-header text-xl font-bold text-charcoal mb-3">Sourcing</h3>
                                <p className="text-gray-700">Gravity-fed from Ruby Glacier, 5,200m. Bottled on-site in glass.</p>
                            </div>
                        </div>

                        {/* Mineral Profile Table */}
                        <div className="mb-10">
                            <h3 className="font-header text-xl font-bold text-charcoal mb-4">Mineral Profile (per liter)</h3>
                            <table className="w-full text-sm text-left text-gray-700 border border-gray-300">
                                <tbody>
                                    <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">Calcium</td><td className="px-4 py-2">12 mg</td></tr>
                                    <tr><td className="px-4 py-2 font-medium">Magnesium</td><td className="px-4 py-2">3 mg</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">Potassium</td><td className="px-4 py-2">1.2 mg</td></tr>
                                    <tr><td className="px-4 py-2 font-medium">Silica</td><td className="px-4 py-2">8 mg</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">Bicarbonates</td><td className="px-4 py-2">38 mg</td></tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Storage */}
                        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 mb-10">
                            <p className="text-sm"><strong>Storage:</strong> Store in a cool, dark place. Best consumed within 12 months. Recyclable glass bottle.</p>
                        </div>

                        {/* Reviews */}
                        <div className="mb-12">
                            <h3 className="font-header text-2xl font-bold text-charcoal mb-6">Customer Reviews</h3>
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-5 rounded-lg">
                                    <StarRating reviews={68} />
                                    <p className="text-sm font-medium -mt-2 mb-2">Ramesh B. – Kathmandu</p>
                                    <p className="text-gray-700">"Cleanest water I’ve ever tasted. No plastic aftertaste. Worth every rupee."</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-lg">
                                    <StarRating reviews={68} />
                                    <p className="text-sm font-medium -mt-2 mb-2">Elena S. – Switzerland</p>
                                    <p className="text-gray-700">"Like drinking from a mountain spring. My skin and energy feel better."</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-lg">
                                    <StarRating reviews={68} />
                                    <p className="text-sm font-medium -mt-2 mb-2">Dr. Karki – Lalitpur</p>
                                    <p className="text-gray-700">"Perfect pH. I recommend it to all my patients for hydration."</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="mb-12">
                            <h3 className="font-header text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
                                    <summary className="font-medium text-charcoal">Is it really from a glacier?</summary>
                                    <p className="mt-2 text-gray-700">Yes. Sourced directly from a living glacier at 5,200m. No aquifers, no springs.</p>
                                </details>
                                <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
                                    <summary className="font-medium text-charcoal">Why glass bottles?</summary>
                                    <p className="mt-2 text-gray-700">Preserves purity. No microplastics. Fully recyclable and reusable.</p>
                                </details>
                                <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
                                    <summary className="font-medium text-charcoal">Is it safe to drink daily?</summary>
                                    <p className="mt-2 text-gray-700">Absolutely. Naturally balanced minerals support long-term hydration.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <section className="mt-20">
                    <h3 className="font-header text-3xl font-bold text-charcoal mb-8 text-center">You May Also Like</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <a href="#" className="group">
                            <img src="https://placehold.co/300x300/FFD700/852C30?text=Honey" alt="High Altitude Honey" className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition" />
                            <h4 className="mt-3 font-semibold text-charcoal group-hover:text-ruby">High Altitude Honey</h4>
                            <p className="text-ruby font-bold">NPR 950</p>
                        </a>
                        <a href="#" className="group">
                            <img src="https://placehold.co/300x300/F4E3E3/852C30?text=Quartz" alt="Raw Quartz Cluster" className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition" />
                            <h4 className="mt-3 font-semibold text-charcoal group-hover:text-ruby">Raw Quartz Cluster</h4>
                            <p className="text-ruby font-bold">NPR 4,500</p>
                        </a>
                        <a href="#" className="group">
                            <img src="https://placehold.co/300x300/FAF0E6/852C30?text=Ghee" alt="Sheep Ghee" className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition" />
                            <h4 className="mt-3 font-semibold text-charcoal group-hover:text-ruby">Sheep Ghee</h4>
                            <p className="text-ruby font-bold">NPR 1,100</p>
                        </a>
                        <a href="#" className="group">
                            <img src="https://placehold.co/300x300/D4EDDA/852C30?text=Apples" alt="Mountain Apples" className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition" />
                            <h4 className="mt-3 font-semibold text-charcoal group-hover:text-ruby">Mountain Apples</h4>
                            <p className="text-ruby font-bold">NPR 350</p>
                        </a>
                    </div>
                </section>
            </main>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div id="lightbox" className="lightbox" style={{ display: 'flex' }} onClick={() => setIsLightboxOpen(false)}>
                    <span className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>×</span>
                    <img
                        id="lightbox-image"
                        src={mainImage.src}
                        alt={mainImage.alt}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                    />
                </div>
            )}
        </>
    );
}
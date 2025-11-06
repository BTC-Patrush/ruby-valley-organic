
import { allProducts } from '@/data/products';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>; // 👈 params is now a Promise
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params; // 👈 must await here

  const product = allProducts.find((p) => p.slug === slug);
  

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">Product not found</h1>
        <p className="text-gray-400 mt-2">{slug}</p>
      </div>
    );
  }

  return (
    

  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <a href="/shop" className="text-gray-500 hover:text-ruby">Shop</a>
        <span className="mx-2 text-gray-400">/</span>
        <a href="#" className="text-gray-500 hover:text-ruby">{product.category}</a>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-ruby">{product.name}</span>
      </nav>

      {/* Product Grid */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">

        {/* Left: Image Gallery + Quick Info */}
        <div className="lg:sticky lg:top-32 h-fit mb-10 lg:mb-0">

          {/* Main Image */}
          <Image
            src={`/images/${product.category.toLowerCase()}/${product.image}.png`}
            alt={product.name}
            width={600}
            height={450}
            className="w-full h-auto rounded-xl shadow-lg border border-gray-100 object-cover mb-4 cursor-pointer transition-transform hover:scale-[1.01]"
          />

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-2">
            {Array(3).fill(0).map((_, i) => (
              <Image
                key={i}
                src={`/images/${product.category.toLowerCase()}/${product.image}.png`}
                alt={product.name + ' thumbnail'}
                width={200}
                height={150}
                className="w-full h-auto rounded-md border-2 border-gray-200 cursor-pointer hover:border-ruby transition"
                // onClick={() => changeImage(`/images/${product.category.toLowerCase()}/${product.image}.png`)}
              />
            ))}
          </div>

          {/* Quick Info Card */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
            <h1 className="font-header text-4xl font-bold text-charcoal mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">Unit: {product.unit}</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">{'★'.repeat(product.id)}</span>
              <span className="ml-2 text-sm text-gray-600">({product.description} reviews)</span>
            </div>

            {/* Dynamic Price */}
            <div className="flex flex-col mb-6 border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p id="price-display" className="text-ruby font-extrabold text-3xl">NPR <span>{product.price}</span></p>
                  {product.price && (
                    <p id="original-price" className="text-gray-500 text-sm line-through">NPR {product.price}</p>
                  )}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${product.category ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.category ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="text-charcoal font-medium mr-4">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button  className="w-10 h-10 text-charcoal hover:bg-gray-100 transition">–</button>
                <input type="number" readOnly className="w-16 text-center font-medium text-charcoal border-x border-gray-300" />
                <button  className="w-10 h-10 text-charcoal hover:bg-gray-100 transition">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full bg-ruby text-white text-xl font-medium py-4 rounded-lg shadow-md hover:bg-red-900 transition duration-300 flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Add to Cart</span>
            </button>

          </div>
        </div>

        {/* Right: Story + Details */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full mb-4 inline-block">{product.category}</span>
          <h2 className="font-header text-5xl font-bold text-charcoal mb-6">The Origin Story</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-10">
            {product.description}
          </div>
        </div>

      </div>
    </main>
    
  )};

// Example: you can replace this with your real data import




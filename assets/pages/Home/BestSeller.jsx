import { ChevronRight, Crown, Star, ShoppingCart, Heart,  } from "lucide-react"
import serum from "../../assets/faceSerum.jpg"
import mositure from "../../assets/card-3.jpg"
import antiagtie from "../../assets/lotus.jpg"
import suncream from "../../assets/sunsream.jpg"
const BestSeller = () => {
  const bestsellers = [
    {
      id: 1,
      image: serum,
      badge: "bestseller",
      rating: 4.8,
      reviews: 156,
      title: "Niacinamide Face Serum with Zinc for Acne Control",
      description: "Reduces Pores | Controls Oil | Prevents Breakouts",
      discount: "20% off",
      size: "30ml",
      price: 399.0,
      originalPrice: 499.0,
      discountPercent: "20% off",
    },
    {
      id: 2,
      image: mositure,
      badge: "bestseller",
      rating: 4.7,
      reviews: 203,
      title: "Hyaluronic Acid Moisturizer for Deep Hydration",
      description: "24hr Hydration | Plumps Skin | Anti-Aging",
      discount: "15% off",
      size: "50ml",
      price: 599.0,
      originalPrice: 699.0,
      discountPercent: "15% off",
    },
    {
      id: 3,
      image: antiagtie,
      badge: "bestseller",
      rating: 4.9,
      reviews: 89,
      title: "Retinol Night Cream for Anti-Aging",
      description: "Reduces Fine Lines | Improves Texture | Overnight Repair",
      discount: "25% off",
      size: "30g",
      price: 799.0,
      originalPrice: 1099.0,
      discountPercent: "25% off",
    },
    {
      id: 4,
      image: suncream,
      badge: "bestseller",
      rating: 4.6,
      reviews: 134,
      title: "Sunscreen SPF 50+ with PA+++ Protection",
      description: "Broad Spectrum | Non-Greasy | Water Resistant",
      discount: "18% off",
      size: "60ml",
      price: 449.0,
      originalPrice: 549.0,
      discountPercent: "18% off",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto mt-8 px-4 py-10 bg-gradient-to-b from-purple-50 to-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-purple-50 px-4 py-2 rounded-full mb-4">
          <Crown className="w-5 h-5" style={{ color: "#5E0C8C" }} />
          <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: "#5E0C8C" }}>Customer Favorites</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Our Bestsellers</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Discover the products our customers can't stop raving about
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {bestsellers.map((product, index) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
          >
            {/* Bestseller Badge */}
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                #{index + 1} BESTSELLER
              </div>
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors">
              <Heart className="w-4 h-4 text-slate-600 hover:text-red-500 transition-colors" />
            </button>

            {/* Product Image */}
            <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-500/20"></div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute bottom-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {product.discount}
              </div>
            </div>

            <div className="p-6">
              {/* Rating & Reviews */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  {product.reviews} reviews
                </span>
              </div>
              {/* Product Title */}
              <h3
                className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 transition-colors"
                style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#5E0C8C')}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                {product.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.description}</p>
              {/* Size */}
              <div className="inline-flex items-center bg-purple-50 text-xs font-medium px-3 py-1 rounded-full mb-4" style={{ color: '#5E0C8C' }}>
                {product.size}
              </div>
              {/* Pricing */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-bold text-slate-900">₹{product.price.toFixed(0)}</span>
                <span className="text-lg text-slate-400 line-through">₹{product.originalPrice.toFixed(0)}</span>
                <span className="text-sm font-semibold bg-purple-50 px-2 py-1 rounded" style={{ color: '#5E0C8C' }}>
                  Save ₹{(product.originalPrice - product.price).toFixed(0)}
                </span>
              </div>
              {/* Add to Cart Button */}
              <button
                className="w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
                style={{ background: 'linear-gradient(to right, #5E0C8C, #4A0A70)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(to right, #4A0A70, #5E0C8C)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(to right, #5E0C8C, #4A0A70)')}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button
          className="inline-flex cursor-pointer items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg group"
          style={{ backgroundColor: '#5E0C8C' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4A0A70')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5E0C8C')}
        >
          View All Bestsellers
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default BestSeller

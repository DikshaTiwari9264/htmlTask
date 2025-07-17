
import { Badge, ChevronRight, Sparkle, Star } from "lucide-react";
import card1 from "../../assets/card-1.jpg"
import card2 from "../../assets/card-2.jpg"
import card3 from "../../assets/card-3.jpg"
const ProductCategories = () => {
  const products = [
    {
      id: 1,
      image: card1,
      badge: "new launch!",
      rating: 5.0,
      reviews: 21,
      title:
        "Anti-Dandruff Shampoo with Organic Minerals & 0.5% Salicylic Acid",
      description: "72 hr Dandruff & Frizz Control | Prevents Dry Hair",
      discount: "12% off",
      size: "250ml",
      price: 396.0,
      originalPrice: 450.0,
      discountPercent: "12% off",
    },
    {
      id: 2,
      image: card2,
      badge: "new launch!",
      rating: 4.0,
      reviews: 54,
      title: "Oh So Pistachio Eau De Parfum (Perfume) by Plum BodyLovin'",
      description:
        "Long Lasting | Summer Gourmand Fragrance | Supremely Luxurious",
      discount: "15% off",
      size: "50 ml",
      price: 764.0,
      originalPrice: 899.0,
      discountPercent: "15% off",
    },
    {
      id: 3,
      image: card3,
      badge: "new launch!",
      rating: 4.4,
      reviews: 24,
      title:
        "1% Vitamin C Ultra-Light-Glow Boosting Gel Cream with Alpha Arbutin",
      description:
        "Boosts Glow | Fades Dark Spots & Pigmentation | Deeply Hydrates",
      discount: "10% off",
      size: "50 g",
      price: 494.0,
      originalPrice: 549.0,
      discountPercent: "10% off",
    },
    {
      id: 4,
      image: card1,
      badge: "new launch!",
      rating: 4.1,
      reviews: 11,
      title:
        "1% Marine Spring Water Replenishing Toning Mist Spray with Amino Acids",
      description:
        "Hydrates, Cools & Revitalizes | with Active Minerals | On-the-go Soothing Face Mist",
      discount: "10% off",
      size: "100ml",
      price: 494.0,
      originalPrice: 549.0,
      discountPercent: "10% off",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <Sparkle className="w-6 h-6 mr-2" style={{ color: "#5E0C8C" }} />
          <h1 className="text-3xl font-bold" style={{ color: "#5E0C8C" }}>new launches</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative animated-card"
            >
              {/* New Launch Badge */}
              <div className="absolute rounded-sm top-3 left-3 z-10 bg-[#5E0C8C] text-white text-xs px-2 py-1">
                {product.badge}
              </div>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className=" object-contain h-full "
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  <span className="text-sm font-medium text-orange-400">
                    {product.rating}
                  </span>
                  <span className="text-sm text-blue-600">
                    👍 {product.reviews} reviews
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Discount Badge */}
                <div className="mb-3">
                  <div className="bg-purple-100 w-fit py-1 px-2 rounded-md text-purple-700  hover:bg-purple-100 text-xs">
                    {product.discount}
                  </div>
                </div>

                {/* Size */}
                <div className="mb-3">
                  <div 
                    variant="outline"
                    className=" border border-purple-600 w-fit py-1 px-2 rounded-full text-purple-600 text-xs"
                  >
                    {product.size}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-gray-900">
                    ₹ {product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹ {product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-sm text-green-600">
                    ({product.discountPercent})
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="w-full cursor-pointer text-white font-medium py-2 px-4 rounded-lg transition-colors animated-btn"
                  style={{ backgroundColor: "#5E0C8C" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4A0A70";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#5E0C8C";
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-center">
          <button className="flex cursor-pointer  items-center gap-2 font-medium transition-colors" style={{ color: "#5E0C8C" }}>
            view all
               <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;

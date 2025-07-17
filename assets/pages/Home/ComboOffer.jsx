import { Gift } from "lucide-react"
import skin from "../../assets/skin.jpg"
import hair from "../../assets/hair.jpg"
import perfume from "../../assets/perfmue.jpg"
const ComboOffer = () => {
  const comboOffers = [
    {
      id: 1,
      title: "Complete Skincare Routine",
      products: ["Vitamin C Serum", "Moisturizer", "Sunscreen"],
      originalPrice: 1299.0,
      comboPrice: 999.0,
      savings: 300.0,
      image: skin,
    },
    {
      id: 2,
      title: "Hair Care Essentials",
      products: ["Shampoo", "Conditioner", "Hair Oil"],
      originalPrice: 899.0,
      comboPrice: 699.0,
      savings: 200.0,
      image: hair,
    },
    {
      id: 3,
      title: "Fragrance Collection",
      products: ["Body Mist", "Perfume", "Body Lotion"],
      originalPrice: 1599.0,
      comboPrice: 1199.0,
      savings: 400.0,
      image: perfume,
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-center mb-10">
        <Gift className="w-6 h-6 mr-2 text-purple-800" />
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 uppercase tracking-wide">
          Combo Offers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {comboOffers.map((combo) => (
          <div
            key={combo.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-gradient-to-br from-pink-400 to-purple-600 p-6 text-center">
              <img
                src={combo.image}
                alt={combo.title}
                className="w-24 h-24 mx-auto rounded-full border-4 border-white object-cover shadow-md"
              />
              <h3 className="mt-4 font-semibold text-white text-lg">{combo.title}</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/90">
                {combo.products.map((product, idx) => (
                  <li key={idx}>• {product}</li>
                ))}
              </ul>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 line-through">₹ {combo.originalPrice.toFixed(2)}</p>
                  <p className="text-lg font-bold text-gray-800">₹ {combo.comboPrice.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-600 font-medium">Save ₹{combo.savings}</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {Math.round((combo.savings / combo.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>

              <button className="w-full bg-purple-800 hover:bg-purple-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                Buy Combo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ComboOffer

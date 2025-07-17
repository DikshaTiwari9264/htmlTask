import { Award, HeadphonesIcon, Shield, Truck } from 'lucide-react'
import React from 'react'

const ChooseUs = () => {

      const whyChooseUsFeatures = [
    {
      id: 1,
      icon: Shield,
      title: "100% Natural Ingredients",
      description:
        "All our products are made with carefully sourced, organic ingredients that are safe for your skin and the environment.",
    },
    {
      id: 2,
      icon: Award,
      title: "Dermatologist Tested",
      description:
        "Every product undergoes rigorous testing by certified dermatologists to ensure safety and effectiveness.",
    },
    {
      id: 3,
      icon: Truck,
      title: "Free Fast Delivery",
      description: "Enjoy free shipping on orders above ₹499 with express delivery options available nationwide.",
    },
    {
      id: 4,
      icon: HeadphonesIcon,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is always ready to help you with any questions or concerns about our products.",
    },
  ]
  return (
   <>
   <section className='max-w-7xl mx-auto mt-10'>
        <div className="flex items-center justify-center mb-8">
          <Award className="w-6 h-6 mr-2" style={{ color: "#5E0C8C" }} />
          <h2 className="text-3xl font-bold" style={{ color: "#5E0C8C" }}>why choose us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {whyChooseUsFeatures.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" style={{ color: "#5E0C8C" }} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <button
            className="text-white cursor-pointer font-medium py-3 px-8 rounded-lg transition-colors"
            style={{ backgroundColor: "#5E0C8C" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4A0A70"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#5E0C8C"
            }}
          >
            Learn More About Us
          </button>
        </div>
      </section>
   
   </>
  )
}

export default ChooseUs
import React from 'react'
import { ChevronRight, Quote, Star } from 'lucide-react'
import men from "../../assets/men-per.jpg"
import girl from "../../assets/girl3.jpg"
import girl2 from "../../assets/girl-per-2.jpg"
const TestmonoPart = () => {
       const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing products! My skin has never looked better. The vitamin C serum is a game changer.",
      image:men,
      verified: true,
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      comment: "Love the natural ingredients and the results are visible within weeks. Highly recommended!",
      image: girl,
      verified: true,
    },
    {
      id: 3,
      name: "Emily Chen",
      rating: 4,
      comment: "Great quality products at affordable prices. The packaging is also very elegant.",
      image: girl2,
      verified: true,
    },
  ]
  return (
    <>
    
    <section className='max-w-7xl mx-auto'>
        <div className="flex items-center justify-center mb-8">
          <Quote className="w-6 h-6 mr-2" style={{ color: "#5E0C8C" }} />
          <h2 className="text-3xl font-bold" style={{ color: "#5E0C8C" }}>testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {testimonial.verified && (
                      <div className="bg-green-100 text-green-700 text-xs ml-2 px-2 py-1 rounded-sm">Verified</div>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="flex cursor-pointer items-center gap-2 font-medium transition-colors"
            style={{ color: "#5E0C8C" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#4A0A70")}
            onMouseLeave={e => (e.currentTarget.style.color = "#5E0C8C")}
          >
            read more reviews
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  )
}

export default TestmonoPart

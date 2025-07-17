import { BookOpen, ChevronRight } from "lucide-react";
import React from "react";
import glowing from "../../assets/glowing.jpg";
import natural from "../../assets/beatuy.jpg";
import winter from "../../assets/winter.jpg";
const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Skincare Tips for Glowing Skin",
      excerpt:
        "Discover the secrets to achieving radiant, healthy skin with our expert-approved skincare routine and product recommendations.",
      image: glowing,
      author: "Dr. Sarah Wilson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Skincare",
    },
    {
      id: 2,
      title: "The Science Behind Natural Beauty Products",
      excerpt:
        "Learn how natural ingredients work at the molecular level to transform your skin and why they're becoming the gold standard.",
      image: natural,
      author: "Prof. Michael Chen",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Science",
    },
    {
      id: 3,
      title: "Seasonal Beauty: Winter Skincare Essentials",
      excerpt:
        "Protect your skin from harsh winter conditions with our comprehensive guide to cold-weather skincare routines.",
      image: winter,
      author: "Emma Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Seasonal",
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <BookOpen className="w-6 h-6 mr-2" style={{ color: "#5E0C8C" }} />
          <h2 className="text-3xl font-bold" style={{ color: "#5E0C8C" }}>latest blogs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                <div className="px-2 py-1 text-white text-xs rounded-full" style={{ backgroundColor: "#5E0C8C" }}>
                  {post.category}
                </div>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 transition-colors"
                  style={{ transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#5E0C8C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                >
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <button
                  className="font-medium text-sm transition-colors flex items-center gap-1"
                  style={{ color: '#5E0C8C' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4A0A70')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#5E0C8C')}
                >
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="flex cursor-pointer items-center gap-2 text-white font-medium shadow-md px-4 py-2 rounded-md transition-all"
            style={{ backgroundColor: '#5E0C8C' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#4A0A70';
              e.currentTarget.style.color = '#FFD600';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#5E0C8C';
              e.currentTarget.style.color = '#fff';
            }}
          >
            view all blogs
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Blogs;

import { ChevronRight, Play } from "lucide-react";
import React from "react";
import architur from "../../assets/architure.jpg";
import vedio from "../../assets/vedio.webp";
import robot from "../../assets/robot.jpg";
const VideoTestminol = () => {
  const videoTestimonials = [
    {
      id: 1,
      name: "Jessica Martinez",
      title: "Beauty Influencer",
      thumbnail: architur,
      duration: "2:34",
      views: "12.5K",
      description: "How this skincare routine transformed my skin in 30 days",
    },
    {
      id: 2,
      name: "David Thompson",
      title: "Dermatologist",
      thumbnail: vedio,
      duration: "4:12",
      views: "8.9K",
      description:
        "Professional review: Why I recommend these products to my patients",
    },
    {
      id: 3,
      name: "Aisha Patel",
      title: "Satisfied Customer",
      thumbnail: robot,
      duration: "1:45",
      views: "15.2K",
      description: "My journey from acne-prone to clear, confident skin",
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto mt-15">
        <div className="flex items-center justify-center mb-8">
          <Play className="w-6 h-6 mr-2" style={{ color: "#5E0C8C" }} />
          <h2 className="text-3xl font-bold" style={{ color: "#5E0C8C" }}>
            video testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative group cursor-pointer">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                  <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1" style={{ color: "#5E0C8C" }} />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-sm" style={{ color: "#5E0C8C" }}>
                      {video.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {video.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{video.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{video.views} views</span>
                  <button
                    className="font-medium transition-colors"
                    style={{ color: '#5E0C8C' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4A0A70')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5E0C8C')}
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
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
            view all videos
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
};

export default VideoTestminol;

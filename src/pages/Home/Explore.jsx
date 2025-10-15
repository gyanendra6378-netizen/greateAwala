import React from "react";
import { Calendar, MessageCircle } from "lucide-react";

import img1 from "../../assets/sweet-1 (1).png";
import img2 from "../../assets/chwanprash.png";
import img3 from "../../assets/driy-1 copy.jpg";
import img4 from "../../assets/small-peices.jpg";

const Explore = () => {
  const blogs = [
    {
      id: 1,
      img: img1,
      category: "Amla Sweets",
      title: "Delicious Amla Sweets Packed with Nutrition",
      author: "MyAwala",
      comments: 5,
      desc: "Enjoy our traditional Amla sweets – a perfect balance of taste and health. Rich in Vitamin C, these sweets are great for boosting immunity and energy.",
    },
    {
      id: 2,
      img: img2,
      category: "Chyawanprash",
      title: "Healthy Amla Chyawanprash for Daily Wellness",
      author: "MyAwala",
      comments: 3,
      desc: "Made with pure Amla and natural herbs, our Chyawanprash strengthens immunity, enhances digestion, and keeps you energetic throughout the day.",
    },
    {
      id: 3,
      img: img3,
      category: "Dry Amla",
      title: "Premium Quality Dried Amla for Healthy Snacking",
      author: "MyAwala",
      comments: 4,
      desc: "Dried Amla pieces are a tasty and healthy snack option. Packed with antioxidants, they help improve digestion and overall wellness.",
    },
    {
      id: 4,
      img: img4,
      category: "Amla Small Pieces",
      title: "Natural Amla Pieces for Everyday Use",
      author: "MyAwala",
      comments: 2,
      desc: "Our small Amla pieces can be used in cooking, snacking, or health remedies. 100% natural and sun-dried to preserve nutrients.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-[#d89a7e] font-medium flex items-center justify-center gap-2">
          <span className="flex gap-1">
            <span className="w-2 h-2 bg-[#d89a7e] rounded-full"></span>
            <span className="w-2 h-2 bg-[#d89a7e] rounded-full"></span>
            <span className="w-2 h-2 bg-[#d89a7e] rounded-full"></span>
          </span>
          Fresh From MyAwala
        </p>
        <h2 className="text-3xl font-bold">Explore Our Amla Products</h2>
      </div>

      {/* Blog Rows */}
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="grid md:grid-cols-2 gap-6 md:h-[40vh] items-center p-4"
          >
            {/* Alternate Layout */}
            {index % 2 === 0 ? (
              <>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full object-cover h-60 rounded-lg"
                />
                <div>
                  <span className="bg-[#d89a7e] text-white text-xs font-semibold px-3 py-3 rounded-full">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3">{blog.title}</h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> By {blog.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} /> {blog.comments} Comments
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 text-sm">{blog.desc}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span className="bg-[#d89a7e] text-white text-xs font-semibold px-3 py-3 rounded-full">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3">{blog.title}</h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> By {blog.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} /> {blog.comments} Comments
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 text-sm">{blog.desc}</p>
                </div>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;

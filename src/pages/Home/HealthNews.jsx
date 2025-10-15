import React from "react";
import img1 from "../../assets/banner-6.png";
import img2 from "../../assets/tree-2.png";
import img3 from "../../assets/pawder-1.png";
import img4 from "../../assets/hair-1.png";
import { Calendar, User } from "lucide-react";

const mainPost = {
  category: "Amla Benefits",
  author: "MyAwala",
  date: "March 3, 2025",
  title: "The Secret Health Benefits of Amla (Indian Gooseberry)",
  excerpt:
    "Amla is one of the richest natural sources of Vitamin C, helping to boost immunity, improve digestion, and promote healthy skin & hair. Discover why it’s called a superfruit!",
  image: img1,
};

const sidePosts = [
  {
    category: "Immunity",
    title: "Why Amla is the Best Immunity Booster",
    excerpt:
      "Regular consumption of Amla strengthens your immune system, keeping you safe from seasonal infections and fatigue.",
    image: img2,
  },
  {
    category: "Wellness",
    title: "Amla Powder for Daily Health",
    excerpt:
      "Amla powder is a convenient way to add antioxidants and nutrients to your diet, perfect for teas, smoothies, or traditional remedies.",
    image: img3,
  },
  {
    category: "Hair Care",
    title: "Natural Hair Growth with Amla",
    excerpt:
      "Amla has been used for centuries in Ayurveda for strong, shiny hair. It reduces hair fall, prevents dandruff, and nourishes the scalp.",
    image: img4,
  },
];

const HealthNews = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h3 className="text-[#965f2e] font-bold uppercase mb-4">
        Health & Amla Benefits
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left big article */}
        <div className="md:col-span-2 space-y-4">
          <div className="relative">
            <img
              src={mainPost.image}
              alt={mainPost.title}
              className="w-full h-[300px] md:h-[400px] object-contain rounded"
            />
            <span className="absolute bottom-2 left-2 bg-[#d89a7e] text-white text-xs font-bold px-2 py-1 rounded">
              {mainPost.category}
            </span>
          </div>
          <div className="text-gray-500 text-sm flex items-center gap-4">
            <span>
              <User /> {mainPost.author}
            </span>
            <span>
              <Calendar /> {mainPost.date}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{mainPost.title}</h2>
          <p className="text-gray-700 text-sm">{mainPost.excerpt}</p>
        </div>

        {/* Right side small posts */}
        <div className="space-y-6">
          {sidePosts.map((post, i) => (
            <div key={i} className="flex gap-4 items-start">
              <img
                src={post.image}
                alt={post.title}
                className="w-28 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <span className="text-xs uppercase font-bold text-[#965f2e] block">
                  {post.category}
                </span>
                <h4 className="font-semibold text-sm text-gray-900">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-600 leading-snug">{post.excerpt}</p>
                <div className="text-xs text-gray-400 mt-1 flex gap-4">
                  <span>
                    <User /> MyAwala
                  </span>
                  <span>
                    <Calendar /> March 3, 2025
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthNews;

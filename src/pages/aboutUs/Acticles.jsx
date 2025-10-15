// components/WorldArticles.jsx
import { useState } from "react";
import { Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import imgOfTree from "../../assets/tree-4.png";
import imgJuice from "../../assets/juices.png";
import imgPawder from "../../assets/driy-1.jpg";
import sempu from "../../assets/sempu.png";
import driedFood from "../../assets/dried-2.png";
import oil from "../../assets/oli-1.png";

const articlesData = [
  {
    id: 1,
    title: "Discover the Power of Fresh Amla from Great Awala Farms",
    img: imgOfTree,
    date: "Aug 28, 2025",
    views: 12000,
    likes: 320,
    content: "Yeh article detail mein bataata hai ki fresh amla kaise immunity aur health improve karta hai...",
  },
  {
    id: 2,
    title: "Why Great Awala Chyawanprash is Perfect for Your Immunity",
    img: imgJuice,
    date: "Aug 30, 2025",
    views: 18000,
    likes: 450,
    content: "Great Awala Chyawanprash ek herbal tonic hai jo immunity ko boost karta hai...",
  },
  {
    id: 3,
    title: "The Story of Aquirding – Inspiring Wellness with Great Awala",
    img: imgPawder,
    date: "Sep 01, 2025",
    views: 22000,
    likes: 600,
    content: "Aquirding ki kahani aur Great Awala ke wellness products ka safar...",
  },
  {
    id: 4,
    title: "Daily Wellness: How Great Awala Products Boost Your Lifestyle",
    img: sempu,
    date: "Sep 02, 2025",
    views: 10000,
    likes: 210,
    content: "Daily use ke liye Great Awala products lifestyle improve karte hain...",
  },
  {
    id: 5,
    title: "Great Awala’s Tradition of Trusted Quality & Natural Goodness",
    img: driedFood,
    date: "Sep 03, 2025",
    views: 15000,
    likes: 345,
    content: "Great Awala ke products natural aur trusted quality ke saath aate hain...",
  },
  {
    id: 6,
    title: "From Farm to Jar – The Great Awala Journey",
    img: oil,
    date: "Sep 03, 2025",
    views: 19000,
    likes: 410,
    content: "Farm se jar tak ka safar jo Great Awala ko unique banata hai...",
  },
];

export default function Articles() {
  const [articles, setArticles] = useState(articlesData);
  const [liked, setLiked] = useState({});
  const navigate = useNavigate();

  const handleLike = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id
          ? { ...article, likes: liked[id] ? article.likes - 1 : article.likes + 1 }
          : article
      )
    );
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenDetail = (article) => {
    // Increase views count when user opens detail page
    setArticles((prev) =>
      prev.map((a) =>
        a.id === article.id ? { ...a, views: a.views + 1 } : a
      )
    );
    navigate(`/articles/${article.id}`, { state: article });
  };

  return (
    <section className="md:px-14 py-16 bg-[#f9f9f9]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-b border-[#d97f1f] inline-block">
        Great Awala Wellness Blog
      </h2>

      <div className="grid grid-cols-1 px-4 md:px-20 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image wrapper with overlay */}
            <div
              className="relative w-full h-60 overflow-hidden"
              onClick={() => handleOpenDetail(article)}
            >
              <motion.img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/50 bg-opacity-40 transition duration-500 group-hover:bg-black/0"></div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-600 gap-4 mb-2">
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <Eye size={14} /> {article.views.toLocaleString()}
                </span>
                <button
                  onClick={() => handleLike(article.id)}
                  className="flex items-center gap-1"
                >
                  <Heart
                    size={14}
                    className={liked[article.id] ? "text-red-500 fill-red-500" : ""}
                  />{" "}
                  {article.likes}
                </button>
              </div>
              <h3
                className="font-medium text-base hover:text-[#d97f1f]"
                onClick={() => handleOpenDetail(article)}
              >
                {article.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

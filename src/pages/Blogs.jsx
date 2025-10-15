import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import banner from "../assets/banner-6.png";

// Import local images
import blogImg1 from "../assets/blog-1.png";
import blogImg2 from "../assets/chwanprash.png";
import blogImg3 from "../assets/dried-2.png";
import blogImg4 from "../assets/juices.png";
import blogImg5 from "../assets/small-peices.jpg";

// Custom Blogs Array (replace later with API if needed)
const dummyBlogs = [
  {
    title: "Health Benefits of Amla",
    description:
      "Amla is rich in Vitamin C and antioxidants. Discover how it helps boost immunity and improves skin health.",
    author: "Team My Awala",
    time: "2 hours ago",
    image: blogImg1,
  },
  {
    title: "Amla Juice for Daily Wellness",
    description:
      "Drinking Amla juice every morning keeps your digestion strong and provides natural energy.",
    author: "Shubham",
    time: "5 hours ago",
    image: blogImg2,
  },
  {
    title: "Traditional Recipes with Amla",
    description:
      "Learn how to make chutney, pickles, and candies using fresh Amla fruits from your kitchen.",
    author: "Team My Awala",
    time: "8 hours ago",
    image: blogImg3,
  },
  {
    title: "Why Amla is a Superfood",
    description:
      "Amla is considered one of the most powerful superfoods in Ayurveda with endless health benefits.",
    author: "Ayurveda Expert",
    time: "1 day ago",
    image: blogImg4,
  },
  {
    title: "Hair Care with Amla Oil",
    description:
      "Discover how Amla oil strengthens roots, prevents dandruff, and promotes hair growth naturally.",
    author: "My Awala Care",
    time: "2 days ago",
    image: blogImg5,
  },
  // 👉 Add more blogs in the same format if needed
  {
    title: "Traditional Recipes with Amla",
    description:
      "Learn how to make chutney, pickles, and candies using fresh Amla fruits from your kitchen.",
    author: "Team My Awala",
    time: "8 hours ago",
    image: blogImg3,
  },
  {
    title: "Why Amla is a Superfood",
    description:
      "Amla is considered one of the most powerful superfoods in Ayurveda with endless health benefits.",
    author: "Ayurveda Expert",
    time: "1 day ago",
    image: blogImg4,
  },
  {
    title: "Hair Care with Amla Oil",
    description:
      "Discover how Amla oil strengthens roots, prevents dandruff, and promotes hair growth naturally.",
    author: "My Awala Care",
    time: "2 days ago",
    image: blogImg5,
  },
];

const BlogCard = ({ post, index }) => (
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
>
  <div className="relative overflow-hidden">
    {/* Image */}
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-52 object-cover rounded-t-xl hover:scale-105 transition-transform duration-500"
    />

    {/* Black transparent overlay */}
    <div className="absolute inset-0 bg-black/50 hover:bg-black/0 transition"></div>
  </div>

  <div className="p-5 relative">
    <h2 className="text-lg font-semibold mb-2 text-[#a75c22] hover:text-[#98602c] transition">
      {post.title}
    </h2>
    <div className="text-sm text-gray-500 mb-2 flex items-center gap-4">
      <span>{post.author}</span>
      <span>{post.time}</span>
    </div>
    <p className="text-gray-600 text-sm">{post.description}</p>
  </div>
</motion.div>

);

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const blogsPerPage = 6; // you can change how many blogs show per page
  const totalPages = Math.ceil(dummyBlogs.length / blogsPerPage);

  useEffect(() => {
    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    setBlogs(dummyBlogs.slice(start, end));
  }, [page]);

  return (
    <section className="bg-white">
      {/* Banner */}
      <div
        className="relative h-[480px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 bg-opacity-60" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            My Awala – Amla Blogs
          </h1>
          <p className="mt-2 text-lg">
            <span className="text-[#a75c22]">Home</span> &gt; Blogs
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs available.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, idx) => (
              <BlogCard key={idx} post={post} index={idx} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center gap-2 mt-10"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`w-9 h-9 border border-gray-300 rounded-full font-medium ${
                  num === page
                    ? "bg-[#a75c22] text-white"
                    : "text-gray-600 hover:bg-[#a75c22] hover:text-white"
                }`}
              >
                {num}
              </button>
            ))}
            {page < totalPages && (
              <button
                onClick={() => setPage(page + 1)}
                className="w-9 h-9 bg-[#a75c22] text-white rounded-full hover:bg-[#98602c] transition"
              >
                →
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

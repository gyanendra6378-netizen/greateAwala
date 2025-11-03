import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import banner from "../assets/banner-6.png";

// Import local images
import blogImg1 from "../assets/blog-1.png";
import blogImg2 from "../assets/chwanprash.png";
import blogImg3 from "../assets/dried-2.png";
import blogImg4 from "../assets/juices.png";
import blogImg5 from "../assets/small-peices.jpg";

// Custom Blogs Array (replace later with API if needed)
export const dummyBlogs = [
  {
    id: 1,
    title: "Health Benefits of Amla",
    description:
      "Amla is rich in Vitamin C and antioxidants. Discover how it helps boost immunity and improves skin health.",
    fullContent: "Amla, also known as Indian Gooseberry, is a powerhouse of nutrients that has been used in Ayurvedic medicine for centuries. This small, green fruit is packed with more Vitamin C than an orange and contains numerous health benefits. From boosting immunity to improving skin health, Amla is truly a superfood that deserves a place in your daily diet. Regular consumption of Amla can help prevent diseases, improve digestion, and enhance overall well-being. The antioxidants present in Amla help combat free radicals in the body, reducing oxidative stress and preventing cellular damage. This makes it an excellent anti-aging food that promotes longevity and vitality.",
    benefits: [
      "High in Vitamin C - 20 times more than oranges",
      "Powerful antioxidant properties",
      "Boosts immunity naturally",
      "Improves digestive health",
      "Enhances skin complexion",
      "Prevents premature aging"
    ],
    author: "Team My Awala",
    time: "2 hours ago",
    image: blogImg1,
  },
  {
    id: 2,
    title: "Amla Juice for Daily Wellness",
    description:
      "Drinking Amla juice every morning keeps your digestion strong and provides natural energy.",
    fullContent: "Starting your day with a glass of fresh Amla juice can transform your health. This natural beverage is not only delicious but also packed with essential nutrients. It aids digestion, boosts metabolism, and provides sustained energy throughout the day. Unlike synthetic supplements, Amla juice offers natural immunity support and helps in detoxification. Learn how to incorporate this healthy habit into your daily routine for maximum benefits. The juice helps regulate blood sugar levels, making it ideal for diabetics, while also promoting weight loss through improved metabolism.",
    benefits: [
      "Promotes healthy digestion",
      "Boosts energy levels naturally",
      "Aids in detoxification",
      "Regulates blood sugar",
      "Supports weight management",
      "Improves skin radiance"
    ],
    author: "Shubham",
    time: "5 hours ago",
    image: blogImg2,
  },
  {
    id: 3,
    title: "Traditional Recipes with Amla",
    description:
      "Learn how to make chutney, pickles, and candies using fresh Amla fruits from your kitchen.",
    fullContent: "Amla can be enjoyed in various forms, and traditional Indian recipes make the most of this nutritious fruit. From tangy chutneys to sweet candies and spicy pickles, there are countless ways to incorporate Amla into your meals. These recipes not only enhance the flavor of your food but also add significant health value. Discover authentic recipes that have been passed down through generations and learn how to prepare them in your own kitchen. Each recipe preserves the nutritional benefits of Amla while making it delicious and easy to consume. Whether you prefer the sour taste of Amla chutney or the sweet flavor of Amla candy, there's a recipe for everyone.",
    benefits: [
      "Delicious ways to consume Amla",
      "Traditional recipes for modern life",
      "Preserves nutritional benefits",
      "Easy to prepare at home",
      "Family-friendly recipes",
      "Taste and health combined"
    ],
    author: "Team My Awala",
    time: "8 hours ago",
    image: blogImg3,
  },
  {
    id: 4,
    title: "Why Amla is a Superfood",
    description:
      "Amla is considered one of the most powerful superfoods in Ayurveda with endless health benefits.",
    fullContent: "Amla has earned its title as a superfood through centuries of traditional use and modern scientific validation. This incredible fruit contains antioxidants, amino acids, and minerals that work together to promote optimal health. Research has shown that Amla can help in managing diabetes, reducing cholesterol levels, and fighting inflammation. Its anti-aging properties and ability to improve brain function make it an essential addition to any wellness routine. The unique combination of nutrients in Amla makes it effective in preventing chronic diseases and maintaining overall health. Studies have demonstrated its efficacy in cardiovascular health, cognitive function, and even cancer prevention.",
    benefits: [
      "Scientifically proven health benefits",
      "Natural diabetes management",
      "Lowers cholesterol effectively",
      "Boosts brain function",
      "Fights chronic inflammation",
      "Promotes longevity"
    ],
    author: "Ayurveda Expert",
    time: "1 day ago",
    image: blogImg4,
  },
  {
    id: 5,
    title: "Hair Care with Amla Oil",
    description:
      "Discover how Amla oil strengthens roots, prevents dandruff, and promotes hair growth naturally.",
    fullContent: "Amla oil is a traditional hair care solution that has been trusted for generations. This natural oil nourishes the scalp, strengthens hair follicles, and prevents premature graying. Regular use of Amla oil can significantly reduce hair fall, treat dandruff, and promote healthy hair growth. Unlike chemical-based products, Amla oil provides deep conditioning without any harmful side effects. Learn the proper way to use Amla oil for maximum benefits.",
    benefits: [
      "Prevents premature graying",
      "Reduces hair fall significantly",
      "Treats dandruff effectively",
      "Nourishes hair follicles",
      "Promotes hair growth",
      "100% natural and safe"
    ],
    author: "My Awala Care",
    time: "2 days ago",
    image: blogImg5,
  },
  {
    id: 6,
    title: "Amla for Weight Management",
    description:
      "Learn how Amla can support your weight loss journey naturally and effectively.",
    fullContent: "Amla can be a valuable ally in your weight management journey. This low-calorie fruit is rich in fiber, which helps you feel full for longer periods and reduces overeating. Its ability to improve metabolism and regulate blood sugar levels makes it an ideal component of a healthy diet. Combined with regular exercise and a balanced diet, Amla can help you achieve your weight loss goals naturally and sustainably.",
    benefits: [
      "Low in calories",
      "High fiber content",
      "Boosts metabolism",
      "Regulates blood sugar",
      "Reduces overeating",
      "Natural weight loss support"
    ],
    author: "Team My Awala",
    time: "3 days ago",
    image: blogImg1,
  },
  {
    id: 7,
    title: "Amla Powder Benefits & Usage",
    description:
      "Discover the numerous health benefits of Amla powder and how to incorporate it into your diet.",
    fullContent: "Amla powder is a versatile and convenient way to enjoy the benefits of Amla. Made from sun-dried Amla fruits, this powder can be added to smoothies, water, or food. It's particularly beneficial for improving digestion, boosting immunity, and enhancing skin health. The powder form makes it easy to consume regularly, and its long shelf life ensures you always have access to Amla's incredible health benefits.",
    benefits: [
      "Easy to consume daily",
      "Long shelf life",
      "Versatile usage",
      "Improves digestion",
      "Boosts immunity",
      "Enhances skin health"
    ],
    author: "Ayurveda Expert",
    time: "4 days ago",
    image: blogImg3,
  },
  {
    id: 8,
    title: "Seasonal Immunity with Amla Products",
    description:
      "Protect yourself during seasonal changes with natural Amla-based immunity boosters.",
    fullContent: "Seasonal changes often bring with them various health challenges, from common colds to allergies. Amla products can be your natural defense against these seasonal ailments. Regular consumption of Amla juice, candy, or powder can strengthen your immune system and help your body fight off infections. This article explores the best Amla products to include in your seasonal wellness routine and how to maximize their effectiveness.",
    benefits: [
      "Boosts immune system",
      "Prevents seasonal colds",
      "Reduces allergies",
      "Natural defense mechanism",
      "Multiple product options",
      "Easy integration into routine"
    ],
    author: "Team My Awala",
    time: "5 days ago",
    image: blogImg4,
  },
];

const BlogCard = ({ post, index }) => (
  <Link to={`/blog/${post.id}`} state={{ blog: post }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
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
  </Link>
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
      <SEO
        title="Amla Health Blogs - Wellness Tips & Recipes | MyAwala"
        description="Read our latest Amla health blogs featuring wellness tips, recipes, benefits, and guides. Learn about Amla juice, candy, powder, and other natural products for better health."
        keywords="amla blogs, amla health tips, amla benefits, wellness blogs, amla recipes, health articles, ayurvedic health tips, natural remedies"
        url="https://myawala.com/blogs"
        image="https://myawala.com/banner-6.png"
      />
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

import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Leaf, ShieldCheck, Truck } from "lucide-react";
import imgJuice from "../assets/juices.png";
import imgCandy from "../assets/driy-1.jpg";
import imgPickle from "../assets/tree-4.png";
import imgPowder from "../assets/hair-1.png";
import banner from "../assets/banner-5.png"

const categories = [
  "Amla Juice",
  "Amla Candy",
  "Amla Pickle",
  "Amla Powder",
  "Amla Hair Oil",
  "Amla Chutney",
];

const products = [
  { title: "MyAwala Fresh Amla Juice", price: "₹349", image: imgJuice },
  { title: "MyAwala Amla Candy", price: "₹199", image: imgCandy },
  { title: "MyAwala Amla Pickle", price: "₹249", image: imgPickle },
  { title: "MyAwala Amla Powder", price: "₹299", image: imgPowder },
];

const blogPosts = [
  { title: "Top 5 Benefits of MyAwala Juice", image: imgJuice },
  { title: "Why Amla Candy is the Healthiest Snack", image: imgCandy },
  { title: "Amla Pickle Recipes Loved by All", image: imgPickle },
];

export default function Services() {
  return (
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center relative"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="bg-black/50 bg-opacity-50 w-full h-full absolute top-0 left-0 z-0"></div>
        {/* <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
          MyAwala – Pure Goodness of Amla
        </h1> */}
      </div>

      {/* Top Categories */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Amla Specialties</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-green-100 hover:bg-green-200 px-5 py-2 rounded-full text-[#1f231f] font-semibold transition"
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Promo Banners */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-green-100 p-6 rounded-lg text-center shadow-md"
        >
          <h3 className="text-xl font-bold mb-2">LIMITED OFFER – 20% OFF</h3>
          <p>Buy MyAwala Juice Pack today and save!</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-yellow-100 p-6 rounded-lg text-center shadow-md"
        >
          <h3 className="text-xl font-bold mb-2">PREMIUM AMLA PRODUCTS</h3>
          <p>Fresh, Organic, and Packed with Nutrition.</p>
        </motion.div>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-[#a75c22]">Our Bestsellers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((prod, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-5 text-center shadow-lg hover:shadow-xl transition"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="mx-auto mb-4 w-full h-40 object-cover rounded-lg"
              />
              <h4 className="font-bold text-lg">{prod.title}</h4>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-[#98602c] mt-2 font-semibold">{prod.price}</p>
              <div className="flex justify-between items-center gap-4">

              <button className="mt-4 flex items-center gap-2 bg-[#bb966e] text-white px-6 py-2 rounded hover:bg-[#a75c22] transition">
                <ShoppingCart size={16} /> Add to Cart
              </button>
              <button className="mt-4 flex items-center gap-2 bg-[#bb966e] text-white px-6 py-2 rounded hover:bg-[#a75c22] transition">
                <ShoppingCart size={16} /> Order Now
              </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flash Deals */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Flash Deals</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          {products.slice(0, 2).map((prod, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-80 object-cover rounded mb-4"
              />
              <h4 className="font-semibold">{prod.title}</h4>
              <p className="text-[#98602c]">{prod.price}</p>
              <button className="mt-3 bg-[#bb966e] text-white px-10 py-2 rounded hover:bg-[#a75c22]">
                Shop Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.concat(products).slice(0, 8).map((prod, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg p-4 text-center shadow-md"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="mx-auto mb-3 w-full h-56 object-cover rounded"
              />
              <h4 className="font-bold text-sm">{prod.title}</h4>
              <p className="text-[#98602c] text-sm">{prod.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Post */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest from MyAwala</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg p-4 shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-center">{post.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#f5f1e9] py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated with MyAwala</h2>
        <p className="text-gray-600 mb-6">
          Subscribe for the latest offers, health tips, and product launches.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-2 border border-gray-300 rounded w-full sm:w-auto outline-none focus:ring-2 focus:ring-[#a75c22]"
          />
          <button className="bg-[#a75c22] text-white px-6 py-2 rounded hover:bg-[#98602c] transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-t mt-6">
        <div className="flex flex-wrap justify-center gap-8 text-gray-600">
          <span className="flex items-center gap-2">
            <Leaf className="text-green-600" /> Organic & Natural
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="text-green-600" /> Premium Quality
          </span>
          <span className="flex items-center gap-2">
            <Truck className="text-green-600" /> Free Shipping
          </span>
        </div>
      </section>
    </div>
  );
}

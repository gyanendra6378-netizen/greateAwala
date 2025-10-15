import { Star, ShoppingCart, Home, Truck, Shield, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import imgJuice from "../../assets/juices.png";
import imgCandy from "../../assets/driy-1.jpg";
import imgPickle from "../../assets/tree-4.png";
import imgPowder from "../../assets/hair-1.png";
import heroBg from "../../assets/banner-5.png";

// Add discount field in productsData
export const productsData = [
  {
    id: 1,
    name: "Fresh Amla Juice",
    price: 349,
    originalPrice: 449,
    discount: 22,
    image: imgJuice,
    description: "Boost your immunity with 100% pure, handpicked Amla juice.",
    reviews: 128,
    rating: 5,
    category: "Juice",
  },
  {
    id: 2,
    name: "Amla Candy",
    price: 199,
    originalPrice: 249,
    discount: 20,
    image: imgCandy,
    description: "Sweet & tangy amla candies packed with Vitamin C.",
    reviews: 98,
    rating: 4,
    category: "Snacks",
  },
  {
    id: 3,
    name: "Amla Pickle",
    price: 249,
    originalPrice: 299,
    discount: 17,
    image: imgPickle,
    description: "Traditional spicy amla pickle made with natural spices.",
    reviews: 76,
    rating: 5,
    category: "Pickle",
  },
  {
    id: 4,
    name: "Amla Powder",
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: imgPowder,
    description: "Pure dried amla powder for hair, skin & health.",
    reviews: 154,
    rating: 5,
    category: "Powder",
  },
  {
    id: 5,
    name: "Amla Pickle",
    price: 249,
    originalPrice: 299,
    discount: 17,
    image: imgPickle,
    description: "Traditional spicy amla pickle made with natural spices.",
    reviews: 76,
    rating: 5,
    category: "Pickle",
  },
  {
    id: 6,
    name: "Amla Powder",
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: imgPowder,
    description: "Pure dried amla powder for hair, skin & health.",
    reviews: 154,
    rating: 5,
    category: "Powder",
  },
  {
    id: 7,
    name: "Amla Candy",
    price: 199,
    originalPrice: 249,
    discount: 20,
    image: imgCandy,
    description: "Sweet & tangy amla candies packed with Vitamin C.",
    reviews: 98,
    rating: 4,
    category: "Snacks",
  },
  {
    id: 8,
    name: "Amla Pickle",
    price: 249,
    originalPrice: 299,
    discount: 17,
    image: imgPickle,
    description: "Traditional spicy amla pickle made with natural spices.",
    reviews: 76,
    rating: 5,
    category: "Pickle",
  },
  {
    id: 9,
    name: "Amla Powder",
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: imgPowder,
    description: "Pure dried amla powder for hair, skin & health.",
    reviews: 154,
    rating: 5,
    category: "Powder",
  },
  {
    id: 10,
    name: "Amla Candy",
    price: 199,
    originalPrice: 249,
    discount: 20,
    image: imgCandy,
    description: "Sweet & tangy amla candies packed with Vitamin C.",
    reviews: 98,
    rating: 4,
    category: "Snacks",
  },{
    id: 11,
    name: "Amla Powder",
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: imgPowder,
    description: "Pure dried amla powder for hair, skin & health.",
    reviews: 154,
    rating: 5,
    category: "Powder",
  },
  {
    id: 12,
    name: "Amla Candy",
    price: 199,
    originalPrice: 249,
    discount: 20,
    image: imgCandy,
    description: "Sweet & tangy amla candies packed with Vitamin C.",
    reviews: 98,
    rating: 4,
    category: "Snacks",
  },
];


export default function Products() {
  const [priceRange, setPriceRange] = useState(400);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Juice", "Snacks", "Pickle", "Powder"];

  // Filtered products
  const filteredProducts = productsData.filter(
    (p) =>
      p.price <= priceRange &&
      (selectedCategory === "All" || p.category === selectedCategory)
  );

  const topRated = [...productsData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <>
      {/* Hero Banner Section */}
      <section
        className="relative w-full h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Products
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 mt-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Home size={14} className="inline" />
            <span className="cursor-pointer hover:underline">Home</span>
            <span>›</span>
            <span className="text-[#d97f1f]">Shop</span>
          </motion.div>
        </div>
      </section>

      {/* Products with Sidebar */}
      <section className="px-6 py-16 bg-[#f9f9f9]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-10">
            {/* Price Filter */}
            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-3">Filter by Price</h3>
              <input
                type="range"
                min="100"
                max="400"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm mt-2 text-gray-700">
                Up to: <span className="font-bold">₹{priceRange}</span>
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer  text-sm px-2 py-2 rounded-md ${selectedCategory === cat
                      ? "bg-[#d97f1f] text-white"
                      : "hover:bg-gray-100"
                      }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Rated Products */}
            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-3">Top Rated</h3>
              <ul className="space-y-4">
                {topRated.map((p) => (
                  <li key={p.id} className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 object-contain rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <div className="flex text-yellow-500">
                        {[...Array(p.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>


          {/* Product Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl  md:h-[40vh] shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition"
              >
                <Link
                  to={`/product/${product.id}`}
                  state={{ product }}
                >

                  {/* Image Section with Discount Badge */}
                  <div className="relative  w-full h-40 flex items-center justify-center bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                    {product.discount && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="pt-5 flex flex-col items-center ">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-500 fill-yellow-500"
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Product Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">
                      {product.name}
                    </h2>

                    {/* Price */}
                    <div className="mt-2">
                      <span className="text-lg font-bold text-[#d97f1f]">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>



        </div>

        {/* Trust Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="flex items-center gap-2 text-lg">
            <Truck size={20} /> Free Shipping
          </span>
          <span className="flex items-center gap-2 text-lg">
            <Shield size={20} /> 100% Secure Payment
          </span>
          <span className="flex items-center gap-2 text-lg">
            <Gem size={20} /> Premium Quality
          </span>
        </motion.div>
      </section>
    </>
  );
}

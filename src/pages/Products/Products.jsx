import { Star, ShoppingCart, Home, Truck, Shield, Gem, Heart, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SEO from "../../components/SEO";
import { useCart } from "../../contexts/CartContext";
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
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [priceRange, setPriceRange] = useState(400);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("default");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [likedProducts, setLikedProducts] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const categories = ["All", "Juice", "Snacks", "Pickle", "Powder"];

  // Sort products
  const getSortedProducts = () => {
    let sorted = [...productsData];
    
    if (selectedSort === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "discount") {
      sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    }
    
    return sorted;
  };

  // Filtered products
  const filteredProducts = getSortedProducts().filter(
    (p) =>
      p.price <= priceRange &&
      (selectedCategory === "All" || p.category === selectedCategory)
  );

  const topRated = [...productsData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Toast notification
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Add to cart
  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToastMessage(`✓ ${product.name} added to cart!`);
  };

  // Add to wishlist
  const handleAddToWishlist = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    const isLiked = likedProducts.includes(product.id);
    if (isLiked) {
      setLikedProducts(likedProducts.filter(id => id !== product.id));
      showToastMessage(`Removed ${product.name} from wishlist`);
    } else {
      setLikedProducts([...likedProducts, product.id]);
      showToastMessage(`✓ ${product.name} added to wishlist!`);
    }
  };

  // Quick view
  const handleQuickView = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <>
      <SEO
        title="Buy Premium Amla Products Online - Greate Awala"
        description="Shop the best collection of Amla products online - Fresh Amla Juice, Amla Candy, Amla Pickle, and Amla Powder from Greate Awala. 100% natural, organic products with amazing discounts and free shipping."
        keywords="buy amla products online, amla products shopping, amla juice buy online, amla candy online, amla pickle, amla powder, natural products online, organic amla products"
        url="https://greateawala.com/products"
        image="https://greateawala.com/banner-5.png"
      />
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
          <div className="lg:col-span-3">
            {/* Sort and Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow">
              <p className="text-gray-600 font-medium">
                Showing <span className="text-[#d97f1f] font-bold">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-medium">Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d97f1f]"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="discount">Best Discounts</option>
                </select>
              </div>
            </div>

            {/* Product Cards */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl md:h-[45vh] shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition group"
                >
                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                  >
                    {/* Image Section with Discount Badge */}
                    <div className="relative w-full h-48 flex items-center justify-center bg-gray-50 p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      {product.discount && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                          -{product.discount}%
                        </span>
                      )}
                      
                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => handleAddToWishlist(product, e)}
                        className={`absolute top-3 left-3 p-2 rounded-full transition ${
                          likedProducts.includes(product.id)
                            ? "bg-red-500 text-white"
                            : "bg-white text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <Heart 
                          size={18} 
                          className={likedProducts.includes(product.id) ? "fill-white" : ""} 
                        />
                      </button>

                      {/* Quick View Button */}
                      <button
                        onClick={(e) => handleQuickView(product, e)}
                        className="absolute bottom-3 right-3 p-2 bg-white text-gray-600 rounded-full transition hover:bg-[#d97f1f] hover:text-white opacity-0 group-hover:opacity-100"
                      >
                        <Eye size={18} />
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 flex flex-col">
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
                      <h2 className="text-base font-semibold text-gray-800 mt-2 line-clamp-2 min-h-[3rem]">
                        {product.name}
                      </h2>

                      {/* Price */}
                      <div className="mt-2">
                        <span className="text-xl font-bold text-[#d97f1f]">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="mt-4 w-full bg-[#d97f1f] hover:bg-[#b8651a] text-white px-4 py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
              </div>
            ) : (
              <div className="col-span-3 text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setPriceRange(400);
                    setSelectedCategory("All");
                    setSelectedSort("default");
                  }}
                  className="bg-[#d97f1f] hover:bg-[#b8651a] text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
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

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl z-50 flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition z-10"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Left - Image */}
                <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right - Details */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(quickViewProduct.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                      <span className="text-sm text-gray-500">({quickViewProduct.reviews} reviews)</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{quickViewProduct.name}</h2>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="text-3xl font-bold text-[#d97f1f]">₹{quickViewProduct.price}</p>
                    {quickViewProduct.originalPrice && (
                      <>
                        <p className="text-xl text-gray-500 line-through">₹{quickViewProduct.originalPrice}</p>
                        <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                          -{quickViewProduct.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-gray-700">{quickViewProduct.description}</p>

                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        handleAddToCart(quickViewProduct, e);
                        setQuickViewProduct(null);
                      }}
                      className="flex-1 bg-[#d97f1f] hover:bg-[#b8651a] text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => navigate(`/product/${quickViewProduct.id}`, { state: { product: quickViewProduct } })}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition"
                    >
                      View Details
                    </button>
                  </div>

                  <div className="pt-4 border-t space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Truck size={16} className="text-green-600" /> Free shipping on orders above ₹500
                    </p>
                    <p className="flex items-center gap-2">
                      <Shield size={16} className="text-blue-600" /> 100% secure payment
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

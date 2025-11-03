import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Plus, Minus, Truck, Shield, RefreshCw, Check } from "lucide-react";
import SEO from "../../components/SEO";
import { useCart } from "../../contexts/CartContext";
import { productsData } from "./Products";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return <h2 className="text-center text-red-600 pt-20">Product not found</h2>;

  // Get image URL - if it's imported from assets, it will be a string path
  const imageUrl = typeof product.image === 'string' && !product.image.startsWith('/') 
    ? `https://myawala.com/assets/${product.image}` 
    : product.image;

  // Toast notification
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToastMessage(`✓ ${quantity} ${product.name} added to cart!`);
  };

  // Handle buy now
  const handleBuyNow = () => {
    addToCart(product, quantity);
    showToastMessage(`✓ ${quantity} ${product.name} added to cart!`);
    setTimeout(() => navigate("/cart"), 500);
  };

  // Increase quantity
  const increaseQuantity = () => setQuantity(prev => prev + 1);

  // Decrease quantity
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <>
      <SEO
        title={`${product.name} - Buy Online | MyAwala`}
        description={product.description}
        keywords={`${product.name}, ${product.category}, buy ${product.name.toLowerCase()}, amla products, ${product.category.toLowerCase()}, natural health products`}
        url={`https://myawala.com/product/${product.id}`}
        image={imageUrl}
        type="product"
      />
      
      {/* Main Product Section */}
      <div className="pt-20 pb-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <span className="cursor-pointer hover:text-[#d97f1f]" onClick={() => navigate("/")}>Home</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-[#d97f1f]" onClick={() => navigate("/products")}>Products</span>
            <span>/</span>
            <span className="text-[#d97f1f]">{product.name}</span>
          </div>

          {/* Product Layout */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Left - Images */}
              <div className="space-y-4">
                {/* Main Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="aspect-square bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </motion.div>

                {/* Thumbnail Images */}
                <div className="flex gap-4 justify-center">
                  {[product.image, product.image, product.image].slice(0, 3).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                        selectedImage === idx ? "border-[#d97f1f]" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right - Details */}
              <div className="space-y-6">
                {/* Category Badge */}
                <span className="inline-block bg-[#d97f1f] text-white text-sm font-semibold px-4 py-1 rounded-full">
                  {product.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    ({product.reviews} reviews) | <span className="text-green-600 font-semibold">In Stock</span>
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-[#d97f1f]">₹{product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">₹{product.originalPrice}</span>
                      <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        Save {product.discount}%
                      </span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

                {/* Quantity Selector */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-800">Quantity:</span>
                    <div className="flex items-center gap-3 border border-gray-300 rounded-lg">
                      <button
                        onClick={decreaseQuantity}
                        className="p-2 hover:bg-gray-100 transition"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="px-4 font-bold text-lg">{quantity}</span>
                      <button
                        onClick={increaseQuantity}
                        className="p-2 hover:bg-gray-100 transition"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#d97f1f] hover:bg-[#b8651a] text-white px-6 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 text-lg shadow-lg"
                  >
                    <ShoppingCart size={22} />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-semibold transition text-lg shadow-lg"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Product Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-6">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Truck size={24} className="text-green-600" />
                    <div>
                      <p className="text-xs text-gray-600">Shipping</p>
                      <p className="text-sm font-semibold">Free Delivery</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Shield size={24} className="text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-600">Secure</p>
                      <p className="text-sm font-semibold">100% Safe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <RefreshCw size={24} className="text-purple-600" />
                    <div>
                      <p className="text-xs text-gray-600">Return</p>
                      <p className="text-sm font-semibold">Easy Return</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b">
              <div className="px-8 py-4 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Product Details</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Experience the natural goodness of our premium Amla products. Made with 100% natural ingredients, 
                    this product is carefully crafted to provide you with the best health benefits. Our Amla products 
                    are sourced from trusted farms and processed using traditional methods to preserve maximum nutrients.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Key Benefits</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2">
                      <Check size={20} className="text-green-600" />
                      <span>100% Natural & Organic</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={20} className="text-green-600" />
                      <span>Rich in Vitamin C</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={20} className="text-green-600" />
                      <span>Boosts Immunity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={20} className="text-green-600" />
                      <span>Improves Digestion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={20} className="text-green-600" />
                      <span>Anti-Aging Properties</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={20} className="text-green-600" />
                      <span>No Preservatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

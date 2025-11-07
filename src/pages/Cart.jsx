import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import SEO from "../components/SEO";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(false);

  const handleQuantityChange = (id, type) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      if (type === "increase") {
        updateQuantity(id, item.quantity + 1);
      } else if (item.quantity > 1) {
        updateQuantity(id, item.quantity - 1);
      }
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleVoucherApply = () => {
    if (voucherCode === "AWALA10") {
      setVoucherApplied(true);
    }
  };

  const subtotal = getCartTotal();
  const discount = voucherApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  const shipping = subtotal > 500 ? 0 : 50;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 md:px-8">
      <SEO
        title="Shopping Cart - Review Your Amla Products"
        description="Review your selected Amla products in the shopping cart. Continue shopping or proceed to secure checkout for fresh, natural Amla products."
        keywords="shopping cart, amla products cart, add to cart, checkout amla, buy amla online, natural products cart"
        url="https://greateawala.com/cart"
        image="https://greateawala.com/banner-5.png"
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shopping Cart
          </h2>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-12 text-center"
          >
            <div className="text-9xl mb-6">🛒</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items yet!</p>
            <button
              onClick={() => navigate("/products")}
              className="bg-[#d97f1f] hover:bg-[#b8651a] text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2 mx-auto"
            >
              <ShoppingBag size={20} />
              Browse Products
            </button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-xl shadow-md p-4 md:p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Image */}
                      <div className="w-full md:w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 hover:bg-red-50 rounded-full transition text-gray-500 hover:text-red-500"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Price */}
                          <div>
                            <p className="text-xl font-bold text-[#d97f1f]">
                              ₹{item.price.toFixed(2)}
                            </p>
                            {item.originalPrice && (
                              <p className="line-through text-gray-400 text-sm">
                                ₹{item.originalPrice.toFixed(2)}
                              </p>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 border rounded-lg">
                            <button
                              onClick={() => handleQuantityChange(item.id, "decrease")}
                              className="p-2 hover:bg-gray-100 transition text-gray-600"
                            >
                              <Minus size={18} />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, "increase")}
                              className="p-2 hover:bg-gray-100 transition text-gray-600"
                            >
                              <Plus size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>

                {/* Voucher Code */}
                <div className="mb-6">
                  <input
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Enter voucher code"
                    className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97f1f] mb-2"
                  />
                  <button
                    onClick={handleVoucherApply}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium transition"
                  >
                    Apply Code
                  </button>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl pt-4 border-t">
                    <span>Total</span>
                    <span className="text-[#d97f1f]">₹{(total + shipping).toFixed(2)}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-[#d97f1f] hover:bg-[#b8651a] text-white py-3 rounded-lg font-semibold transition"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => navigate("/products")}
                    className="w-full border-2 border-gray-300 hover:border-[#d97f1f] text-gray-700 hover:text-[#d97f1f] py-3 rounded-lg font-semibold transition"
                  >
                    Continue Shopping
                  </button>
                </div>

                {subtotal < 500 && (
                  <p className="mt-4 text-sm text-gray-600 text-center">
                    Add ₹{(500 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

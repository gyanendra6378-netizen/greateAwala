import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/banner-4.png";
import img2 from "../assets/banner-5.png";
import img3 from "../assets/banner-5.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "organic almonds",
      category: "DRY FRUITS",
      price: 50,
      oldPrice: 65,
      image: img1,
      quantity: 3,
    },
    {
      id: 2,
      name: "organic pepper",
      category: "VEGETABLE",
      price: 50,
      oldPrice: 65,
      image: img2,
      quantity: 3,
    },
    {
      id: 3,
      name: "organic onion",
      category: "VEGETABLE",
      price: 50,
      oldPrice: 65,
      image: img3,
      quantity: 3,
    },
  ]);

  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full px-6 md:px-20 py-12 pt-28 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#c77a37] text-center md:text-left">
         Shopping Cart
      </h2>

      {/* Table Head */}
      <div className="hidden md:grid grid-cols-6 gap-4 text-sm font-semibold border-b py-3 text-gray-600">
        <span className="col-span-2">Product Detail</span>
        <span>Product Price</span>
        <span>Quantity</span>
        <span>Unit</span>
        <span>Total Price</span>
      </div>

      {/* Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-2 md:grid-cols-6 items-center gap-4 py-6 border-b"
        >
          {/* Image + Name */}
          <div className="col-span-2 flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md shadow-sm"
            />
            <div>
              <p className="font-semibold text-gray-800 capitalize">{item.name}</p>
              <p className="text-xs text-gray-500 uppercase">{item.category}</p>
              <p className="text-yellow-500 text-sm mt-1">★★★★★</p>
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="font-bold text-black">${item.price.toFixed(2)}</p>
            <p className="line-through text-gray-400 text-sm">
              ${item.oldPrice.toFixed(2)}
            </p>
          </div>

          {/* Quantity */}
          <div className="flex items-center border rounded w-24">
            <button
              onClick={() => handleQuantityChange(item.id, "decrease")}
              className="w-8 h-8 text-gray-600 hover:bg-gray-200"
            >
              −
            </button>
            <span className="flex-1 text-center">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, "increase")}
              className="w-8 h-8 text-gray-600 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          {/* Unit Dropdown */}
          <div>
            <select className="border px-2 py-1 rounded text-sm">
              <option>Kilo</option>
              <option>Gram</option>
              <option>Pcs</option>
            </select>
          </div>

          {/* Total */}
          <div className="font-bold text-[#c77a37]">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}

      {/* Voucher */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter voucher code"
            className="border px-4 py-2 rounded w-full md:w-64 focus:outline-[#c77a37] focus:ring-2 focus:ring-[#c77a37]"
          />
          <button className="bg-[#c77a37] hover:bg-[#b5765b] text-white px-4 py-2 rounded">
            APPLY CODE
          </button>
        </div>
        <p className="font-semibold text-lg">
          Subtotal:{" "}
          <span className="text-[#c77a37]">${subtotal.toFixed(2)}</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-4">
       <Link to="/">
        <button className="px-6 py-3 border border-gray-500 text-gray-700 rounded hover:bg-gray-100 transition">
          CONTINUE SHOPPING
        </button>
       </Link>
        <button className="px-6 py-3 bg-[#c77a37] text-white rounded hover:bg-[#b5765b] transition">
          CHECKOUT NOW
        </button>
      </div>
    </div>
  );
};

export default Cart;

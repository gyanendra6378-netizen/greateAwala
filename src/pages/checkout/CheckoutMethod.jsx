// components/checkout/CheckoutMethod.jsx
import React from "react";

const CheckoutMethod = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
      {/* Left Column - Guest/Register */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-2">Check as a guest or register</h3>
        <p className="text-sm text-gray-500 mb-4">Register with us for future convenience:</p>

        <div className="space-y-3 mb-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="method" className="accent-green-500" />
            <span>Check as guest</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="method" className="accent-green-500" />
            <span>Register</span>
          </label>
        </div>

        <h4 className="text-base font-semibold mb-1">Register and save time!</h4>
        <p className="text-sm text-gray-500 mb-3">Register with us for future convenience:</p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>➤ Fast and easy check out</li>
          <li>➤ Easy access to your order history and status</li>
        </ul>

        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
          CONTINUE
        </button>
      </div>

      {/* Right Column - Login */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-2">Already registered?</h3>
        <p className="text-sm text-gray-500 mb-4">Please log in below:</p>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-full bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-full bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <p className="text-xs text-red-500">* Required Fields</p>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full"
            >
              LOG IN
            </button>
            <a href="#" className="text-sm font-semibold text-gray-700">
              Forgot Your Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutMethod;

import { IndianRupee } from "lucide-react";

export default function OrderReview({ cartItems, address, paymentMethod, onConfirmOrder }) {
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-md shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Order Review</h2>

      {/* Order Items */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Items</h3>
        <ul className="divide-y border rounded-md">
          {cartItems.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center p-3">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="text-gray-700 font-semibold flex items-center gap-1">
                <IndianRupee size={16} />
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
          <li className="flex justify-between font-semibold bg-gray-50 p-3 text-gray-800">
            <span>Total</span>
            <span className="flex items-center gap-1">
              <IndianRupee size={16} />
              {calculateTotal().toFixed(2)}
            </span>
          </li>
        </ul>
      </div>

      {/* Delivery Address */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Delivery Address</h3>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm text-gray-700">
          <p><strong>Name:</strong> {address.name}</p>
          <p><strong>Phone:</strong> {address.phone}</p>
          <p><strong>Address:</strong> {address.street}, {address.city}, {address.state} - {address.zip}</p>
        </div>
      </div>

      {/* Payment */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Payment Method</h3>
        <div className="bg-gray-100 p-3 rounded-md text-gray-700 capitalize">
          {paymentMethod.replace(/_/g, " ")}
        </div>
      </div>

      {/* Confirm Button */}
      <div className="text-right">
        <button
          onClick={onConfirmOrder}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
        >
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
}

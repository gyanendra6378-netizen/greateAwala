import { useState } from "react";
import { IndianRupee, CreditCard, Banknote, Wallet } from "lucide-react";

export default function Delivery({ address, onPaymentSelect }) {
  const [selectedMethod, setSelectedMethod] = useState("cod");

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI",
      icon: <Wallet size={20} />,
      description: "Pay via Google Pay, PhonePe, Paytm etc.",
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <CreditCard size={20} />,
      description: "All major cards accepted",
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: <Banknote size={20} />,
      description: "Pay in cash when your order arrives",
    },
  ];

  const handleChange = (id) => {
    setSelectedMethod(id);
    onPaymentSelect(id);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Delivery Address</h3>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm text-gray-700">
          <p><strong>Name:</strong> {address.name}</p>
          <p><strong>Phone:</strong> {address.phone}</p>
          <p><strong>Address:</strong> {address.street}, {address.city}, {address.state} - {address.zip}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Select Payment Method</h3>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                selectedMethod === method.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="payment"
                checked={selectedMethod === method.id}
                onChange={() => handleChange(method.id)}
                className="mt-1 accent-green-600"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                  {method.icon}
                  <span>{method.name}</span>
                </div>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

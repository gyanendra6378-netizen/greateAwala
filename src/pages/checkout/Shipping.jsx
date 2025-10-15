import { useState } from "react";
import { Truck, Timer, Rocket } from "lucide-react";

const methods = [
  {
    id: "standard",
    name: "Standard Delivery",
    description: "Delivery in 4-6 business days",
    icon: <Truck size={20} />,
    cost: "Free",
  },
  {
    id: "express",
    name: "Express Delivery",
    description: "Delivery in 1-2 business days",
    icon: <Timer size={20} />,
    cost: "₹99",
  },
  {
    id: "sameDay",
    name: "Same Day Delivery",
    description: "Delivery today before 9 PM",
    icon: <Rocket size={20} />,
    cost: "₹199",
  },
];

export default function Shipping({ selected, setSelected }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Shipping Method</h3>
      <div className="space-y-4">
        {methods.map((method) => (
          <label
            key={method.id}
            className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
              selected === method.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name="shipping"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="mt-1 accent-blue-500"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 font-semibold text-gray-800">
                {method.icon}
                <span>{method.name}</span>
              </div>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
            <div className="text-sm font-medium text-gray-800">{method.cost}</div>
          </label>
        ))}
      </div>
    </div>
  );
}

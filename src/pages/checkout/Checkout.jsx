// components/Checkout.jsx
import { useState } from "react";
import Billing from "./Billing";
import CheckoutMethod from "./CheckoutMethod";
import { Pencil, User, MapPin, Truck, Wallet, Receipt } from "lucide-react";
import Address from "./Address";
import Shipping from "./Shipping";
import Delivery from "./Delivery";
import OrderReview from "./OrderReview";

const userAddress = {
  name: "Shubham Singh",
  phone: "9876543210",
  street: "Plot No. 21, Yamuna Expressway",
  city: "Jewar",
  state: "UP",
  zip: "203135",
};

const cartItems = [
  { name: "iPhone 15", quantity: 1, price: 79999 },
  { name: "Back Cover", quantity: 2, price: 499 },
];


const address = {
  name: "Shubham Singh",
  phone: "9876543210",
  street: "Plot No. 21, Yamuna Expressway",
  city: "Jewar",
  state: "UP",
  zip: "203135",
};
const Checkout = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
   

  const checkoutSteps = [
    { label: "checkout method", icon: <Pencil size={20} /> },
    { label: "billing information", icon: <User size={20} /> }, // ✅ Added billing step
    { label: "address", icon: <MapPin size={20} /> },
    { label: "shipping", icon: <Truck size={20} /> },
    { label: "delivery & payment", icon: <Wallet size={20} /> },
    { label: "order review", icon: <Receipt size={20} /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);


  const handleStepClick = (index) => {
    setActiveIndex(index);
  };

  const renderStepComponent = (label) => {
    switch (label) {
      case "checkout method":
        return <CheckoutMethod />;
      case "billing information":
        return <Billing />;                       // ✅ Corrected label
      case "address":
        return <Address />;
      case "shipping":
        return <Shipping selected={shippingMethod} setSelected={setShippingMethod} />;
      case "delivery & payment":
        return <Delivery address={userAddress}
  onPaymentSelect={(method) => setPaymentMethod(method)} />;
      case "order review":
        return <OrderReview
  cartItems={cartItems}
  address={address}
  paymentMethod={paymentMethod}
  onConfirmOrder={() => alert("Order Placed Successfully!")}
/>;
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <div className="text-gray-700 pt-20">
      {/* Hero Section */}
      <section className="bg-[#f8f8f5] py-20 text-center">
        <h2 className="text-2xl font-semibold text-green-700">
          naturix <span className="text-gray-800">Shop</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">HOME / CHECKOUT</p>
      </section>

      {/* Progress Stepper */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {checkoutSteps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative"
            >
              <div
                onClick={() => handleStepClick(index)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 cursor-pointer ${
                  activeIndex === index
                    ? "bg-rose-400 text-white border-rose-400"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {step.icon}
              </div>
              <span
                className={`mt-2 text-xs font-medium uppercase ${
                  activeIndex === index
                    ? "text-rose-400"
                    : "text-gray-600"
                }`}
              >
                {step.label}
              </span>

              {/* Line Connector */}
              {index !== checkoutSteps.length - 1 && (
                <div className="absolute top-5 right-[-50%] w-full h-0.5 bg-gray-300 z-[-1]" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Accordion Steps */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {checkoutSteps.map((step, index) => (
            <div
              key={index}
              className={`border rounded-md transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200"
              }`}
            >
              <div
                onClick={() => handleStepClick(index)}
                className="p-4 flex justify-between items-center cursor-pointer"
              >
                <p className="text-lg font-medium">
                  {String(index + 1).padStart(2, "0")}.{" "}
                  <span
                    className={`capitalize ${
                      step.label.includes("review")
                        ? "text-green-600 font-bold"
                        : "font-semibold"
                    }`}
                  >
                    {step.label}
                  </span>
                </p>
                <span className="text-xl font-bold">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="px-4 pb-6 text-sm text-gray-600">
                  {renderStepComponent(step.label)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Checkout;

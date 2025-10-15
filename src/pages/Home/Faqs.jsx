import { useState } from "react";
import bgimg from "../../assets/lastBanner.png";

const faqs = [
  {
    question: "What is Great Awala?",
    answer:
      "Great Awala is a brand dedicated to bringing you fresh, natural, and healthy Amla (Awala) products made with care and authenticity.",
  },
  {
    question: "Are your products organic?",
    answer:
      "Yes! All Great Awala products are made from naturally grown Amla, ensuring purity and maximum health benefits.",
  },
  {
    question: "Where can I buy Great Awala products?",
    answer:
      "You can buy our products directly from our official website or our authorized offline partners.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "Yes, we provide doorstep delivery for all orders placed online. Shipping times may vary depending on your location.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full bg-cover bg-white bg-center text-black"
      
    >
      <div className=" w-full h-full md:px-16 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" border border-white/20 rounded-xl shadow-md"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-lg font-semibold"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="ml-3 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-900 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

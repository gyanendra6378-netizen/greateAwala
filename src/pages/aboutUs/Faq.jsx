// components/FaqSection.jsx
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "DO YOU HAVE A FAVOURITE SPOT SO FAR IN THIS PART OF THE WORLD?",
    answer:
      "Wow, that’s the toughest question so far. Each and every place has so many special things about it. I’d say it’s a three way competition between Vanuatu, New Zealand, and The Philippines. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "HOW DID THIS EPIC TRIP AROUND THE WORLD START?",
    answer:
      "Mi vivamus lobortis ligula, libero tincidunt commodo erat eget tortor amet, ante tellus suspendisse magna morbi lectus nonummy.",
  },
  {
    question: "HOW TO TAKE GREAT TRAVEL PHOTOS AS A SOLO TRAVELER?",
    answer: "",
  },
];

export default function Faq() {
  return (
    <section className="px-6 py-16 bg-[#f5f1e9] text-[#262626]">
      <h2 className="text-4xl font-serif font-semibold text-center mb-14">FAQs</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white p-6 border border-transparent ${
              index === 0 ? "md:row-span-2" : ""
            } shadow-sm`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[0.75rem] md:text-sm font-bold uppercase text-[#c49751] leading-snug">
                {faq.question}
              </h3>
              <ChevronDown className="text-red-500 shrink-0 mt-1" size={20} />
            </div>

            {faq.answer && (
              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-[#b18043] hover:bg-[#c8a958] transition px-10 py-3 font-semibold text-sm tracking-wider text-white flex items-center gap-2 rounded-lg">
          LOAD MORE <span className="rotate-[-45deg]">➜</span>
        </button>
      </div>
    </section>
  );
}

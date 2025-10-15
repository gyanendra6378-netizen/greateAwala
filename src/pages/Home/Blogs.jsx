import React from "react";
import img1 from "../../assets/collection-1.png"

const Blogs = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Images */}
        <div>
          <img
            src={img1}
            alt="Amla products collection"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          {/* Top Label */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="flex gap-1">
              <span className="w-2 h-2 bg-[#d89a7e] rounded-full"></span>
              <span className="w-2 h-2 bg-[#d89a7e] rounded-full"></span>
              <span className="w-2 h-2 bg-[#d89a7e] rounded-full"></span>
            </span>
            <span className="uppercase tracking-wide font-medium">
              From the Heart of Nature
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-snug">
            Great Awala – Pure Amla Goodness for a Healthy Life
          </h2>

          {/* Highlighted Text */}
          <p className="italic text-gray-700 border-l-2 border-[#d89a7e] pl-4">
            Experience the power of Amla (Awala) – rich in Vitamin C, antioxidants, 
            and natural health benefits, directly from our farms to your table.
          </p>

          {/* Description */}
          <p className="text-gray-600">
            At <span className="font-semibold text-[#a75c22]">Great Awala</span>, we bring you 
            100% natural, fresh, and preservative-free products. From delicious 
            Amla candies and juices to herbal powders and tonics, each product 
            is crafted to boost your immunity and overall well-being.
          </p>

          {/* Button */}
          <button className="bg-[#d89a7e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#bb7d5c] transition">
            Explore Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

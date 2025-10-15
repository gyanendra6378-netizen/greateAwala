import React from "react";
import lifestyle from "../../assets/banner-1.png";
import tree from "../../assets/tree-1.png";
import sweet from "../../assets/oli-1.png";
import juice from "../../assets/drop-1.png";

const categories = [
  {
    title: "Fresh Amla",
    image: lifestyle,
  },
  {
    title: "Amla Tree",
    image: tree,
  },
  {
    title: "Amla Sweets",
    image: sweet,
  },
  {
    title: "Amla Oil",
    image: juice,
  },
];

const Categories = () => {
  return (
    <section className="bg-[#fef8f4] py-14">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Popular Amla Categories
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Discover the best of MyAwala – from fresh hand-picked Amla fruits
          to delicious sweets, juices, and natural products for a healthier
          lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group h-[350px] rounded overflow-hidden shadow-md"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <button className="bg-[#d89a7e] px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

import React from "react";
import img1 from "../../assets/banner-2.png";
import img2 from "../../assets/banner-4.png";
import img3 from "../../assets/banner-5.png";

const Updateds = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Top section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Discount card */}
        <div className="rounded-lg flex flex-col items-center text-center">
          <img
            src={img1}
            alt="Vegetables"
            className="w-full object-contain rounded-4xl"
          />
        </div>

        {/* Fresh juice card */}
        <div className="rounded-lg flex flex-col items-center text-center">
          <img
            src={img2}
            alt="Fresh Juice"
            className="w-full object-contain rounded-4xl"
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full">
        <img
          src={img3}
          alt="Great Awala Products"
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Updateds;

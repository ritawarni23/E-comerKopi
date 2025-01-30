import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImg from "/images/2.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-black via-black to-gray-900 py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2">
          <img
            src={bannerImg} 
            alt="Coffee Banner"
            className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-semibold text-white mb-5 text-shadow-md">
            Coffee
          </h1>
          <p className="text-xl font-semibold text-gray-300 mb-7 text-shadow-md">
            Discover premium coffee beans sourced from the finest farms
            worldwide. Experience rich flavors and exceptional quality crafted
            for true coffee lovers.
          </p>
          <Link to="/shop">
            <button className="bg-white hover:bg-orange-500 px-6 py-2 text-black font-semibold flex gap-2 items-center rounded-sm">
              <FaShoppingBag className="inline-flex" /> Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

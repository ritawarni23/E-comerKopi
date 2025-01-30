import React from "react";
import { Link } from "react-router-dom"; 

const Collections = () => {
  return (
    <div className="bg-gradient-to-r from-black via-black to-gray-900 bg-cover bg-center bg-no-repeat xl:px-28 px-4 h-screen">
      <div className="h-[580px] flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="/images/6.jpg"
            alt="Coffee Image"
            className="h-[480px] flex flex-col md:flex-row items-center"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-4xl text-white font-semibold mb-4">
            Coffee Gayo
          </h1>

          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px] md:text-left text-justify">
            Gayo coffee originates from the Gayo highlands in Aceh, Indonesia.
            Known for its rich and complex flavors, it is grown in fertile
            volcanic soil at high altitudes, which gives it a unique profile of
            full-bodied taste with a hint of sweetness. It's a favorite among
            coffee enthusiasts for its exceptional quality and smoothness.
          </p>

          <Link to="/blog">
            <button className="bg-white text-black font-semibold px-6 py-2 capitalize rounded-sm hover:-translate-y-2 transition-all duration-300">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;

import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const coffeeTypes = ["ARABIKA", "ROBUSTA", "LIBERIKA", "EXCELSA"];
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12 xl:px-28 px-4">
      <div className="max-w-screen-2xl container xl:px-28 px-4 py-16">
        <div className="flex items-center justify-center text-white flex-wrap gap-14 py-5">
          {coffeeTypes.map((type) => (
            <span
              key={type}
              className="text-2xl font-bold uppercase tracking-wider">
              {type}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 justify-center">
          <p className="font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-2 p-2 rounded-sm inline-flex text-lg md:text-xl">
            Explore new and popular styles
          </p>
          <div className="md:w-[60%]">
            <Link to="/">
              <img
                src="/images/category/7.jpg"
                alt=""
                className="w-full h-auto md:h-[400px] hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Link to="/">
                <img
                  src="/images/category/8.jpg"
                  alt=""
                  className="w-full h-auto md:h-[200px] hover:scale-105 transition-all duration-200"
                />
              </Link>
              <Link to="/">
                <img
                  src="/images/category/9.jpg"
                  alt=""
                  className="w-full h-auto md:h-[200px] hover:scale-105 transition-all duration-200"
                />
              </Link>
              <Link to="/">
                <img
                  src="/images/category/10.jpg"
                  alt=""
                  className="w-full h-auto md:h-[200px] hover:scale-105 transition-all duration-200"
                />
              </Link>
              <Link to="/">
                <img
                  src="/images/category/11.jpg"
                  alt=""
                  className="w-full h-auto md:h-[200px] hover:scale-105 transition-all duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

import React from "react";
import { Link } from "react-router-dom";

const Card = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredItems.slice(0, 8).map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <Link to={`/shop/${item.id}`}>
            <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <div className="mt-4 text-black text-center w-full">
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>

            <div className="flex justify-between px-2 text-sm">
              <p className="text-gray-600">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

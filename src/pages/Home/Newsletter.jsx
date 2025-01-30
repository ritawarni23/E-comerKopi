import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-black via-black to-gray-900 bg-cover bg-center bg-no-repeat xl:px-28 px-4 py-16">
      <h2 className="text-3xl font-semibold text-center capitalize mb-8 text-white">
        Follow products and discounts on Instagram
      </h2>

      <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
        <Link>
          <img
            src="/images/instagram/5.jpg"
            alt="Instagram 1"
            className="w-[200px] h-[200px] object-cover rounded-md"
          />
        </Link>
        <Link>
          <img
            src="/images/instagram/ig1.jpg"
            alt="Instagram 2"
            className="w-[200px] h-[200px] object-cover rounded-md"
          />
        </Link>
        <Link>
          <img
            src="/images/instagram/ig2.jpg"
            alt="Instagram 3"
            className="w-[200px] h-[200px] object-cover rounded-md"
          />
        </Link>
        <Link>
          <img
            src="/images/instagram/image1.jpg"
            alt="Instagram 4"
            className="w-[200px] h-[200px] object-cover rounded-md"
          />
        </Link>
        <Link>
          <img
            src="/images/instagram/3.jpg"
            alt="Instagram 5"
            className="w-[200px] h-[200px] object-cover rounded-md"
          />
        </Link>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center capitalize mb-8 text-white">
          Or subscribe to the newsletter
        </h2>
        <form className="md:w-1/2 mx-auto text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address..."
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-white md:w-2/3 w-full mb-5 placeholder:text-white/50 mr-4 text-white"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="bg-white text-black px-6 py-1 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

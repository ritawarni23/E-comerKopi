import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 xl:px-28">
      <h2 className="text-4xl font-semibold text-center mb-8 mt-32">
        Contact Us
      </h2>
      <div className="flex justify-center items-center">
        <form className="w-full md:w-1/2 space-y-6 bg-gray-800 p-8 rounded-md shadow-lg">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 text-white rounded-md"
              rows="5"
            />
          </div>
          <div>
            <button className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-400 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

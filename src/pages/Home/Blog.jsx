// Blog.js
import React from 'react';

const Blog = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 xl:px-28">
      <h2 className="text-4xl font-semibold text-center mb-12 mt-32">Our Coffee Blog</h2>
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">The Journey of Coffee</h3>
          <p className="text-lg">
            Discover the fascinating journey of coffee, from seed to cup. Learn
            how coffee is grown, harvested, and roasted to perfection to bring
            you the flavors you love. We dive into the details of how different
            coffee beans are sourced from various regions around the world.
          </p>
          <img
            src="/images/kopi3.jpg"
            alt="Coffee Journey"
            className="w-52 h-52 rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Understanding Coffee Roasts</h3>
          <p className="text-lg">
            Explore the different types of coffee roasts and how they affect the
            flavor profile of your cup. Whether you prefer light, medium, or
            dark roasts, we explain the characteristics and nuances of each.
          </p>
          <img
            src="/images/kopi2.jpg"
            alt="Coffee Roasts"
            className="w-52 h-52 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 xl:px-28">
      <h2 className="text-4xl font-semibold text-center mb-8 mt-32">About Us</h2>
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0">
          <img
            src="/images/kopi2.jpg"
            alt="About Coffee"
            className="w-52 h-52 rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <p className="text-lg text-center md:text-left">
            We are passionate about providing the finest coffee sourced from the
            best plantations around the world. Our mission is to bring you the
            authentic taste of freshly roasted coffee, carefully crafted to
            provide a rich and flavorful experience in every cup. Whether you're
            a coffee aficionado or a casual drinker, we have something for
            everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

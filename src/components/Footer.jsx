import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-black bg-cover bg-center bg-no-repeat xl:px-28 px-4 py-16">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="Company Logo" />
            </Link>
            <p className="my-8 text-white/75">
              We are dedicated to providing high-quality coffee beans sourced
              from the best farms worldwide. Our mission is to bring you rich
              flavors, carefully roasted to perfection, ensuring an exceptional
              coffee experience every time.
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500 text-white" />
            </div>
          </div>

          <div className="text-white">
            <h4 className="font-semibold mb-3">COFFEE VARIETIES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Arabica
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Robusta
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Liberica
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Excelsa
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Blend Coffee
              </Link>
            </div>
          </div>

          <div className="text-white">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Product Care & Storage
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Wholesale & Partnerships
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Shipping & Returns
              </Link>
            </div>
          </div>

          <div className="text-white">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Our Coffee Farms
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Sustainability & Ethics
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <p className="text-white text-center py-3">
          © {currentYear} Coffeeliu.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

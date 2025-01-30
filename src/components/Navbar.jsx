import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { title: "Home", path: "/" },
        { title: "Shop", path: "/shop" },
        { title: "Blog", path: "/blog" },
        { title: "About Us", path: "/about" },
        { title: "Contact", path: "/contact" },
    ];

    return (
        <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0 shadow-md">
            <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
                <FaSearch className="text-white w-6 h-6 cursor-pointer hidden md:block" />
                <a href="/" className="">
                    <img src={logo} alt="Logo" />
                </a>

                {/* Account and shopping buttons */}
                <div className="text-lg text-white sm:flex items-center gap-4 hidden">
                    <Link to="/account" className="flex items-center gap-2 ">
                        <FaUser /> Account
                    </Link> {/* Changed to Link to /account */}
                    <a href="/" className="flex items-center gap-2">
                        <FaShoppingBag /> Cart
                    </a>
                </div>

                <div className="sm:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6 text-white" />
                        ) : (
                            <FaBars className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
            </nav>
            <hr className="border-white" />

            {/* Desktop navigation items */}
            <div className="pt-4">
                <ul className="lg:flex items-center justify-center space-x-6 text-white hidden">
                    {navItems.map(({ title, path }) => (
                        <li key={title} className="hover:text-orange-500">
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "text-white-500" : ""
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile menu items */}
            <div>
                <ul
                    className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}
                >
                    {navItems.map(({ title, path }) => (
                        <li
                            key={title}
                            className="hover:text-orange-500 my-3 cursor-pointer"
                        >
                            <Link to={path} onClick={toggleMenu}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;

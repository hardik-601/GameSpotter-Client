// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 text-white shadow-md mb-32">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-black">
          <span className="text-white">GAME</span>
          <span className="text-white">SPOTTER</span>
        </h1>
      </div>

      <div className="hidden md:flex space-x-8 ">
        <a href="/" className="hover:text-gray-600">
          Home
        </a>
        <a href="/games" className="hover:text-gray-600">
          Games
        </a>
        <a href="/communities" className="hover:text-gray-600">
          Communities
        </a>
        <a href="/blogs" className="hover:text-gray-600">
          Blogs
        </a>
        <a href="/about" className="hover:text-gray-600">
          About
        </a>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="/" className="text-black hover:text-gray-600">
              Home
            </a>
            <a href="/games" className="text-black hover:text-gray-600">
              Games
            </a>
            <a href="/communities" className="text-black hover:text-gray-600">
              Communities
            </a>
            <a href="/blogs" className="text-black hover:text-gray-600">
              Blogs
            </a>
            <a href="/about" className="text-black hover:text-gray-600">
              About
            </a>
            <a
              href="/join"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Join Us
            </a>
          </div>
        </div>
      )}

      <div className="hidden md:block">
        <a
          href="/join"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Join Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
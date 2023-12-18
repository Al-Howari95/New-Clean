import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Cookies from "js-cookie";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavVisible, setNavVisible] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [userProfileImage, setUserProfileImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("Token");
    if (token) {
      setLoggedIn(true);
    }
  });

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleLogin = () => {
    // Perform authentication logic
    // For simplicity, let's assume successful login and set user information
    setLoggedIn(false);
    setUserProfileImage(
      "https://cdn-icons-png.flaticon.com/256/3135/3135789.png"
    );

    // Redirect to the login page
    navigate("/Login");
  };

  const handleLogout = () => {
    // Perform logout logic
    setLoggedIn(false);
    setUserProfileImage("");
    Cookies.remove("Token");
    Cookies.remove("user_id");
  };

  const NavLogin = isLoggedIn ? (
    <div className="flex items-center">
      <Link to="/Profile">
        <img
          // src={userProfileImage}
          src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
          alt="User Profile"
          className="h-8 w-auto rounded-full mr-2"
        />
      </Link>
      {/* <span className="text-md font-bold text-blue-700">
        User Name 
      </span> */}
      <button
        onClick={handleLogout}
        className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex ">
      <div
        className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Sign in
        {isDropdownOpen && (
          <div className="absolute bg-white border rounded mt-2">
            <Link
              to="/Login"
              className=" block px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white"
            >
              User
            </Link>
            <Link
              to="/Adminlogin"
              className="block px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white"
            >
              Admin
            </Link>
          </div>
        )}
      </div>
      <Link
        to="/Registration"
        className="block text-md px-4 ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
      >
        Sign Up
      </Link>
    </div>
  );

  // ... (الكود الحالي)

  return (
    <div className="sticky top-0 w-full z-50">
      <nav
        id="navv"
        className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100"
      >
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <img
              id="imageee"
              src="https://s3.envato.com/files/262194812/thumbnail.png"
              alt="Your Logo"
              className="h-8 w-auto"
            />
            <div>
              <span
                id="Cleaning"
                className="text-blue-700 font-semibold text-xl tracking-tight"
              >
                CleanWave
              </span>
            </div>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleNav}
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        {isNavVisible && (
          <div id="madia" className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-blue-700 lg:flex-grow mr-48">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                Home
              </Link>

              <Link
                to="/Categores"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                Services
              </Link>

              <Link
                to="/AboutUs"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                About
              </Link>
              <Link
                to="/ContactUs"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                Contact
              </Link>
              <Link
                to="/WhyUse"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                Why Us
              </Link>
              <Link
                to="/FAQS"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                FAQS
              </Link>
            </div>
            {/* <Search/> */}
            <div className="flex ">{NavLogin}</div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;

import { useState, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { AuthContext } from "../context/auth-context";

// Navbar component for the website
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = useContext(AuthContext);

  // Links for navbar
  const Links = [
    { name: "Booking", link: "/reservation" },
    { name: "Services", link: "/servicepage" },
    { name: "Values", link: "/valuepage" },
    { name: "Activities", link: "/activitypage" },
    { name: "Contact", link: "/contactpage" },
    //{ name: "Login", link: "/loginpage" },
  ];

  return (
    <div className="shadow-xl w-full fixed top-0 left-0 bg-light-bg dark:bg-dark-bg z-10">
      <div className="md:flex items-center justify-between py-4 md:pr-10 xl:pr-40 px-10">
        <div className="font-ephesis text-4xl md:text-3xl lg:text-4xl cursor-pointer flex items-center text-light-text hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent duration-500">
          <a href={"/"}>Forest Haven Resort</a>
        </div>
        {/* Handle the dropdown menu for mobile devices */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-6 text-light-text hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent duration-500 md:hidden cursor-pointer absolute right-8 top-5"
        >
          {/* If dropdown menu is open, show XMarkIcon, else show Bars3Icon */}
          {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`md:flex md:items-center md:ml-4  ${
            menuOpen ? "" : "hidden"
          }`}
        >
          {/* Map through the links and display them in the navbar */}
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 lg:ml-8 text-lg md:my-1 my-4"
            >
              <a
                href={link.link}
                className="text-light-text hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* If user is logged in, show profile and logout links, else show login link */}
          <li>
            {auth.isLoggedIn ? (
              <a
                className="text-light-text hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent duration-500 md:ml-4 lg:ml-8 text-lg lg:text-xl md:my-1 my-4 cursor-pointer"
                href="/profile"
              >
                Profile
              </a>
            ) : (
              <></>
            )}
          </li>
          <li>
            {auth.isLoggedIn ? (
              <a
                className="text-light-text hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent duration-500 md:ml-4 lg:ml-8 text-lg lg:text-xl md:my-1 my-4 cursor-pointer"
                onClick={auth.logout}
              >
                Logout
              </a>
            ) : (
              <a
                className="text-light-text hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent duration-500 md:ml-4 lg:ml-8 text-lg lg:text-xl md:my-1 my-4"
                href="/loginpage"
              >
                Login
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

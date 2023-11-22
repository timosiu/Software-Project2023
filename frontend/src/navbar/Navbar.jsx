import { useState, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { AuthContext } from "../context/auth-context";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = useContext(AuthContext);

  const Links = [
    { name: "Services", link: "/servicepage" },
    { name: "Contact", link: "/contactpage" },
    //{ name: "Login", link: "/loginpage" },
  ];

  return (
    <div className="shadow-xl w-full fixed top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between py-4 md:pr-20 lg:pr-40 px-10">
        <div className="font-ephesis text-4xl cursor-pointer flex items-center text-gray-900 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-300 duration-500">
          <a href={"/"}>Forest Haven Resort</a>
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-6 text-gray-900 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-300 duration-500 md:hidden cursor-pointer absolute right-8 top-5"
        >
          {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul className={`md:flex md:items-center  ${menuOpen ? "" : "hidden"}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-1 my-7">
              <a
                href={link.link}
                className="text-gray-900 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-300 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            {auth.isLoggedIn ? (
              <a
                className="text-gray-900 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-300 duration-500 md:ml-8 text-xl md:my-1 my-7 cursor-pointer"
                onClick={auth.logout}
              >
                Logout
              </a>
            ) : (
              <a
                className="text-gray-900 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-300 duration-500 md:ml-8 text-xl md:my-1 my-7"
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

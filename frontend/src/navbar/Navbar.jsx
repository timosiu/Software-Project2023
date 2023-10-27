import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Links = [
    { name: "Contact", link: "/contactpage" },
    { name: "Login", link: "/loginpage" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div
        className="md:flex items-center justify-between backdrop-blur  py-4
      md:px-4 px-3"
      >
        <div
          className="text-2xl cursor-pointer flex items-center
          text-gray-900 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-300 duration-500 "
        >
          <a href={"/"}>Hippy Hotel</a>
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

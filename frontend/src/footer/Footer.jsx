import { useContext } from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import { AuthContext } from "../context/auth-context";

const Footer = () => {
  const auth = useContext(AuthContext);

  const Links = [
    { name: "Booking", link: "/reservation" },
    { name: "Services", link: "/servicepage" },
    { name: "Values", link: "/valuepage" },
    { name: "Activities", link: "/activitypage" },
    { name: "Contact", link: "/contactpage" },
    ...(auth.isLoggedIn ? [{ name: "Profile", link: "/profile" }] : []),
  ];

  return (
    <div className="flex flex-col sticky top-[100vh] md:flex-row justify-center bg-haven-red pt-10 px-10 sm:px-20 pb-32 gap-x-10 lg:gap-x-20 xl:gap-x-72 gap-y-10">
      <ul className="flex flex-col">
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 text-xl my-1">
            <a
              href={link.link}
              className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent duration-500 underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col">
        <li className="text-xl my-1">
          <a
            href="https://www.instagram.com/foresthavenresort/"
            className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent duration-500 flex items-center gap-2"
          >
            <FaInstagram size={20} />
            @foresthavenresort
          </a>
        </li>
        <li className="text-xl my-1">
          <a
            href="https://twitter.com/ForestHavenResort"
            className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent duration-500 flex items-center gap-2"
          >
            <FaXTwitter /> @ForestHavenResort
          </a>
        </li>
      </ul>
      <ul className="flex flex-col text-light-text dark:text-dark-text text-lg sm:text-xl">
        <li>Forest Haven Resort</li>
        <li>Esimerkkikatu 34</li>
        <li>33150 Tampere</li>
        <li>questions@foresthavenresort.com</li>
        <li>+358 9 6128 2000</li>
      </ul>
    </div>
  );
};

export default Footer;

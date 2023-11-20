import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const Links = [
    { name: "Booking", link: "/bookingpage" },
    { name: "Services", link: "/servicepage" },
    { name: "Activities", link: "/activitypage" },
    { name: "Rooms", link: "/roompage" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center bg-haven-red pt-10 px-10 sm:px-20 pb-32 gap-x-10 lg:gap-x-20 xl:gap-x-72 gap-y-10">
      <ul className="flex flex-col">
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 text-xl my-1">
            <a
              href={link.link}
              className="text-gray-900 hover:text-gray-600 duration-500 underline"
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
            className="text-gray-900 hover:text-gray-600 duration-500 flex items-center gap-2"
          >
            <FaInstagram size={20} />
            @foresthavenresort
          </a>
        </li>
        <li className="text-xl my-1">
          <a
            href="https://twitter.com/ForestHavenResort"
            className="text-gray-900 hover:text-gray-600 duration-500 flex items-center gap-2"
          >
            <FaXTwitter /> @ForestHavenResort
          </a>
        </li>
      </ul>
      <ul className="flex flex-col text-gray-900 text-lg sm:text-xl">
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
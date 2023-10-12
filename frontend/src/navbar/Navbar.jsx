const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Login", link: "/loginpage" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div
        className="md:flex items-center justify-between backdrop-blur backdrop-brightness-2xl py-4
      md:px-4 px-3"
      >
        <div
          className="text-2xl cursor-pointer flex items-center
         text-white hover:text-slate-300 duration-500 "
        >
          <a href={"/"}>Hippy Hotel</a>
        </div>
        <ul className="md:flex md:items-center">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-1 my-7">
              <a
                href={link.link}
                className="text-white hover:text-slate-300 duration-500"
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

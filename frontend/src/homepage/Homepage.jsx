import {
  HomeModernIcon,
  MagnifyingGlassIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

import { TextCardLeft, TextCardRight } from "../components/TextCard";

const Homepage = () => {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col place-items-center bg-light-accent min-h-screen">
      <div className="flex flex-col place-items-center min-h-1/2 mx-10">
        <h1 className="text-3xl md:text-4xl mt-80 text-gray-50 text-center">
          Your retreat in the heart of Tampere
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-y-32 gap-x-10 mt-5 place-items-center bg-light-bg dark:bg-dark-bg p-10 pt-20">
        <TextCardRight
          title={""}
          text={
            "Embracing a mindful approach to hospitality, we provide eco-conscious rooms, vibrant communal spaces, and a range of holistic services that resonate with the ethos of embracing nature, community, and personal well-being."
          }
          Img={HomeModernIcon}
        />
        <p className="col-span-3">Room carousel</p>
        <TextCardRight
          title={"Create experiences"}
          text={
            "Immerse yourself in a dual experience at our hostel, where thrilling nature adventures await alongside serene relaxation. Strike the perfect balance between exhilaration and serenity during your stay with us. "
          }
          link={"/activitypage"}
          linkText={"Book your activities"}
          Img={UserGroupIcon}
        />
        <TextCardLeft
          title={"Bohemian chic"}
          text={
            "Offer a tribute to the free spirited 1960s, with an emphasis on luxury and comfort. "
          }
          link={"/servicepage"}
          linkText={"Discover our services"}
          Img={StarIcon}
        />
        <TextCardRight
          title={"Sustainability"}
          text={
            "Our commitment to sustainability is unparalleled. Choosing to stay with us significantly diminishes your carbon footprint. "
          }
          link={"/sustainabilitypage"}
          linkText={"Learn more"}
          Img={MagnifyingGlassIcon}
        />
        <button
          onClick={() => navigate("/reservation")}
          className="col-span-3 bg-haven-red hover:bg-light-accent dark:hover:bg-dark-accent text-light-text dark:text-dark-text duration-500 text-5xl py-2 px-4 shadow-2xl"
        >
          Book Now!
        </button>
        <p className="col-span-3">Map</p>
      </div>
    </div>
  );
};

export default Homepage;

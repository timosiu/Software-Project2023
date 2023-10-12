import {
  HomeModernIcon,
  MagnifyingGlassIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { TextCardLeft, TextCardRight } from "../components/TextCard";

const Homepage = () => {
  return (
    <div className="flex flex-col place-items-center bg-gradient-to-br from-sky-500 to-pink-500 h-screen">
      <div className="flex flex-col place-items-center h-1/2 mx-10">
        <h1 className="text-8xl mt-32 text-gray-50 text-center">Hippy Hotel</h1>
        <h2 className="text-6xl mt-10 text-gray-50 text-center">
          Your Portal to Spontanious Travel
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-y-32 gap-x-10 mt-20 place-items-center bg-gray-50 dark:bg-neutral-800 rounded-t-3xl w-full p-10 pt-20">
        <TextCardLeft
          title={"Last Minute Accommodations"}
          text={
            "Find unique, affordable, and last-minute accommodations that resonate with your values, whether it's a cozy cabin in the woods or an artistic urban loft."
          }
          Img={HomeModernIcon}
        />
        <TextCardRight
          title={"Community Vibes"}
          text={
            "Connect with like-minded travelers and hosts who share your passion for authentic, off-the-beaten-path experiences."
          }
          Img={UserGroupIcon}
        />
        <TextCardLeft
          title={"Profiles & Reviews"}
          text={
            "Detailed user and company profiles with ratings and reviews, ensuring transparency and trust among our community members."
          }
          Img={StarIcon}
        />
        <TextCardRight
          title={"Search & Book"}
          text={
            "Our user-friendly search feature lets you discover hidden gems in non-touristy areas, even at the eleventh hour."
          }
          Img={MagnifyingGlassIcon}
        />
      </div>
    </div>
  );
};

export default Homepage;

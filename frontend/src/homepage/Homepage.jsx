import { TextCardLeft, TextCardRight } from "../components/TextCard";
import HeaderImage from "../assets/Header.jpg";
import ResortImage from "../assets/Resort.jpg";
import ActivitiesImage from "../assets/Activities.png";
import ServicesImage from "../assets/Services.jpg";
import SustainabilityImage from "../assets/Sustainability.jpg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col place-items-center bg-light-accent min-h-screen">
      <div
        className="flex flex-col place-items-center min-h-1/2 mx-10 bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${HeaderImage})` }}
      >
        <h1 className="text-3xl md:text-4xl mt-80 pb-2 text-gray-50 text-center bg-black bg-opacity-50 w-full">
          Your retreat in the heart of Tampere
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-y-32 gap-x-10 mt-0 place-items-center bg-light-bg dark:bg-dark-bg p-10 pt-20 w-full">
        <TextCardRight
          title={""}
          text={
            "Embracing a mindful approach to hospitality, we provide eco-conscious rooms, vibrant communal spaces, and a range of holistic services that resonate with the ethos of embracing nature, community, and personal well-being."
          }
          Img={ResortImage}
        />
        <p className="col-span-3">Room carousel</p>
        <TextCardRight
          title={"Create experiences"}
          text={
            "Immerse yourself in a dual experience at our hostel, where thrilling nature adventures await alongside serene relaxation. Strike the perfect balance between exhilaration and serenity during your stay with us. "
          }
          link={"/activitypage"}
          linkText={"Book your activities"}
          Img={ActivitiesImage}
        />
        <TextCardLeft
          title={"Bohemian chic"}
          text={
            "Offer a tribute to the free spirited 1960s, with an emphasis on luxury and comfort. "
          }
          link={"/servicepage"}
          linkText={"Discover our services"}
          Img={ServicesImage}
        />
        <TextCardRight
          title={"Sustainability"}
          text={
            "Our commitment to sustainability is unparalleled. Choosing to stay with us significantly diminishes your carbon footprint.\n "
          }
          link={"/valuepage"}
          linkText={"Learn more"}
          Img={SustainabilityImage}
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

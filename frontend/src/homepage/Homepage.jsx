import { TextCardLeft, TextCardRight } from "../components/TextCard";
import HeaderImage from "../assets/Header.jpg";
import ResortImage from "../assets/Resort.jpg";
import ActivitiesImage from "../assets/Activities.png";
import ServicesImage from "../assets/Services.jpg";
import SustainabilityImage from "../assets/Sustainability.jpg";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getRooms } from "./api/rooms";
import { useQuery } from "react-query";
import { LoadingSpinner } from "../components/LoadingSpinner";

const Homepage = () => {
  let navigate = useNavigate();
  const { isLoading, error, data } = useQuery("rooms", () => getRooms());
  const GOOGLEAPIKEY = import.meta.env.VITE_GOOGLE_API;

  let carouselContent = "";
  if (isLoading) {
    carouselContent = <LoadingSpinner />;
  } else if (error) {
    carouselContent = "Carousel error";
  } else {
    carouselContent = (
      <div className="grid grid-cols-1 justify-items-center w-full">
        <h1 className="text-3xl md:text-4xl pb-2 bg-light-bg text-center w-full">
          Our Rooms
        </h1>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          swipeable={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={50}
          emulateTouch={true}
        >
          {data.map((room) => (
            <div
              key={room.id}
              className="w-full cursor-pointer"
              onClick={() => {
                navigate(`/rooms/${room.id}`);
              }}
            >
              <img
                className="object-fill aspect-video"
                src={JSON.parse(room.roomImages)}
              />
              <p className="legend">
                {room.title}
                <br />
                {room.price} Eur/night
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

  let mapUrl =
    "https://www.google.com/maps/embed/v1/place?key=" +
    GOOGLEAPIKEY +
    "&q=Lapinkaari 12, 33180 Tampere";

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
            "Discover the epitome of bohemian luxury at our Forest Haven Resort, where vibrant tranquility, eco-conscious harmony, and indulgent comforts converge for an unforgettable retreat."
          }
          Img={ResortImage}
        />
      </div>
      {carouselContent}
      <div className="grid grid-cols-3 gap-y-32 gap-x-10 mt-0 place-items-center bg-light-bg dark:bg-dark-bg p-10 pt-20 w-full">
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
      </div>
      <div className="flex flex-col sm:flex-row col-span-2 items-center justify-center pt-10 pb-10 bg-light-bg w-full">
        <iframe
          className="container mx-auto px-20"
          width="600"
          height="450"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={mapUrl}
        ></iframe>

        <div className="flex flex-col place-items-center px-20 sm:w-2/3 w-full">
          <h3 className="text-4xl text-center text-light-text">Directions</h3>
          <p className="text-md sm:text-lg text-center w-full sm:w-3/4 text-ellipsis whitespace-pre-line text-light-text">
            We recommend using sustainable modes of transport, such as buses,
            trains and trams to visit us. <br /> For example, if you are coming
            from Helsinki, take the train to Tampere, then take Bus 2 until the
            Koukkuniemi stop, and then walk down the Lapinkaari road. <br />
            If you are coming from Tampere-Pirkkala Airport, take Bus 103 until
            the Sorin Aukio D stop, and change to Bus 2, and follow previous
            instructions.
            <br />
            We do also have parking available, in case you are visiting us with
            your car.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getRoom } from "./api/rooms";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { TextCardCenter } from "../components/TextCard";

const Roompage = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["room", id], () => getRoom(id));

  let roomInfo;

  if (isLoading) {
    roomInfo = <LoadingSpinner />;
  } else if (error) {
    roomInfo = <p>Sorry, something went wrong.</p>;
  } else {
    roomInfo = (
      <div className="flex flex-col place-items-center min-h-screen w-full">
        <div
          className="flex flex-col place-items-center min-h-2/3 mx-10 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${JSON.parse(data.roomImages)[0]})` }}
        >
          <h1 className="text-3xl md:text-4xl mt-96 pb-2 text-gray-50 text-center bg-black bg-opacity-50 w-full">
            {data.title}
          </h1>
        </div>
        <div className="flex flex-col w-full mt-10 justify-center">
          <TextCardCenter title={""} text={data.description} />
          <div className="flex flex-col sm:flex-row w-full bg-light-accent mt-10 justify-center p-5">
            <div className="flex flex-col w-full sm:w-1/2 items-center">
              <p className="py-5 w-3/4 text-center text-lg sm:text-left">
                Choose from options such as spa packages for ultimate
                relaxation, outdoor adventure excursions to explore the natural
                surroundings, and gourmet dining experiences that celebrate
                local flavors. Tailor your room preferences to align with your
                vision of a perfect escape, ensuring every detail of your stay
                is curated to perfection.
              </p>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 items-center justify-center">
              <div className="bg-haven-red max-w-3/4 shadow-xl">
                <p className="p-5 text-center">
                  Starting at
                  <span className="text-4xl font-semibold"> {data.price} </span>
                  Eur/night
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-2/3 mx-auto mt-10">
            <h1 className="mb-2 text-3xl font-semibold">Amenities</h1>
            <div className="flex flex-row bg-light-accent p-5 justify-center mb-20">
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {JSON.parse(data.amenities).map((amenity) => (
                  <li key={amenity} className="list-disc ml-4 text-lg">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="items-center">{roomInfo}</div>;
};

export default Roompage;

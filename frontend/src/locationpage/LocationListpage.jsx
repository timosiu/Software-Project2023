import { useQuery } from "react-query";

import { getLocations } from "./api/locations";
import LocationList from "./components/LocationList";
import { LoadingSpinner } from "../components/LoadingSpinner";

const LocationListpage = () => {
  const { isLoading, error, data } = useQuery("locations", getLocations);
  // testing data duplication
  // const duplicatedData = [...data, ...data, ...data, ...data, ...data];

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (error) {
    content = <p>Sorry, something went wrong.</p>;
  } else {
    content = <LocationList locations={data} />;
    // testing data using duplicated data
    // content = <LocationList locations={duplicatedData} />;
  }

  return (
    <div className="flex flex-col place-items-center bg-gradient-to-br from-sky-500 to-pink-500 min-h-screen">
      <div className="flex flex-col place-items-center min-h-1/4 mx-10">
        <h1 className="text-5xl sm:text-7xl min-text-5xl mt-32 text-gray-50 text-center">
          Available Accommodations
        </h1>
        <h2 className="text-3xl mt-10 text-gray-50 text-center">
          Find your perfect getaway!
        </h2>
      </div>
      {content}
    </div>
  );
};

export default LocationListpage;

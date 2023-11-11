import { useQuery } from "react-query";

import { getServices } from "./api/services";
import ServiceList from "./components/ServiceList";
import { LoadingSpinner } from "../components/LoadingSpinner";

const ServiceListpage = () => {
  const { isLoading, error, data } = useQuery("services", getServices);
  // testing data duplication
  // const duplicatedData = [...data, ...data, ...data, ...data, ...data];

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (error) {
    content = <p>Sorry, something went wrong.</p>;
  } else {
    content = <ServiceList services={data} />;
    // testing data using duplicated data
    // content = <ServiceList servies={duplicatedData} />;
  }

  return (
    <div className="flex flex-col place-items-center bg-gradient-to-br from-sky-500 to-pink-500 min-h-screen">
      <div className="flex flex-col place-items-center min-h-1/4 mx-10">
        <h1 className="text-6xl sm:text-7xl min-text-5xl mt-32 text-gray-50 text-center">
          Available Services
        </h1>
        <h2 className="text-3xl mt-10 text-gray-50 text-center">
          Find the service that best fits your needs!
        </h2>
      </div>
      {content}
    </div>
  );
};

export default ServiceListpage;

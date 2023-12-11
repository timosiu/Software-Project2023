import { useQuery } from "react-query";

import { getServices } from "./api/services";
import List from "../components/List";
import { LoadingSpinner } from "../components/LoadingSpinner";

// Service list page for displaying the services available at the hotel
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
    // pass services data to List component
    content = <List data={data} type={"service"} />;
    // testing data using duplicated data
    // content = <ServiceList servies={duplicatedData} />;
  }

  return (
    <div className="flex flex-col place-items-center">
      <div className="flex flex-col place-items-center min-h-1/4 mx-10">
        <h1 className="text-6xl sm:text-7xl min-text-5xl mt-32 text-light-text dark:text-dark-text text-center">
          Available Services
        </h1>
      </div>
      {content}
    </div>
  );
};

export default ServiceListpage;

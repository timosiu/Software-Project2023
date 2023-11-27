import { useQuery } from "react-query";

import { getActivities } from "./api/activities";
import List from "../components/List";
import { LoadingSpinner } from "../components/LoadingSpinner";

const ActivityListpage = () => {
  const { isLoading, error, data } = useQuery("activities", getActivities);

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (error) {
    content = <p>Sorry, something went wrong.</p>;
  } else {
    content = <List data={data} type={"activity"} />;
  }

  return (
    <div className="flex flex-col place-items-center">
      <div className="flex flex-col place-items-center min-h-1/4 mx-10">
        <h1 className="text-6xl sm:text-7xl min-text-5xl mt-32 text-light-text dark:text-dark-text text-center">
          Available Activities
        </h1>
      </div>
      {content}
    </div>
  );
};

export default ActivityListpage;

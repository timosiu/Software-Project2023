import LocationItem from "./LocationItem";

const LocationList = ({ locations }) => {
  if (!locations.length) {
    return <h3>No Locations Found</h3>;
  }

  return (
    <div className="grid grid-cols-3 mt-20 place-items-center bg-gray-50 dark:bg-neutral-800 rounded-t-3xl min-h-screen w-full p-10 divide-y divide-gray-900 dark:divide-gray-50 gap-0">
      {locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationList;

const LocationItem = ({ location }) => {
  const locationImages = JSON.parse(location.locationImages);
  const comforts = JSON.parse(location.comforts);
  const emojiMap = {
    bathtub: "🛁Bathtub",
    microwave: "🍿Microwave",
    refrigerator: "🧊Refrigerator",
    beach: "🏖️Beach",
  };

  return (
    <div className="flex flex-col md:flex-row col-span-3 w-screen mb-10 px-10">
      <img
        src={locationImages[0]}
        className="aspect-video max-w-md md:max-w-xl md:w-full h-60 md:h-96 object-cover rounded-lg mt-10"
      />
      <div className="flex flex-col w-full mt-6 md:mt-10 ml-0 md:ml-6">
        <h3 className="text-4xl bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-pink-500">
          {location.title}
        </h3>
        <p className="text-lg w-2/3 text-gray-900 dark:text-gray-50">
          <br />
          {location.description}
        </p>
        <p className="text-lg w-2/3 text-gray-900 dark:text-gray-50 truncate">
          <br />
          Comforts:
          <br />
          {Object.keys(comforts)
            .filter((item) => comforts[item])
            .map((item) => (
              <span key={item}>
                {emojiMap[item]}
                <br />
              </span>
            ))}
        </p>
        <p className="text-lg w-2/3 text-gray-900 dark:text-gray-50">
          <br />
          {location.city}, {location.country}
        </p>
        <p className="text-lg w-2/3 text-gray-900 dark:text-gray-50">
          {location.price}€ per night
        </p>
      </div>
    </div>
  );
};

export default LocationItem;

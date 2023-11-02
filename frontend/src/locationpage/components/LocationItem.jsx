const LocationItem = ({ location }) => {
  const locationImages = JSON.parse(location.locationImages);
  const comforts = JSON.parse(location.comforts);
  const emojiMap = {
    bathtub: "🛁Bathtub",
    microvawe: "🍿Microvawe",
    refrigerator: "🧊Refrigerator",
    beach: "🏖️Beach",
  };

  return (
    <div className="flex flex-col md:flex-row col-span-3 max-w-full mb-10">
      <img
        src={locationImages[0]}
        className="aspect-video w-full max-h-96 object-cover rounded-lg mt-10"
      />
      <div className="flex flex-col w-full mt-6 md:mt-10 ml-0 md:ml-6">
        <h3 className="text-4xl bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-pink-500">
          {location.title}
        </h3>
        <p className="text-lg w-2/3 text-gray-900 dark:text-gray-50">
          {location.description}
        </p>
        <p className="text-lg w-2/3 text-gray-900 dark:text-gray-50 truncate">
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

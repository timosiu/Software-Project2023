const ServiceItem = ({ service }) => {
  const serviceImages = JSON.parse(service.serviceImages);

  return (
    <div className="flex flex-col md:flex-row col-span-3 w-full mb-10 px-10">
      <img
        src={serviceImages[0]}
        className="aspect-video max-w-md md:max-w-l md:w-full h-60 md:h-96 object-cover rounded-lg mt-10"
      />
      <div className="flex flex-col w-full mt-6 md:mt-10 ml-0 md:ml-6">
        <h3 className="text-4xl bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-pink-500">
          {service.title}
        </h3>
        <p className="text-lg w-2/3 text-gray-900 dark:text-gray-50">
          <br />
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;

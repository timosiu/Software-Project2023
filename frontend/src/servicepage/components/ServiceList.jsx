import ServiceItem from "./ServiceItem";

const ServiceList = ({ services }) => {
  if (!services.length) {
    return <h3>No Services Found</h3>;
  }

  return (
    <div className="grid grid-cols-3 mt-20 place-items-center bg-gray-50 dark:bg-neutral-800 rounded-t-3xl min-h-screen w-full p-10 divide-y divide-gray-900 dark:divide-gray-50 gap-0">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;

import ServiceItem from "./ServiceItem";

const ServiceList = ({ services }) => {
  if (!services.length) {
    return <h3>No Services Found</h3>;
  }

  return (
    <div className="grid grid-cols-3 mt-5 place-items-center bg-light-bg dark:bg-dark-bg rounded-t-3xl min-h-screen w-full p-10 divide-y divide-light-text dark:divide-dark-text gap-0">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;

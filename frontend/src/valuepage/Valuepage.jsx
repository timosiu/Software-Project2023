import { TextCardCenter } from "../components/TextCard";

const Valuepage = () => {
  return (
    <div className="flex flex-col place-items-center bg-gradient-to-br bg-light-bg dark:bg-dark-bg">
      <h1 className="text-5xl sm:text-7xl mt-32 text-light-text dark:text-dark-text text-center">
        Our Values
      </h1>
      <div className="grid grid-cols-3 gap-y-32 gap-x-10 mt-5 place-items-center w-full p-10 pt-20">
        <TextCardCenter
          title={""}
          text={
            "Our hotel diligently implements recycling initiatives, ensuring that waste is minimized and materials are repurposed. Our goal is to minimize environmental impact and foresee responsible practices."
          }
        />
        <TextCardCenter
          title={""}
          text={
            "Guests can indulge in a variety of vegan and vegetarian dining options, reflecting our commitment to providing sustainable and eco-friendly culinary choices."
          }
        />
        <TextCardCenter
          title={""}
          text={
            "Preserving local biodiversity is integral to our ethos, and we actively engage in initiatives that protect and support the surrounding natural environment."
          }
        />
      </div>
    </div>
  );
};

export default Valuepage;

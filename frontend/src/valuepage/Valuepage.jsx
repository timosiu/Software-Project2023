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
            "Our primary goal is to ensure a comfortable stay for our guests whilst making sure that no waste is generated. We minimize environmental impact using such practices as; collecting rainwater and having low-flow toilets and faucets to help reduce the consumption of water. We use only biodegradable plastics in our establishment, to reduce the impact on nature. This combined with our innovative recycling program makes us truly one of a kind."
          }
        />
        <TextCardCenter
          title={""}
          text={
            "Being the epitome of luxury, we offer only the finest during your stay in our hotel. Our service, having been described as “impeccable” by previous customers, is anything a person could desire for their experience. We anticipate every need and are ready to cater to any request our customers could have. This, combined with our activities such as yoga and hiking, create an exclusive experience only possible with us."
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

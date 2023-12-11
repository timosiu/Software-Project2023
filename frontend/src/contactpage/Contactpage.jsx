import { TextCardRight } from "../components/TextCard";
import ContactImage from "../assets/Contact.jpg";

// Display contactpage, using textcard component
const Contactpage = () => {
  return (
    <div className="flex flex-col place-items-center bg-gradient-to-br bg-light-bg dark:bg-dark-bg">
      <h1 className="text-7xl mt-32 text-light-text dark:text-dark-text text-center">
        Contact Us
      </h1>
      <div className="grid grid-cols-3 gap-y-32 gap-x-10 mt-5 place-items-center w-full p-10 pt-20">
        <TextCardRight
          title={""}
          text={
            "We are available 24/7. You can contact us by email on \nquestions@foresthavenresort.com \nor by phone at \n+358 9 6128 2000."
          }
          Img={ContactImage}
        />
      </div>
    </div>
  );
};

export default Contactpage;

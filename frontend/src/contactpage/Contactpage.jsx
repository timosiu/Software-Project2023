import { TextCardCenter } from "../components/TextCard";

const Contactpage = () => {
  return (
    <div className="flex flex-col place-items-center bg-gradient-to-br from-sky-500 to-pink-500 min-h-screen">
      <div className="flex flex-col place-items-center min-h-1/4 mx-10">
        <h1 className="text-7xl mt-32 text-gray-50 text-center">Contact Us</h1>
        <h2 className="text-3xl mt-10 text-gray-50 text-center">
          Problems? Suggestions? General Feedback or Questions? We'd love to
          hear from you!
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-y-32 gap-x-10 mt-20 place-items-center bg-gray-50 dark:bg-neutral-800 rounded-t-3xl min-h-screen w-full p-10 pt-20">
        <TextCardCenter
          title={"Support"}
          text={
            "If you are experiencing any issues with our website or services, please reach out to us at:\n\nsupport@support.com"
          }
        />
        <TextCardCenter
          title={"Feedback"}
          text={
            "We are always looking for ways to improve our website. If you have any suggestions, please reach out to us at:\n\n feedback@feedback.com"
          }
        />
        <TextCardCenter
          title={"General Questions"}
          text={
            "Something else? We'd love to hear from you! Please reach out to us at:\n\n questions@questions.com"
          }
        />
      </div>
    </div>
  );
};

export default Contactpage;

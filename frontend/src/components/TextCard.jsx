const TextCardLeft = ({ title, text, Img }) => {
  return (
    <>
      <div className="flex flex-col place-items-center col-span-2">
        <h3 className="text-4xl text-center bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-pink-500">
          {title}
        </h3>
        <p className="text-lg text-center w-2/3 text-black dark:text-white">
          {text}
        </p>
      </div>
      <div>
        <Img className="w-full h-full text-pink-500" />
      </div>
    </>
  );
};

const TextCardRight = ({ title, text, Img }) => {
  return (
    <>
      <div>
        <Img className="w-full h-full text-sky-500" />
      </div>
      <div className="flex flex-col place-items-center col-span-2">
        <h3 className="text-4xl text-center bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-pink-500">
          {title}
        </h3>
        <p className="text-lg text-center w-2/3 text-black dark:text-white">
          {text}
        </p>
      </div>
    </>
  );
};

export { TextCardLeft, TextCardRight };

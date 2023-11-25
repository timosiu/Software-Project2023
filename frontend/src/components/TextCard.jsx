const TextCardLeft = ({ title, text, Img, link, linkText }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row col-span-3">
      <div className="flex flex-col place-items-center col-span-2">
        <h3 className="text-4xl text-center text-light-text dark:text-dark-text">
          {title}
        </h3>
        <p className="text-lg text-center w-2/3 text-light-text dark:text-dark-text">
          {text}
          {
            <a href={link} className="text-haven-red underline font-bold">
              {linkText}
            </a>
          }
        </p>
      </div>
      <div>
        <Img className="w-full h-full text-light-accent" />
      </div>
    </div>
  );
};

const TextCardRight = ({ title, text, Img, link, linkText }) => {
  return (
    <div className="flex flex-col sm:flex-row col-span-3">
      <div>
        <Img className="w-full h-full text-light-accent" />
      </div>
      <div className="flex flex-col place-items-center col-span-2">
        <h3 className="text-4xl text-center text-light-text dark:text-dark-text">
          {title}
        </h3>
        <p className="text-md sm:text-lg text-center w-4/4 sm:w-2/3 text-ellipsis whitespace-pre-line text-light-text dark:text-dark-text">
          {text}
          {
            <a
              href={link}
              className="text-haven-red underline font-bold hover:text-light-accent dark:hover:text-dark-accent duration-500"
            >
              {linkText}
            </a>
          }
        </p>
      </div>
    </div>
  );
};

const TextCardCenter = ({ title, text }) => {
  return (
    <>
      <div className="flex flex-col place-items-center col-span-3">
        <h3 className="text-4xl text-center text-light-text dark:text-dark-text">
          {title}
        </h3>
        <p className="text-lg text-center w-2/3 text-light-text dark:text-dark-text whitespace-pre-line">
          {text}
        </p>
      </div>
    </>
  );
};

export { TextCardLeft, TextCardRight, TextCardCenter };

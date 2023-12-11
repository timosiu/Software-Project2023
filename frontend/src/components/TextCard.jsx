// Textcard components aligning given items as prop
// Components for left, right and center
const TextCardLeft = ({ title, text, Img, link, linkText }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row col-span-3 items-center justify-center w-full">
      <div className="flex flex-col place-items-center sm:w-2/3 w-full">
        <h3 className="text-4xl text-center text-light-text dark:text-dark-text">
          {title}
        </h3>
        <p className="text-md sm:text-lg text-center w-full sm:w-3/4 text-ellipsis whitespace-pre-line text-light-text dark:text-dark-text">
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
      <div className="items-center">
        <img
          src={Img}
          alt=""
          className="h-full min-w-full sm:w-96 sm:h-56 object-cover"
        />
      </div>
    </div>
  );
};

const TextCardRight = ({ title, text, Img, link, linkText }) => {
  return (
    <div className="flex flex-col sm:flex-row col-span-3 items-center justify-center w-full">
      <div className="items-center">
        <img
          src={Img}
          alt=""
          className="h-full min-w-full sm:w-96 sm:h-56 object-cover"
        />
      </div>
      <div className="flex flex-col place-items-center sm:w-2/3 w-full">
        <h3 className="text-4xl text-center text-light-text dark:text-dark-text">
          {title}
        </h3>
        <p className="text-md sm:text-lg text-center w-full sm:w-3/4 text-ellipsis whitespace-pre-line text-light-text dark:text-dark-text">
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

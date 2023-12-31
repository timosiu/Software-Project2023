// Errorbox component showing error given as a prop
const ErrorBox = (props) => {
  return (
    <div
      className=" font-bold space-y-8 md:space-y-10 mt-6 px-2 py-2 bg-red-500 text-white rounded mb-0
    max-w-auto whitespace-normal overflow-hidden text-ellipsis"
    >
      {props.errorText}
    </div>
  );
};

export { ErrorBox };

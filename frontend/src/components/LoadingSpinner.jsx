// COmponent using a spinner animation with blurred background
const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export { LoadingSpinner };

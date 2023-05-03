const Button = ({ children, padding, inverse, widthFull }) => {
  return inverse ? (
    <div className={`isolate ${widthFull ? "sm:w-auto w-full" : "w-auto"}`}>
      <button
        className={`text-white hover:text-black w-full hover:bg-primaryYellow transition-all duration-300 border-[2px] border-solid border-primaryYellow rounded-xl hover:shadow-btn bg-transparent relative ${padding}  text-base`}
      >
        {children}
      </button>
    </div>
  ) : (
    <div className={` ${widthFull ? "sm:w-auto w-full" : "w-auto"}`}>
      <button
        className={`text-black hover:text-white w-full transition-all duration-300 rounded-xl hover:bg-transparent hover:shadow-none border-2 border-solid border-primaryYellow  shadow-btn bg-primaryYellow relative ${padding}  text-base`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

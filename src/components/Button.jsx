const Button = ({ children, padding, inverse, widthFull }) => {
  return inverse ? (
    <div className={`isolate ${widthFull ? "sm:w-auto w-full" : "w-auto"}`}>
      <button
        className={`text-white hover:text-black hover:bg-primaryYellow transition-all duration-300 border-[3px] border-solid border-primaryYellow rounded-xl hover:shadow-btn bg-transparent relative ${padding}  text-base`}
      >
        {children}
      </button>
    </div>
  ) : (
    <div className={` ${widthFull ? "sm:w-auto w-full" : "w-auto"}`}>
      <button
        className={`text-black border-2 rounded-xl border-solid border-[#11111A] shadow-btn bg-primaryYellow relative ${padding}  text-base`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

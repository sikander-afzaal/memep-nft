const Tokenomics = () => {
  return (
    <div
      id="tokenomics"
      className="wrapper mt-7 sm:mt-10 overflow-x-hidden pb-10"
    >
      <div className="contain flex-col justify-start items-center gap-8 sm:gap-16">
        <h3 className="text-white sm:text-4xl uppercase text-2xl font-normal">
          Tokenomics
        </h3>

        <img
          src="/pie.png"
          className="max-w-[1400px] w-full object-contain"
          alt=""
        />
      </div>
      <div className="relative w-full mt-12 sm:mt-20">
        <div className="w-full  bg-[#1a2129] flex justify-center items-center lg:rotate-[2deg]">
          <div className="contain lg:flex-row flex-col py-4 justify-between lg:h-[62px]  items-stretch gap-5">
            <p className="text-xs grid place-items-center xl:text-base font-normal text-white">
              7% Buy Tax
            </p>
            <div className="bg-primaryRed w-full h-[3px] lg:h-auto lg:w-[3px] "></div>
            <p className="text-xs grid place-items-center xl:text-base font-normal text-white">
              7% Sell Tax
            </p>
            <div className="bg-primaryRed w-full h-[3px] lg:h-auto lg:w-[3px] "></div>
            <p className="text-xs grid place-items-center xl:text-base font-normal text-white">
              Ticker: $MEMEP
            </p>
            <div className="bg-primaryRed w-full h-[3px] lg:h-auto lg:w-[3px] "></div>
            <p className="text-xs grid place-items-center xl:text-base font-normal text-white">
              Total Supply: 50,000,000,000
            </p>
          </div>
        </div>
        <div className="w-full bg-[#1a2129]  hidden lg:flex justify-center items-center rotate-[-2deg] absolute left-0 top-0 -z-10 opacity-30">
          <div className="contain py-4 justify-between h-[62px]  items-stretch gap-5">
            <p className="text-xs grid place-items-center xl:text-base font-normal text-white">
              7% Buy Tax
            </p>
            <div className="bg-primaryRed w-[3px] "></div>
            <p className="text-xs grid place-items-center xl:text-base font-normal text-white">
              7% Sell Tax
            </p>
            <div className="bg-primaryRed w-[3px] "></div>
            <p className="text-xs grid place-items-center xl:text-base font-normal text-white">
              Ticker: $MEMEP
            </p>
            <div className="bg-primaryRed w-[3px] "></div>
            <p className="text-xs grid place-items-center xl:text-base font-normal text-white">
              Total Supply: 50,000,000,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

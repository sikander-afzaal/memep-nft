import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="wrapper mt-[160px] relative">
      <div className="bg-primaryRed blur-[300px] w-full max-w-[363px] h-[363px] rounded-full absolute top-0 left-0 -z-10"></div>
      <div className="contain  flex-col text-center justify-center items-center gap-7 md:gap-16">
        <h2 className="max-w-[1368px] relative leading-[1.25] text-white text-lg sm:text-xl lg:text-3xl 2xl:text-[40px]  font-normal">
          Arbitrum's first
          <br />
          <span className="text-primaryRed">multi-currency</span> rewards token.
          <img
            src="/cloud.png"
            className="absolute top-0 -translate-y-full lg:-translate-y-1/2 left-0 max-h-[50px] 2xl:max-h-[70px] -z-10"
            alt=""
          />
        </h2>
        <div className="flex xl:flex-row flex-col justify-start items-center xl:items-stretch w-full gap-10 xl:gap-7">
          <img
            src="/hero1.png"
            className="w-full max-w-[500px] xl:max-w-[650px] 2xl:max-w-[750px] object-contain"
            alt=""
          />
          <div className="flex justify-between xl:w-auto w-full items-center xl:items-start flex-col gap-7 xl:gap-2">
            <div className="flex sm:w-auto w-full justify-start gap-4 items-center xl:items-start flex-col text-center xl:text-left">
              <h3 className="text-xl sm:text-2xl md:text-[28px] font-normal text-white">
                Build a diverse portfolio with{" "}
                <span className="text-primaryRed">$MEMEP</span>
              </h3>
              <Button widthFull padding={"px-10 py-4"}>
                Buy on zKSync
              </Button>
            </div>
            <img
              src="/hero2.png"
              className="w-full object-contain max-w-[450px] xl:max-w-[550px] 2xl:max-w-[650px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Button from "../../components/Button";

const Claim = () => {
  return (
    <div className="wrapper  sm:min-h-[900px] pt-[120px] sm:pt-[180px] pb-[180px] sm:pb-[200px]  overflow-y-hidden relative">
      <div className="bg-primaryRed blur-[300px] w-full max-w-[363px] h-[363px] rounded-full absolute top-0 left-0 -z-10"></div>

      <img
        src="/bricks.png"
        className="w-full absolute object-cover sm:object-fill h-[50px] left-0 bottom-0 -z-10"
        alt=""
      />
      <img
        src="/section-bg.png"
        className="w-full absolute sm:block hidden left-0 top-[0] -z-10"
        alt=""
      />
      <div className="contain text-center flex-col justify-start items-center gap-6 sm:gap-10 py-6 px-4 sm:p-8 lg:p-[60px] bg-dark border-2 border-solid border-primaryRed drop-shadow-cardShadow ">
        <h3 className="text-lg sm:text-3xl xl:text-4xl text-white font-normal uppercase">
          you get <span className="text-primaryRed">MEMEP</span> now!!!
        </h3>
        <p className="text-xs sm:text-base lg:text-lg xl:text-2xl font-normal leading-[1.5] text-text">
          A total of 84,000,000 $MEMEP tokens are now available to be claimed by
          those who have claimed the ARB airdrop. $MEMEP tokens that have not
          been claimed within
        </p>
        <button className="bg-dark text-primaryRed border-2  border-solid border-primaryRed drop-shadow-cardShadow flex justify-center items-center text-xs sm:text-base md:text-lg font-normal sm:px-8 w-full sm:w-auto py-6 ">
          <span className="pb-1">🔥</span> 31 days will be burned
        </button>
        <div className="w-full flex justify-start items-start flex-col gap-2">
          <div className="flex justify-between items-center w-full gap-4">
            <p className="text-text text-xs sm:text-lg font-normal">Claimed</p>
            <p className="text-text text-xs sm:text-lg font-normal">
              84,000,000
            </p>
          </div>
          <div className="relative w-full bg-[#BDBDBD] h-2 ">
            <div className="absolute top-0 left-0 h-full bg-primaryRed w-[60%]"></div>
          </div>
          <div className="flex gap-5 mt-8 justify-center items-center w-full md:flex-row flex-col">
            <Button padding={"py-4 sm:px-[60px]"} widthFull>
              Claim Now!
            </Button>
            <Button inverse padding={"py-4 sm:px-[60px]"} widthFull>
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;

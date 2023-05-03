const Roadmap = () => {
  return (
    <div className="wrapper mt-[60px] sm:mt-[180px] relative">
      <div className="bg-primaryRed blur-[400px] w-full max-w-[564px] h-[564px] rounded-full absolute bottom-0 right-0 -z-10"></div>
      <div className="contain 2xl:flex-row flex-col gap-12 lg:gap-20 2xl:gap-10 justify-between items-center">
        <div className="flex justify-start items-center flex-col gap-2">
          <h3 className="uppercase text-white sm:text-5xl text-3xl font-normal">
            Roadmap
          </h3>
          <h3 className="uppercase stroke text-dark sm:text-5xl text-3xl font-normal">
            Roadmap
          </h3>
          <h3 className="opacity-60 uppercase stroke text-dark sm:text-5xl text-3xl font-normal">
            Roadmap
          </h3>
          <h3 className="opacity-40 uppercase stroke text-dark sm:text-5xl text-3xl font-normal">
            Roadmap
          </h3>
          <h3 className="opacity-20 uppercase stroke text-dark sm:text-5xl text-3xl font-normal">
            Roadmap
          </h3>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-7 gap-x-12">
          <RoadmapBox
            title="ZKASH protocol"
            desc="First Lego built on top of ZKASH Protocol"
          />
          <p className="self-center lg:row-auto row-start-1 justify-self-center lg:justify-self-start text-[45px] md:text-[90px] text-white  opacity-20">
            May
          </p>
          <p className="self-center justify-self-center lg:justify-self-end text-[45px] md:text-[90px] text-white  opacity-20">
            June
          </p>
          <RoadmapBox
            title="MemeFi Development"
            desc="More rewards for holders independent of ZKASH trade volume"
          />
          <RoadmapBox
            title="The Banker NFT Collection"
            desc="The Banker NFTs Collection launch"
          />

          <p className="self-center lg:row-auto row-start-5 justify-self-center lg:justify-self-start text-[45px] md:text-[90px] text-white  opacity-20">
            July
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

const RoadmapBox = ({ title, desc }) => {
  return (
    <div
      className={`flex justify-start max-w-[430px]  w-full items-start flex-col border border-solid border-primaryRed relative bg-dark`}
    >
      <div className="border-solid border-primaryRed border w-full h-full absolute -bottom-3 -right-3 bg-dark -z-10"></div>
      <h4 className="text-black w-full text-center h-[51px] grid place-items-center bg-primaryRed text-sm sm:text-base ">
        {title}
      </h4>
      <p className="text-white font-fifaks px-5 sm:px-[30px] py-6 sm:py-[40px]">
        {desc}
      </p>
    </div>
  );
};

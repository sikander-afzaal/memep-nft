import AboutBox from "../../components/AboutBox";
import { useState } from "react";

const About = () => {
  const Data = {
    1: {
      title: "Diversify your portfolio",
      desc: "Our contract buys the best projects on Arbitrum. Trusting the wisdom of the crowd to decide which projects to chose through our governance system.",
      img: "/nft.png",
    },
    2: {
      title: "Stay up to date",
      desc: "Our goal is to become the ultimate community hub on the arbitrum chain. We're an active community and regularly hold AMAs with teams and project updates.",
      img: "/nft2.png",
    },
    3: {
      title: "Rewards",
      desc: "We all know this is why you're here! We dish out a constant stream of rewards by simply holding $MEMEP in your wallet. Passively build positions in a wide variety of projects.",
      img: "/nft3.png",
    },
    4: {
      title: "Your Choice!",
      desc: "Disagree with the coin we're farming? That's Ok we can't all be on the same page all of the time. Choose to take your rewards in $MEMEP instead by smashing the 'GO MEMEP' button.",
      img: "/nft4.png",
    },
    5: {
      title: "Exposure",
      desc: "We want to help other projects grow. We bring buy volume, market exposure, and additional wallets, something that can be potentially leveraged to benefit our community in the future.",
      img: "/nft5.png",
    },
    6: {
      title: "Expansion",
      desc: "MEMEP will start on zKSync with plans to go cross-chain and accumulate ERC-20 tokens from additional chains in the future. Details TBA however the OG $MEMEP token will remain the key to accessing future launches.",
      img: "/nft6.png",
    },
  };
  const [selectedNum, setSelectedNum] = useState(1);
  return (
    <div className="wrapper  xl:mt-10  py-[50px] md:py-[150px]">
      <div className="contain xl:flex-row flex-col  justify-between items-center gap-10">
        <div className="flex justify-start items-start flex-col gap-5 w-full">
          <h3 className="text-xl sm:text-2xl 2xl:text-3xl text-white font-normal 2xl:leading-[1.5]">
            Picking the next bluechip project is never an easy task, let{" "}
            <span className="text-primaryRed">MEMEP</span> diversify your
            portfolio for you
          </h3>
          <p className="text-xl font-normal font-fifaks text-text">
            With $MEMEP you will accumulate good projects on multiple chains
            throughout the bear market, just by holding! <br />
            You asked for ARBI season, we're here to ignite it. Be a part of the
            most exciting new community on the chain from the beginning!
          </p>
        </div>
        <div className="grid place-items-center  grid-cols-1 sm:grid-cols-[1fr__80px] w-full gap-8">
          <AboutBox {...Data[selectedNum]} />
          <div className="w-full bg-black flex-col flex justify-start items-center">
            {Array(6)
              .fill(false)
              .map((elem, idx) => {
                return (
                  <button
                    key={idx + 8}
                    onClick={() => setSelectedNum(idx + 1)}
                    className={`${
                      selectedNum === idx + 1
                        ? "bg-primaryRed text-white"
                        : "text-[#4C4C4C] bg-transparent"
                    } text-lg sm:text-2xl font-normal transition-all sm:h-[80px] duration-300 h-[60px] w-full sm:aspect-square`}
                  >
                    0{idx + 1}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

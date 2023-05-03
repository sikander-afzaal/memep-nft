import { useState } from "react";

import RedBoxLayout from "../../components/RedBoxLayout";
import Chart from "../../components/Chart";

const Overview = () => {
  const [time, setTime] = useState(5);
  const [inputState, setInputState] = useState(1035);

  return (
    <div className="wrapper pt-[120px] sm:pt-[180px] pb-[350px] overflow-y-hidden relative">
      <div className="bg-primaryRed blur-[300px] w-full max-w-[363px] h-[363px] rounded-full absolute top-0 left-0 -z-10"></div>
      <img
        src="/frog.png"
        className="absolute sm:max-w-none max-w-[250px] bottom-0 left-0 -z-10"
        alt=""
      />
      <img
        src="/section-bg.png"
        className="w-full absolute sm:block hidden left-0 top-[75%] -z-10"
        alt=""
      />
      <div className="contain flex-col justify-start items-center gap-10">
        <h2 className="uppercase text-3xl sm:text-[42px] text-white font-normal">
          Overview
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-12 sm:gap-8 relative">
          <RedBoxLayout>
            <h3 className="text-primaryRed px-5 text-xl sm:text-2xl">
              Reward Token
            </h3>
            <div className="w-full flex justify-between px-5 items-center gap-2">
              <div className="flex justify-start items-center gap-2">
                <img
                  src="/ico.png"
                  className="w-[36px] aspect-square object-contain"
                  alt=""
                />
                <p className="text-white">$MEMEP</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/graph.png"
                  className="object-contain w-[36px]"
                  alt=""
                />
                <img
                  src="/shuffle.png"
                  className="object-contain w-[36px]"
                  alt=""
                />
                <img
                  src="/metamask.png"
                  className="object-contain w-[36px]"
                  alt=""
                />
              </div>
            </div>
            <Chart />
            {/* <img
          src="/reward-graph.png"
          className="w-full h-[172px] object-cover mt-4"
          alt=""
        /> */}
          </RedBoxLayout>
          <RedBoxLayout>
            <h3 className="text-primaryRed px-5 text-xl sm:text-2xl">$MEMEP</h3>
            <p className="text-white sm:text-base text-xs px-5">
              $0.00057270 <span className="text-success">+20%</span>{" "}
              <span className="text-fail">-20%</span>
            </p>
            <div className="flex mt-auto mb-5 px-5 justify-start items-start flex-col w-full">
              <div className="flex justify-start items-center">
                <button
                  onClick={() => setTime(5)}
                  className={`text-white ${
                    time === 5 ? "bg-primaryRed" : "bg-transparent"
                  } px-3 transition-all duration-300 py-1`}
                >
                  5m
                </button>
                <button
                  onClick={() => setTime(1)}
                  className={`text-white ${
                    time === 1 ? "bg-primaryRed" : "bg-transparent"
                  } px-3 transition-all duration-300 py-1`}
                >
                  1h
                </button>
                <button
                  onClick={() => setTime(6)}
                  className={`text-white ${
                    time === 6 ? "bg-primaryRed" : "bg-transparent"
                  } px-3 transition-all duration-300 py-1`}
                >
                  6h
                </button>
                <button
                  onClick={() => setTime(24)}
                  className={`text-white ${
                    time === 24 ? "bg-primaryRed" : "bg-transparent"
                  } px-3 transition-all duration-300 py-1`}
                >
                  24h
                </button>
              </div>
              <div className="flex justify-start items-center w-full gap-6 p-3 bg-primaryRed">
                <div className="flex justify-start flex-col items-center">
                  <p className="text-white font-fifaks">Volume</p>
                  <p className="text-white text-sm font-fifaks">$212.6</p>
                </div>
                <div className="flex justify-start flex-col items-center">
                  <p className="text-white font-fifaks">Buys</p>
                  <p className="text-white text-sm font-fifaks">231</p>
                </div>
                <div className="flex justify-start flex-col items-center">
                  <p className="text-white font-fifaks">Sell</p>
                  <p className="text-white text-sm font-fifaks">214</p>
                </div>
              </div>
            </div>
          </RedBoxLayout>
          <RedBoxLayout>
            <h3 className="text-primaryRed px-5 text-xl sm:text-2xl">Info</h3>
            <div className="flex justify-start mb-3 sm:mt-3 items-center flex-col gap-4 px-5 w-full">
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-white font-fifaks">Reward Holders</p>
                <p className="text-white text-sm">2580</p>
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-white font-fifaks">Tx (buy/sell)</p>
                <p className="text-white text-sm">7%</p>
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-white font-fifaks">Circulating Supply</p>
                <p className="text-white text-sm">18B</p>
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-white font-fifaks">Total Supply</p>
                <p className="text-white text-sm">48.18B</p>
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-white font-fifaks">Market Cap</p>
                <p className="text-white text-sm">$10.3M</p>
              </div>
            </div>
          </RedBoxLayout>
          <RedBoxLayout>
            <h3 className="text-primaryRed px-5 text-xl sm:text-2xl">Stats</h3>
            <div className="flex justify-start mt-1 items-center flex-col gap-4 px-5 w-full">
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-white font-fifaks">Daily Volume</p>
                <p className="text-white text-sm">$120.6K</p>
              </div>
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-white font-fifaks">Hourly Volume</p>
                <p className="text-white text-sm">$120.6K</p>
              </div>
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-white font-fifaks">Daily Rewards Volume</p>
                <p className="text-white text-sm">$120.6K</p>
              </div>
              <div className="flex p-8 w-full bg-primaryRed justify-start items-start flex-col gap-5 mt-10 mb-5">
                <p className="text-lg text-white">Your $MEMEP Balance</p>
                <div className="flex justify-between  items-center w-full gap-1">
                  <p className="text-white font-fifaks">Daily Rewards</p>
                  <p className="text-white text-sm">$8.4K</p>
                </div>
              </div>
            </div>
          </RedBoxLayout>
          <RedBoxLayout>
            <h3 className="text-primaryRed px-5 text-xl sm:text-2xl">
              Rewards Queue
            </h3>
            <p className="text-lg font-fifaks px-5 text-white">
              Automatically distributes your rewards once first in line.
            </p>
            <p className="font-fifaks px-5 text-primaryYellow">
              Your wallet is not accuing rewards!
            </p>
            <div className="flex justify-start mt-1 mb-5 items-center flex-col gap-4 px-5 w-full">
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-white font-fifaks">Pending Rewards</p>
                <p className="text-white text-sm">$120.6K</p>
              </div>
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-white font-fifaks">Total Rewards</p>
                <p className="text-white text-sm">$120.6K</p>
              </div>
            </div>
          </RedBoxLayout>
          <RedBoxLayout>
            <h3 className="text-primaryRed flex justify-start items-center gap-2 px-5 text-xl sm:text-2xl">
              APY{" "}
              <p className="text-[#08080C] text-sm bg-[#16DB2E] px-[10px] py-1">
                Beta
              </p>
            </h3>
            <h3 className="text-primaryYellow  px-5 text-xl sm:text-2xl">
              12%
            </h3>
            <div className="flex justify-between  items-center w-full gap-1 px-5">
              <p className="text-white font-fifaks">My MEMEP</p>
              <p className="text-white text-sm">$124.2 | day</p>
            </div>
            <div className="px-5 w-full mt-5">
              <div className="flex justify-start items-start w-full pt-5  flex-col gap-4 border-t-2 border-solid border-primaryRed">
                <p className="text-white text-sm">Calculate Expected Returns</p>
                <div className="flex justify-between items-center p-4 bg-primaryRed bg-opacity-50 w-full">
                  <p className="text-white text-sm">
                    <input
                      className="bg-transparent outline-none w-full"
                      type="text"
                      value={inputState}
                      onChange={(e) => setInputState(e.target.value)}
                      placeholder={0}
                    />
                  </p>
                  <p className="text-white text-sm">MEMEP</p>
                </div>
              </div>
            </div>
            <p className="px-5 text-white text-lg font-fifaks mb-5 mt-10">
              * 7 day average APY Indication. Dependant on trade volume
            </p>
          </RedBoxLayout>
        </div>
      </div>
    </div>
  );
};

export default Overview;

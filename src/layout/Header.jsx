import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper fixed border-b border-solid border-[#4C4C4C] top-0 z-50 left-0">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="w-full h-full bg-black fixed top-0 left-0 opacity-60 cursor-pointer lg:hidden block z-[88]"
        ></div>
      )}
      <div className="flex w-full  justify-between relative items-center px-3 xl:px-[36px] py-4 ">
        <Link to={"/"}>
          <img
            src="/logo.png"
            className="h-[40px] xl:h-[72px] object-contain"
            alt=""
          />
        </Link>
        <div
          className={`flex z-[90] justify-start lg:justify-center lg:static fixed top-0 ${
            headerToggle ? "right-0" : "-right-full"
          } transition-all duration-700 flex-col lg:flex-row h-full w-full max-w-none sm:max-w-[450px] lg:w-auto lg:max-w-none lg:h-auto items-center overflow-y-auto lg:overflow-visible sm:items-start pt-[6rem] pb-[3rem] px-[3rem] lg:p-0 lg:bg-transparent bg-secondaryBlack  lg:items-stretch gap-10 lg:gap-6 2xl:gap-[72px]`}
        >
          <HashLink
            onClick={() => setHeaderToggle(false)}
            to="/"
            smooth
            className="text-white 2xl:text-base text-sm"
          >
            How to Buy
          </HashLink>

          <HashLink
            onClick={() => setHeaderToggle(false)}
            to="/"
            smooth
            className="text-white 2xl:text-base text-sm"
          >
            Litepaper
          </HashLink>

          <HashLink
            onClick={() => setHeaderToggle(false)}
            to="/#tokenomics"
            smooth
            className="text-white 2xl:text-base text-sm"
          >
            Tokenomics
          </HashLink>

          <HashLink
            onClick={() => setHeaderToggle(false)}
            to="/#faq"
            smooth
            className="text-white 2xl:text-base text-sm"
          >
            FAQ
          </HashLink>
          <div className="flex lg:hidden justify-start items-center gap-5">
            <div className="flex justify-start items-center gap-2">
              <a href="#" target="blank">
                <img
                  src="/telegram.png"
                  className="object-contain w-[36px]"
                  alt=""
                />
              </a>
              <a href="#" target="blank">
                <img
                  src="/twitter.png"
                  className="object-contain w-[36px]"
                  alt=""
                />
              </a>
            </div>
            <Link onClick={() => setHeaderToggle(false)} to={"/token"}>
              <Button padding={"px-6 py-2"}>Dapp</Button>
            </Link>
          </div>
        </div>
        <button
          className="relative cursor-pointer lg:hidden block z-[91] text-white"
          onClick={() => setHeaderToggle((prev) => !prev)}
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
        <div className="hidden lg:flex justify-start items-center gap-5">
          <div className="flex justify-start items-center gap-2">
            <a href="#" target="blank">
              <img
                src="/telegram.png"
                className="object-contain w-[36px]"
                alt=""
              />
            </a>
            <a href="#" target="blank">
              <img
                src="/twitter.png"
                className="object-contain w-[36px]"
                alt=""
              />
            </a>
          </div>
          <Link onClick={() => setHeaderToggle(false)} to={"/token"}>
            <Button padding={"px-6 py-2"}>Dapp</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

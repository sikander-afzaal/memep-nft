import FaqBtn from "../../components/FaqBtn";

const Faq = () => {
  const DATA = [
    {
      question: "What is MEMEP Finance ($MEMEP)?",
      answer:
        "MEMEP Finance is a multi-currency and multi-chain reward token. By buying and holding $MEMEP you are farming rewards and accumulating tokens supported by the MEMEP Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "What is the benefit of holding $MEMEP?",
      answer:
        "By simply holding $MEMEP, the Hamachi Finance protocol will distribute rewards by the platform directly to you.",
    },
    {
      question: "How do I get my rewards?",
      answer:
        "You'll be airdropped your rewards once you're first in queue. You can choose to enable Manual Claim or even 'GO MEMEP', this turns your rewards into $MEMEP.",
    },
    {
      question: "How are rewards generated?",
      answer:
        "Each buy and sell will be taxed 7%, which will only be used to buy tokens and redistribute to $MEMEP holders as rewards and provide liquidity to $MEMEP LP. (% tax subject to change).",
    },
    {
      question: "How do projects benefit from $MEMEP?",
      answer:
        "Projects benefit from $MEMEP by gaining exposure and increased unique holders who may not have ever heard of your project.",
    },
    {
      question: "Which tokens will be farmed?",
      answer:
        "To begin, $MEMEP will begin farming tokens on Arbitrum with plans to go cross-chain and multi-chain to farm additional tokens. With our revolutionary technology we are going to bring mass exposure and rewards to holders via Hamachi Finance.",
    },
    {
      question: "What chains do you plan on expanding?",
      answer:
        "We are exploring all the chains starting with L2s and side-chains. (Optimism, Avalanche, Binance Smart Chain, Pulsechain, and more)",
    },
    {
      question: "Tokenomics",
      answer: "Scroll up",
    },
  ];
  return (
    <div
      id="faq"
      className="wrapper md:bg-sectionBg bg-cover xl:bg-[100%__100%] mt-10 sm:mt-20 bg-center bg-no-repeat py-[50px] md:py-[150px]"
    >
      <div className="contain flex-col justify-center items-center gap-10">
        <h3 className="text-white sm:text-4xl text-2xl font-normal">FAQs</h3>
        <div className="flex w-full justify-start max-w-[1035px] items-start flex-col gap-5 mt-5">
          {DATA.map((elem, idx) => {
            return <FaqBtn {...elem} key={idx + elem.question} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;

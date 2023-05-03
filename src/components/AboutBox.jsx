const AboutBox = ({ img, title, desc }) => {
  return (
    <div className="flex justify-start bg-dark  flex-col items-center w-full border border-solid border-primaryRed drop-shadow-cardShadow max-w-[472px]">
      <img src={img} className="w-full object-cover aspect-square" alt="" />
      <div className="flex text-center justify-start items-center gap-2 flex-col px-3 py-5 sm:p-5 w-full">
        <h3 className="text-primaryRed text-base font-normal">{title}</h3>
        <p className="font-fifaks text-base text-white">{desc}</p>
      </div>
    </div>
  );
};

export default AboutBox;

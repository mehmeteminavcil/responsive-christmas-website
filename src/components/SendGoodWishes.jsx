import letter from "../assets/goodwishesletter.png";
const SendGoodWishes = () => {
  return (
    <div className="p-6  mt-20 bg-bkgContainerRed rounded-[20px] m-6 md:m-0 md:mt-20 md:flex md:items-center md:justify-center md:gap-14">
      <div className="pt-5 ">
        <h2 className="font-semibold text-center text-title text-bkg text-h2-m md:text-h2-d md:text-left">
          Send Good <br /> Wishes!
        </h2>
        <form className="pt-6">
          <input
            type="text"
            placeholder="Write your message"
            className="w-full h-[55px] rounded-full pl-6 placeholder:text-smaller-d text-text text-smaller-d outline-none  "
          />
          <button className="h-[55px] md:w-[70%] bg-title rounded-full w-full mt-3 text-bkg text-h4-m font-medium ">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={letter}
          alt="25th december Merry Christmas Letter"
          className="w-[320px]"
        />
      </div>
    </div>
  );
};

export default SendGoodWishes;

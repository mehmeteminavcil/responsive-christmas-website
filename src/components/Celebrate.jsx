import celebrate1 from "../assets/celebrate 1.png";
const Celebrate = () => {
  return (
    <div className="flex flex-col items-center mx-auto mt-20 md:gap-[5.5rem] md:flex-row">
      <div className="flex flex-col items-center md:max-w-[372px] md:items-start">
        <h2 className="font-semibold text-center text-title text-h2-m md:text-h2-d md:text-left">
          Celebrate With A <br />
          Lots Of Love
        </h2>
        <h4 className="mx-6 mt-6 text-center md:mx-0 md:text-left text-text text-h4-m md:text-h4-d">
          In this holidays, celebrate with much love and peace, offering many
          blessings to our loved ones, friends and neighbors, wishing them a
          good Christmas message.
        </h4>
        <button className="px-10 py-4 mt-10 text-white rounded-full text-h4-m md:text-h4-d bg-bkgred">
          Send Good Wishes
        </button>
      </div>
      <img src={celebrate1} className="md:w-[430px]" alt="" />
    </div>
  );
};

export default Celebrate;

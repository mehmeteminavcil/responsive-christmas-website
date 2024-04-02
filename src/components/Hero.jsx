import hero from "../assets/hero1.png";
import giving1 from "../assets/giving1.png";
import giving2 from "../assets/giving2.png";
import giving3 from "../assets/giving3.png";
const Hero = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center p-5 md:flex-row">
        <img src={hero} alt="christmas tree" />
        <div className="flex flex-col items-center text-center ">
          <h1 className="mb-4 font-semibold text-title text-h1-m md:text-h1-d">
            Merry Christmas and <br />
            Happy New Year!
          </h1>
          <p className="mb-10 text-text text-small-m md:text-small-d ">
            Christmas and a new year is about to <br /> begin, all good wishes
            and successes.
          </p>
          <button className="px-10 py-5 text-white rounded-full bg-bkgred text-h4-m md:text-h4-d">
            Get Started
          </button>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="mb-10 font-semibold text-center text-title text-h2-m md:text-h2-d">
          Start Givin This <br /> Christmas
        </h2>
        <div className="grid grid-cols-2 gap-10 p-6 md:grid-cols-3 ">
          <div className="flex flex-col items-center text-center ">
            <img src={giving1} alt="" />
            <h3 className="text-title text-h3-m md:text-h3-d">
              Surprise gifts
            </h3>
            <p className="text-text text-small-m md:text-small-d">
              They are the best <br /> gift there is.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={giving2} alt="" />
            <h3 className="text-title text-h3-m md:text-h3-d">Ornaments</h3>
            <p className="text-text text-small-m md:text-small-d">
              Give a moment to
              <br /> decorate
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={giving3} alt="" />
            <h3 className="text-title text-h3-m md:text-h3-d">Lots of love</h3>
            <p className="text-text text-small-m md:text-small-d">
              Give away feelings
              <br />
              that last forever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

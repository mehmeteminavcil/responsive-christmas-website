import logo from "../assets/logo.png";
import available1 from "../assets/aviable1.png";
import available2 from "../assets/aviable2.png";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 p-6 mt-20 md:flex md:flex-row md:justify-between md:p-0">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center ">
            <img src={logo} alt="logo" className="w-6 h-6" />
            <a
              href="#"
              className="font-medium text-title text-h4-m m:text-h4-d"
            >
              Christmas
            </a>
          </div>
          <p className="text-text text-smaller-d md:text-small-d ">
            This Christmas give a lot of love
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="font-semibold text-title text-h3-m md:text-h3-d">
            Our Services
          </h3>
          <a href="#" className="text-text text-h4-m md:text-h4-d">
            Pricing
          </a>
          <a href="#" className="text-text text-h4-m md:text-h4-d">
            Discounts
          </a>
          <a href="#" className="text-text text-h4-m md:text-h4-d">
            Shipping mode
          </a>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="font-semibold text-title text-h3-m md:text-h3-d">
            Support
          </h3>
          <a href="#" className="text-text text-h4-m md:text-h4-d">
            FAQS
          </a>
          <a href="#" className="text-text text-h4-m md:text-h4-d">
            Support center
          </a>
          <a href="#" className="text-text text-h4-m md:text-h4-d">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="font-semibold text-title text-h3-m md:text-h3-d">
            Available On
          </h3>
          <a href="#">
            <img src={available1} alt="" className="w-[100px]" />
          </a>
          <a href="#">
            <img src={available2} alt="" className="w-[100px]" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 mt-20 mb-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6 11C8.7105 11 11 8.7105 11 6C11 3.2895 8.7105 1 6 1C3.2895 1 1 3.2895 1 6C1 8.7105 3.2895 11 6 11ZM6 2C8.1685 2 10 3.8315 10 6C10 8.1685 8.1685 10 6 10C3.8315 10 2 8.1685 2 6C2 3.8315 3.8315 2 6 2Z"
            fill="#918889"
          />
          <path
            d="M6 8.5C6.4505 8.5 7.2905 8.416 7.8535 7.854L7.1465 7.146C6.925 7.3675 6.496 7.5 6 7.5C5.187 7.5 4.5 6.813 4.5 6C4.5 5.187 5.187 4.5 6 4.5C6.4965 4.5 6.9255 4.6325 7.1465 4.8535L7.8535 4.1465C7.291 3.584 6.4505 3.5 6 3.5C4.6215 3.5 3.5 4.6215 3.5 6C3.5 7.3785 4.6215 8.5 6 8.5Z"
            fill="#918889"
          />
        </svg>
        <p className=" text-textlight text-smaller-m">
          Bedimcode. All rigths reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

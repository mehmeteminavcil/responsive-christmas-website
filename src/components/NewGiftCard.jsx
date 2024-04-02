import { Heart } from "lucide-react";
const NewGiftCard = ({ className, price, img, name }) => {
  const classes = `relative flex flex-col items-center justify-center bg-bkgCard z-[-2] shadow-lg rounded-xl overflow-clip w-[230px] h-[278px] cursor-pointer ${
    className || ""
  }`;
  return (
    <div className={classes}>
      <div className="w-[250px] h-[250px] bg-bkgred  absolute rounded-full z-[-1] -top-20"></div>
      <img src={img} alt="" className="mb-12" />
      <h2 className="font-semibold text-title text-h2-m md:text-h2-d">
        ${price}
      </h2>
      <h4 className="font-medium text-text text-h4-m md:text-h4-d">{name}</h4>
      <div className="bg-bkgred flex items-center rounded-[4px] justify-center absolute bottom-0 right-0 w-[36px] h-[36px]">
        <Heart color="#fff" className="" />
      </div>
    </div>
  );
};

export default NewGiftCard;

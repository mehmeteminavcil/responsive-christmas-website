import { Heart } from "lucide-react";
const GiftCard = ({ name, price, img }) => {
  return (
    <div className="relative flex flex-col px-4 pt-6 pb-4 shadow-md md:pt-8 md:px-6 bg-bkgCard rounded-xl">
      <Heart
        color="#DC3845"
        className="absolute cursor-pointer top-4 right-4"
      />
      <img
        src={img}
        className="  w-[120px] h-[120px] md:w-[140px] md:h-[140px]"
        alt=""
      />
      <h3 className="font-semibold text-title text-h3-m md:text-h3-d">
        ${price}
      </h3>
      <span className="text-text text-small-m md:text-small-d">{name}</span>
    </div>
  );
};

export default GiftCard;

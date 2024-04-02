import NewGiftCard from "./NewGiftCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { newGifts } from "../constants/index";

const NewGifts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 412, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-20 text-center">
      <h2 className="font-semibold text-title text-h2-m md:text-h2-d">
        New Gifts
      </h2>

      <div>
        <Carousel
          centerMode={true}
          swipeable={false}
          draggable={false}
          infinite={true}
          showDots={true}
          arrows={false}
          autoPlay={true}
          responsive={responsive}
          autoPlaySpeed={1500}
          containerClass="carousel-container"
          itemClass="carousel-item"
          dotListClass="custom-dot-list-style"
        >
          {newGifts.map((gift) => (
            <NewGiftCard
              key={gift.id}
              name={gift.name}
              img={gift.img}
              price={gift.price}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default NewGifts;

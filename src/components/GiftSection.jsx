import GiftCard from "./GiftCard"
import gifts from "../constants/index.js"
const GiftSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="font-semibold text-title text-h2-m md:text-h2-d" >Share A Gift</h2>
        <div className="grid grid-cols-2 gap-6 mt-12 md:mt-16 md:gap-10 md:grid-cols-3">
          {gifts.map((card)=>(
            <GiftCard key={card.id} img={card.img} price={card.price} name={card.name}/>
          ))}
        </div>
    </div>
  )
}

export default GiftSection        
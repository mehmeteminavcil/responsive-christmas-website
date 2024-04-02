import Celebrate from "./components/Celebrate";
import Footer from "./components/Footer";
import GiftSection from "./components/GiftSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewGifts from "./components/NewGifts";
import SendGoodWishes from "./components/SendGoodWishes";

const App = () => {
  return (
    <div className="bg-bkg">
      <div className="container flex flex-col mx-auto">
        <Header />
        <Hero />
        <Celebrate />
        <GiftSection />
        <NewGifts />
        <SendGoodWishes />
        <Footer />
      </div>
    </div>
  );
};

export default App;

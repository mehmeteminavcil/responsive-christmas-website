import Celebrate from "./components/Celebrate"
import GiftSection from "./components/GiftSection"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <Header/>
      <Hero/>
      <Celebrate/>
      <GiftSection/>
    </div>
  )
}

export default App              
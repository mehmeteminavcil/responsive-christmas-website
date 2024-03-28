import dark from "../assets/dark.png"
// import light from "../assets/light.png"
const Navbar = () => {
  return (
    <nav className="hidden md:block">
    <ul className="flex items-center gap-12 font-medium text-title ">
        <li><a href="#">Home</a></li>
        <li><a href="#">Celebrate</a></li>
        <li><a href="#">Gifts</a></li>
        <li><a href="#">New</a></li>
        <img src={dark} className="w-5 h-5"/>
        {/* <img src={light} className="w-5 h-5"/> */}
    </ul> 

</nav>
  )
}

export default Navbar
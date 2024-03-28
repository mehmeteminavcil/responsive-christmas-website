import logo from "../assets/logo.png";
import dark from "../assets/dark.png";
import navIcon from "../assets/nav-icon.png";
import NavbarMobile from "./NavbarMobile";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {

  const [isNavOpen,setIsNavOpen] = useState(false)

  const toggleNav=()=>{
    setIsNavOpen( !isNavOpen )
  }

  return (
    <div>
      {!isNavOpen ? (<div className="flex items-center justify-between h-16 mx-4">
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <h4 className="ml-1 font-medium">Christmas</h4>
        </div>
        <Navbar/>
        <div className="flex items-center gap-4 cursor-pointer md:hidden">
          <img src={dark} className="w-5 h-5" />
          <img src={navIcon} alt="" className="w-4 h-4 cursor-pointer" onClick={toggleNav} />
        </div>
      </div>):(

        <NavbarMobile handleClick={toggleNav} />
      )}
    </div>
  );
};

export default Header;

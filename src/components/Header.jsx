import logo from "../assets/logo.png";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
import navBlack from "../assets/nav-icon-black.png";
import navWhite from "../assets/nav-icon-white.png";
import NavbarMobile from "./NavbarMobile";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme ? "light" : "dark";
  }, [theme]);

  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <div>
      {!isNavOpen ? (
        <div className="flex items-center justify-between h-16 mx-4">
          <div className="flex items-center cursor-pointer">
            <img src={logo} alt="logo" className="w-6 h-6" />
            <h4 className="ml-1 font-medium text-title">Christmas</h4>
          </div>
          <Navbar theme={theme} handleOnClick={toggleTheme} />
          <div className="flex items-center gap-4 cursor-pointer md:hidden">
            {theme ? (
              <>
                <img
                  src={dark}
                  onClick={toggleTheme}
                  className="w-5 h-5 cursor-pointer"
                />
                <img
                  src={navBlack}
                  alt=""
                  className="w-4 h-4 cursor-pointer"
                  onClick={toggleNav}
                />
              </>
            ) : (
              <>
                <img
                  src={light}
                  onClick={toggleTheme}
                  className="w-5 h-5 cursor-pointer"
                />
                <img
                  src={navWhite}
                  alt=""
                  className="w-5 h-5 cursor-pointer"
                  onClick={toggleNav}
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <NavbarMobile handleClick={toggleNav} />
      )}
    </div>
  );
};

export default Header;

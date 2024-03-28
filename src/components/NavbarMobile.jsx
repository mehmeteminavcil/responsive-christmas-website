import { X } from "lucide-react";
import nav1 from "../assets/nav1.png";
const NavbarMobile = ({handleClick}) => {
  return (
    <nav className="z-50 shadow-lg rounded-b-3xl bg-bkg">
      <div className="flex items-center justify-between">
        <img src={nav1} alt="christmas-decoration" className="" />
        <button className="mr-6" onClick={handleClick}>
          <X />
        </button>
      </div>
      <ul className="flex flex-col items-center gap-6 ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Celebrate</a>
        </li>
        <li>
          <a href="#">Gifts</a>
        </li>
        <li className="mb-16">
          <a href="#">New</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMobile;

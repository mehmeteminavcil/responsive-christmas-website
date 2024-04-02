import dark from "../assets/dark.png";
import light from "../assets/light.png";
const Navbar = ({ theme, handleOnClick }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-12 font-medium text-title ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Celebrate</a>
        </li>
        <li>
          <a href="#">Gifts</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        {theme ? (
          <img
            src={dark}
            onClick={handleOnClick}
            className="w-5 h-5 cursor-pointer"
          />
        ) : (
          <img
            src={light}
            onClick={handleOnClick}
            className="w-5 h-5 cursor-pointer"
          />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

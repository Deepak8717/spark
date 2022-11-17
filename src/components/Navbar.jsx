import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ props, handleToggle }) => {
  return (
    <div
      className={`nav flex justify-between p-8 lg:p-0 lg:justify-around h-24  ${
        props !== null && "nav-bg"
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-4xl w-32 ">Spark</h1>
        </Link>
        <ul className="p-2 hidden lg:block">
          <li className="inline-block py-2 mx-2 font-bold nav-item active">
            Products
          </li>
          <li className="inline-block py-2 mx-2  font-bold nav-item">About</li>
          <li className="inline-block py-2 mx-2  font-bold nav-item">Career</li>
          <li className="inline-block py-2 mx-2  font-bold nav-item">
            Contact
          </li>
        </ul>
      </div>
      <div className="items-center hidden lg:flex">
        {props === null ? (
          <div>
            <Link to="/login" className="mx-4 font-bold">
              Login
            </Link>
            <button className="w-32 mx-4 p-2 rounded-lg  bg-[#000851] font-bold text-white">
              Get started
            </button>
          </div>
        ) : (
          <div>{props}</div>
        )}
      </div>
      <button onClick={handleToggle} className="lg:hidden">
        <GiHamburgerMenu className="text-3xl " />
      </button>
    </div>
  );
};

export default Navbar;

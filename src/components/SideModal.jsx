import { Link } from "react-router-dom";

const SideModal = ({ handleToggle }) => {
  return (
    <div className="side-modal">
      <div className="absolute top-0 bottom-0 right-0 w-[200px] p-4 bg-white">
        <button className="relative left-[90%] text-2xl" onClick={handleToggle}>
          X
        </button>
        <Link
          to="/login"
          className="block text-white p-2 m-4 rounded-lg nav-bg"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block text-white p-2 m-4 bg-[#000851] rounded-lg"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
export default SideModal;

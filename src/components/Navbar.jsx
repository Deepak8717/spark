const Navbar = () => {
  return (
    <div className="flex justify-around h-24 text-white">
      <div className="flex items-center">
        <h1 className="text-4xl w-32 ">Spark</h1>
        <ul className="p-2">
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
      <div className="flex items-center">
        <button className="mx-4 font-bold">Login</button>
        <button className="w-32 mx-4 p-2 rounded-lg  bg-[#000851] font-bold text-white">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;

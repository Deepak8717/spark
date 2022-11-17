import Navbar from "./Navbar";

const FixedHeader = ({ fixedHeader, handleToggle }) => {
  return (
    <div
      className="fixed-header"
      style={fixedHeader ? {} : { transform: "translateY(-100px)" }}
    >
      <Navbar props={null} handleToggle={handleToggle} />
    </div>
  );
};
export default FixedHeader;

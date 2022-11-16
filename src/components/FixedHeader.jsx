import Navbar from "./Navbar";

const FixedHeader = ({ fixedHeader }) => {
  return (
    <div
      className="fixed-header"
      style={fixedHeader ? {} : { transform: "translateY(-100px)" }}
    >
      <Navbar props={null} />
    </div>
  );
};
export default FixedHeader;

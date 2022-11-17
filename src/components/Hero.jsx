import Navbar from "./Navbar";
import { ReactComponent as CorporateCard } from "../assets/corporate-card.svg";
import { useEffect, useState } from "react";
import FixedHeader from "./FixedHeader";
const Hero = ({ handleToggle }) => {
  const [fixedHeader, setFixedHeader] = useState(false);

  const showFixedHeader = () => {
    if (window.scrollY >= 66) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  useEffect(() => {
    showFixedHeader();
    window.addEventListener("scroll", showFixedHeader);
    return () => {
      window.removeEventListener("scroll", showFixedHeader);
    };
  });
  return (
    <div className="hero relative">
      <FixedHeader fixedHeader={fixedHeader} />
      <Navbar props={null} handleToggle={handleToggle} />
      <div className="hidden">
        <div className="absolute top-[40%] left-[20%] lg:left-[10%] xl:left-[12%] 2xl:left-[15%]   mx-auto  text-white ">
          <h1 className="text-4xl  xl:text-5xl font-bold uppercase">
            corporate expense
          </h1>
          <h2 className="text-3xl xl:text-4xl capitalize">
            management at your fingertips.
          </h2>
          <p className="my-4 text-lg 2xl:text-xl w-[500px]">
            Managing corporate expenses simplified down only to what you need.
          </p>
        </div>
        <CorporateCard className="hidden absolute top-[70%] 2xl:top-[30%] right-[10%] lg:right-[2%] w-[80%] lg:w-[50%]" />
      </div>
    </div>
  );
};
export default Hero;

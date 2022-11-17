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
      <FixedHeader fixedHeader={fixedHeader} handleToggle={handleToggle} />
      <Navbar props={null} handleToggle={handleToggle} />
      <div>
        <div className="w-[90%] md:w-[80%] mt-[50px] lg:absolute top-[40%] lg:left-[10%] xl:left-[12%] 2xl:left-[15%]  mx-auto text-center lg:text-left  text-white ">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold uppercase">
            corporate expense
          </h1>
          <h2 className="text-2xl md:text-3xl xl:text-4xl capitalize">
            management at your fingertips.
          </h2>
          <p className="my-4 text-md 2xl:text-xl lg:w-[500px]">
            Managing corporate expenses simplified down only to what you need.
          </p>
        </div>
        <CorporateCard className=" absolute top-[40%] md:top-[50%] lg:top-[20%] 2xl:top-[30%] right-[10%] lg:right-[2%] w-[80%] md:w-[60%] lg:w-[50%]" />
      </div>
    </div>
  );
};
export default Hero;

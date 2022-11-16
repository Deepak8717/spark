import Navbar from "./Navbar";
import { ReactComponent as CorporateCard } from "../assets/corporate-card.svg";
import { useEffect, useState } from "react";
import FixedHeader from "./FixedHeader";
const Hero = () => {
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
      <Navbar props={null} />
      <div>
        <div className="absolute top-[40%] left-[50px] lg:left-[100px] xl:left-[150px] 2xl:left-[280px]   mx-auto  text-white ">
          <h1 className="text-5xl font-bold uppercase">corporate expense </h1>
          <h2 className="text-4xl capitalize">
            management at your fingertips.
          </h2>
          <p className="my-4 text-xl w-[500px]">
            Managing corporate expenses simplified down only to what you need.
          </p>
        </div>
        <CorporateCard className="absolute top-[30%] right-[2%] " />
      </div>
    </div>
  );
};
export default Hero;

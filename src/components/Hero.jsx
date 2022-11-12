import Navbar from "./Navbar";
import { ReactComponent as CorporateCard } from "../assets/corporate-card.svg";
const Hero = () => {
  return (
    <div className="hero relative">
      <Navbar />
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

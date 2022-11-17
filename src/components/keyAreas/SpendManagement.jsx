import dribbleImg from "../../assets/dribble.webp";
const SpendManagement = () => {
  return (
    <div className="sm:w-full md:w-[70%] mx-auto p-8 text-center ">
      <h1 className="m-2 md:m-4 text-4xl md:text-5xl lg:text-6xl  font-bold capitalize">
        Spend Management
      </h1>
      <h2 className="m-2 md:m-4 text-2xl md:text-3xl lg:text-4xl capitalize">
        Control, flexibility & automation
      </h2>

      <img
        src={dribbleImg}
        alt="spend management"
        className="rounded-2xl  h-auto mx-auto"
      />
    </div>
  );
};
export default SpendManagement;

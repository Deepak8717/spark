import corporateCard from "../../assets/corporate-card.avif";
const CorporateCards = () => {
  return (
    <div className="sm:w-full md:w-[70%] mx-auto p-8 text-center ">
      <h1 className="m-2 md:m-4 text-4xl md:text-5xl lg:text-6xl  font-bold capitalize">
        Corporate cards
      </h1>
      <h2 className="m-2 md:m-4 text-2xl md:text-3xl lg:text-4xl capitalize">
        Virtual & Physical cards
      </h2>
      <div className="flex flex-col sm:flex-row ">
        <div className="w-full  lg:w-[600px] m-2  lg:m-4 p-8 text-left rounded-xl shadow-xl border capitalize">
          <h3 className="text-3xl font-semibold">Credit cards</h3>
          <p className="py-4 text-lg">
            Get limit-based cards with no collateral. Duration of interest-free
            credit on a daily, weekly or 38- day basis. Monthly limits set on
            cards reset at the end of the calendar month.
          </p>
        </div>
        <div className="w-full lg:w-[600px] m-2  lg:m-4 p-8 text-left rounded-xl shadow-xl border capitalize">
          <h3 className="text-3xl font-semibold">Prepaid cards​</h3>
          <p className="py-4 text-lg">
            We provide access to both top up & limit-based cards. Balance
            reduces by either utilising it or if need be, reducing it on each
            card based on usage patterns of your employees.
          </p>
        </div>
      </div>
      <img
        src={corporateCard}
        alt="corporate-card"
        className="rounded-2xl  h-auto mx-auto"
      />
    </div>
  );
};
export default CorporateCards;

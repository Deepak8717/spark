import sparkPay from "../../assets/sparkPay.avif";
const SparkPay = () => {
  return (
    <div className="sm:w-full md:w-[70%] mx-auto p-8 text-center ">
      <h1 className="m-2 md:m-4 text-4xl md:text-5xl lg:text-6xl  font-bold capitalize">
        Spark Pay
      </h1>
      <h2 className="m-2 md:m-4 text-2xl md:text-3xl lg:text-4xl capitalize">
        All-in-one solution for all payments
      </h2>
      <div className="flex flex-col sm:flex-row ">
        <div className="w-full  lg:w-[600px] m-2  lg:m-4 p-8 text-left rounded-xl shadow-xl border capitalize">
          <h3 className="text-3xl font-semibold">Three source accounts</h3>
          <p className="py-4 text-lg">
            Set up a free virtual account. Link your current account or use your
            credit line to make payments.
          </p>
        </div>
        <div className="w-full lg:w-[600px] m-2  lg:m-4 p-8 text-left rounded-xl shadow-xl border capitalize">
          <h3 className="text-3xl font-semibold">
            Multiple mediums of payment​
          </h3>
          <p className="py-4 text-lg">
            Pay via IMPS, NEFT, RTGS or UPI to any beneficiary. Maintain control
            through a simple approval flow.
          </p>
        </div>
      </div>
      <img
        src={sparkPay}
        alt="spark pay"
        className="rounded-2xl  h-auto mx-auto"
      />
    </div>
  );
};
export default SparkPay;

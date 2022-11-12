import sparkPay from "../../assets/sparkPay.avif";
const SparkPay = () => {
  return (
    <div className="w-[70%] mx-auto p-8 text-center ">
      <h1 className="m-4 text-6xl font-bold capitalize">Spark Pay</h1>
      <h2 className="m-4 text-4xl capitalize">
        All-in-one solution for all payments
      </h2>
      <div className="flex m-4">
        <div className="w-[600px]  m-4 p-8 text-left rounded-xl shadow-xl border capitalize">
          <h3 className="text-3xl font-semibold">Three source accounts</h3>
          <p className="py-4 text-lg">
            Set up a free virtual account. Link your current account or use your
            credit line to make payments.
          </p>
        </div>
        <div className="w-[600px]  m-4 p-8 text-left rounded-xl shadow-xl border capitalize">
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
        className="rounded-2xl w-[98%] h-[700px] mx-auto"
      />
    </div>
  );
};
export default SparkPay;

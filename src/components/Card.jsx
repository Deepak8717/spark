const Card = () => {
  return (
    <div className="max-w-[500px] md:w-96 h-60 p-4  rounded-xl bg-purple-600 text-white font-bold">
      <div className="flex m-2">
        <div className="flex relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[50%] bg-rose-500"></div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[50%] relative left-[-15px] bg-yellow-500"></div>
          <div>
            <h2 className="text-lg sm:text-xl">Angshuman Bhagabadi</h2>
            <p>Cashback</p>
          </div>
        </div>
      </div>
      <div className="text-xl m-2 my-4">
        <span className="m-2">****</span>
        <span className="m-2">****</span>
        <span className="m-2">7206</span>
      </div>
      <div className="mt-8 m-2 flex justify-between">
        <div>
          <h2>Balance</h2>
          <p>
            &#8377;<span className="mx-2">00</span>
          </p>
        </div>
        <button className="bg-blue-800 p-1 sm:p-2 rounded-lg w-32 sm:w-fit">
          Fetch card number & CVV
        </button>
      </div>
    </div>
  );
};
export default Card;

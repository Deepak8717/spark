import { Link } from "react-router-dom";
import Card from "./Card";

const CardDetails = () => {
  return (
    <div className="flex">
      <div>
        <div className=" text-2xl font-bold px-4 border-l-8  border-purple-600">
          Cashback Card
        </div>
        <div className="my-8">
          <div className="text-gray-500">Balance</div>
          <p className="text-4xl font-bold">
            &#8377;<span className="mx-2">00.00</span>
          </p>
        </div>
        <button className="bg-blue-600 rounded-lg my-4 p-4 text-white font-bold">
          Add Balance
        </button>
      </div>
      <Card className="m-4" />
      <Link to="" className="m-4 w-fit underline">
        Show all cards
      </Link>
    </div>
  );
};

export default CardDetails;

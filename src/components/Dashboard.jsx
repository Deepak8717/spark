import Navbar from "./Navbar";
import { useUserAuth } from "../context/UserAuthContext";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";

import CardDetails from "./CardDetails";

const Dashboard = () => {
  const { user } = useUserAuth();
  return (
    <div className="text-white">
      <Navbar props={user.email} />
      <div className="signUp-and-login-container dashboard-container text-black flex">
        <div className="p-4  shadow-lg border-2 rounded-xl">
          <button className="flex m-2">
            <BsFillCreditCard2BackFill className="text-2xl m-2" />
            <div className="m-2">Cards</div>
          </button>
          <button className="flex m-2">
            <GrTransaction className="text-2xl m-2" />
            <div className="m-2">Transaction</div>
          </button>
          <button className="flex m-2">
            <AiFillSetting className="text-2xl m-2" />
            <div className="m-2">Setting</div>
          </button>
        </div>
        <div className="h-96 bg-gray-100 p-8 flex items-center rounded-xl mx-4">
          <CardDetails />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

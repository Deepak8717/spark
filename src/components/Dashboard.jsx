import Navbar from "./Navbar";
import { useUserAuth } from "../context/UserAuthContext";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import CardDetails from "./CardDetails";
import { useState } from "react";
import Transaction from "./Transactions";
import Settings from "./Settings";

const Dashboard = () => {
  const { user } = useUserAuth();
  const [activeMenu, setActiveMenu] = useState("cards");
  const handleClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <div className="text-white">
      <Navbar props={user.email} />
      <div className="signUp-and-login-container dashboard-container text-black flex flex-col lg:flex-row">
        <div className="my-2 p-4 sm:m-4 w-full lg:w-[200px] shadow-lg sm:border-2 rounded-xl flex lg:block">
          <button
            className="flex flex-col items-center sm:flex-row sm:m-2"
            onClick={() => handleClick("cards")}
          >
            <BsFillCreditCard2BackFill className="text-2xl sm:m-2" />
            <div className="m-2">Cards</div>
          </button>
          <button
            className="flex flex-col items-center sm:flex-row sm:m-2"
            onClick={() => handleClick("transactions")}
          >
            <GrTransaction className="text-2xl sm:m-2" />
            <div className="m-2">Transaction</div>
          </button>
          <button
            className="flex flex-col items-center sm:flex-row sm:m-2"
            onClick={() => handleClick("settings")}
          >
            <AiFillSetting className="text-2xl sm:m-2" />
            <div className="m-2">Setting</div>
          </button>
        </div>
        <div className="w-[100%] min-h-[400px] sm:bg-gray-100 sm:p-4 md:p-8 flex justify-center items-center rounded-xl my-4 sm:mx-4 ">
          {activeMenu === "cards" ? (
            <CardDetails />
          ) : activeMenu === "transactions" ? (
            <Transaction />
          ) : activeMenu === "settings" ? (
            <Settings />
          ) : (
            <CardDetails />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

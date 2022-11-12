import { useState } from "react";
import CorporateCards from "./CorporateCards";
import SparkPay from "./SparkPay";
import SpendManagement from "./SpendManagement";

const KeyAreas = () => {
  const [activeKeyArea, setActiveKeyArea] = useState("corporateCard");

  return (
    <div className="pt-[150px]">
      <div className="mx-auto w-fit">
        <button
          className={`btn-key-areas ${
            activeKeyArea === "corporateCard" ? "active" : ""
          }`}
          onClick={() => setActiveKeyArea("corporateCard")}
        >
          Corporate Cards
        </button>
        <button
          className={`btn-key-areas ${
            activeKeyArea === "sparkPay" ? "active" : ""
          }`}
          onClick={() => setActiveKeyArea("sparkPay")}
        >
          Spark Pay
        </button>
        <button
          className={`btn-key-areas ${
            activeKeyArea === "spendManagement" ? "active" : ""
          }`}
          onClick={() => setActiveKeyArea("spendManagement")}
        >
          Spend Management
        </button>
      </div>
      {activeKeyArea === "corporateCard" ? (
        <CorporateCards />
      ) : activeKeyArea === "sparkPay" ? (
        <SparkPay />
      ) : activeKeyArea === "spendManagement" ? (
        <SpendManagement />
      ) : (
        <CorporateCards />
      )}
      {/* {activeKeyArea === "sparkPay" && <SparkPay />}
      {activeKeyArea === "spendManagement" && <SpendManagement />} */}
    </div>
  );
};

export default KeyAreas;

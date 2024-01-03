import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const IncomeCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl p-0">
      <div className="card-body  flex flex-col gap-5 ">
        <div className="flex border-b-2 items-center ">
          <TbPointFilled color="green" />
          <h2 className="card-title ">Your Income </h2>
        </div>
        <h1 className="font-semibold text-3xl">190,200,000$</h1>
        <span className="opacity-50">Your Income Account</span>
        <div className="flex items-end  ">
          <FaArrowAltCircleUp color="green" size={20} className="mr-2" />
          <span>32&#37; from last month</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;

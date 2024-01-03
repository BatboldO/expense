import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const ExpenseCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl ">
      <div className="card-body  flex flex-col gap-5 ">
        <div className="flex  border-b-2 items-center">
          <TbPointFilled color="blue" />
          <h2 className="card-title mb-2   ">Total expenses </h2>
        </div>
        <h1 className="font-semibold text-3xl">-1,200,000$</h1>
        <span className="opacity-50">Your Income Account</span>
        <div className="flex items-end  ">
          <FaArrowAltCircleDown color="green" size={20} className="mr-2" />
          <span>32&#37; from last month</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;

import React from "react";
import { IconThree, IconFour } from "../Logos";
import { thousandify } from "@/utils";

const Expense = ({ totalExpense }) => {
  return (
    <div className="flex-1 ml-7 p-4 bg-white rounded-2xl">
      <div className="flex items-center border-b-2 mb-3 pb-2 text-xs">
        <IconFour />
        <p className="ml-1 lg:text-base">Total Expenses</p>
      </div>
      <div>
        {totalExpense > 0 && (
          <span className="font-bold lg:text-4xl md:text-2xl text-xl text-red-400">
            -{thousandify(totalExpense)}₮
          </span>
        )}
        {!totalExpense && <div className="skeleton h-9 w-full"></div>}
        <p className="text-xs lg:text-base lg:my-4 md:my-3 my-2 text-slate-500">
          Your Expense Amount
        </p>
        <div className="flex items-center ">
          <IconThree />
          <span className="ml-1 lg:text-base text-xs">32% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Expense;

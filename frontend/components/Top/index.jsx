import React, { useEffect, useState } from "react";
import myAxios from "@/utils/axios";
import Income from "./Income";
import Expense from "./Expense";

const TopInfo = () => {
  const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });

  const getTotalIncExp = async () => {
    const {
      data: { totalIncome, totalExpense },
    } = await myAxios.get("/transactions/total");
    setTotals({ ...totals, totalIncome, totalExpense });
  };

  useEffect(() => {
    getTotalIncExp();
  }, []);

  return (
    <div className="flex w-full mt-6">
      <div className="flex-1 ">
        <img className="w-full h-full" src="/assets/cardPng/large.png" />
      </div>
      {/* IncomeCard */}
      <Income totalIncome={totals.totalIncome} />
      <Expense totalExpense={totals.totalExpense} />
    </div>
  );
};

export default TopInfo;

import React from "react";

import Card from "./Card";
import IncomeCard from "./IncomeCard";
import ExpenseCard from "./ExpenseCard";

const TopSection = () => {
  return (
    <div className="container grid grid-cols-3 gap-10 ">
      <Card />
      <IncomeCard />
      <ExpenseCard />
    </div>
  );
};

export default TopSection;

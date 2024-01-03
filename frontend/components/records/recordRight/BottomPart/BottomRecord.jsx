import React, { useContext } from "react";
import RecordCard from "./RecordCard";
import { TransactionContext } from "@/context/TransactionProvider";
import { CategoryContext } from "@/context/CategoryProvider";

const BottomRecord = () => {
  const { transactions } = useContext(TransactionContext);
  const { selectedCategories } = useContext(CategoryContext);

  const filteredTransactions =
    selectedCategories.length !== 0
      ? transactions.filter((tr) =>
          selectedCategories.includes(tr.category_name)
        )
      : transactions;
  return (
    <>
      {console.log("FC", filteredTransactions)}
      <div>
        <h1 className="my-4 font-semibold">Today</h1>
        {filteredTransactions?.map((transaction) => (
          <RecordCard transaction={transaction} />
        ))}
      </div>
      {/* <div>
        <h1 className="my-4 font-semibold">Yesterday</h1>
        <DataChangeFood />
      </div> */}
    </>
  );
};

export default BottomRecord;

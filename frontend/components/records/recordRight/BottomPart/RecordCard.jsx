import React from "react";
import { FoodIcon, HomeIcon } from "@/components/iconsvg";
import { getIcons, thousandify } from "@/utils";

const RecordCard = ({ transaction }) => {
  console.log(transaction);
  return (
    <div className="bg-white px-4 py-2 flex rounded-xl justify-between border-[1px] items-center my-2">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked="checked" className="checkbox ml-3" />
        {/* <HomeIcon /> */}
        <div
          className={`p-2 rounded-full`}
          style={{ backgroundColor: transaction.iconcolor }}
        >
          {getIcons(transaction.iconname, "white")}
        </div>
        <div>
          <h2 className="font-medium">{transaction.name}</h2>
          <h3 className="text-gray-500 text-xs">{transaction.created_at}</h3>
        </div>
      </div>
      <h4
        className={`${
          transaction.transaction_type === "INC"
            ? "text-lime-500"
            : "text-red-500"
        } font-semibold`}
      >
        {transaction.transaction_type === "EXP" && "-"}
        {thousandify(transaction.amount)}₮
      </h4>
    </div>
  );
};

export default RecordCard;

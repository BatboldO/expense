import { getIcons } from "@/utils";
import React from "react";

const RecordIcons = ({ category, changeTransactionData }) => {
  return (
    <div>
      {category.map((el) => (
        <button
          className="w-full font-normal mb-4 flex items-center gap-3 hover:opacity-50"
          onClick={(e) => {
            e.preventDefault();
            console.log(el.id);
            changeTransactionData("categoryId", el.id);
          }}
        >
          {getIcons(el.iconname, el.iconcolor)}
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default RecordIcons;

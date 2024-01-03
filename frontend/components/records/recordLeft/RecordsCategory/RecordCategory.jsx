import { Arrow, EyeSvg } from "@/components/iconsvg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React from "react";

const RecordCategory = ({ name, selectedCategories, onSelectCategory }) => {
  return (
    <div className="flex my-3 items-center justify-between">
      <div className="flex items-center gap-3">
        {
          <button
            onClick={() => {
              onSelectCategory(name);
            }}
          >
            {!selectedCategories.includes(name) && <FiEye />}
            {selectedCategories.includes(name) && <FiEyeOff />}
          </button>
        }

        <h2>{name}</h2>
      </div>
      <Arrow />
    </div>
  );
};

export default RecordCategory;

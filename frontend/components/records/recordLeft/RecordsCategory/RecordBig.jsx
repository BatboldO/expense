import React, { useContext, useState } from "react";
import RecordCategory from "./RecordCategory";
import { array } from "@/data";
import CategoryForm from "@/components/form/addCategoryForm";
import { CategoryContext } from "@/context/CategoryProvider";

const RecordBig = () => {
  const [open, setOpen] = useState(false);
  const { categories, selectedCategories, onSelectCategory } =
    useContext(CategoryContext);

  const closeForm = () => {
    console.log("Formee");
    setOpen(false);
  };

  return (
    <div>
      {console.log("SC", selectedCategories)}
      <div className="flex justify-between">
        <h1 className="font-semibold text-slate-700">Category</h1>
        <button className="btn btn-xs">Clear</button>
      </div>
      {categories?.map((category) => (
        <RecordCategory
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
          name={category.name}
          key={category.id}
        />
      ))}
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="btn btn-active bg-white border-white text-black w-full  rounded-full"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 8C15.5 8.16576 15.4342 8.32473 15.3169 8.44194C15.1997 8.55915 15.0408 8.625 14.875 8.625H8.625V14.875C8.625 15.0408 8.55915 15.1997 8.44194 15.3169C8.32473 15.4342 8.16576 15.5 8 15.5C7.83424 15.5 7.67527 15.4342 7.55806 15.3169C7.44085 15.1997 7.375 15.0408 7.375 14.875V8.625H1.125C0.95924 8.625 0.800269 8.55915 0.683058 8.44194C0.565848 8.32473 0.5 8.16576 0.5 8C0.5 7.83424 0.565848 7.67527 0.683058 7.55806C0.800269 7.44085 0.95924 7.375 1.125 7.375H7.375V1.125C7.375 0.95924 7.44085 0.800269 7.55806 0.683058C7.67527 0.565848 7.83424 0.5 8 0.5C8.16576 0.5 8.32473 0.565848 8.44194 0.683058C8.55915 0.800269 8.625 0.95924 8.625 1.125V7.375H14.875C15.0408 7.375 15.1997 7.44085 15.3169 7.55806C15.4342 7.67527 15.5 7.83424 15.5 8Z"
            fill="#0166FF"
          />
        </svg>
        Add Category
      </button>
      {open && <CategoryForm open={open} closeForm={closeForm} />}
    </div>
  );
};

export default RecordBig;

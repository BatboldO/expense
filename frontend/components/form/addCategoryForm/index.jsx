import React, { useState } from "react";

import AddIcon from "./AddIcon";

const CategoryForm = ({ open, closeForm }) => {
  const [selectCategory, setSelectCategory] = useState({
    name: "",
    iconColor: "",
    iconName: "",
  });
  return (
    <dialog className="modal" open={open}>
      <div className="modal-box flex flex-col max-w-lg h-80 shadow-2xl ">
        <div className="flex items-center justify-between border-b-2 pb-3">
          <h1 className="font-semibold text-xl">Add Category</h1>
          <button className="btn btn-circle " onClick={closeForm}>
            X
          </button>
        </div>
        <div className="flex items-center my-5">
          <AddIcon />
          <div className="w-full ">
            <input
              type="text"
              className="input input-bordered bg-base-200 w-full "
            />
          </div>
        </div>
        <form className="modal-backdrop">
          <button
            onClick={closeForm}
            className="btn bg-[#16A34A] modal-backdrop w-full font-normal my-4 text-white rounded-full"
          >
            Add
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default CategoryForm;

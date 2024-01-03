import React from "react";

const Card = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl relative">
      {/* <img src="/images/Large.png" alt="Shoes" /> */}
      <div className="card-body items-end justify-end absolute bottom-1 text-lg text-black ">
        <h3 className=" ">CASH</h3>
        <p>11,250,657.89</p>
      </div>
    </div>
  );
};

export default Card;

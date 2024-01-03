import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnurChart = ({ categoryData }) => {
  const data2 = {
    datasets: [
      {
        data: categoryData?.data,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: categoryData?.labels,
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="card bg-white flex justify-center items-center p-4 ">
      <div className="h-96 w-96 ">
        {categoryData && <Doughnut options={options2} data={data2} />}
        {!categoryData && (
          <div className="flex justify-center items-center gap-4 w-full h-full">
            <div className="skeleton h-24 w-24 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoughnurChart;

// const colors = categoryData?.data.map(
//   () =>
//     `#${Math.floor(Math.random() * 255)
//       .toString(16)
//       .padStart(2, "F")}${Math.floor(Math.random() * 255)
//       .toString(16)
//       .padStart(2, "F")}${Math.floor(Math.random() * 255)
//       .toString(16)
//       .padStart(2, "F")}`
// );

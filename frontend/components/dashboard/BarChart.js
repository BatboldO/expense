import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ barChartData }) => {
  const data1 = {
    labels: barChartData?.labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: barChartData?.incomeData,
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: barChartData?.expenseData,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      title: "CHART",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="card bg-white flex justify-center items-center p-4">
      {barChartData && <Bar data={data1} options={options1} />}
      {!barChartData && (
        <div className="flex justify-center items-end   gap-4 w-full ">
          <div className="skeleton h-14 w-4"></div>
          <div className="skeleton h-16 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-16 w-4"></div>
          <div className="skeleton h-14 w-4"></div>
        </div>
      )}
    </div>
  );
};

export default BarChart;

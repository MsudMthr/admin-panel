import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ labels, datasets }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Role Of Users",
        data: datasets,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full md:w-1/2">
      <h2 className="my-2 text-center font-bold capitalize">
        The roles of the users are taken from the data and shown in the doughnut
        chart
      </h2>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;

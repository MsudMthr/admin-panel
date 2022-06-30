import React from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const RadarChart = ({ labels, datasets }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: datasets,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 25, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(1, 159,125 , 0.5)",
          "rgba(23, 44,125 , 0.5)",
          "rgba(156, 1,125 , 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full md:w-1/2">
      <PolarArea data={data} />
    </div>
  );
};

export default RadarChart;

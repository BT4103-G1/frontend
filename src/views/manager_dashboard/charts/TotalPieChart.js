import React from "react";
import { CChart } from "@coreui/react-chartjs";
import { CWidgetDropdown } from "@coreui/react";
const pie = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [50, 100, 300],
      backgroundColor: ["#ff4e4e", "#ffc563", "#57ff57"],
      hoverBackgroundColor: ["#ff4e4e", "#ffc563", "#57ff57"],
    },
  ],
};

const options = {
  responsive: true,
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  title: {
    display: false,
  },
};

const PieChart = () => {
  return (
    <CChart
      type="pie"
      datasets={pie.datasets}
      labels={pie.labels}
      options={options}
    />
  );
};

export default PieChart;

import React from "react";
import { CChart } from "@coreui/react-chartjs";
import { CWidgetDropdown } from "@coreui/react";
const pie = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
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

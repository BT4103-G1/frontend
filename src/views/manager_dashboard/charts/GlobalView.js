import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";

const LocationAndAircraft = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: "bar",
        },
        colors: ["#427bbb"],
        title: {
          text: "",
        },
        xAxis: {
          categories: ["Nc", "Ps30", "T50", "NRc", "phi"],
        },
        yAxis: {
          min: 0,
          title: {
            text: "Average Factor Significance",
          },
        },
        legend: {
          display: false,
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          series: {
            stacking: null,
          },
        },
        series: [
          {
            name: "Overall Explanation",
            data: [12, 11, 10, 7, 5],
          },
        ],
      }}
    />
  );
};

export default LocationAndAircraft;

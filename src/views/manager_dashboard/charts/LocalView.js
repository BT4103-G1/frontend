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
        colors: ["#bf2121"],
        title: {
          text: "",
        },
        xAxis: {
          categories: ["Ps30", "T50", "NRf", "phi", "P30"],
        },
        yAxis: {
          min: 0,
          title: {
            text: "Factor Significance",
          },
        },
        legend: {
          display: false,
        },
        plotOptions: {
          series: {
            stacking: null,
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: "Individual Aircraft Interpretation",
            data: [20, 18, 14, 12, 11],
          },
        ],
      }}
    />
  );
};

export default LocationAndAircraft;

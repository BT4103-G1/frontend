import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";

const LocationAndAircraft = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: "column",
          height: "340",
        },
        colors: ["#bb47ff", "#03ffaf", "#ff4e4e", "rgb(61,90,187)"],
        credits: {
          enabled: false,
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: ["Paya Lebar", "Seletar", "Changi"],
        },
        yAxis: {
          min: 0,
          title: {
            text: "Plane count",
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              color:
                // theme
                (Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color) ||
                "gray",
            },
          },
        },
        legend: {
          floating: false,
          align: "right",
          x: -30,
          verticalAlign: "top",
          y: 25,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || "white",
          borderColor: "#CCC",
          borderWidth: 1,
          shadow: false,
        },
        tooltip: {
          headerFormat: "<b>{point.x}</b><br/>",
          pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
        },
        plotOptions: {
          column: {
            stacking: "normal",
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: "F15",
            data: [3, 4, 3],
          },
          {
            name: "F16",
            data: [5, 3, 4],
          },
          {
            name: "F18",
            data: [2, 2, 3],
          },
          {
            name: "F35",
            data: [3, 4, 4],
          },
        ],
      }}
    />
  );
};

export default LocationAndAircraft;

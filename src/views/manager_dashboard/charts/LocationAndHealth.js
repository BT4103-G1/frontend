import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";

const LocationAndHealth = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: "column",
          height: "340",
        },
        colors: ["#d94343", "#dea754", "#2c9250"],
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
            text: "Aircraft count",
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
              style: {
                textOutline: false
              }
            },
          },
        },
        series: [
          {
            name: "Critical",
            data: [5, 3, 4],
          },
          {
            name: "Warning",
            data: [2, 2, 3],
          },
          {
            name: "Normal",
            data: [3, 4, 4],
          },
        ],
      }}
    />
  );
};

export default LocationAndHealth;

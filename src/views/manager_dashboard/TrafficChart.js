import React from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";

const brandSuccess = getStyle("success") || "#2c9250";
const brandInfo = getStyle("warning") || "#f3993b";
const brandDanger = getStyle("danger") || "#f86c6b";

const TrafficChart = ({ mode }) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const defaultDatasets = (() => {
    let elements = 27;
    const data1 = [];
    const data2 = [];
    const data3 = [];
    const data4 = [];
    const data5 = [];
    const data6 = [];
    for (let i = 0; i <= elements; i++) {
      data1.push(random(50, 200));
      data2.push(random(80, 100));
      data3.push(random(80, 100));
      let val1 = Math.random() * 100;
      let val2 = getRandomArbitrary(0, 100 - val1);
      let val3 = 100 - val1 - val2;
      data4.push(val1);
      data5.push(val2);
      data6.push(val3);
    }
    return [
      {
        label: "Warning",
        backgroundColor: "transparent",
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: mode ? data4 : data1,
      },
      {
        label: "Normal",
        backgroundColor: "transparent",
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: mode ? data5 : data2,
      },
      {
        label: "Critical",
        backgroundColor: "transparent",
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 2,
        data: mode ? data6 : data3,
      },
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      // legend: {
      //   display: false,
      // },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: mode ? 100 : Math.ceil(250 / 5),
              max: mode ? 100 : 250,
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };
  })();

  // render
  return (
    <CChartLine
      style={{ height: "300px", marginTop: "40px" }}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={[
        "17/3",
        "18/3",
        "19/3",
        "20/3",
        "21/3",
        "22/3",
        "23/3",
        "24/3",
        "25/3",
        "26/3",
        "27/3",
        "28/3",
        "29/3",
        "30/3",
        "31/3",
        "1/4",
        "2/4",
        "3/4",
        "4/4",
        "5/4",
        "6/4",
        "7/4",
        "8/4",
        "9/4",
        "10/4",
        "11/4",
        "12/4",
        "13/4",
      ]}
    />
  );
};

export default TrafficChart;

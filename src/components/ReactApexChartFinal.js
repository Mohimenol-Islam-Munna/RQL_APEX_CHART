import React from "react";
import ApexChart from "react-apexcharts";

const ReactApexChartFinal = ({
  options,
  series,
  type,
  width,
  height,
  isMultiple,
}) => {
  let seriesDataFormatKeys = [];
  let seriesDataFormat;
  let labelOrAxis = "";

  if (isMultiple) {
    labelOrAxis = "xaxis";
    seriesDataFormat = series?.records.map((item) => {
      seriesDataFormatKeys = Object.keys(item.requestCount);
      let b = seriesDataFormatKeys.map((data) => item.requestCount[`${data}`]);
      return {
        name: item.agency,
        data: b,
      };
    });
  } else {
    seriesDataFormatKeys = Object.keys(series);
    let data = seriesDataFormatKeys.map((item) => series[`${item}`]);

    if (type === "donut") {
      labelOrAxis = "labels";

      seriesDataFormat = [...data];
    } else {
      labelOrAxis = "labels";

      seriesDataFormat = [
        {
          name: "active users",
          data: [...data],
        },
      ];
    }
  }

  return (
    <ApexChart
    className="p-0 m-0"
      options={{
        ...options,
        [labelOrAxis]:
          labelOrAxis === "labels"
            ? [...seriesDataFormatKeys]
            : {
                ...options.xaxis,
                categories: [...seriesDataFormatKeys],
              },
      }}
      series={seriesDataFormat}
      type={type}
      width={`${width}%`}
      height={`${height}%`}
    />
  );
};

export default ReactApexChartFinal;

import React from "react";
import ApexChart from "react-apexcharts";

const activeUsers = {
  DEV_TEST_USER: 4,
  NTMC_OSNIT: 1,
  hello_pakhi: 1,
};

const ReactApextChart = () => {
  return (
    <div className="row p-0 m-0">
      <div
        className="col-3 border border-danger"
        style={{ height: "200px", width: "150px" }}
      >
        {/* <h5>React Apex Chart</h5> */}
        <ApexChart
          options={{
            chart: {
              type: "bar",
              height: "100%",
              zoom: {
                enabled: false,
              },
              animations: {
                enabled: false,
              },
              background: "palegreen",
              foreColor: "blueviolet",
            },
            xaxis: {
              categories: [1991, 1992, 1993],
            },
          }}
          series={[
            {
              data: [
                activeUsers.DEV_TEST_USER,
                activeUsers.NTMC_OSNIT,
                activeUsers.hello_pakhi,
              ],
            },
          ]}
          type="bar"
          height="80%"
        />
      </div>
      <div className="col-3 border border-danger" style={{ height: "200px" }}>
        {/* <h5>React Apex Chart</h5> */}
        <ApexChart
          options={{
            chart: {
              type: "line",
              height: "100%",
              zoom: {
                enabled: false,
              },
              animations: {
                enabled: false,
              },
              background: "palegreen",
              foreColor: "blueviolet",
            },
          }}
          colors={["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"]}
          series={[
            {
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 551],
            },
          ]}
          type="line"
          height="100%"
        />
      </div>
      <div className="col-3 border border-danger" style={{ height: "200px" }}>
        {/* <h5>React Apex Chart</h5> */}
        <ApexChart
          options={{
            chart: {
              type: "line",
              height: "100%",
              zoom: {
                enabled: false,
              },
              animations: {
                enabled: false,
              },
              background: "palegreen",
              foreColor: "blueviolet",
            },
          }}
          colors={["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"]}
          series={[
            {
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 551],
            },
          ]}
          type="line"
          height="100%"
        />
      </div>
      <div className="col-3 border border-danger" style={{ height: "200px" }}>
        {/* <h5>React Apex Chart</h5> */}
        <ApexChart
          options={{
            chart: {
              type: "line",
              height: "100%",
              zoom: {
                enabled: false,
              },
              animations: {
                enabled: false,
              },
              background: "palegreen",
              foreColor: "blueviolet",
            },
          }}
          colors={["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"]}
          series={[
            {
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 551],
            },
          ]}
          type="line"
          height="100%"
        />
      </div>
    </div>
  );
};

export default ReactApextChart;

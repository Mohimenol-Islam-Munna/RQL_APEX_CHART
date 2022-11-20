import React, { useState } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import ReactApexChartFinal from "./ReactApexChartFinal";

const ReactGridLayout = WidthProvider(GridLayout);

const layout = [
  { i: "1", x: 0, y: 0, w: 6, h: 1 },
  { i: "2", x: 6, y: 0, w: 6, h: 1 },
  { i: "3", x: 0, y: 1, w: 6, h: 1 },
];

const AWDSCD = {
  numberOfRecords: 1,
  records: [
    {
      agency: "DEV_TEST_USER",
      requestCount: {
        BIRTHREGISTRATION: 2,
        ESAF: 9,
        LOCAL_ESAF: 19,
        NID: 5,
        PASSPORT: 16,
      },
    },
    {
      agency: "DEV_TEST_USER 2",
      requestCount: {
        BIRTHREGISTRATION: 3,
        ESAF: 10,
        LOCAL_ESAF: 20,
        NID: 6,
        PASSPORT: 17,
      },
    },
    {
      agency: "DEV_TEST_USER 3",
      requestCount: {
        BIRTHREGISTRATION: 4,
        ESAF: 11,
        LOCAL_ESAF: 21,
        NID: 7,
        PASSPORT: 18,
      },
    },
    {
      agency: "DEV_TEST_USER 4",
      requestCount: {
        BIRTHREGISTRATION: 5,
        ESAF: 12,
        LOCAL_ESAF: 22,
        NID: 8,
        PASSPORT: 19,
      },
    },
  ],
};

const RGLBasic = () => {
  const [showAWDSC, setShowAWDSC] = useState(true);
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      rowHeight={300}
      cols={12}
      autoSize={true}
      margin={[10, 10]}
      containerPadding={[0, 0]}
    >
      {showAWDSC && (
        <div key="1" className="border border-primary d-flex flex-column">
          {/* title  */}
          <div
            className="d-flex bg-success justify-content-between
             align-items-center p-1"
          >
            <h6 className="m-0 p-0 text-white">
              Agency Wise Data Source Count
            </h6>
            <span className="text-white" style={{ cursor: "pointer" }} onClick={() => setShowAWDSC(false)}>
              @
            </span>
          </div>

          {/* chart  */}
          <div className="h-100">
            <ReactApexChartFinal
              options={{
                chart: {
                  id: "3",
                  zoom: {
                    enabled: false,
                  },
                  stacked: true,
                },
                labels: [],
                dataLabels: {
                  enabled: false,
                },
                legend: {
                  show: false,
                },
                plotOptions: {
                  bar: {
                    borderRadius: ["20", "20", 0, 0],
                    horizontal: false,
                    dataLabels: {
                      total: {
                        enabled: true,
                        offsetX: 0,
                        style: {
                          fontSize: "10px",
                          fontWeight: 600,
                        },
                      },
                    },
                  },
                },
                xaxis: {
                  categories: [],
                  labels: {
                    show: true,
                    rotate: -45,
                    trim: true,
                    style: {
                      fontSize: "8px",
                      fontWeight: 600,
                    },
                    maxHeight: 50,
                  },
                  position: "bottom",
                },
              }}
              series={AWDSCD}
              type="bar"
              width={100}
              height={100}
              isMultiple={true}
            />
          </div>
        </div>
      )}
      <div key="2" className="border border-success">
        <h6>heading 2</h6>
      </div>
      <div key="3" className="border border-success">
        <h6>heading 3</h6>
      </div>
    </ReactGridLayout>
  );
};

export default RGLBasic;

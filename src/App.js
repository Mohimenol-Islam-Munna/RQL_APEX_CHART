// components
import RGLBasic from "./components/RGLBasic";
import "./App.css";
import ReactApextChart from "./components/ReactApextChart";
import ReactApexChartFinal from "./components/ReactApexChartFinal";
import UserStatistics from "./components/UserStatistics";
import NTMCApiDashboardReport from "./components/NTMCApiDashboardReport";

const activeUsers = {
  total: 6,
  DEV_TEST_USER: 4,
  NTMC_OSNIT: 1,
  hello_pakhi: 1,
};

const awdsc = {
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

function App() {
  const isFalse = false;

  return (
    <>
      <div className="container">
        <h2 className="text-center">React Grid Layout</h2>
        <UserStatistics activeUsers={activeUsers} />

        {isFalse && (
          <>
            <div className="border border-success">
              <h4>RGL Example</h4>
              <RGLBasic />
            </div>

            <div className="border border-success my-5">
              <h4>React Apex Chart Final Setup</h4>
              <ReactApexChartFinal
                options={{
                  chart: {
                    id: "1",
                    zoom: {
                      enabled: false,
                    },
                  },
                  labels: [],
                  dataLabels: {
                    enabled: false,
                  },
                  legend: {
                    show: false,
                  },
                }}
                series={activeUsers}
                type="donut"
                width={100}
                height={100}
                isMultiple={false}
              />

              <ReactApexChartFinal
                options={{
                  chart: {
                    id: "2",
                    zoom: {
                      enabled: false,
                    },
                  },
                  labels: [],
                  dataLabels: {
                    enabled: false,
                  },
                  legend: {
                    show: false,
                  },
                }}
                series={activeUsers}
                type="bar"
                width={100}
                height={100}
                isMultiple={false}
              />

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
                series={awdsc}
                type="bar"
                width={100}
                height={100}
                isMultiple={true}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;

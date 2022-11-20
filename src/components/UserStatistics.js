import React, { useState } from "react";
import NTMCApiDashboardReport from "./NTMCApiDashboardReport";
import ReactApexChartFinal from "./ReactApexChartFinal";
import ModalComponent from "./ModalComponent";
import moment from "moment";

const UserStatistics = ({ activeUsers }) => {
  const [show, setShow] = useState(false);
  const [md, setMd] = useState(0);
  const [dateForData, setDateForData] = useState({
    startDate: "",
    endDate: "",
  });

  const openModalHandler = (data) => {
    setMd(data);
    setShow(true);
  };
  const closeModalHandler = () => {
    setShow(false);
  };

  const dateHandler = (type, date) => {
    if (type === "START_DATE") {
      setDateForData((prevDate) => {
        return {
          ...prevDate,
          startDate: date,
        };
      });
    } else if (type === "END_DATE") {
      setDateForData((prevDate) => {
        return {
          ...prevDate,
          endDate: date,
        };
      });
    } else {
      console.log("moment ::", moment(new Date()).millisecond());
      console.log(
        "last 7 days ::",
        moment(new Date()).subtract(date, "d").millisecond()
      );
    }
  };

  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-3 border border-danger">q</div>
        <div className="col-9 border border-success">
          <div className="row  p-0 m-0 row-cols-3" style={{ height: "90px" }}>
            <div className="px-1 h-100">
              <div className="border border-success row p-0 m-0 h-100 toggle_button_container_total">
                <div className="col-8 d-flex flex-column justify-content-center ">
                  <h6 className="p-0 m-0">{activeUsers.total}</h6>
                  <div className="border border-danger toggle_parent">
                    <p className="p-0 m-0 title bg-primary">@ total user</p>
                    <p
                      className="p-0 m-0 bg-success expand"
                      onClick={() => openModalHandler(activeUsers)}
                    >
                      expand now
                    </p>
                  </div>
                </div>

                <div className="border border-primary col-4 p-0 h-100">
                  <ReactApexChartFinal
                    options={{
                      chart: {
                        id: "1",
                        zoom: {
                          enabled: false,
                        },
                        sparkline: {
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
                </div>
              </div>
            </div>

            <div className="px-1 h-100">
              <div className="border border-success row p-0 m-0 h-100 toggle_button_container_total">
                <div className="col-8 d-flex flex-column justify-content-center">
                  <h6 className="p-0 m-0">{activeUsers.total}</h6>
                  <div className="border border-danger toggle_parent ">
                    <p className="p-0 m-0 title bg-primary">@ active user</p>
                    <p
                      className="p-0 m-0 bg-success expand"
                      onClick={() => openModalHandler(activeUsers)}
                    >
                      expand now
                    </p>
                  </div>
                </div>
                <div className="border border-danger col-4 p-0 h-100">
                  <ReactApexChartFinal
                    options={{
                      chart: {
                        id: "2",
                        zoom: {
                          enabled: false,
                        },
                        sparkline: {
                          enabled: false,
                        },
                      },
                      dataLabels: {
                        enabled: false,
                      },
                      legend: {
                        show: false,
                      },
                      plotOptions: {
                        bar: {
                          borderRadius: 3,
                          horizontal: false,
                        },
                      },
                      xaxis: {
                        categories: [],
                        labels: {
                          show: false,
                        },
                      },
                      yaxis: {
                        categories: [],
                        labels: {
                          show: false,
                        },
                      },
                    }}
                    series={activeUsers}
                    type="bar"
                    width={100}
                    height={100}
                    isMultiple={false}
                  />
                </div>
              </div>
            </div>

            <div className="px-1 h-100">
              <div className="border border-success row p-0 m-0 h-100 toggle_button_container_total ">
                <div className="col-8 d-flex flex-column justify-content-center">
                  <h6 className="p-0 m-0">{activeUsers.total}</h6>
                  <div className="border border-danger toggle_parent ">
                    <p className="p-0 m-0 title bg-primary">@ inactive user</p>
                    <p
                      className="p-0 m-0 bg-success expand"
                      onClick={() => openModalHandler(activeUsers)}
                    >
                      expand now
                    </p>
                  </div>
                </div>
                <div className="border border-danger col-4 p-0 h-100">
                  <ReactApexChartFinal
                    options={{
                      chart: {
                        id: "2",
                        zoom: {
                          enabled: false,
                        },
                        sparkline: {
                          enabled: false,
                        },
                      },
                      dataLabels: {
                        enabled: false,
                      },
                      legend: {
                        show: false,
                      },
                      plotOptions: {
                        bar: {
                          borderRadius: 3,
                          horizontal: false,
                        },
                      },
                      xaxis: {
                        categories: [],
                        labels: {
                          show: false,
                        },
                      },
                      yaxis: {
                        categories: [],
                        labels: {
                          show: false,
                        },
                      },
                    }}
                    series={activeUsers}
                    type="bar"
                    width={100}
                    height={100}
                    isMultiple={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="m-0 p-0 mx-1 my-4">
            <div className="p-2 my-3 border border-success  d-flex justify-content-end align-items-center">
              <div className="ms-1">
                <button
                  className="btn btn-primary"
                  onClick={() => dateHandler("LAST", 7)}
                >
                  last 7 days
                </button>
              </div>
              <div className="ms-1">
                <button className="btn btn-primary">last 10 days</button>
              </div>
              <div className="ms-1">
                <button className="btn btn-primary">last 15 days</button>
              </div>
              <div className="ms-1">
                <button className="btn btn-primary">last 30 days</button>
              </div>
              <div className="ms-1">
                <input type="date" name="start" id="" />
              </div>
              <div className="ms-1">
                <input type="date" name="end" id="" />
              </div>
            </div>
            <NTMCApiDashboardReport />
          </div>
        </div>
      </div>
      <ModalComponent
        show={show}
        md={md}
        openModalHandler={openModalHandler}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
};

export default UserStatistics;

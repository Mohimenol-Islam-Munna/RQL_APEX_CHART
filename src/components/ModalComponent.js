import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ReactApexChartFinal from "./ReactApexChartFinal";

const ModalComponent = ({ show, md, closeModalHandler }) => {
  return (
    <div>
      <Modal show={show} onHide={closeModalHandler}>
        <h2>Modal Component</h2>
        <div>
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
            series={md}
            type="bar"
            width={100}
            height={100}
            isMultiple={false}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;

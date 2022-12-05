import React from "react";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="row row-cols-5 mt-5">
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
      <div className="border border-danger">qqq </div>
    </div>
  );
});

export default ComponentToPrint;

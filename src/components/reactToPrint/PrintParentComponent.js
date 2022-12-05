import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

function PrintParentComponent() {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="btn btn-primary">Print this out!</button>
        )}
        content={() => componentRef.current}
      />

      <ComponentToPrint ref={componentRef} />
    </div>
  );
}

export default PrintParentComponent;

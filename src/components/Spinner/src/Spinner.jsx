import React  from "react";
const namespace = "spinner";

const Spinner = ({ width, height }) => {
  return (
    <div className={namespace} style={{ width, height }}></div>
  );
};

export default Spinner;

import React from "react";
import loading from "./loader.gif";

const Spinner = () => {
  return (
    <div>
      <div className="text-centre">
        <img src={loading} alt="" />
      </div>
    </div>
  );
};

export default Spinner;

import React, { Fragment } from "react";
// css
import "./loading.css";

export const loading = () => {
  return (
    <Fragment>
      <div className="cnt">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default loading;

import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div class="lds-hourglass"></div>
    </div>
  );
}

export default LoadingSpinner;

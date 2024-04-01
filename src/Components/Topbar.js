import React from "react";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar-container">
      <h4 className="topbar-heading">Welcome to the National Institute of Fine Arts</h4>
      <p className="topbar-contact">
        <span>9555112200</span> , <span>9810230552</span>
        <span className="ad">admission@nifafinearts.com</span>
      </p>
    </div>
  );
}

export default Topbar;

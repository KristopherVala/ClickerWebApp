import React, { useState, useEffect } from "react";
import "./healthbar.css";
import { useSelector } from "react-redux";

const Healthbar = () => {
  let [healthWidth, setWidth] = useState(0);
  let health = useSelector((state) => state.health);

  useEffect(() => {
    if (health === 10) {
      setWidth("100%");
    } else {
      setWidth(health + "0" + "%");
    }
  });

  return (
    <div className="outerBar">
      <div className="bar" style={{ width: healthWidth }}></div>
    </div>
  );
};

export default Healthbar;

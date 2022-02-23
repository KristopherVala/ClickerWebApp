import React from "react";
import "./gamesection.css";
import Stats from "./Stats";
import Clickarea from "./Clickarea";
import Buyarea from "./Buyarea";
import Inventory from "./Inventory";

const gamesection = () => {
  return (
    <section className="gameArea">
      <div className="statsArea">
        <Stats className="statsArea" />
      </div>
      <div className="clickArea">
        <Clickarea />
      </div>
      <div className="buyArea">
        <Buyarea />
      </div>
      <div className="inventoryArea">
        <Inventory />
      </div>
    </section>
  );
};

export default gamesection;

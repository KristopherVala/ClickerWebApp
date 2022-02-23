import React from "react";
import "./Buyarea.css";

const Items = ({ id, title, damage, cost, boughtItem }) => {
  return (
    <div className="itemsGrid">
      <div className="titleSide">
        <h1 className="title">{title}</h1>
        <button className="buyButton" onClick={() => boughtItem(id)}>
          Buy
        </button>
      </div>
      <div className="itemSide">
        <h1> {damage} Damage</h1>
        <h2>{cost} Gold</h2>
      </div>
    </div>
  );
};

export default Items;

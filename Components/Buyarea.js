import React, { useEffect } from "react";
import "./Buyarea.css";
import Items from "./Items";

const arrayOfItems = [
  { id: 0, title: "Sword of Truth", damage: "5", cost: "5" },
  { id: 1, title: "Gloves of Beating", damage: "8", cost: "15" },
  { id: 2, title: "Staff of Poggers", damage: "15", cost: "50" },
  { id: 3, title: "Daggers of Recking", damage: "44", cost: "150" },
];

function boughtItem(id) {
  console.log(id);
}

const Buyarea = () => {
  return (
    //   TO DO
    //   REMOVE ALL OF THIS AND MAKE IT BASED OFF OF AN ARRAY
    <>
      <div className="storeSection">
        <h1 className="shopTitle"> El Shoppe</h1>

        {arrayOfItems.map((arrayOfItems) => (
          <Items
            key={arrayOfItems.id}
            id={arrayOfItems.id}
            title={arrayOfItems.title}
            damage={arrayOfItems.damage}
            cost={arrayOfItems.cost}
            boughtItem={boughtItem}
          />
        ))}

        {/*  */}
        <div className="arrowSection ">
          <div className="arrow"></div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Buyarea;

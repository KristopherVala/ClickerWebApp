import React, { useState, useEffect } from "react";
import "./clickarea.css";
import enemy1 from "../imgs/enemy1.gif";
import enemy2 from "../imgs/enemy2.gif";
import enemy3 from "../imgs/enemy3.gif";
import enemy4 from "../imgs/enemy4.gif";
import enemy5 from "../imgs/enemy5.gif";
import enemy6 from "../imgs/enemy6.gif";
import enemy7 from "../imgs/enemy7.gif";
import Healthbar from "./Healthbar";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementGold, reset } from "../actions";

const Clickarea = () => {
  let enemyArray = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7];
  let health = useSelector((state) => state.health);
  let gold = useSelector((state) => state.gold);

  let [enemy, setEnemy] = useState(enemyArray[enemyRandomizer()]);
  let damage = 1;
  const dispatch = useDispatch();

  function clickEnemy() {
    dispatch(decrement(damage));
    postDamage();
  }
  function postDamage() {
    if (health === 1) {
      dispatch(incrementGold(3));
      dispatch(reset());
      setEnemy(enemyArray[enemyRandomizer()]);
    } else return;
  }

  // Randomizer logic
  function enemyRandomizer() {
    let random = Math.floor(Math.random() * 7);
    return random;
  }

  return (
    <>
      <div className="imageArea" onClick={clickEnemy}>
        <img src={enemy} alt="Enemy" className="enemyPhoto" />
      </div>
      <Healthbar />
    </>
  );
};

export default Clickarea;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./stats.css";
import { reset } from "../actions";
import { HiOutlineClock } from "react-icons/hi";
const Stats = () => {
  const dispatch = useDispatch();
  let healthDisplay = useSelector((state) => state.health);
  let goldDisplay = useSelector((state) => state.gold);

  // Timer logic
  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      resetLevel();
    }
    function resetLevel() {
      setSeconds(30);
      dispatch(reset());
    }
  });

  return (
    <div className="statsGrid">
      <h1 className="healthSection"> HP: {healthDisplay}</h1>
      <h1 className="goldSection"> Gold: {goldDisplay}</h1>
      <h1 className="clockSection">
        <HiOutlineClock className="clock" /> {seconds}
      </h1>
    </div>
  );
};

export default Stats;

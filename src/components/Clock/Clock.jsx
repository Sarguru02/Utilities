import React, { useState, useEffect } from "react";
import "./Clock.css";

export default function Clock() {
  const currDate = new Date();
  const [sec, setSec] = useState(currDate.getSeconds() / 60);
  const [min, setMin] = useState(currDate.getMinutes() / 60);
  const [hr, setHr] = useState(currDate.getHours() / 12);

  useEffect(() => {
    let bla = setInterval(() => {
      const curr = new Date();
      setSec((s) => curr.getSeconds() / 60);
      setMin((m) => curr.getMinutes() / 60);
      setHr((h) => curr.getHours() / 12);
    }, 1000);

    return () => {
      clearInterval(bla);
    };
  });

  return (
    <div className="clock-container">
      <div className="clock">
        <div
          className="hand hour"
          style={{
            transform: `translateX(-50%) rotate(${hr * 360 + min * 30}deg)`,
          }}
        ></div>
        <div
          className="hand minute"
          style={{
            transform: `translateX(-50%) rotate(${sec + min * 360}deg)`,
          }}
        ></div>
        <div
          className="hand second"
          style={{ transform: `translateX(-50%) rotate(${sec * 360}deg)` }}
        ></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    </div>
  );
}

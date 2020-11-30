import React from "react";
import AnimatedTimer from "./AnimatedTimer";

const MainPage = () => (
  <div className="main-page">
    <AnimatedTimer timestamp={1800} size={500} x={-200} y={100} />
    <AnimatedTimer timestamp={4270} size={250} x={1150} y={-50} />
    <AnimatedTimer timestamp={1425} size={200} x={850} y={450} />
    <div className="content">
      <div className="titles">
        <div className="title">HI THERE!</div>
        <div className="subtitle">This is an app for managing timers</div>
      </div>
      <div className="options">
        <div className="option">
          <div>Go to an already existing timer:</div>
          <input
            type="text"
            className="text-input"
            placeholder="Enter a valid timer ID"
          />
        </div>
        <div className="option">
          <div>Or create a new one:</div>
          <button className="btn btn-create">CREATE</button>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;

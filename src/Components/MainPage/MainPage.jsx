import "./MainPage.scss";

import React from "react";
import AnimatedTimer from "../AnimatedTimer/AnimatedTimer";

const MainPage = () => (
  <div className="main-page">
    <AnimatedTimer timestamp={1800} size={500} x={-200} y={100} />
    <AnimatedTimer timestamp={4270} size={250} x={1150} y={-50} />
    <AnimatedTimer timestamp={1425} size={200} x={850} y={450} />
    <div className="main-page__content">
      <div className="main-page__titles-container">
        <div className="main-page__title">HI THERE!</div>
        <div className="main-page__subtitle">
          This is an app for managing timers
        </div>
      </div>
      <div className="main-page__options-container">
        <div className="main-page__option">
          <div className="main-page__option-text">
            Go to an already existing timer:
          </div>
          <input
            type="text"
            className="main-page__timer-id-input"
            placeholder="Enter a valid timer ID"
          />
        </div>
        <div className="main-page__option">
          <div className="main-page__option-text">Or create a new one:</div>
          <button className="main-page__create-button">CREATE</button>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;

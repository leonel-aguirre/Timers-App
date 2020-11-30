import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AnimatedTimer = ({ timestamp, size, x, y }) => {
  const [increment, setIncrement] = useState(0);

  let minutes = (360 / 60) * ((timestamp + increment) / 60);
  let seconds = (360 / 60) * ((timestamp + increment) % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setIncrement((increment) => increment + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="animated-timer"
      style={{
        width: size,
        height: size,
        borderWidth: `${0.1 * size}px`,
        left: x,
        top: y,
      }}
    >
      <div
        className="anim-timer-minute-hand"
        style={{ transform: `rotate(${minutes}deg)` }}
      ></div>
      <div
        className="anim-timer-second-hand"
        style={{ transform: `rotate(${seconds}deg)` }}
      ></div>
      <div
        className="anim-timer-center-circle"
        style={{ width: 0.15 * size, height: 0.15 * size }}
      ></div>
    </div>
  );
};

AnimatedTimer.propTypes = {
  timestamp: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  x: PropTypes.any.isRequired,
  y: PropTypes.any.isRequired,
};

export default AnimatedTimer;

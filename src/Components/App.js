import React from "react";
import AnimatedTimer from "./AnimatedTimer";

const App = () => (
  <div>
    <AnimatedTimer
      timestamp={30}
      size={300}
      x={`calc(50% - ${300 / 2}px)`}
      y={`calc(50% - ${300 / 2}px)`}
    />
    <AnimatedTimer timestamp={500} size={150} x={20} y={20} />
  </div>
);

export default App;

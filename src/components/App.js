import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  let [num, setNum] = useState(0);
  let [sum, calcSum] = useState(0);
  useEffect(() => {
    calcSum(sum + num);
  }, [num]);
  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></input>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;

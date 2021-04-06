import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import { ExposureNeg1, PlusOne } from "@material-ui/icons";

import "./App.css";

function App() {
  const [myLife, setMyLife] = useState(20);
  const [yourLife, setYourLife] = useState(20);

  return (
    <div className="App">
      <div className="main-section">
        <div className="header">
          <div className="h1">My Life</div>
        </div>
        <div className="section">
          <button className="button-down" onClick={() => setMyLife(myLife - 1)}>
            <Icon component={ExposureNeg1} />
          </button>
          <div className="score">{myLife}</div>
          <button className="button-up" onClick={() => setMyLife(myLife + 1)}>
            <Icon component={PlusOne} />
          </button>
        </div>
        <div className="header">
          <div className="h1">Your Life</div>
        </div>
        <div className="section">
          <button
            className="button-down"
            onClick={() => setYourLife(yourLife - 1)}
          >
            <Icon component={ExposureNeg1} />
          </button>
          <div className="score">{yourLife}</div>
          <button
            className="button-up"
            onClick={() => setYourLife(yourLife + 1)}
          >
            <Icon component={PlusOne} />
          </button>
        </div>
      </div>
      <div className="reset-card"></div>
    </div>
  );
}

export default App;

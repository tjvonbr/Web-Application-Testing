import React, { useState } from 'react';
import Dashboard from './Dashboard';

function Display() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);

  return (
    <div className="display-border">
      <div className="score-container">

        {/* Home Team */}
        <div className="home-wrapper">
          <div className="home-team">
            Chicago Cubs
          </div>
          <div className="home-score">
            100
          </div>
        </div>

        {/* Balls and Strikes */}
        <div className="count-wrapper">
          <div className="balls-title">
            <h6 className="batter-info">
              Balls
            </h6>
            <div className="count">
              { balls }
            </div>
          </div>
          <div className="strikes-title">
            <h6 className="batter-info">
              Strikes
            </h6>
            <div className="count">
              { strikes }
            </div>
          </div>
          <div className="outs-title">
            <h6 className="batter-info">
              Outs
            </h6>
            <div className="count">
              { outs }
            </div>
          </div>
        </div>

        {/* Away Team */}
        <div className="away-wrapper">
          <div className="away-team">
            Milwaukee Brewers
          </div>
          <div className="away-score">
            0
          </div>
        </div>  
      </div>
      <Dashboard />
    </div>
  )
}

export default Display;
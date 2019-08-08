import React from 'react';

const Dashboard = props => {
  return (
    <div className="dashboard-wrapper">
      {/* Ball Buttons */}
      <div className="ballsAndStrikes-wrapper">
        <h6 className="dash-title">Ball Controls</h6>
        <button className="btn">Add Ball</button>
        <button className="btn">Remove Ball</button>
      </div>

      {/* Strike Buttons */}
      <div className="ballsAndStrikes-wrapper">
        <h6 className="dash-title">Strike Controls</h6>
        <button className="btn">Add Srike</button>
        <button className="btn">Remove Strike</button>
      </div>  

      {/* Outs Buttons */}
      <div className="ballsAndStrikes-wrapper">
        <h6 className="dash-title">Out Controls</h6>
        <button className="btn">Add Out</button>
        <button className="btn">Remove Out</button>
      </div>  
    </div>
  )
}

export default Dashboard;
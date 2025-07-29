import React from "react";

function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {completed}</p>
    </div>
  );
}

export default Overview;

import React from "react";

function GoalCard({ goal, onDelete }) {
  const percent = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100);

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Saved: ${goal.savedAmount} / ${goal.targetAmount}</p>
      <p>Deadline: {goal.deadline}</p>
      <div style={{ background: "#eee", width: "100%", height: "20px" }}>
        <div style={{ width: `${percent}%`, height: "100%", background: "green" }}></div>
      </div>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalCard;

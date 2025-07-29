import React from "react";
import GoalCard from "./GoalCard";

function GoalList({ goals, onDeleteGoal }) {
  return (
    <div>
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} onDelete={onDeleteGoal} />
      ))}
    </div>
  );
}

export default GoalList;

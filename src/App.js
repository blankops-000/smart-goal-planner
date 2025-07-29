import React, { useEffect, useState } from "react";
import axios from "axios";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";

const API = "http://localhost:3001/goals";

function App() {
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    const res = await axios.get(API);
    setGoals(res.data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const addGoal = async (goal) => {
    const res = await axios.post(API, goal);
    setGoals([...goals, res.data]);
  };

  const deleteGoal = async (id) => {
    await axios.delete(`${API}/${id}`);
    setGoals(goals.filter((g) => g.id !== id));
  };

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <Overview goals={goals} />
      <GoalList goals={goals} onDeleteGoal={deleteGoal} />
    </div>
  );
}

export default App;

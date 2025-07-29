import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0]
    };
    onAddGoal(newGoal);
    setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" value={formData.name} onChange={handleChange} required />
      <input name="targetAmount" type="number" placeholder="Target Amount" value={formData.targetAmount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;

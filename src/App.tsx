// src/App.tsx
import { useState } from 'react';
import './App.css';

const HabitTracker = () => {
  interface Habit {
    name: string;
    recurrence: string;
    daysOfWeek: string[];
    category: string;
  }

  const [habits, setHabits] = useState<Habit[]>([]);
  const [habitName, setHabitName] = useState('');
  const [recurrence, setRecurrence] = useState('daily');
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>([]);
  const [category, setCategory] = useState('');

  const handleAddHabit = () => {
    const newHabit = {
      name: habitName,
      recurrence,
      daysOfWeek,
      category
    };
    setHabits([...habits, newHabit]);
    setHabitName('');
    setRecurrence('daily');
    setDaysOfWeek([]);
    setCategory('');
  };

  const handleDayChange = (day: string) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter((d) => d !== day));
    } else {
      setDaysOfWeek([...daysOfWeek, day]);
    }
  };

  return (
    <div className="container">
      <h2>Habit Tracker</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Habit Name"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          className="input"
        />
        <select
          value={recurrence}
          onChange={(e) => setRecurrence(e.target.value)}
          className="select"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <div className="checkbox-group">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <label key={day} className="checkbox-label">
              <input
                type="checkbox"
                checked={daysOfWeek.includes(day)}
                onChange={() => handleDayChange(day)}
              />
              {day}
            </label>
          ))}
        </div>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input"
        />
        <button onClick={handleAddHabit} className="button">Add Habit</button>
      </div>
      <ul className="habit-list">
        {habits.map((habit, index) => (
          <li key={index} className="habit-item">
            <strong>{habit.name}</strong> - {habit.recurrence} - {habit.category} - {habit.daysOfWeek.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <>
      <HabitTracker />
    </>
  );
}

import React from 'react';

interface Habit {
  id: number;
  name: string;
  completed: boolean;
}

const mockHabits: Habit[] = [
  { id: 1, name: 'Drink Water', completed: false },
  { id: 2, name: 'Exercise', completed: true },
  { id: 3, name: 'Read a Book', completed: false },
];

const HabitsList: React.FC = () => {
  return (
    <div>
      <h2>My Habits</h2>
      <ul>
        {mockHabits.map((habit) => (
          <li key={habit.id}>
            {habit.name} - {habit.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitsList;
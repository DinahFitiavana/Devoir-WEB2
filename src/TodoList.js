import React, { useState } from 'react';
import Task from './Task';


function TodoList() {
  const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const handleAddTask = () => {
      if (newTask.trim() === '') return;
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    };
  
    const handleDeleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    const handleUpdateTask = (id) => {
      const updatedText = prompt('Modifier la tâche :');
      if (updatedText !== null) {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, text: updatedText } : task
          )
        );
      }
    };
  
    return (
      <div>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Ajouter</button>
        </div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
          />
        ))}
      </div>
    );
  };
  
  
};
export default TodoList;
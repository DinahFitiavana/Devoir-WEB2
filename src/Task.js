import React from 'react';

const Task = ({ task, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleUpdate = () => {
    onUpdate(task.id);
  };

  return (
    <div>
      <span>{task.text}</span>
      <button onClick={handleUpdate}>Modifier</button>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

export default Task;

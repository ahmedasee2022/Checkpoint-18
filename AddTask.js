import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      addTask({ id: Date.now(), description, isDone: false });
      setDescription('');
    }
  };

  return (
    <div>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);



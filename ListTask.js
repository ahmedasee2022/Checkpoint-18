import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask } from './actions';

const ListTask = ({ tasks, toggleTask, editTask }) => {
  const handleToggleTask = (id) => {
    toggleTask(id);
  };

  const handleEditTask = (id, newDescription) => {
    editTask(id, newDescription);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.isDone} onChange={() => handleToggleTask(task.id)} />
          <input
            type="text"
            value={task.description}
            onChange={(e) => handleEditTask(task.id, e.target.value)}
            disabled={task.isDone}
          />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { toggleTask, editTask })(ListTask);

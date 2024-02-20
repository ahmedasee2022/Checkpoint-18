import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AddTask from './AddTask';
import ListTask from './ListTask';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;


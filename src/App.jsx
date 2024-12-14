import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Correct path
import App from './App';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AddTask />
    <TaskList/>
  </Provider>
);


export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const render = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

let counter = 0

function todo (state= {tasks: []}, action) {
  switch (action.type) {
    case 'ADD_TASK':
      let task = Object.assign({}, action.payload, {id: counter})
      counter = counter + 1
      return Object.assign({}, state, {tasks: [...state.tasks, task]});
    case 'COMPLETED':
      let newTasks = state.tasks;
      newTasks[action.payload].completed = true;
      return Object.assign({}, state, {tasks: newTasks});
    default:
      return state;
  }
}

const store = createStore(todo);

store.subscribe(render);
render();
registerServiceWorker();

store.dispatch({type: ''})
store.dispatch({type: 'ADD_TASK', payload:{text: "Task 1", completed: false}})
store.dispatch({type: 'ADD_TASK', payload:{text: "Task 2", completed: true}})
console.log(store.getState())

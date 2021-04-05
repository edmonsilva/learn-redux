import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";

// Store



// Actions

const increment = () => {
  return {
    type: "INCREMENT"
  };
}

const decrement = () => {
  return {
    type: "DECREMENT"
  };
}

// Reducer

const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  };
}

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

// Dispatch

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));

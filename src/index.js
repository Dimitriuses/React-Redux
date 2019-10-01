/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/

import {createStore} from "redux";

function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  let store = createStore(counter);

  document.getElementById("plus").addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" });
    });
  document.getElementById("minus").addEventListener("click", () => {
    store.dispatch({ type: "DECREMENT" });
    });
    const update= () => {
        document.getElementById("rez").innerHTML = store.getState();
    }

    store.subscribe(update)





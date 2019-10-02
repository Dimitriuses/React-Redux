import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
      
      ReactDOM.render(<App />, document.getElementById('root'));
      
      serviceWorker.unregister();
      
      
      
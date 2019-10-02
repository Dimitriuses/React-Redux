import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Couter from "./Components/Couter/couter"
import {createStore} from 'redux';
import reducer from "./Components/Reduser/Reduser"


const MyStore = createStore(reducer)
function App() {
  return (
    <Provider store={MyStore}>
        <Couter/>
    </Provider>
  );
}

export default App;

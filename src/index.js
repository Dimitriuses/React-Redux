import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
// Bootstrap 4.3.1 — the exact version this page hotlinked from a CDN in 2019,
// now a local dependency so the app makes no third-party requests.
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Counter from "./Components/Counter/Counter";
// Redux
import reducer from "./Reducer/Reducer";

const storeMy = createStore(reducer);

const App = () => {
    return (
        <Provider store={storeMy}>
          <Counter />
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

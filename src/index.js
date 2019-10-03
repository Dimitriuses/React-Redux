import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// Components
import Counter from "./Components/Counter/couter";
import { createStore} from "redux";
import reducer from "./Reduser/Reduser";
// Redux
const storeMy = createStore(reducer);

const App = () => {
    return (
        <Provider store={storeMy}>
          <Counter />
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
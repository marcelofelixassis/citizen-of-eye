import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducers from "./reducers/rootReducers"; 
import thunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
   </Provider>
    , document.getElementById('root')
);
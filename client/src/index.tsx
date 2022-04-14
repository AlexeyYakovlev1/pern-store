import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from "redux/allReducers";
import App from './App';
import "./styles/_global.sass";

declare global {
	interface Window {
	  	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
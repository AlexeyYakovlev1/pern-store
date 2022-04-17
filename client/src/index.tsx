import ReactDOM from 'react-dom/client';
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
const container:any = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {legacy_createStore as createStore} from "redux"
// import {store} from "./redux/store"
import { rootReducer } from './redux/rootReducer';
import {Provider} from "react-redux"

const store = createStore(
  rootReducer,
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);





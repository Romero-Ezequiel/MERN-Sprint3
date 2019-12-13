import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App.js";


render(
  <Provider store={store}>
    <App />
  </Provider>,
 
  document.getElementById("root")
);
*/
serviceWorker.unregister();

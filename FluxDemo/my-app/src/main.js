import React from 'react';
import { render } from 'react-dom';
import { configureStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from "./reducers/reducers";
import App from './App.js';

let store = configureStore(todoApp)
let rootElement = document.getElementById('app')

const wrapper = shallow(
    <App store={store} />
);

render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement
)
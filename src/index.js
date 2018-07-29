import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'tachyons';

import App from './containers/App';
import { searchBurgers, requestBurgers } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({ searchBurgers, requestBurgers });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //(rootReducer) - all reducers

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();

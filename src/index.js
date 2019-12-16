import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// What data structure should look like
// {
//     feeling: 0,
//     understanding: 0,
//     support: 0,
//     comments: '',
// }
function feedbackReducer(state = {}, action) {
    if (action.type === 'ADD_FEELING') {
        return {
            ...state,
            feeling: parseInt(action.payload),
        }
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {
            ...state,
            understanding: parseInt(action.payload),
        }
    } else if (action.type === 'ADD_SUPPORT') {
        return {
            ...state,
            support: parseInt(action.payload),
        }
    }
    return state;
}

const storeInstance = createStore(
    // pass our reducers
    combineReducers({
        feedbackReducer,
    }),
    // pass our middleware
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

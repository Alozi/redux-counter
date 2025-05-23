// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export default store;

// function counterReducer(state = initialState, action) {
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'toogle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);


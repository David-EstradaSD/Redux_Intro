// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// ------ This slice reducer is using Redux Toolkit -------

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { // reducers is a map of all 
    increment(state) { 
      state.counter++;
    },
    decrement(state) { // note we didn't need the action or payload in these other 3 methods, thus we never passed it as a parameter 
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // NOTE: payload is the default, built-in name for the property that holds any extra data we're dispatching
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// -------- This reducer is WITHOUT Redux Toolkit -------

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }


//   return state;
// };

// const store = createStore(counterReducer);


const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;

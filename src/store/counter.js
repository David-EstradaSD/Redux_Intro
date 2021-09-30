import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true, isAuthenticated: false };

// ------ This slice is using Redux Toolkit -------

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
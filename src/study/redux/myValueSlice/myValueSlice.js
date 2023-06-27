const { createSlice } = require('@reduxjs/toolkit');

export const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

// console.log(myValueSlice);
export const { increment, decrement } = myValueSlice.actions;

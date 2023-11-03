import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  tood:[]
};

const counterSlice = createSlice({
  name: "conuter",
  initialState,
  reducers: {
    incerementCount: (state, action) => {
      state.counter>=0&&( state.counter = state.counter + 1)
    },
    decrementCount: (state, action) => {
     state.counter>0&&( state.counter = state.counter - 1)
    },
  },
});
export const { incerementCount, decrementCount } = counterSlice.actions;
export default counterSlice.reducer;

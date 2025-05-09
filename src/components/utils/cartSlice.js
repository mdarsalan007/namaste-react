import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearcart: (state, action) => {
      // state.items.length = 0; below and this will do same thing
      return [];
    },
  },
});
export const { addItem, removeItem, clearcart } = cartSlice.actions;

export default cartSlice.reducer;

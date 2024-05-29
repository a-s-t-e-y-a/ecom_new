import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setProductData, clearProductData } = cartSlice.actions;
export default cartSlice.reducer;

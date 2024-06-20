import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  label: "",
};

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    filterProduct: (state, action) => {
      state.category = action.payload.category;
      state.label = action.payload.label;
    },
  },
});

export default filterProductSlice.reducer;
export const { filterProduct } = filterProductSlice.actions;

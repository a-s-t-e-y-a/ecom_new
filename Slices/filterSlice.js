import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterText: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filterText = action.payload
    },
  },
});

export default filterSlice.reducer;
export const { addFilter } = filterSlice.actions;

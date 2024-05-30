import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterText: {
    power_type:"",
    lens_feature: ""
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filterText.power_type = action.payload.power_type
      state.filterText.lens_feature = action.payload.lens_feature
    },
  },
});

export default filterSlice.reducer;
export const { addFilter } = filterSlice.actions;

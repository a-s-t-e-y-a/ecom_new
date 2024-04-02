import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const powerTypeSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addPowerType: (state, action) => {},
    deletePowerType: (state, action) => {},
  },
});

export default powerTypeSlice.reducer;
export const { addPowerType, deletePowerType } = powerTypeSlice.actions;

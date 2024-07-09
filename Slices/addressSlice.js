import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adress: {
    
  },
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.adress = {...action.payload };
    },
  },
});

export default addressSlice.reducer;
export const { addAddress } = addressSlice.actions;

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
      console.log(action.payload, 'action')
      state.adress = {...action.payload };
    },
  },
});

export default addressSlice.reducer;
export const { addAddress } = addressSlice.actions;

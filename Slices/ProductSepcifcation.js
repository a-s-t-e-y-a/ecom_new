import { createSlice } from "@reduxjs/toolkit";
import { colorMapping } from "@/utils/contants";

const initialState = {
  frame_material: "",
  lens_material: "",
  frames_color: "",
  shape: "",
  style: "",
  product_id: 0,
  product_type: "",
  raw_marterial: "",
  discription: "",
};

export const Sepcification = createSlice({
  name: "Sepcification",
  initialState,
  reducers: {
    UpdaeSepcification: (state, action) => {
      if(action.payload){
        const {
          product_model_number,
          product_color,
          row_metrial_source_from,
          shape_,
          material_,
          style_,
          product_description,
        } = action.payload;
        console.log(action.payload);
        state.product_id = product_model_number;
        state.frames_color = colorMapping[product_color] || "unknown";
        state.raw_marterial = row_metrial_source_from;
        state.shape = shape_?.name;
        state.style = style_?.name;
        state.lens_material = "Demo polycarbonate";
        state.frame_material = material_?.name;
        state.discription = product_description;
      }
    },
  },
});

export default Sepcification.reducer;
export const { UpdaeSepcification } = Sepcification.actions;

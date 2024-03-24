import { createSlice } from "@reduxjs/toolkit";
import { colorMapping } from "@/utils/contants";

const initialState = {
  frame_material: "",
  lens_material: "",
  frames_color: "",
  shape: "",
  gender: "",
  style: "",
  product_id: 0,
  product_type: "",
  raw_marterial: "",
};

export const Sepcification = createSlice({
  name: "Sepcification",
  initialState,
  reducers: {
    UpdaeSepcification: (state, action) => {
      const {
        p_id,
        product_color,
        row_metrial_source_from,
        shape,

        material,
        style,
      } = action.payload;
      state.product_id = p_id;
      state.frames_color = colorMapping[product_color] || "unknown";
      state.raw_marterial = row_metrial_source_from;
      state.shape = shape;
      state.style = style;
      state.frame_material = material;
    },
  },
});

export default Sepcification.reducer;
export const { UpdaeSepcification } = Sepcification.actions;

import { configureStore } from "@reduxjs/toolkit";
import shapeSlice from "@/Slices/shapeSlice";
import colorSlice from "@/Slices/colorSlice";
import brandSlice from "@/Slices/brandSlice";
import frameMaterialSlice from "@/Slices/frameMaterialSlice";
import couponSlice from "@/Slices/couponSlice";
import powerTypeSlice from "@/Slices/powerTypeSlice";
import lensDetailSlice from "@/Slices/lensDetailSlice";
import categoriesSlice from "@/Slices/categoriesSlice";
import Sepcification from "@/Slices/ProductSepcifcation";
import CartSlice from "@/Slices/CartSlice";

export const store = configureStore({
  reducer: {
    shape: shapeSlice,
    color: colorSlice,
    brand: brandSlice,
    frameMaterial: frameMaterialSlice,
    coupon: couponSlice,
    powerType: powerTypeSlice,
    lensDetail: lensDetailSlice,
    categories: categoriesSlice,
    Sepcification: Sepcification,
    cart: CartSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        ProductCategoriesName : ["EyeGlasses","SunGlasses"],
        ProductBrandName : ["Trend"],
        CouponName : "Mar200",
        Price : 100 ,
        Percentage : 20 ,
        Validity : "20 days" ,
        Quantity : 20
    }
]

export const couponSlice = createSlice({
    name : "coupon",
    initialState,
    reducers : {
        addCoupon : (state,action) => {
            state.push(action.payload)
        },
        deleteCoupon : (state,action) => {
            
        }
    }
})

export default couponSlice.reducer
export const {addCoupon,deleteCoupon} = couponSlice.actions
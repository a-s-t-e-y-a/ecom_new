import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        ProductCategoriesName : ["SunGlasses","Computer Glasses"],
        ProductBrandName : ["Latest","Normal"]
    }
]

export const brandSlice = createSlice({
    name : "brand",
    initialState,
    reducers : {
        addBrand : (state,action) => {

        },
        deleteBrand : (state,action) => {
            
        }
    }
})

export default brandSlice.reducer
export const {addBrand,deleteBrand} = brandSlice.actions
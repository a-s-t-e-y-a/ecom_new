import { createSlice } from "@reduxjs/toolkit"

const initialState = ["orange"]

export const colorSlice = createSlice({
    name : "color",
    initialState,
    reducers : {
        addColor : (state,action) => {
            state.push(action.payload)
        },
        deleteColor : (state,action) => {
            
        }
    }
})

export default colorSlice.reducer
export const { addColor,deleteColor} = colorSlice.actions
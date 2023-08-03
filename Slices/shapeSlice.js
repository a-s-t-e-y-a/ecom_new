import { createSlice } from "@reduxjs/toolkit"

const initialState = ["diamond"]

export const shapeSlice = createSlice({
    name : "shape",
    initialState,
    reducers : {
        addShape : (state,action) => {
            state.push(action.payload)
        },
        deleteShape : (state,action) => {
            
        }
    }
})

export default shapeSlice.reducer
export const { addShape,deleteShape } = shapeSlice.actions
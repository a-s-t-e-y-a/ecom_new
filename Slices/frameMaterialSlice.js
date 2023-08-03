import { createSlice } from "@reduxjs/toolkit"

const initialState = ["Metals"]

export const frameMaterialSlice = createSlice({
    name : "frameMaterial",
    initialState,
    reducers : {
        addFrame : (state,action) => {
            state.push(action.payload)
        },
        deleteFrame : (state,action) => {

        }
    }
})

export default frameMaterialSlice.reducer
export const {addFrame,deleteFrame} = frameMaterialSlice.actions
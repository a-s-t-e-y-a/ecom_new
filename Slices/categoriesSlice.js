import { createSlice } from "@reduxjs/toolkit"

const initialState = ["Eye Glasses","Sun Glasses"]

export const categoriesSlice = createSlice({
    name : "categories",
    initialState,
    reducers : {
        addCategory : (state,action) => {
            state.push(action.payload)
        },
        deleteCategory : (state,action) => {
            
        }
    }
})

export default categoriesSlice.reducer
export const { addCategory,deleteCategory } = categoriesSlice.actions
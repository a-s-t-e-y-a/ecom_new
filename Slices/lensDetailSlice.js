import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        ProductCategoriesName : ["EyeGlasses" , "Computer Glasses"],
        ProductBrandName : ["Other","Trends","fast"],
        PowerType : ["1","2"],
        LensHeading : "LensHeading",
        Price : 2000,
        Thickness : "20mm",
        PowerRange : 20 ,
        WarrantyPeriod  : "1 Year",
        BlueLightBlocker : "Yes",
        AntiScratchCoating : "Yes",
        BothSideAntiGlareCoating : "Yes",
        BothSideAntiReflectiveCoating : "Yes",
        UVProtection : "Yes",
        WaterAndDustRepellent : "Yes",
        BreakageAndCrackResistant : "Yes"
    },
    {
        ProductCategoriesName : ["Computer Glasses"],
        ProductBrandName : ["Trends","fast"],
        PowerType : ["1","2"],
        LensHeading : "LensHeading2",
        Price : 5000,
        Thickness : "20mm",
        PowerRange : 202 ,
        WarrantyPeriod  : "1 Year",
        BlueLightBlocker : "Yes",
        AntiScratchCoating : "Yes",
        BothSideAntiGlareCoating : "Yes",
        BothSideAntiReflectiveCoating : "Yes",
        UVProtection : "Yes",
        WaterAndDustRepellent : "Yes",
        BreakageAndCrackResistant : "Yes"
    },
    {
        ProductCategoriesName : ["Kids Glasses" , "Computer Glasses"],
        ProductBrandName : ["Fast","Trends","fast"],
        PowerType : ["1","2"],
        LensHeading : "LensHeading3",
        Price : 8000,
        Thickness : "20mm",
        PowerRange : 400 ,
        WarrantyPeriod  : "1 Year",
        BlueLightBlocker : "Yes",
        AntiScratchCoating : "Yes",
        BothSideAntiGlareCoating : "Yes",
        BothSideAntiReflectiveCoating : "Yes",
        UVProtection : "Yes",
        WaterAndDustRepellent : "Yes",
        BreakageAndCrackResistant : "Yes"
    } 
]

export const lensDetailSlice = createSlice({
    name : "brand",
    initialState,
    reducers : {
        addLensDetail : (state,action) => {

        },
        deleteLensDetail : (state,action) => {
            
        }
    }
})

export default lensDetailSlice.reducer
export const {addLensDetail,deleteLensDetail} = lensDetailSlice.actions
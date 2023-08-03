import React from 'react'
import { useForm } from 'react-hook-form';
import FileInput from '../Admin/FileInput';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import AddIcon from "@mui/icons-material/Add";
import MultipleSelect from '../Admin/MultipleSelect';

const ProductCategoriesNameOption = ["SunGlasses" , "Computer Glasses"]
const ProductBrandNameOption = ["Normal" , "Trends"]
const PowerTypeOption = [1,2,3]

const LensDetailDialogBox = ({ onCancel }) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const onSubmit = data => dispatch(addCoupon(data.lensDetail));
  return (
    <div className="relative border tracking-wide space-y-5 rounded-md shadow-lg h-[calc(100%-1rem)] max-h-full">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
        Add Lens Detail
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-3 items-center justify-between gap-3">
            <FileInput title="Lens"/>
            <MultipleSelect label="Product Categories Name" options={ProductCategoriesNameOption}/>
            <MultipleSelect label="Brand Name" options={ProductBrandNameOption}/>
        
            <TextField fullWidth label="Lens Heading" name="lensHeading" id="lensHeading" size="small" {...register("lensHeading")} sx={{minWidth:300}}/>
            <MultipleSelect label="Power Type" options={PowerTypeOption}/>
            <TextField fullWidth label="Power Range" name="powerRange" id="powerRange" size="small" {...register("powerRange")} sx={{minWidth:300}}/>

            <TextField fullWidth label="Price" name="price" id="price" size="small" {...register("price")} sx={{minWidth:300}}/>
            <TextField fullWidth label="Index/Thickness" name="index/thickness" id="index/thickness" size="small" {...register("index/thickness")} sx={{minWidth:300}}/>
            <TextField fullWidth label="Warranty Period" name="warrentyperiod" id="warrentyperiod" size="small" {...register("warrentyperiod")} sx={{minWidth:300}}/>

            <TextField fullWidth label="Blue Light Blocker" name="blueLightBlocker" id="blueLightBlocker" size="small" {...register("blueLightBlocker")} sx={{minWidth:300}}/>
            <TextField fullWidth label="Anti Scratch Coating " name="antiScratchCoating" id="antiScratchCoating" size="small" {...register("antiScratchCoating")} sx={{minWidth:300}}/>
            <TextField fullWidth label="UV Protextion" name="uvprotection" id="uvprotection" size="small" {...register("uvprotection")} sx={{minWidth:300}}/>

            <TextField fullWidth label="Both Side Anti Glare Coating " name="bothSideAntiGlareCoating" id="bothSideAntiGlareCoating" size="small" {...register("bothSideAntiGlareCoating")} sx={{minWidth:300}}/>
            <TextField fullWidth label="Both Side Anti Reflective Coating" name="bothSideAntiReflectiveCoating" id="bothSideAntiReflectiveCoating" size="small" {...register("bothSideAntiReflectiveCoating")} sx={{minWidth:300}}/>
            <TextField fullWidth label="Water and Dust Repellent" name="waterAndDustRepellent" id="waterAndDustRepellent" size="small" {...register("waterAndDustRepellent")} sx={{minWidth:300}}/>

            <TextField fullWidth label="Breakage & Crack Resistant" name="breakageAndCrackResistance" id="breakageAndCrackResistance" size="small" {...register("breakageAndCrackResistance")} sx={{minWidth:300}}/>

        </div>
        
        <button
          type="submit"
          className="text-white bg-sky-400 hover:bg-sky-500  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2"
          //   onClick={}
          onSubmit={handleSubmit}
        >
          Add <AddIcon className="ml-1 font-bold text-base" />
        </button>
      </form>
      <button
        type="button"
        className="absolute -top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={onCancel}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  )
}


export default LensDetailDialogBox
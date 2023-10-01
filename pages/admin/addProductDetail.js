import FileInput from '@/components/Admin/FileInput'
import MultipleSelect from '@/components/Admin/MultipleSelect'
import SelectComponent from '@/components/Admin/SelectComponent'
import AdminLayout from '@/Layout/AdminLayout'
import { Textarea } from '@material-tailwind/react'
import { TextField } from '@mui/material'
import React from 'react'

const ProductCategoriesName = ["Eye Glasses", "Sun Glasses", "Computer Glasses",]
const ProductBrandName = ["Other","Trend"]
const Size = ["Narrow","Extra Narrow","Medium","Wide","Extra Wide"]
const Gender = ["Men","Women","Kids","Unisex"]
const FrameMaterial = ["Metal","Acetate","Metal/Acetate"]
// const LensMaterial = ["Demo Polycarbonate"]
// const RawMaterialSourcedFrom = ["Imported [International]"]
const Shape = ["Butter","Hexagon","Aviator","Clubmaster","Oval","Cateye","Round","Wayfarer","Rectangle","Square","Geometric"]
const Style = ["RimLess","Half Frame","Full Frame"]
const Color = ["Berry","Black","Blue","Brown","Gold","Green","Multicolor","Pink","Purple","Silver","Smoke","Wine","Yellow","Other MultiColor","Gun Metal","Transparent White","Matte","Printted","Double Shade","Gradient Color","Matte Blacke","Matte Gary","Transparent Other"]
const ShowLensWarrenty = ["Yes","No"]
const Warrenty = ["Only Demo Lens","Cr39 Hard Coat","Cr39 Photochromic Gray"]

const addProductDetail = () => {
    return (
        <AdminLayout>
            <div className='text-gray-700 tracking-wide space-y-4'>
                <div>
                    <p className='text-md font-semibold '>Add Product</p>
                </div>
                <form className='space-y-3'>

                    <div className='flex items-center gap-6 justify-center'>
                        <FileInput title="Main Image" />
                        <FileInput title="Related Images" />
                    </div>

                    <div className='space-y-3'>
                        <div className='grid grid-cols-3 items-center justify-between'>
                            <div className='w-full'><MultipleSelect label="Product Categories Name" options={ProductCategoriesName} /></div>
                            <div><SelectComponent label="Product Brand Name" options={ProductBrandName} /></div>
                            <div><TextField className="w-[300px]" id="" label="Model Name" variant="outlined" size='small' /></div>
                        </div>

                        <div className='grid grid-cols-3 items-center justify-between'>
                            <div><SelectComponent label="Size" options={Size} /></div>
                            <div><SelectComponent label="Gender" options={Gender} /></div>
                            <div><TextField className="w-[300px]" id="" label="Selling Price" variant="outlined" size='small' /></div>
                        </div>

                        <div className='grid grid-cols-3 items-center justify-between'>
                            <div><TextField className="w-[300px]" id="" label="Frame Width" variant="outlined" size='small' /></div>
                            <div><TextField className="w-[300px]" id="" label="Lens Width" variant="outlined" size='small' /></div>
                            <div><TextField className="w-[300px]" id="" label="Lens Height" variant="outlined" size='small' /></div>
                        </div>

                        <div className='grid grid-cols-3 items-center justify-between'>
                            <div><SelectComponent label="Frame Material" options={FrameMaterial} /></div>
                            <div><TextField 
                                disabled
                                className="w-[300px]" 
                                id="" label="Lens Material" 
                                defaultValue="Demo Polycarbonate"
                                InputProps={{
                                  readOnly: true,
                                }}
                                variant="outlined" size='small' />
                            </div>
                            <div><TextField 
                                disabled
                                className="w-[300px]" 
                                id="" label="Raw Material Sourced from" 
                                defaultValue="Imported [International]"
                                InputProps={{
                                  readOnly: true,
                                }}
                                variant="outlined" size='small' />
                            </div>
                            {/* <div><SelectComponent label="Lens Material" options={LensMaterial} /></div>
                            <div><SelectComponent label="Raw Material Sourced from" options={RawMaterialSourcedFrom} /></div> */}
                        </div>

                        <div className='grid grid-cols-3 items-center justify-between'>
                            <div><MultipleSelect label="Shape" options={Shape} /></div>
                            <div><MultipleSelect label="Style" options={Style} /></div>
                            <div><MultipleSelect label="Color" options={Color} /></div>
                        </div>

                        <div className='grid grid-cols-3 items-center justify-between'>
                            <div><SelectComponent label="Show Lens List/Warrenty" options={ShowLensWarrenty} /></div>
                            <div><SelectComponent label="Warrenty/Lenses" options={Warrenty} /></div>
                            <div><TextField className="w-[300px]" id="" label="Stock Quantity" variant="outlined" size='small' /></div>
                        </div>

                        <div className='grid grid-cols-3 items-center justify-between'>
                            <div><TextField className="w-[300px]" id="" label="Product URL" variant="outlined" size='small' /></div>
                            <div><TextField className="w-[300px]" id="" label="SEO Title" variant="outlined" size='small' /></div>
                            <div><TextField className="w-[300px]" id="" label="Tags/KeyWords" variant="outlined" size='small' /></div>
                        </div>

                        <div className='w-full h-auto space-x-6 flex items-center'>
                            <div className='w-[85%]'><Textarea label="Description" className='w-full'/></div>
                            <button className='px-5 py-2 text-white bg-sky-600 rounded-md font-semibold hover:bg-orange-400'>Add</button>
                        </div>

                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default addProductDetail
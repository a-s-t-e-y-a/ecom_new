import React from 'react'
import { TextField } from "@mui/material";
import QuillEditor from '@/Components/Admin/QuillEditor'
import { useForm } from 'react-hook-form';
import AddIcon from "@mui/icons-material/Add";
import FileInput from '@/Components/Admin/FileInput';
import { RiCloseCircleLine } from "react-icons/ri"
import { useRouter } from 'next/navigation';

const AddBlog = () => {
    const router = useRouter()
    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
       <div className="relative flex flex-col items-center justify-start border p-2 tracking-wide space-y-5 rounded-md h-[100vh] pt-10">
        <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
            Add Blog
        </h1>
        <form 
        className="flex flex-col items-center justify-center gap-6 px-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex items-center gap-5'>
            <TextField label="Heading" name="heading" id="heading" size="small" {...register("heading")} />
            <FileInput title="Image" />
        </div>
        <div className='flex items-center gap-5'>
            <TextField label="URL" name="url" id="url" size="small" {...register("url")} />
            <TextField label="SEO Title" name="seoTitle" id="seoTitle" size="small" {...register("seoTitle")} />
            <TextField label="Product Tags" name="productTags" id="productTags" size="small" {...register("productTags")} />
        </div>
        <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
            <QuillEditor />
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
      <RiCloseCircleLine className="absolute top-2 text-xl right-5 cursor-pointer" onClick={()=>router.push("/admin/blog")} />
        </div>
    </>
  )
}

export default AddBlog
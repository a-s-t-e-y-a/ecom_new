import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCoupon } from "@/Slices/couponSlice";
// import MultipleSelect from "../Admin/MultipleSelect";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useCreateCoupon from "@/utils/mutations/useCreateCoupon";
import { useEffect, useState } from "react";
const ProductCategoriesNameOption = ["SunGlasses", "Computer Glasses"];
const ProductBrandNameOption = ["Normal", "Trends"];

const CouponManagerDialogBox = ({ onCancel, refectch, token }) => {
  const dispatch = useDispatch();
  const { mutate } = useCreateCoupon();
  const { register, handleSubmit } = useForm();
  const [updateValue, setUpdateValue] = useState(false);

  const onSubmit = (data) => {
    console.log(data, "Submit");
    if (data) {
      setUpdateValue(true);
    }
    const payload = {
      name: data?.name,
      validity: Number(data?.validity),
      quantity: Number(data?.quantity),
      price: Number(data?.price),
      percentage: Number(data?.percentage),
    };
    mutate(payload);
    dispatch(addCoupon(data?.coupon));
    onCancel();
    refectch();
    setUpdateValue(false);
  };

  useEffect(() => {
    refectch();
  }, [refectch, updateValue]);

  return (
    <div className="relative border tracking-wide space-y-5 rounded-md shadow-lg h-[calc(100%-1rem)] max-h-full">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
        Add Coupons
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          fullWidth
          label="Coupon Name"
          name="name"
          id="couponName"
          size="small"
          {...register("name")}
          sx={{ minWidth: 300 }}
        />

        <div className="flex items-center justify-between gap-2">
          <TextField
            label="Validity"
            name="validity"
            id="validity"
            size="small"
            type="number"
            {...register("validity")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            label="Quantity"
            name="quantity"
            id="quantity"
            size="small"
            type="number"
            {...register("quantity")}
            sx={{ minWidth: 300 }}
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <TextField
            label="Price"
            name="price"
            id="price"
            type="number"
            size="small"
            {...register("price")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            label="Percentage"
            name="percentage"
            id="percentage"
            type="number"
            size="small"
            {...register("percentage")}
            sx={{ minWidth: 300 }}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-sky-400 hover:bg-sky-500  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2"
        >
          Add <AddIcon className="ml-1 font-bold text-base" />
        </button>
      </form>
      {/* <button
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
      </button> */}
    </div>
  );
};

export default CouponManagerDialogBox;

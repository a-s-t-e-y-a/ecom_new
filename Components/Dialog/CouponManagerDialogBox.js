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
import useGetAllCategories from "@/utils/queries/useCategoriesGetAll";
import SingleSelectCategories from "../Admin/MultipleSelectCategories";
const ProductCategoriesNameOption = ["SunGlasses", "Computer Glasses"];
const ProductBrandNameOption = ["Normal", "Trends"];

const CouponManagerDialogBox = ({ onCancel, refetch, token }) => {
  const dispatch = useDispatch();
  const { mutate } = useCreateCoupon();
  const { register, handleSubmit } = useForm();
  const [updateValue, setUpdateValue] = useState(false);
  const { data } = useGetAllCategories();
  const onSubmit = (data) => {
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
    refetch(!token);
    onCancel();
    setUpdateValue(false);
  };

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
            sx={{ minWidth: 300, height: 50 }}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-sky-400 hover:bg-sky-500  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2"
        >
          Add <AddIcon className="ml-1 font-bold text-base" />
        </button>
      </form>
    </div>
  );
};

export default CouponManagerDialogBox;

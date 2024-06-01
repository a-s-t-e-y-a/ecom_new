import React, { useState } from "react";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { VscCloudUpload } from "react-icons/vsc";
import PrescriptionFormDialog from "@/Components/Dialog/PrescriptionFormDialog";
import PrescriptionImgDialog from "@/Components/Dialog/PrescriptionImgDialog";
import { useSelector } from "react-redux";
import useAddCartToSession from "@/utils/mutations/useAddToCart";
import useGetCartSession from "@/utils/queries/useGetCart";

const LensFormStep2 = ({ onNext, onPrev, onCancel }) => {
  const [openPreForm, setOpenPreForm] = useState(false);
  const [openPreImg, setOpenPreImg] = useState(false);
  const { mutate } = useAddCartToSession();
  const { data, isLoading } = useGetCartSession();
  const handleOpenForm = () => setOpenPreForm(!openPreForm);
  const handleOpenImg = () => setOpenPreImg(!openPreImg);
  console.log(data);
  const previousData = useSelector((state) => state.cart.data);
  console.log(previousData, "previousData");
  const addToCart = () => {
    console.log(previousData);
    const payload = {
      productId: previousData.productId,
      lens: previousData.lens.id,
      lensFeature: previousData.lens.lens_feature_.id,
      powertype: previousData.lens.power_type_.id,
    };
    // Get the current cart data from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new payload to the cart array
    cart.push(payload);

    // Save the updated cart array back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    mutate(payload);
  };
  return (
    <div className="flex justify-center items-start">
      <div className="text-gray-800 w-[100%] h-[100vh] mt-20">
        <h1 className="text-center font-semibold tracking-wide text-xl py-3 mb-8">
          Set Prescription Detail
        </h1>

        <div className="w-[60%] mx-auto space-y-5">
          <div
            onClick={handleOpenForm}
            className="cursor-pointer bg-white p-4 flex items-center justify-between border border-md tracking-wide"
          >
            <div className="space-y-1">
              <p className="font-semibold">Fill it Online</p>
              <p className="text-sm">
                Fill it manually according to your printed prescription
              </p>
            </div>
            <div className="text-6xl font-light text-gray-700">
              <HiOutlineDocumentPlus className="font-thin text-gray-700 outline-0" />
            </div>
          </div>
          <div
            onClick={handleOpenImg}
            className="cursor-pointer bg-white p-4 flex items-center justify-between border border-md tracking-wide"
          >
            <div className="space-y-1">
              <p className="font-semibold">Upload Image</p>
              <p className="text-sm">Uplod your prescription as an Image</p>
            </div>
            <div className="text-6xl font-light text-gray-700">
              <VscCloudUpload className="font-thin text-gray-700 outline-0" />
            </div>
          </div>
          <div className="flex items-center pt-7 ">
            <button
              onClick={onPrev}
              className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
            >
              Pervious
            </button>
            <button
              onClick={addToCart}
              className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
            >
              Add To Cart
            </button>
            <button
              onClick={onCancel}
              className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>

        {/* Dialog Container */}
        <div className="w-full">
          <PrescriptionFormDialog
            openPreForm={openPreForm}
            setOpenPreForm={setOpenPreForm}
            handleOpenForm={handleOpenForm}
          />
          <PrescriptionImgDialog
            openPreImg={openPreImg}
            setOpenPreImg={setOpenPreImg}
            handleOpenImg={handleOpenImg}
          />
        </div>
      </div>
    </div>
  );
};

export default LensFormStep2;

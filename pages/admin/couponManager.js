import IconButton from "@/Components/Admin/IconButton";
import CouponManagerDialogBox from "@/Components/Dialog/CouponManagerDialogBox";
import Modal from "@/Components/Dialog/Modal";
import AdminLayout from "@/Layout/AdminLayout";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SiCodeproject } from "react-icons/si";
import { useSelector } from "react-redux";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import useGetAllCoupon from "@/utils/queries/useGetAllCupons";
const CouponManager = () => {
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  const { data, refetch } = useGetAllCoupon();
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch]);
  const couponsData = useSelector((state) => state.coupon);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);

  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {<CouponManagerDialogBox onCancel={onHide} refectch={refetch} />}
        </Modal>
        <div>
          <div onClick={handleOpen} className=" mb-4">
            <IconButton label="Add Coupons" icon={<SiCodeproject />} />
          </div>
          <div className="grid grid-cols-6 mb-5 justify-items-center bg-gray-50 py-4 rounded shadow-lg   w-full">
            <div className="  text-gray-400 tracking-wider">CouponName</div>

            <div className="  text-gray-400 tracking-wider">Validity</div>

            <div className="  text-gray-400 tracking-wider">Quantity</div>

            <div className="  text-gray-400 tracking-wider">CouponPrice</div>

            <div className="  text-gray-400 tracking-wider">
              CouponPercentage
            </div>

            <div className="  text-gray-400 tracking-wider">Action</div>
          </div>
          {data &&
            data.map((coupon, index) => (
              <div
                key={1}
                className="w-full  grid grid-cols-6 justify-between justify-items-center bg-gray-50 py-3 shadow rounded"
              >
                <div className="text-gray-600 font-semibold text-sm ">
                  {couponsData[0].CouponName}
                </div>

                <div className="text-gray-600 font-semibold text-sm ">
                  {couponsData[0].Validity}
                </div>

                <div className="text-gray-600 font-semibold text-sm ">
                  {couponsData[0].Quantity}
                </div>

                <div className="text-gray-600 font-semibold text-sm ">
                  {couponsData[0].Price}
                </div>

                <div className="text-gray-600 font-semibold text-sm ">
                  {couponsData[0].Percentage} %{" "}
                </div>
                <div className=" text-red-400">
                  <DeleteOutlineIcon className="text-base" />
                </div>
              </div>
            ))}
        </div>
      </AdminLayout>
    );
  }
};

export default CouponManager;

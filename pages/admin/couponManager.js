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
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";
import useDeleteCoupon from "@/utils/mutations/useDeleteCoupon";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const CouponManager = () => {
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  const { data, refetch } = useGetAllCoupon();
  const [Delete, setDelete] = useState(false);
  const [get, setGet] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => {
    setDelete(false);
    setGet(!get);
  };
  const onShowDelete = () => setDelete(true);
  const Deletehandeler = (val) => {
    onShowDelete();
    setDeletePayload(val);
  };
  const { mutate } = useMutation({
    mutationFn: useDeleteCoupon,
    onSuccess: () => {
      toast.success("Coupon deleted successfully");
      setGet(!get);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const couponsData = useSelector((state) => state.coupon);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch, get]);

  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {
            <CouponManagerDialogBox
              onCancel={onHide}
              refetch={setGet}
              token={get}
            />
          }
        </Modal>
        <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
          <DeletePoPUPDialog
            Closefunction={onHideDelete}
            Deletefunction={mutate}
            payload={DeletePayload}
          />
        </Modal>
        <div>
          <div onClick={handleOpen} className="ml-4 mb-4">
            <IconButton label="Add Coupons" icon={<SiCodeproject />} />
          </div>
          <div className="grid mx-4 grid-cols-6 mb-5 justify-items-center bg-gray-50 py-4 rounded shadow-lg w-[1240px]">
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
            data?.map((coupon, index) => (
              <div
                key={index}
                className="w-[1240px] mx-4  grid grid-cols-6 justify-between justify-items-center bg-gray-50 py-3 shadow rounded"
              >
                <div className="text-gray-600 font-semibold text-sm ">
                  {coupon?.name}
                </div>

                <div className="text-gray-600 font-semibold text-sm ">
                  {coupon?.validity}
                </div>

                <div className="text-gray-600 font-semibold text-sm ">
                  {coupon?.quantity}
                </div>

                <div className="text-gray-600 font-semibold text-sm ">
                  {coupon?.price}
                </div>

                <div className="text-gray-600 font-semibold text-sm ">
                  {coupon?.percentage} %{" "}
                </div>
                <button
                  className=" text-red-400"
                  onClick={() => Deletehandeler(coupon)}
                >
                  <DeleteOutlineIcon className="text-base" />
                </button>
              </div>
            ))}
        </div>
      </AdminLayout>
    );
  }
};

export default CouponManager;

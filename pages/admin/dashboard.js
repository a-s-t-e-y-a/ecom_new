import DashboardSingleItem from "@/Components/Admin/DashboardSingleItem";
import AdminLayout from "@/Layout/AdminLayout";
import { IsAuth } from "@/utils/IsAuth";
import useGetAllDashboard from "@/utils/queries/useDashBoardGetAll";
import { Router } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const { data, refetch } = useGetAllDashboard();
  const items = [
    {
      color: "bg-blue-300",
      title: "Total Place Order",
      number: data?.totalCountPlaceOrder || 0,
      src: "/shop.png",
    },
    {
      color: "bg-pink-300",
      title: "Total Product Brands",
      number: data?.totalCountBrand || 0,
      src: "/brand.png",
    },
    {
      color: "bg-lime-300",
      title: "Total Product Detail",
      number: data?.totalCountProduct || 0,
      src: "/package-delivery.png",
    },
    {
      color: "bg-cyan-300",
      title: "User Registrations",
      number: data?.totalCountUser || 0,
      src: "/man.png",
    },
    {
      color: "bg-purple-300",
      title: "Product Catagories",
      number: data?.totalCountCategories || 0,
      src: "/shop.png",
    },
    {
      color: "bg-yellow-300",
      title: "Total Email Subscribed",
      number: data?.TotalEmailSubscribed || 0,
      src: "/subscribe.png",
    },
    {
      color: "bg-indigo-300",
      title: "Total Enquiry",
      number: data?.totalCountEnquiry || 0,
      src: "/questions.png",
    },
  ];
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch]);

  if (logged) {
    return (
      <AdminLayout>
        <div className="px-5">
          <h1 className=" text-4xl font-bold mb-5">Dashboard</h1>
          <div className=" grid grid-cols-4 gap-4">
            {items &&
              items.map((item, id) => (
                <div key={id}>
                  <DashboardSingleItem
                    color={item.color}
                    title={item.title}
                    number={item.number}
                    src={item.src}
                  />
                </div>
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default Dashboard;

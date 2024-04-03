"use client";
import DashboardSingleItem from "@/Components/Admin/DashboardSingleItem";
import AdminLayout from "@/Layout/AdminLayout";
import { IsAuth } from "@/utils/IsAuth";
import { Router } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const items = [
  {
    color: "bg-blue-300",
    title: "Total Place Order",
    number: 7,
    src: "/shop.png",
  },
  {
    color: "bg-pink-300",
    title: "Total Product Brands",
    number: 2,
    src: "/brand.png",
  },
  {
    color: "bg-lime-300",
    title: "Total Product Detail",
    number: 1817,
    src: "/package-delivery.png",
  },
  {
    color: "bg-cyan-300",
    title: "User Registrations",
    number: 5891,
    src: "/man.png",
  },
  {
    color: "bg-purple-300",
    title: "Product Catagories",
    number: 7,
    src: "/shop.png",
  },
  {
    color: "bg-yellow-300",
    title: "Total Email Subscribed",
    number: 123,
    src: "/subscribe.png",
  },
  {
    color: "bg-indigo-300",
    title: "Total Enquiry",
    number: 11025,
    src: "/questions.png",
  },
];

function Dashboard() {
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setLogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);

  if (logged) {
    return (
      <AdminLayout>
        <div className="px-5">
          <h1 className=" text-4xl font-bold mb-5">Dashboard</h1>
          <div className=" grid grid-cols-4 gap-4">
            {items.map((item, id) => (
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
}

export default Dashboard;

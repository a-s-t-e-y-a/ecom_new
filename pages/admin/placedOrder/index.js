import OrderedTable from "@/Components/Admin/OrderedTable";
import AdminLayout from "@/Layout/AdminLayout";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
const PlacedOrder = () => {
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);
  if (logged) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between ">
            <h1 className="text-4xl font-bold tracking-wide">Placed Order</h1>
            <div>
              <div className="flex items-center justify-end">
                <TextField
                  className="outline-none focus:ring-0"
                  color="secondary"
                  size="small"
                  label="Search..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <BiSearch className="text-gray-500 font-semibold text-sm" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="">
            <OrderedTable />
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default PlacedOrder;

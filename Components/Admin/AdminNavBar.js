import React from "react";
import dynamic from "next/dynamic";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Badge, IconButton, Tooltip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useState } from "react";
import { useEffect } from "react";
import ShowTime from "./ShowTime";
const AdminNavBar = () => {
  const [date,setDate] = useState(new Date().toLocaleDateString())
  useEffect(()=>{
    setDate(new Date().toLocaleDateString())
  },[date])
  return (
    <div className="bg-gray-50 px-3 py-1 rounded-lg m-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <span className="text-sm text-gray-700 tracking-wide">
            <span className="font-semibold">Date : <span className="font-normal">{date}</span></span>
        </span>
        <span className="text-sm text-gray-700 tracking-wide flex items-center">
            <span className="font-semibold">Time : </span>
            <span className="font-normal flex-inline"> <ShowTime /></span>
        </span>
      </div>
      <div>
        <img  src="/logo.png" className="h-5"/>
      </div>
      <Stack direction="row" spacing={3}>
        <Tooltip title="Cart">
          <IconButton aria-label="cart" size="small">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon className="text-[22px]"/>
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Notification">
          <IconButton aria-label="notification" size="small">
            <Badge badgeContent={2} color="warning" >
              <NotificationsNoneIcon className="text-[22px]"/>
            </Badge>
          </IconButton>
        </Tooltip>
        <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col items-center text-base tracking-wide">
                <span className="text-gray-700 font-semibold">Ankit Singh</span>
                <span className="text-[12px] -mt-1">Available</span>
            </div>
            <Avatar alt="Admin" src="/" className="border p-1" />
        </div>
      </Stack>
    </div>
  );
};

export default dynamic(()=> Promise.resolve(AdminNavBar),{ssr:false});

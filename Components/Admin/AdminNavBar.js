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
import Image from "next/image";
const AdminNavBar = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, [date]);
  return (
    <div className="bg-gray-50 py-1 rounded-lg mt-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700 tracking-wide">
          <span className="font-semibold hidden md:inline">
            Date : <span className="font-normal">{date}</span>
          </span>
        </span>
        <span className="text-sm text-gray-700 tracking-wide  items-center gap-1 hidden lg:flex">
          <span className="font-semibold ">Time :</span>
          <span className="font-normal flex-inline">
            <ShowTime />
          </span>
        </span>
      </div>
      <div className=" ps-3">
        <Image
          width={300}
          height={100}
          alt=""
          src={"/logo.png"}
          className=" object-cover"
        />
      </div>
      <Stack direction="row">
        <Tooltip title="Notification">
          <IconButton aria-label="notification" size="small">
            <Badge badgeContent={2} color="warning">
              <NotificationsNoneIcon className="text-[22px]" />
            </Badge>
          </IconButton>
        </Tooltip>
        <div className="flex items-center justify-between gap-3  ms-3">
          <div className="lg:flex flex-col items-center text-base tracking-wide hidden">
            <span className="text-gray-700 font-semibold">Akku ka chashma</span>
            <span className="text-[12px] -mt-1">Available</span>
          </div>
          <Avatar alt="Admin" src="/" className="border p-1 ms-3 " />
        </div>
      </Stack>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AdminNavBar), { ssr: false });

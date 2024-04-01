import AdminNavBar from "@/Components/Admin/AdminNavBar";
import AdminSideBar from "@/Components/Admin/AdminSideBar";
import React from "react";
import Head from "next/head";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>akkukachasma</title>
      </Head>
      <div className=" w-screen">
        <div className=" fixed h-screen  flex items-center scrollbar-hide overflow-y-auto">
          <AdminSideBar />
          <main className=" h-screen w-full flex-1 p-7 overflow-y-auto">
            <AdminNavBar />
            <div className="m-5">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

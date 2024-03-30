import AdminNavBar from "@/Components/Admin/AdminNavBar";
import AdminSideBar from "@/Components/Admin/AdminSideBar";
import React from "react";
import Head from "next/head";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ackkukachasma</title>
      </Head>
      <div className="h-screen w-screen">
        <div className="h-full flex items-center scrollbar-hide overflow-y-auto">
          <AdminSideBar />
          <main className="h-screen flex-1 p-7">
            <AdminNavBar />
            <div className="m-5">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

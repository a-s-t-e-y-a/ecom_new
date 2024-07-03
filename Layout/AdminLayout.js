'use client'
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
      <body>
        <div className="flex w-full">
          <AdminSideBar />
          <main className="w-full mx-4">
            <AdminNavBar />
            {children}
          </main>
        </div>
      </body>
    </>
  );
};

export default AdminLayout;

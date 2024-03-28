import Head from "next/head";
import Header from "@/Components/Header/Header";
import Header1 from "@/Components/Header/Header1";
import Footer from "@/Components/Footer/Footer";
import { useRouter } from "next/router";
import WhatsappIcon from "@/Components/WhatsappIcon";
import { Suspense } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
       
      </Head>
      {router.pathname === "/" ? <Header /> : <Header1 />}
      
      <main className=" mx-auto min-h-screen">
        {children}
      </main>
      <WhatsappIcon />
      <Footer />
    </>
  );
};

export default Layout;

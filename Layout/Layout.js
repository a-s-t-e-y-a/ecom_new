import Head from "next/head";
import Header from "@/Components/Header/Header";
import Header1 from "@/Components/Header/Header1";
import Footer from "@/Components/Footer/Footer";
import { useRouter } from "next/router";
import WhatsappIcon from "@/Components/WhatsappIcon";
import Script from "next/script";
const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>akkukachasma</title>
        <meta
          name="google-site-verification"
          content="f_5BjOCM0Qb1adYVI5nSK3RRB1NxYwNaEF7e3My7A8Y"
        />
      </Head>

      {router.pathname === "/" ? <Header /> : <Header1 />}
      <main className=" mx-auto min-h-screen">{children}</main>
      <WhatsappIcon />
      <Footer />
    </>
  );
};

export default Layout;

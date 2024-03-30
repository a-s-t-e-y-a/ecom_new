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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VP5TNHPR85"
      />
      <Script id="google-analytics">{` 
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VP5TNHPR85');
`}</Script>
      <Head>
        <title>ackkukachasma</title>
      </Head>
      {router.pathname === "/" ? <Header /> : <Header1 />}
      <main className=" mx-auto min-h-screen">{children}</main>
      <WhatsappIcon />
      <Footer />

      <Script id="anlaytics">
        {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MJF8R8W');`}
      </Script>
    </>
  );
};

export default Layout;

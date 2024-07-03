import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider, HydrationBoundary as Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "swiper/css";
import { Toaster } from "react-hot-toast";

const Query = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={Query} contextSharing={true}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Component {...pageProps} />
          <Toaster position="top-right"/>
          <ToastContainer />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

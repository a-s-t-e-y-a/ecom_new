import '@/styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../Store/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from  '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const Query = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={Query} contextSharing={true}>
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
       <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

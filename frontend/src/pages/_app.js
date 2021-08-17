import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/header/Header";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

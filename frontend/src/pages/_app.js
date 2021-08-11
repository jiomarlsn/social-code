import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

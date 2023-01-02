import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "swiper/css";
import "swiper/css/navigation";

import { ThemeProvider } from "@emotion/react";
import { theme } from "../config";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store";

import { app } from "../lib/firebase";
import { getAuth } from "firebase/auth";

function MyApp({ Component, pageProps }) {
  const auth = getAuth(app);

  // console.log(auth.currentUser);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;

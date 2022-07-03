import "react-perfect-scrollbar/dist/css/styles.css";
import "../app.css";
import { ThemeProvider } from "next-themes";
import { GlobalProvider } from "../contexts/GlobalContext";
import { RoxGlobalProvider } from "../contexts/RoxGlobalContext";
import ToastListener from "../components/Toast";
import { ToastsProvider } from "../contexts/ToastsContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <ToastsProvider>
        <RoxGlobalProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </RoxGlobalProvider>
      </ToastsProvider>
    </GlobalProvider>
  );
}

export default MyApp;

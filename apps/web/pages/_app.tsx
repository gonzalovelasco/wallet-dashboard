import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/store";
import "../globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="bg-white">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;

import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// import { Provider } from "react-redux"
// import { store } from './store/store.ts'

import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store = {store}> */}
    <React.Suspense
      fallback={
        <div className="text-center text-[25px] text-[#fff] duration-1000">
          ...Loading
        </div>
      }
    >
      <App />
    </React.Suspense>
    {/* </Provider> */}
  </React.StrictMode>
);

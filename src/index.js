import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";

import * as serviceWorker from "./serviceWorker";
import { AdminProvider } from "./context/state/AdminState";
import { ProductProvider } from "./context/state/ProductState";
import { LoadingProvider } from "./context/state/LoadingState";

ReactDOM.render(
  <LoadingProvider>
    <AdminProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AdminProvider>
  </LoadingProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

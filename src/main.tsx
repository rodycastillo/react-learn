import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { store } from "./redux/store.tsx";
// import { Provider } from "react-redux";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./query/api/apiSlice.js";

// Provider

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // ****************************

  // REDUX TOOLKIT EXAMPLE
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>

  // ****************************

  //REDUX TOOLKIT QUERY EXAMPLE

  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>

  // ****************************
);

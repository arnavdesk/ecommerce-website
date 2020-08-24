import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";
import store from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Create store using the specs.
const createdStore = store();

// Persist gate for redux persistance library which stores "store" in local storage.
ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={createdStore.persistor}>
      <Provider store={createdStore.store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);

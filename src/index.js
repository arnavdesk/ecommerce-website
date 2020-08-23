import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";
import store from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// store.subscribe(() => {
//   console.log(store.getState());
// });

const createdStore = store();

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

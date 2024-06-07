import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { GlobalProvider } from "@/context";
import "../public/css/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </GlobalProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

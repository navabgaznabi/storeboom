import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { UserProvider } from "./context/user.context";
import { ProductsProider } from "./context/Products.context";
import { CartProvider } from "./context/card.context";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation.comp";
import Home from "./routes/home/Home";
import ShopComp from "./routes/shop/Shop.comp";
import Authentication from "./routes/authentication/Authentication.comp";
import Checkout from "./routes/checkout/Checkout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="shop/*" element={<ShopComp />}></Route>
          <Route path="auth" element={<Authentication />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
  );
}

export default App;

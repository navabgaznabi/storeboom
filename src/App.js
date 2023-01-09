import CaregoriesContainerCom from "./components/categoriesContainer/CategoriesContainer.com";
import ShopComp from "./components/routes/shop/Shop.comp";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation.comp";
import Authentication from "./components/routes/authentication/Authentication.comp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<CaregoriesContainerCom />}></Route>
          <Route path="shop" element={<ShopComp />}></Route>
          <Route path="auth" element={<Authentication />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

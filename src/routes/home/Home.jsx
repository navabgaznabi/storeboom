import { Outlet } from "react-router-dom";

import CategoriesContainerCom from "../../components/home-categories-container/CategoriesContainer.com";

const Home = () => {

  return (
    <div>
      <CategoriesContainerCom ></CategoriesContainerCom>
      <Outlet />
    </div>
  );
};

export default Home;

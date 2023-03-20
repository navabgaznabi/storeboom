import ImageSlider from "../../components/home-carousel/ImagesSider.Comp";
import CategoriesContainerCom from "../../components/home-categories-container/CategoriesContainer.com";
import MainBannerComp from "../../components/main-banner/MainBanner.Comp";

const Home = () => {
    return (
        <div className="home-page-container">
            <MainBannerComp />
            <div className="with-margin">
                <CategoriesContainerCom />
            </div>
            <ImageSlider />
        </div>
    );
};

export default Home;

import BestSelling from "../../components/best-selling/BestSelling";
import ImageSlider from "../../components/home-carousel/ImagesSider.Comp";
import CategoriesContainerCom from "../../components/home-categories-container/CategoriesContainer.com";
import HomeCollectionSection from "../../components/home-Collection-section/HomeCollectionSection";
import MainBannerComp from "../../components/main-banner/MainBanner.Comp";
import PopularProducts from "../../components/popular-products/PopularProducts";

const Home = () => {
    return (
        <div className="home-page-container">
             <MainBannerComp />
             <PopularProducts />
             <ImageSlider />
             <div className="with-margin">
                 <CategoriesContainerCom />
             </div>
             <HomeCollectionSection/>
             <BestSelling />
        </div>
    );
};

export default Home;
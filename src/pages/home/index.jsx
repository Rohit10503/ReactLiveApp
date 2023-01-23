import React from "react";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import ImageSlider from "./components/image-slider";
import PopularOffer from "./components/popular-offers";
import "./home.css"
import Footer from "../../common/components/footer";
const Home = () => {
    return <div className="home-page">

        <Header />
        <NavbarMain />
        <ImageSlider />
        <div className="main-body">
            <PopularOffer />

        </div>

        <Footer />




    </div>
};
export default Home;
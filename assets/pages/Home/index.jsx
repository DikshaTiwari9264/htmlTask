import React from "react";
import Announcementbar from "./Announcementbar";
import Banner from "./Banner";
import ProductCategories from "./ProductCategories";
import ComboOffer from "./ComboOffer";
import BestSeller from "./BestSeller";
import Blogs from "./Blogs";
import ChooseUs from "./ChooseUs";
import VideoTestminol from "./VideoTestminol";
import Footer from "./Footer";
import TestmonoPart from "./TestmonoPart";

const Home = () => {
  return (
    <div>
      <Announcementbar />
      <Banner />
      <ProductCategories />
      <ComboOffer />
   <TestmonoPart/>
      <BestSeller />
      <Blogs />
      <ChooseUs />
      <VideoTestminol />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../Layout/Header";
import Nav from "../Layout/Nav";

import Features from "../Layout/Features";
import Categories from "../products/Categories";
import ProductsList from "../products/ProductsList";
import Footer from "../Layout/Footer";
import Banner from "../Layout/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Banner />
      <Features />
      <Categories />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default Home;

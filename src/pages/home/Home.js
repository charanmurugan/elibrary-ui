import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "../../components/shared/Banner/Banner";
import Navbar from "../../components/shared/Navbar/Navbar";
import RecentlyAdded from "../../components/shared/RecentlyAdded/RecentlyAdded";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <RecentlyAdded />
    </>
  );
};

export default Home;

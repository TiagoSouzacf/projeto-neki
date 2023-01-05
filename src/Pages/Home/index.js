import React, { useContext } from "react";
import { Body } from "../../components/body/index.js";
import { Footer } from "../../components/footer/index.js";
import { Navbar } from "../../components/navbar/index.js";

import { AuthContext } from "../../contexts/auth";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer/>
    </>
  );
};

export default Home;

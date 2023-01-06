import React from "react";
// import { Footer } from "../../components/footer/index.js";
import { Navbar } from "../../components/navbar/index.js";
import SkillsList from "../../components/SkillsList/index.js";


const Home = () => {
  return (
    <>
      <Navbar />
      <SkillsList/>
      {/* <Footer /> */}
    </>
  );
};

export default Home;

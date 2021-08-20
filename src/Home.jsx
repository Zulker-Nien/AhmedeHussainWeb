import React from "react";
import Header from "./Components/Header";
import TopSection from "./TopSection/TopSection";
import LiteraryWorks from "./LiteraryWorks/LiteraryWorks";
import Journalism from "./Journalism/Journalism";
import Footer from "./Components/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <TopSection/>
      <LiteraryWorks/>
      <Journalism/>
      <Footer/>
    </div>
  );
};

export default Home;

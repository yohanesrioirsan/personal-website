import React, { useEffect } from "react";
import AOS from "aos";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import "../App.css";
import "../components/Header/Header.css";
import "../components/Portfolio/Portfolio.css";
import "../components/Skills/Skills.css";
import "../components/CallToAction/CallToAction.css";
import "../components/Footer/Footer.css";
import "../components/Animation/Animation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <NavBar />
      <Header />
      <Portfolio />
      <Skills />
      <div className="animation" data-aos="fade-down">
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

export default Home;

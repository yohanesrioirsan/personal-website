import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  return (
    <section className="body">
      <NavBar />
      <Container>
        <Hero className="hero-content" />
        <AboutMe />
        <Skills />
        <Footer />
      </Container>
    </section>
  );
}

export default Home;

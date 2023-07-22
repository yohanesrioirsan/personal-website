import React from "react";
import { Container } from "react-bootstrap";
import RevealOnScroll from "./RevealOnScroll";
import bootstrapImg from "../assets/bootstrap.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import gitImg from "../assets/git.png";
import "./Skills.css";

function Skills() {
  return (
    <Container className="pt-5 skills-container">
      <RevealOnScroll className="reveal">
        <section className="skills" id="skills">
          <h1 style={{ color: "white", fontSize: "38px" }}>Skills</h1>
          <p
            className="aboutme-text"
            style={{
              color: "white",
              fontSize: "28px",
              opacity: "50%",
              width: "80%",
            }}
          >
            I have experience in developing websites using the following tech
            stack.
          </p>

          <div className="tech-stack d-flex pt-3" style={{ gap: "5px" }}>
            <img
              src={bootstrapImg}
              alt="bootstrap"
              style={{ width: "70px", height: "50px" }}
            />
            <img
              src={htmlImg}
              alt="html"
              style={{ width: "70px", height: "50px" }}
            />
            <img
              src={cssImg}
              alt="css"
              style={{ width: "70px", height: "50px" }}
            />
            <img
              src={jsImg}
              alt="javascript"
              style={{ width: "70px", height: "50px" }}
            />
            <img
              src={reactImg}
              alt="react"
              style={{ width: "70px", height: "50px" }}
            />
            <img
              src={gitImg}
              alt="git"
              style={{ width: "70px", height: "50px" }}
            />
          </div>
        </section>
      </RevealOnScroll>
    </Container>
  );
}

export default Skills;

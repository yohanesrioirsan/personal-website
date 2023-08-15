import React from "react";
import { Container, Button } from "react-bootstrap";
import RevealOnScroll from "./RevealOnScroll";
import ResumeFile from "../assets/files/Resume - Yohanes Rio Irsan (2023).pdf";
import "./AboutMe.css";

function AboutMe() {
  return (
    <Container style={{ paddingTop: "10rem" }}>
      <RevealOnScroll className="reveal">
        <section className="about" id="about">
          <h1 style={{ color: "white", fontSize: "38px" }}>About Me</h1>
          <p
            className="aboutme-text"
            style={{
              color: "white",
              fontSize: "28px",
              opacity: "50%",
              width: "80%",
            }}
          >
            Hi there, I'm Yohanes Rio Irsan based in Indonesia, a passionate and
            dedicated junior front end web developer with a thirst for
            innovation and a love for turning ideas into reality through code.
            Welcome to my digital corner of the world, where I'm thrilled to
            share my coding journey with you.
          </p>
          <Button className="btn-contact mt-1">
            <a
              href={ResumeFile}
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              rel="noreferrer"
            >
              View My Resume
              <i
                className="bi bi-file-person-fill"
                style={{ marginLeft: "5px" }}
              ></i>
            </a>
          </Button>
        </section>
      </RevealOnScroll>
    </Container>
  );
}

export default AboutMe;

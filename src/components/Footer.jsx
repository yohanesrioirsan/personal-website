import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RevealOnScroll from "./RevealOnScroll";
import "./Skills.css";

function Footer() {
  return (
    <Container className="pt-5">
      <RevealOnScroll className="reveal">
        <section className="footer" style={{ paddingTop: "3rem" }}>
          <Row>
            <Col>
              <h1
                className="heading"
                style={{ color: "white", fontSize: "24px" }}
              >
                Socials
              </h1>
              <a
                href="mailto:rioirsa8@gmail.com"
                style={{
                  marginRight: "7px",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "white",
                  opacity: "50%",
                }}
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/yohanes-rio-irsan-872689206/"
                style={{
                  marginRight: "7px",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "white",
                  opacity: "50%",
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.github.com/yohanesrioirsan"
                style={{
                  marginRight: "7px",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "white",
                  opacity: "50%",
                }}
              >
                GitHub
              </a>
              <a
                href="https://www.threads.net/@yohanesrioirsan"
                style={{
                  marginRight: "7px",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "white",
                  opacity: "50%",
                }}
              >
                Threads
              </a>
              <a
                href="https://www.instagram.com"
                style={{
                  marginRight: "7px",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "white",
                  opacity: "50%",
                }}
              >
                Instagram
              </a>
            </Col>
            <Col className="copyright">
              <h1
                className="heading"
                style={{ color: "white", fontSize: "24px" }}
              >
                Copyright 2023
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "white",
                  opacity: "50%",
                }}
              >
                Yohannes Rio Irsan
              </p>
            </Col>
          </Row>
        </section>
      </RevealOnScroll>
    </Container>
  );
}

export default Footer;

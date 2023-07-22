import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import heroImage from "../assets/hero-image.png";
import "./Hero.css";

function Hero() {
  return (
    <Container style={{ paddingTop: "8rem" }}>
      <section className="hero">
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={7} sm={12}>
            <h1
              className="heading"
              style={{ color: "white", fontSize: "48px" }}
            >
              Hi<span className="wave-emoji">👋🏻</span>, I'm Yohanes Rio Irsan
            </h1>
            <h3
              className="sub-heading fw-bold"
              style={{ color: "white", fontSize: "32px", opacity: "50%" }}
            >
              Front End Developer
            </h3>
            <h5
              className="small-intro"
              style={{
                color: "white",
                fontSize: "32px",
                opacity: "50%",
              }}
            >
              passionate and dedicated junior developer with a thirst for
              innovation and a love for turning ideas into reality through code.{" "}
            </h5>
            <Button className="btn-contact mt-3">
              <a
                href="mailto:rioirsan8@gmail.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact Me
              </a>
              <i
                className="bi bi-envelope-plus-fill"
                style={{ paddingLeft: "8px" }}
              ></i>
            </Button>
          </Col>
          <Col
            lg={5}
            sm={12}
            className="d-flex justify-content-lg-end justify-content-center"
          >
            <div className="mascot-image">
              <img
                src={heroImage}
                alt="heroimage"
                style={{ width: "470px", height: "470px" }}
              />
            </div>
          </Col>
        </Row>
      </section>
      <div
        className="scroll-click d-flex justify-content-center align-items-center"
        style={{ color: "white", paddingTop: "10rem" }}
      >
        <h6>
          <i className="bi bi-mouse" style={{ paddingRight: "8px" }}></i>Use the
          scroll wheel to scroll vertically
        </h6>
      </div>
    </Container>
  );
}

export default Hero;

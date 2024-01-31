import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import Labels from "../../components/Label/Labels";
import binarThumbnail from "../../assets/binar-car.png";
import tenManThumbnail from "../../assets/10manfun.png";
import payToWinThumbnail from "../../assets/pay2win.png";
import cskinsThumbnail from "../../assets/cskins.png";

import "./Portfolio.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <section className="work" data-aos="fade-down">
        <div className="work-heading">
          <h1>WORK</h1>
          <p style={{ fontSize: "17px", fontWeight: "500" }}>
            I have done some work with a <span>team or on my own project.</span>
          </p>
        </div>
        <Row>
          <Col lg={3}>
            <div className="work-thumbnail">
              <img src={binarThumbnail} alt="" />
            </div>
          </Col>
          <Col>
            <div className="work-detail-container">
              <div className="role-label d-flex gap-2">
                <Labels label="Frontend Developer" width="200px" />
                <Labels label="Team Project" width="150px" />
              </div>
              <div className="work-detail">
                <h2>Binar Car Rental</h2>
                <p className="work-description">
                  A car rental website. This project is the final assignment I
                  completed during my participation in the Binar Academy
                  bootcamp. Here, we are working on a project as a group for the
                  first time and also learning how GIT operates. My role is
                  working on User Authentication, Signup Page, Car Detail Page,
                  Car List Page, Delete Modal (UI, Functionality, & API
                  Integration)
                </p>
              </div>
              <div className="btn-project-link">
                <a href="https://github.com/yohanesrioirsan/fer-10-platinum-kel1-public/">
                  <Labels label="View Project" width="180px" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={3}>
            <div className="work-thumbnail">
              <img src={tenManThumbnail} alt="" />
            </div>
          </Col>
          <Col>
            <div className="work-detail-container">
              <div className="role-label d-flex gap-2">
                <Labels label="Frontend Developer" width="200px" />
                <Labels label="Solo Project" width="150px" />
              </div>
              <div className="work-detail">
                <h2>10 Man Fun</h2>
                <p className="work-description">
                  10 Man is website that can generate team if you want to play
                  custom fun match in valorant (or maybe just use it to generate
                  a random team). You can add 10 or more players and generate as
                  what you want. This website also generate random valorant
                  agent and maps so you dont have to generate it again just to
                  find your random agent and maps.
                </p>
              </div>
              <div className="btn-project-link">
                <a href="https://10manfun.vercel.app/">
                  <Labels label="View Project" width="180px" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={3}>
            <div className="work-thumbnail">
              <img src={payToWinThumbnail} alt="" />
            </div>
          </Col>
          <Col>
            <div className="work-detail-container">
              <div className="role-label d-flex gap-2">
                <Labels label="Full-Stack Developer" width="200px" />
                <Labels label="Solo Project" width="150px" />
              </div>
              <div className="work-detail">
                <h2>Pay2Win</h2>
                <p className="work-description">
                  Pay2Win (Onine games topup service) is my first full-stack
                  project is a MERN web app for online game top-up. Besides
                  learning about backend, APIs, and servers, I also delved
                  deeper into front-end development and web design.
                </p>
              </div>
              <div className="btn-project-link">
                <a href="http://pay2win-fe.vercel.app/">
                  <Labels label="View Project" width="180px" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={3}>
            <div className="work-thumbnail">
              <img src={cskinsThumbnail} alt="" />
            </div>
          </Col>
          <Col>
            <div className="work-detail-container">
              <div className="role-label d-flex gap-2">
                <Labels label="Frontend Developer" width="200px" />
                <Labels label="Solo Project" width="150px" />
              </div>
              <div className="work-detail">
                <h2>Cskinsdb</h2>
                <p className="work-description">
                  cskinsDB. is an unofficial website that you can browse all the
                  Counter-Strike 2 in-game weapon skins (finishes). Discover,
                  collect, and explore the world of Counter-Strike 2 skins.
                  Unveil your personal style, stay updated with the latest
                  trends, and connect with a community of enthusiasts.
                </p>
              </div>
              <div className="btn-project-link">
                <a href="https://cskinsdb.vercel.app/">
                  <Labels label="View Project" width="180px" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;

import React, { useEffect } from "react";
import AOS from "aos";
import { Container } from "react-bootstrap";
import BinarCar from "../../assets/binar-car.png";
import AniGen from "../../assets/anigen.png";
import Cskins from "../../assets/cskins.png";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="portfolio">
      <Container>
        <div className="animation" data-aos="fade-left">
          <div className="___portfolio">
            <div className="t___portfolio">
              <h1 className="fw-bold">PORTFOLIO</h1>
            </div>
            <div className="t2___portfolio">
              <h1 className="fw-bold">
                <span style={{ background: "rgb(230, 255, 0)" }}>
                  SOME PROJECTS
                </span>
              </h1>
              <h1> I'VE BEEN WORKING ON</h1>
            </div>
          </div>
        </div>
      </Container>
      <div className="animation" data-aos="fade-right">
        <div className="portfolio_card_container">
          <div className="portfolio_card">
            <div className="tech">
              <div className="category">
                <h5 className="fw-bold">HTML</h5>
              </div>
              <div className="category">
                <h5 className="fw-bold">CSS</h5>
              </div>
              <div className="category">
                <h5 className="fw-bold">Bootstrap</h5>
              </div>
              <div className="category">
                <h5 className="fw-bold">Next Js</h5>
              </div>
            </div>
            <div className="portfolio">
              <h1 className="fw-bold" style={{ color: "rgb(230, 255, 0)" }}>
                Binar Car Rental
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  letterSpacing: "0.5px",
                }}
              >
                A car rental website. This project is the final assignment I
                completed during my participation in the Binar Academy bootcamp.
              </p>
              <div className="btn-links">
                <a
                  href="https://github.com/yohanesrioirsan/fer-10-platinum-kel1-public"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW WEBSITE
                </a>
              </div>
              <div className="website_thumbnail">
                <img
                  className="thumbnail"
                  src={BinarCar}
                  alt="web-thumbnail"
                ></img>
              </div>
            </div>
          </div>
          <div className="portfolio_card">
            <div className="tech">
              <div className="category">
                <h5 className="fw-bold">HTML</h5>
              </div>
              <div className="category">
                <h5 className="fw-bold">CSS</h5>
              </div>
              <div className="category">
                <h5 className="fw-bold">React Js</h5>
              </div>
            </div>
            <div className="portfolio">
              <h1 className="fw-bold" style={{ color: "rgb(230, 255, 0)" }}>
                AniGenerator
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  letterSpacing: "0.5px",
                }}
              >
                A simple website that contains list and quotes from anime. You
                can find random anime quotes and list of anime (just like MAL).
              </p>
              <div className="btn-links">
                <a
                  href="https://anigenerator.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW WEBSITE
                </a>
              </div>
              <div className="website_thumbnail">
                <img
                  className="thumbnail"
                  src={AniGen}
                  alt="web-thumbnail"
                ></img>
              </div>
            </div>
          </div>
          <div className="portfolio_card">
            <div className="tech">
              <div className="category">
                <h5 className="fw-bold">HTML</h5>
              </div>
              <div className="category">
                <h5 className="fw-bold">CSS</h5>
              </div>
              <div className="category">
                <h5 className="fw-bold">React Js</h5>
              </div>
            </div>
            <div className="portfolio">
              <h1 className="fw-bold" style={{ color: "rgb(230, 255, 0)" }}>
                CskinsDB
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  letterSpacing: "0.5px",
                }}
              >
                cskinsDB. is an unofficial website that can browse all the
                Counter-Strike 2 in-game weapon skins (finishes). Inspired by
                CS2 Stash.
              </p>
              <div className="btn-links">
                <a href="http://cskinsdb.vercel.app/">VIEW WEBSITE</a>
              </div>
              <div className="website_thumbnail">
                <img
                  className="thumbnail"
                  src={Cskins}
                  alt="web-thumbnail"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

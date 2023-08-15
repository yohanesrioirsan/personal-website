import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import anigeneratorImg from "../../assets/work/anigenerator-thumbnail.png";
import aniquotesImg from "../../assets/work/aniquotes.png";
import anilistImg from "../../assets/work/anilist.png";

function AniGenerator() {
  return (
    <section className="work-detail" style={{ backgroundColor: "#fafafa" }}>
      <Container style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
        <section className="backnavs d-flex justify-content-between">
          <Link to="/work" style={{ textDecoration: "none", color: "black" }}>
            <h1
              style={{
                fontWeight: "300",
                fontSize: "14px",
              }}
            >
              Back To Work page
            </h1>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1
              style={{
                fontWeight: "300",
                fontSize: "14px",
              }}
            >
              Back To Home Page
            </h1>
          </Link>
        </section>
        <div>
          <div className="pb-3 d-flex justify-content-between">
            <h1>Work Detail</h1>
          </div>
          <h5 style={{ color: "#6692fe" }}>Ani Generator</h5>
          <p className="intro-sub-text">
            This project was build with ReactJs with{" "}
            <a href="https://animechan.xyz/">Animechan</a> &{" "}
            <a href="https://jikan.moe/">Jikan</a> REST API for the purpose of
            getting myself familiar with API Intergration and vanilla CSS.
          </p>
        </div>
        <hr></hr>
        <section className="d-flex justify-content-between">
          <div>
            <div>
              <div>
                <h6 style={{ color: "#6692fe" }}>Roles</h6>
                <h6 style={{ fontSize: "14px" }}>Front End Developer</h6>
              </div>
              <div>
                <h6 style={{ color: "#6692fe" }}>Jobs</h6>
                <h6 style={{ fontSize: "14px" }}>UI, API Intergration</h6>
              </div>
              <div>
                <h6 style={{ color: "#6692fe" }}>Year</h6>
                <h6 style={{ fontSize: "14px" }}>2023</h6>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 style={{ color: "#6692fe" }}>Written In</h6>
              <div className="d-flex flex-row" style={{ gap: "15px" }}>
                <h6 style={{ fontSize: "14px" }}>HTML</h6>
                <h6 style={{ fontSize: "14px" }}>CSS</h6>
                <h6 style={{ fontSize: "14px" }}>ReactJs</h6>
              </div>
            </div>
            <div>
              <h6 style={{ color: "#6692fe" }}>Tools</h6>
              <div>
                <h6 style={{ fontSize: "14px" }}>-</h6>
              </div>
            </div>
            <div>
              {" "}
              <Button className="btn-visit mt-3">
                <Link
                  to="https://anigenerator.vercel.app/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Visit Link
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <hr></hr>

        <div>
          <h5 style={{ color: "#6692fe" }}>Screenshots</h5>
          <div className="image-container">
            <img
              src={anigeneratorImg}
              alt="thumbnail"
              className="screenshot-image"
            />
            <img
              src={aniquotesImg}
              alt="thumbnail"
              className="screenshot-image"
            />
            <img
              src={anilistImg}
              alt="thumbnail"
              className="screenshot-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AniGenerator;

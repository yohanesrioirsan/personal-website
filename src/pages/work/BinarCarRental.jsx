import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import binarImg from "../../assets/work/binar-car-rental.png";
import signUpPage from "../../assets/work/signup-page.png";
import detailPage from "../../assets/work/detail-page.png";

function BinarCarRental() {
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
          <h5 style={{ color: "#6692fe" }}>Binar Car Rental</h5>
          <p className="intro-sub-text">
            A car rental website with interesting features. This project is the
            final assignment I completed during my participation in the Binar
            Academy bootcamp.
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
                <h6 style={{ fontSize: "14px" }}>
                  User Auth, Signup Page, Car Detail Page
                </h6>
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
                <h6 style={{ fontSize: "14px" }}>NextJs</h6>
              </div>
            </div>
            <div>
              <h6 style={{ color: "#6692fe" }}>Tools</h6>
              <div>
                <h6 style={{ fontSize: "14px" }}>Figma</h6>
              </div>
            </div>
            <div>
              {" "}
              <Button className="btn-visit mt-3">
                <Link
                  to="https://fer-10-platinum-kel1-public.vercel.app/"
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
            <img src={binarImg} alt="thumbnail" className="screenshot-image" />
            <img
              src={signUpPage}
              alt="thumbnail"
              className="screenshot-image"
            />
            <img
              src={detailPage}
              alt="thumbnail"
              className="screenshot-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BinarCarRental;

import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="work-root" style={{ backgroundColor: "#fafafa" }}>
      <Container style={{ paddingTop: "1rem" }}>
        <section className="backnavs">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1
              style={{
                fontWeight: "300",
                fontSize: "14px",
              }}
            >
              Home
            </h1>
          </Link>
        </section>
        <section className="resume">
          <div>
            <h1>Resume</h1>
          </div>
          <div className="profile pt-3">
            <h5 style={{ color: "#6692fe" }}>Profile</h5>
            <p style={{ width: "50%" }}>
              Enthusiastic Junior Web Developer seeking new opportunities to
              grow and contribute. Proficient in front-end technologies with a
              passion for clean, user-friendly design. Eager to join a
              collaborative team and continue building exceptional web
              experiences. Let's create something amazing website together!
            </p>
          </div>
          <div className="content d-flex justify-content-between">
            <div className="left-side">
              <div>
                <div className="education pt-3">
                  <h5 style={{ color: "#6692fe" }}>Education</h5>
                  <div className="elementary">
                    <h6>SD Inpress Tangkala II Makassar</h6>
                    <h6 style={{ opacity: "50%" }}>2006 - 2012</h6>
                  </div>
                  <div className="middle pt-2">
                    <h6>SMP Katolik Belibis Makassar</h6>
                    <h6 style={{ opacity: "50%" }}>2012 - 2015</h6>
                  </div>
                  <div className="high pt-2">
                    <h6>SMK Kartika XX-I Wirabuana Makassar</h6>
                    <h6 style={{ opacity: "50%" }}>2015 - 2018</h6>
                    <h6 style={{ fontWeight: "400" }}>Network Engineering</h6>
                  </div>
                  <div className="high pt-2">
                    <h6>Universitas Dipa Makassar</h6>
                    <h6 style={{ opacity: "50%" }}>2018 - 2022</h6>
                    <h6 style={{ fontWeight: "400" }}>
                      Bachelor of Informatics Engineering
                    </h6>
                  </div>
                  <h5 className="pt-2" style={{ color: "#6692fe" }}>
                    Other
                  </h5>
                  <div className="other">
                    <h6>Binar Academy</h6>
                    <h6 style={{ opacity: "50%" }}>2023</h6>
                    <h6 style={{ fontWeight: "400" }}>
                      Front End Developer Bootcamp
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="development pt-5">
                <h5 style={{ color: "#6692fe" }}>Development</h5>
                <h6 style={{ fontWeight: "400" }}>HTML</h6>
                <h6 style={{ fontWeight: "400" }}>CSS</h6>
                <h6 style={{ fontWeight: "400" }}>JavaScript</h6>
                <h6 style={{ fontWeight: "400" }}>ReactJs</h6>
              </div>
              <div className="development pt-2">
                <h5 style={{ color: "#6692fe" }}>Tools</h5>
                <h6 style={{ fontWeight: "400" }}>Visual Studio Code</h6>
                <h6 style={{ fontWeight: "400" }}>Git</h6>
                <h6 style={{ fontWeight: "400" }}>Figma</h6>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Resume;

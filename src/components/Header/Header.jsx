import React from "react";
import DownloadIcon from "../../assets/download (7).png";
import MailIcon from "../../assets/email.png";
import HeaderPicture from "../../assets/Header.png";
import Resume from "../../assets/files/Resume - Yohanes Rio Irsan (2023).pdf";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container>
      <div className="header">
        <div className="about-me">
          <div className="my_name mt-1">
            <h1 className="fw-bold">Yohanes Rio Irsan</h1>
          </div>
          <div className="my_job">
            <h1 className="fw-bold">
              <span style={{ background: "#e6ff00" }}>Front End</span> Developer
            </h1>
            <h1 className="fw-bold">
              From <span style={{ background: "#e6ff00" }}>Indonesia</span>
              <span className="waving-emoji">👋</span>
            </h1>
          </div>
          <div className="intro">
            <p>
              passionate and dedicated junior developer with a thirst for
              innovation and a love for turning ideas into reality through code.
            </p>
          </div>
          <div className="___btn">
            <div className="___cv-btn">
              <img className="btn-icon" src={DownloadIcon} alt="btn icon"></img>
              <a
                href={Resume}
                style={{
                  margin: "0",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "#2D2929",
                }}
              >
                DOWNLOAD CV
              </a>
            </div>
            <div className="___mail-btn">
              <img className="btn-icon" src={MailIcon} alt="btn icon"></img>
              <a
                href="mailto:rioirsan8@gmail.com"
                style={{
                  margin: "0",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "#2D2929",
                }}
              >
                EMAIL ME
              </a>
            </div>
          </div>
        </div>
        <div className="header-picture">
          <img
            className="my-picture"
            src={HeaderPicture}
            alt="my_picture"
          ></img>
        </div>
      </div>
    </Container>
  );
}

export default Header;

import React from "react";
import { Container } from "react-bootstrap";
import FbIcon from "../../assets/socials/fb.png";
import IgIcon from "../../assets/socials/ig.png";
import InIcon from "../../assets/socials/linkedin.png";
import GhIcon from "../../assets/socials/github.png";
import MailIcon from "../../assets/socials/mailto.png";

function Footer() {
  return (
    <section className="footer">
      <Container>
        <div className="___footer-content">
          <div className="___footer-content1">
            <h2>Need a Front End Developer for your project?</h2>
            <p>
              Let's work together and turn your vision into reality! I'm here to
              collaborate, combining our skills and creativity to make something
              amazing.
            </p>
          </div>
          <div className="___footer-content3">
            <p>Follow Me</p>
            <div className="socials-icon-img">
              <div className="socials-icon d-flex justify-content-center align-items-center">
                <a
                  href="http://www.facebook.com/rioirsan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={FbIcon}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
              <div className="socials-icon d-flex justify-content-center align-items-center">
                <a
                  href="http://www.instagram.com/yohanesrioirsan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    src={IgIcon}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
              <div className="socials-icon d-flex justify-content-center align-items-center">
                <a
                  href="https://www.linkedin.com/in/yohanes-rio-irsan-872689206/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={InIcon}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
              <div className="socials-icon d-flex justify-content-center align-items-center">
                <a
                  href="https://github.com/yohanesrioirsan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={GhIcon}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
              <div className="socials-icon d-flex justify-content-center align-items-center">
                <a
                  href="mailto:rioirsan8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="___footer-content2">
            <p>Send me an email</p>
            <div className="email-box">
              <p>rioirsan8@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          className="footer-border"
          style={{
            width: "100%",
            border: "1px solid grey",
            marginTop: "1rem",
            marginBottom: "1rem",
            opacity: "30%",
          }}
        ></div>

        <p style={{ fontSize: "18px", opacity: "90%" }}>
          Copyright © 2024 Yohanes Rio Irsan.
        </p>
      </Container>
    </section>
  );
}

export default Footer;

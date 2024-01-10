// eslint-disable-next-line

import React from "react";
import { Container } from "react-bootstrap";
import RightIcon from "../../assets/right-arrow.png";

function CallToAction() {
  return (
    <section className="footer pb-5">
      <Container>
        <div className="___cta">
          <div className="___cta-content">
            <h2>Let's work together!</h2>
            <p>
              Let's team up to bring your ideas to life! Collaborate with me for
              creative solutions and impactful results. Ready to get started ?
            </p>
          </div>
          <div className="___hire-btn">
            <a
              href="https://www.linkedin.com/in/yohanes-rio-irsan-872689206/"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
            <img
              src={RightIcon}
              style={{ width: "12px", height: "12px" }}
              alt=""
            ></img>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CallToAction;

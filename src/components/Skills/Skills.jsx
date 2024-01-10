import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import HtmlIcon from "../../assets/icon/html-5.png";
import CssIcon from "../../assets/icon/css-3.png";
import JavaScriptIcon from "../../assets/icon/js.png";
import BootstrapIcon from "../../assets/icon/bootstrap.png";
import ReactIcon from "../../assets/icon/atom.png";
import GitIcon from "../../assets/icon/git (1).png";
import XdIcon from "../../assets/icon/xd.png";
import FigmaIcon from "../../assets/icon/figma.png";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Container>
        <section className="skills">
          <div className="animation" data-aos="fade-down">
            <div className="___portfolio pt-5">
              <div className="t___portfolio">
                <h1 className="fw-bold">SKILLS</h1>
              </div>
              <div className="t2___portfolio">
                <div className="___skills-container">
                  <div className="___skills-icon">
                    <div className="icon">
                      <img src={HtmlIcon} alt="html-icon"></img>
                    </div>
                    <div className="icon">
                      <img src={CssIcon} alt="html-icon"></img>
                    </div>
                    <div className="icon">
                      <img src={JavaScriptIcon} alt="html-icon"></img>
                    </div>
                    <div className="icon">
                      <img src={BootstrapIcon} alt="html-icon"></img>
                    </div>
                    <div className="icon">
                      <img src={ReactIcon} alt="html-icon"></img>
                    </div>
                    <div className="icon">
                      <img src={GitIcon} alt="html-icon"></img>
                    </div>
                    <div className="icon">
                      <img src={FigmaIcon} alt="html-icon"></img>
                    </div>
                    <div className="icon">
                      <img src={XdIcon} alt="html-icon"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="footer-border"
          style={{
            width: "100%",
            border: "1px solid grey",
            marginTop: "3rem",
            marginBottom: "3rem",
            opacity: "30%",
          }}
        ></div>
      </Container>
    </>
  );
}

export default Skills;

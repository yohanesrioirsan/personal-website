import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import adminCarList from "../../assets/work/admin-car-list.png";
import deleteModal from "../../assets/work/delete modal.png";

function BinarCarRentalAdmin() {
  return (
    <section
      className="work-detail"
      style={{ backgroundColor: "#fafafa", height: "100vh" }}
    >
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
            An admin website designed to manage the content of the Binar Car
            Rental website. It includes features such as adding cars, modifying
            prices, sales reporting, and more.
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
                  List Car UI & Function, Delete Modal
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
                <h6 style={{ fontSize: "14px" }}>ReactJs</h6>
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
              <Button className="btn-visit mt-3" disabled>
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
          <div className="d-flex justify-content-center">
            <img
              src={adminCarList}
              alt="thumbnail"
              className="screenshot-image"
              style={{ marginRight: "15px" }}
            />
            <img
              src={deleteModal}
              alt="thumbnail"
              className="screenshot-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BinarCarRentalAdmin;
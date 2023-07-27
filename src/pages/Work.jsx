import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import binarImg from "../assets/work/binar-car-rental.png";
import binarAdminImg from "../assets/work/binar-car-rental-admin.png";

function Work() {
  return (
    <div className="work-page" style={{ backgroundColor: "#fafafa" }}>
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

        <h1>Work</h1>

        <section className="intro pt-3">
          <h5 style={{ color: "#6692fe" }}>Discover my projects</h5>
          <p className="intro-sub-text">
            Here, I am thrilled to share with you some of the exciting projects
            I've had the opportunity to work on as a junior front-end developer.
            This page serves as a window into my journey, passion, and
            dedication to crafting remarkable web experiences.
          </p>
        </section>

        <section className="d-flex work" style={{ gap: "15px" }}>
          <Card>
            <Card.Body>
              <Card.Img className="binarImg" variant="top" src={binarImg} />
              <Card.Title className="pt-3" style={{ color: "#6692fe" }}>
                Binar Car Rental
              </Card.Title>
              <Card.Text>
                A car rental website with interesting features. This project is
                the final assignment I completed during my participation in the
                Binar Academy bootcamp.
              </Card.Text>
              <div className="d-flex justify-content-center align-items-center pb-2">
                <Button className="btn-viewdetails">
                  <Link
                    to="/work/binar"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Details
                  </Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={binarAdminImg} />
              <Card.Title className="pt-3" style={{ color: "#6692fe" }}>
                Binar Car Rental {"(Admin)"}
              </Card.Title>
              <Card.Text>
                An admin website designed to manage the content of the Binar Car
                Rental website. It includes features such as adding cars,
                modifying prices, sales reporting, and more.
              </Card.Text>
              <div className="d-flex justify-content-center align-items-center pb-2">
                <Button className="btn-viewdetails">
                  <Link
                    to="/work/binar-admin"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Details
                  </Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
}

export default Work;

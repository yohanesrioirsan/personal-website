import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <div className="p-5">
        <h1 className="fw-bold" style={{ color: "#313131" }}>
          Come back later..
        </h1>
        <h5>
          Hi, there. I'm currently developing my new website
          <br /> with improved interface and also i'm implementing new
          tech-stack so... <br />
          Please come back later. Thank you. 👋
        </h5>
        <h7 className="w-100 d-flex align-items-end">- Yohanes Rio Irsan</h7>
      </div>
    </Container>
  );
}

export default Home;

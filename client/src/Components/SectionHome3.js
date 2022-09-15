import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SectionHome3 = () => {
  return (
    <Container style={{backgroundColor: "#acdbea",}}>
      <Row>
        <Col
          sm={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn.blablacar.com/kairos/assets/images/driver_masks-8bad4a96a1d6cbab177e..svg"
            alt="logo driver"
          />
        </Col>
        <Col
          sm={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column ",
          }}
        >
          <div
            style={{
              fontSize: "var(--fontSize-text-titlep)",
              textAlign: "center",
              color: "var(--color-primary)",
              margin: "10px 0",
            }}
            className="fw-bold fst-italic"
          >
            Where do you want to drive to?
          </div>
          <div
            style={{
              fontSize: "var(--fontSize-text-p)",
              margin: "10px 0",
            }}
          >
            Let's make this your least expensive journey ever.
          </div>
          <Link to="/PublishRide"><button
            style={{
              padding: "5px 10px",
              borderRadius: "6px",
              margin: "17px 0px",
              backgroundColor: "var(--color-primary)",
              color: "white",
            }}
          >
            Publish a ride
          </button> </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHome3;

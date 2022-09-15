import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionHome1 = () => {
  const data = [
    {
      title: "Your pick of rides at low prices",
      des: "No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.",
    },
    {
      title: "Trust who you travel with",
      des: "We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.",
    },
    {
      title: "Scroll, click, tap and go!",
      des: "Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.",
    },
  ];
  return (
    <Container>
      <Row>
        {data.map((item) => (
          <Col sm={12} md={4} style={{ textAlign: "center", margin: "25px 0" }} >
            <div
              style={{
                fontSize: "var(--fontSize-text-titlep)",
                textAlign: "center",
                color: "var(--color-primary)",
                marginBottom: 20,
              }}
              className="fw-bold fst-italic"
            >
              {item.title}
            </div>
            <div
            style={{
                fontSize: "var(--fontSize-text-p)"
              }}
            >{item.des}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SectionHome1;

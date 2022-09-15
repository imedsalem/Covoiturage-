import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionHome4 = () => {
  const data = [
    {
      title: "Save on travel costs",
      des: "Share your travel costs and save every time you travel by car. Plus, for your 1st ride on Covoiturage App with at least one passenger, you’ll get a 25€ fuel voucher or 40€ car wash voucher.",
    },
    {
      title: "Join a trustworthy community",
      des: "We know each of our members: both drivers and passengers. We verify ratings, profiles and IDs, so you know exactly who you’re travelling with.",
    },
    {
      title: "Carpooling made simple",
      des: "Our technology makes the entire experience with Covoiturage App simple, so you can easily find, chat with and meet passengers right on your way.",
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

export default SectionHome4;

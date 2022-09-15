import React from "react";
import img from '../Assets/Capture.PNG'
import SearchRideForm from "./SearchRideForm";

const SectionHome1 = () => {
  return (
    <>
      <div
        style={{
          // backgroundImage: `url(${Background})`,
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          height: "90vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column ",
        }}
      >
        <div
          style={{
            fontSize: "var(--fontSize-text-h1)",
            textAlign: "center",
            color: "var(--color-primary)",
            marginBottom: 150,
          }}
          className="fw-bold fst-italic"
        >
          Your pick of rides at low prices
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchRideForm />
        </div>
      </div>
    </>
  );
};

export default SectionHome1;

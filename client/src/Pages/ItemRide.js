import { Button } from "bootstrap";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const ItemRide = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
    
    };
    console.log(userData);
    navigate('/')
  };

  const data = {
    Driver: "alex Moderitch", //
    pic: "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829213?k=20&m=530829213&s=612x612&w=0&h=EvvEYltc4Rc5dbVpXTj1lYlDDMUVju_OM3y8cTYgVSc=",
    date: "20-10-2022", //
    DepartureTime: "17:50", //
    arrivingTime: "18:50", //
    startingArea: "zaghoan", //
    arrivalArea: "tunis", //
    price: "50$", //
    NbrOfPerson: 5, //
    customer: ["test"], //
    des: "stockphoto.com/v ectors/profile-icon- male-avatar-portrait- casual-person -vector-id5 sto ckphoto.com/vec tors/p rofile-icon-ma le-avatar-po rtrait -casual -perso n-vecto r-id5 stockphoto.com/vectors /prof ile-icon-m ale-avatar-portrait-c asual-person-v ector- id5 stock photo.com/ve ctors/pro file-ico n-male-avatar - portrait -cas ual-pers on-v ector -id5 ", //
    carName: "clio",
    roules: ["no smoking", "+16"], //
    VerifiedID: "true", //
    ConfirmedEmail: "false", //
    ConfirmedPhoneNumber: "true", //
    age: "35", //
  };
  return (
    <div style={{ textAlign: "center", maxWidth: 600, margin: "100px auto 0" }}>
      <h2>{data.date}</h2>
      <div
        style={{
          width: "100%",
          height: 5,
          backgroundColor: "var(--color-primary)",
          margin: "30px 0",
        }}
      ></div>
      <div
        style={{
          maxWidth: 500,
          margin: "10px auto",
          padding: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "var(--fontSize-text-p)",
            color: "var(--color-primary)",
          }}
          className="fw-bold fst-italic"
        >
          <span>{data.DepartureTime}</span> <span>{data.startingArea}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "var(--fontSize-text-p)",
            color: "var(--color-primary)",
          }}
          className="fw-bold fst-italic"
        >
          <span>{data.arrivingTime}</span> <span>{data.arrivalArea}</span>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: 5,
          backgroundColor: "var(--color-primary)",
          margin: "30px 0",
        }}
      ></div>
      <div>
        <span
          style={{
            fontSize: "var(--fontSize-text-p)",
            color: "var(--color-primary)",
          }}
          className="fw-bold fst-italic"
        >
          {data.NbrOfPerson}
        </span>{" "}
        seats left
        <br />
        Total price for 1 passenger{" "}
        <span
          style={{
            fontSize: "var(--fontSize-text-p)",
            color: "var(--color-primary)",
          }}
          className="fw-bold fst-italic"
        >
          {data.price}
        </span>
        <br />
        {data.customer.length === 0 ? (
          "There are no customers yet"
        ) : (
          <Link to="/CustomerList"><button
            style={{
              padding: "5px 30px",
              borderRadius: "6px",
              margin: "17px 0px",
              backgroundColor: "var(--color-primary)",
              color: "white",
            }}
          >
            View all customers
          </button></Link>
        )}
        {/* {data.customer.map((item) => item)} */}
        {/* lazem traka7ha 7asb donne elli jayin + tzid buton bach person ya3mel ajou lro7ah*/}
      </div>
      <div
        style={{
          width: "100%",
          height: 5,
          backgroundColor: "var(--color-primary)",
          margin: "30px 0",
        }}
      ></div>
      {data.VerifiedID === "true" ||
      data.ConfirmedEmail === "true" ||
      data.ConfirmedPhoneNumber === "false" ? (
        <div
          style={{
            fontSize: "var(--fontSize-text-titlep)",
            color: "var(--color-primary)",
          }}
          className="fw-bold fst-italic"
        >
          Verified Profile
        </div>
      ) : null}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column ",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "var(--fontSize-text-p)",

              color: "var(--color-primary)",
            }}
            className="fw-bold fst-italic"
          >
            {data.Driver}
          </span>
          <span
            style={{
              fontSize: "var(--fontSize-text-p)",
            }}
          >
            {data.age} y/o
          </span>
        </div>
        <span>
          <img
            style={{
              width: 75,
              borderRadius: "50%",
            }}
            src={data.pic}
            alt="pic"
          />
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 5,
          backgroundColor: "var(--color-primary)",
          margin: "30px 0",
        }}
      ></div>
      <div style={{ margin: "0 30px" }}>{data.des}</div>
      <div
        style={{
          width: "100%",
          height: 5,
          backgroundColor: "var(--color-primary)",
          margin: "30px 0",
        }}
      ></div>
      <div>
        <span
          style={{
            fontSize: "var(--fontSize-text-p)",

            color: "var(--color-primary)",
          }}
          className="fw-bold fst-italic"
        >
          Roules for this ride
        </span>
        {data.roules.map((el) => (
          <div>{el}</div>
        ))}
        {/* lazem traka7ha 7asb donne elli jayin */}
      </div>
      <div
        style={{
          width: "100%",
          height: 5,
          backgroundColor: "var(--color-primary)",
          margin: "30px 0",
        }}
      ></div>
      <div>Car is {data.carName}</div>
    </div>
  );
};

export default ItemRide;

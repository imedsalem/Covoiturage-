import React, { useState } from "react";
import { Form , Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const FilterRideForm = () => {
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    Driver:"",
    StartingArea:"",
    ArrivalArea:"",
    Price:"",
    NbrOfPerson:"",
 });

 const { Driver,
  StartingArea,
  ArrivalArea,
  Price,
  NbrOfPerson } = loginFormData;

 const onChange = (e) => {
   setLoginFormData((prevState) => ({
     ...prevState,
     [e.target.name]: e.target.value,
   }));
 };

 const onSubmit = (e) => {
   e.preventDefault();
   const userData = {
    Driver,
    StartingArea,
    ArrivalArea,
    Price,
    NbrOfPerson
   };
   console.log(userData);
   navigate('/Search')
 };

  return (
    <Form>
      <Row style={{ width: "360px" }}>
        <Form.Control
          style={{ margin: "10px 0px" }}
          type="text"
          name="Driver"
          placeholder="Driver"
          onChange={onChange}
        />
        <Form.Control
          style={{ margin: "10px 0px" }}
          type="text"
          name="StartingArea"
          placeholder="Starting Area"
          onChange={onChange}
        />
        <Form.Control
          style={{ margin: "10px 0px" }}
          type="text"
          name="ArrivalArea"
          placeholder="Arrival Area"
          onChange={onChange}
        />
        <Form.Control
          style={{ margin: "10px 0px" }}
          type="number"
          name="Price"
          placeholder="Price"
          min={0}
          onChange={onChange}
        />
        <Form.Control
          style={{ margin: "10px 0px" }}
          type="number"
          name="NbrOfPerson"
          placeholder="Nbr Of Person"
          min={0}
          onChange={onChange}
        />
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "6px",
            margin: "10px 0px",
            backgroundColor: "var(--color-primary)",
            color: "white",
          }}
          onClick={onSubmit}
        >
          Search
        </button>
      </Row>
    </Form>
  );
};

export default FilterRideForm;

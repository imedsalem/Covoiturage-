import React, { useState } from "react";
import { Form, FormControl, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const SearchRideForm = () => {
   const navigate = useNavigate();

   const [loginFormData, setLoginFormData] = useState({
    Leaving: "",
    Going: "",
    DepartureTime:"",
    NbrOfPerson:"",
  });

  const { Leaving, Going, DepartureTime, NbrOfPerson } = loginFormData;

  const onChange = (e) => {
    setLoginFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      Leaving,
      Going,
      DepartureTime,
      NbrOfPerson
    };
    console.log(userData);
    navigate('/Search')
  };

  return (
    // <Form>
    //   <Row style={{ width: "360px" }}>
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="text"
    //       name="Leaving"
    //       placeholder="Leaving from..."
    //       onChange={onChange}

    //     />
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="text"
    //       name="Going"
    //       placeholder="Going to..."
    //       onChange={onChange}

    //     />
    //     <FormControl
    //       type="date"
    //       name="DepartureTime"
    //       style={{ width: "100%", margin: "10px 0px" }}
    //       onChange={onChange}

    //     />
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="number"
    //       name="NbrOfPerson"
    //       placeholder="Nbr Of Person"
    //       min={0}
    //       onChange={onChange}

    //     />
    //     <button
    //       style={{
    //         padding: "5px 10px",
    //         borderRadius: "6px",
    //         margin: "10px 0px",
    //         backgroundColor: "var(--color-primary)",
    //         color: "white",
    //       }}
    //       onClick={onSubmit}
    //     >
    //       Search
    //     </button>
    //   </Row>
    // </Form>
<div>
  <div className="col-sm-12 col-md-12 text-center">
  </div>
  <div className="col-sm-12 col-md-12 text-center" style={{marginBottom:"200px"}}>
    <form className="form-inline" style={{display: "flex"}}>
      <div className="form-group">
        <input type="text" className="form-control" id="exampleInputName2" placeholder="Leaving" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="exampleInputName2" placeholder="Going" />
      </div>
      <div className="form-group">
        <input type="Date" className="form-control" id="exampleInputName2" placeholder="date" />
      </div>
      <div className="form-group">
        <input type="number" className="form-control" id="exampleInputEmail2" placeholder="Nbr Of Person" />
      </div>
      <button type="submit" className="btn btn-success" onClick={onSubmit} style={{backgroundColor: "#1d6d86" , borderColor: "#1d6d86"}}>Search</button>
    </form>
  </div>
</div>

  );
};

export default SearchRideForm;

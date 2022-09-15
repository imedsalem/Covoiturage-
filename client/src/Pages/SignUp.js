import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {register} from '../features/user/userAPI'



const SignUp = () => {
  const [registerFormData, setRegisterFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    repetPassword: "",
  });
  const { fullName, email, password, repetPassword } = registerFormData;
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (user) {
      navigate("/LogIn");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return "loding ....";
  }

  const onChange = (e) => {
    setRegisterFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullName,
      email,
      password,
      repetPassword,
    };
    dispatch(register(userData));
  };

  return (
    <Form
      style={{
        marginTop: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column ",
        height: '70vh'
      }}
    >
            <h1 style={{margin: "30px 0"}}>Sign Up</h1>
      <Row style={{ width: "360px" }}>
      <Form.Control
          style={{ margin: "10px 0px" }}
          type="text"
          name="fullName"
          placeholder="fullName"
          onChange={onChange}
        />
        <Form.Control
          style={{ margin: "10px 0px" }}
          type="email"
          name="email"
          placeholder="email"
          onChange={onChange}
        />
        <Form.Control
          style={{ margin: "10px 0px" }}
          type="password"
          name="password"
          placeholder="password"
          onChange={onChange}
        />
        <Form.Control
          style={{ margin: "10px 0px" }}
          type="R_password"
          name="repetPassword"
          placeholder="Repet password"
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
          Log In
        </button>
        <p>already have an account <Link to="/LogIn"><span style={{ cursor: "pointer" }}>Log In</span></Link></p>
        
      </Row>
    </Form>
  );
};

export default SignUp;

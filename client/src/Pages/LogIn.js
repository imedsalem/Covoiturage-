import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {login} from '../features/user/userAPI'


const LogIn = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { user, isLoading, isError, isSuccess, message, } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (user) {
      navigate("/");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return "loding ....";
  }

  const onChange = (e) => {
    setLoginFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <Form
      style={{
        marginTop: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column ",
        height: "70vh",
      }}
    >
      <h1 style={{ margin: "30px 0" }}>Log In</h1>
      <Row style={{ width: "360px" }}>
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
        <p>
          Not registered?{" "}
          <Link to="/SignUp">
            <span style={{ cursor: "pointer" }}>Create an account</span>
          </Link>
        </p>
      </Row>
    </Form>
  );
};

export default LogIn;

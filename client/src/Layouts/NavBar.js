import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const getToken = localStorage.getItem("token");
  const [token, setgetToken] = useState(false);
  const logo = "Covoiturage App";

  const { user} = useSelector(
    (state) => state.user
  );

  const { profile } = useSelector(
    (state) => state.profile
  );

  const role = user && user.role;

  const LogOut = () => localStorage.removeItem("token");

  useEffect(() => {
    if(getToken!==null){
      setgetToken(true)
    }else{
      setgetToken(false)
    }
    }, [token]);

  return (
    <Navbar
      className="fixed-top bg-light"
      style={{ maxWidth: 1440, margin: "0 auto" }}
    >
      <Container fluid style={{ display: "flex", alignItems: "center" }}>
        <Navbar.Brand 
          className="fw-bold fst-italic"
          style={{
            color: "var(--color-primary)",
            fontSize: "var(--fontSize-text-logo)",
            margin: "0 20px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {logo}
          </Link>
        </Navbar.Brand>
        {(token) ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              to="/PublishRide"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "var(--fontSize-text-p)",
                marginRight: 50,
              }}
            >
              Publish a ride
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 15,
                margin: "0 20px",
                fontSize: 27,
              }}
            >
              <NavDropdown id="navbarScrollingDropdown ">
                <NavDropdown.Item>
                  <Link
                    to="/Profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Profile
                  </Link>
                </NavDropdown.Item>

                {role === "admin" ? (
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={LogOut}
                      to="/Dashboard"
                    >
                      Dashboard
                    </Link>
                  </NavDropdown.Item>
                ) : null}

                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="Setting"
                  >
                    Setting
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={LogOut}
                    to="/"
                  >
                    Log Out
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <samp className="bi bi-person-circle"></samp>
              {/* <img src={`${profile.picture.url}`} alt="img" style={{width:24, borderradius: '50%'}} /> */}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
              margin: "0 20px",
              fontSize: 27,
            }}
          >
            <NavDropdown
              //css for transfer
              // nav ul li ul {
              //   left: 50%;
              //   right: auto;
              //   transform: translateX(-50%);
              // }
              id="navbarScrollingDropdown "
            >
              <NavDropdown.Item>
                <Link
                  to="/LogIn"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Log In
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  to="/SignUp"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Sign Up
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <samp className="bi bi-person-circle"></samp>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
//BsPersonCircle

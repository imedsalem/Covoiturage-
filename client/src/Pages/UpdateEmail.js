import React, { useState } from "react";

const UpdateEmail = () => {
  const [emailFormData, setEmailFormData] = useState({
    email: "",
    NewEmail:"",
    password:""
    
  });
  const { email,NewEmail,password } = emailFormData;
  const onChange = (e) => {
    setEmailFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      NewEmail,
      password,

    };
    console.log(userData);
    // dispatch(login(userData));
  };
  return (
    <div>
      <p class="h5">Update Email</p>
      <div className="col-md-8" style={{ textAlign: "center" }}>
        <label className="small mb-1" htmlFor="inputFirstName">
          Old email
        </label>
        <input
          className="form-control"
          id="inputFirstName"
          type="text"
          placeholder="Enter your Old email"
          name="email"
          onChange={onChange}
        />
        <label className="small mb-1" htmlFor="inputLastName">
          New email
        </label>
        <input
          className="form-control"
          id="inputLastName"
          type="text"
          placeholder="Enter your New email"
          name="NewEmail"
          onChange={onChange}
        />
        <label className="small mb-1" htmlFor="inputOrgName">
          Password
        </label>
        <input
          className="form-control"
          id="inputOrgName"
          type="text"
          name="Password"
          placeholder="Enter your password"
          onChange={onChange}
        />
        <button
          className="btn btn-primary"
          type="button"
          style={{
            marginTop: "15px",
            backgroundColor: "#1d6d86",
            borderColor: "#1d6d86",
          }}
          onClick={onSubmit}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default UpdateEmail;

import React, { useState } from "react";

const UpdatePassword = () => {
  const [passwordFormData, setPasswordFormData] = useState({
    password: "",
    newPassword:"",
    repateNewPassword:""
  });
  const { password ,newPassword ,repateNewPassword} = passwordFormData;

  const onChange = (e) => {
    setPasswordFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      password,
      newPassword,
      repateNewPassword
    };
    console.log(userData);
    // dispatch(login(userData));
  };

  return (
    <div>
      <label className="small mb-1" htmlFor="inputFirstName">
        password
      </label>
      <input
        className="form-control"
        id="inputFirstName"
        type="text"
        placeholder="Enter your password"
        name="password"
        onChange={onChange}
      />
      <label className="small mb-1" htmlFor="inputLastName">
        newPassword
      </label>
      <input
        className="form-control"
        id="inputLastName"
        type="text"
        placeholder="Enter your newPassword"
        name="newPassword"
        onChange={onChange}
      />
      <label className="small mb-1" htmlFor="inputOrgName">
        repateNewPassword
      </label>
      <input
        className="form-control"
        id="inputOrgName"
        type="text"
        placeholder="repateNewPassword"
        name="repateNewPassword"
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
  );
};

export default UpdatePassword;

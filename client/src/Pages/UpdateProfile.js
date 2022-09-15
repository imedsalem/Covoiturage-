import React, { useState } from "react";

const UpdateProfile = () => {
  const [profileFormData, setProfileFormData] = useState({
    des: "",
    age: "",
  });
  const { des, age } = profileFormData;
  const onChange = (e) => {
    setProfileFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      des,
      age,
    };
    console.log(userData);
    // dispatch(login(userData));
  };
  return (
    <div>
      <label className="small mb-1" htmlFor="inputPhone">
        Description
      </label>
      <input
        className="form-control"
        id="inputPhone"
        type="tel"
        placeholder="Enter your Description"
        name="des"
        onChange={onChange}
      />
      <label className="small mb-1" htmlFor="inputBirthday">
        Age
      </label>
      <input
        className="form-control"
        id="inputBirthday"
        type="text"
        placeholder="Enter Age"
        name="age"
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

export default UpdateProfile;

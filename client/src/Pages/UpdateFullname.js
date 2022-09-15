import React, { useState } from "react";

const UpdateFullname = () => {
  const [fullnameFormData, setFullNameFormData] = useState({
    fullName: "",
  });
  const { fullName } = fullnameFormData;

  const onChange = (e) => {
    setFullNameFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullName,
    };
    console.log(userData);
    // dispatch(login(userData));
  };
  return (
    <div>
      <p class="h5">Update FullName</p>

      <div className="col-md-8" style={{ textAlign: "center" }}>
        <label className="small mb-1" htmlFor="inputFirstName">
          FullName
        </label>
        <input
          className="form-control"
          id="inputFirstName"
          type="text"
          name="fullName"
          placeholder="Enter your New FullName"
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

export default UpdateFullname;

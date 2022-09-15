import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRide  } from "../../features/ride/publishRideAPI";
import "./PublishRide.css";

const PublishRide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [publishFormData, setPublishFormData] = useState({
    DepartureTime: "",
    arrivingTime: "",
    StartingArea: "",
    ArrivalArea: "",
    NbrOfPerson: "",
    Price: "",
    date: "",
    CarName: "",
    Roules: "",
    Description: "",
  });

  const {
    DepartureTime,
    arrivingTime,
    StartingArea,
    ArrivalArea,
    NbrOfPerson,
    Price,
    date,
    CarName,
    Roules,
    Description,
  } = publishFormData;

  const { ridepub, ride, isLoading, isError, isSuccess, message, } = useSelector(
    (state) => state.ride
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (ridepub) {
      navigate("/Search");
    }
  }, [ridepub, ride, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return "loding ....";
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      DepartureTime,
      arrivingTime,
      StartingArea,
      ArrivalArea,
      NbrOfPerson,
      Price,
      date,
      CarName,
      Roules,
      Description,
    };
    console.log(userData);
    dispatch(postRide(userData));
  };
  const onChange = (e) => {
    setPublishFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
        <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div
                className="card card-registration my-4 "
                style={{ top: "30px" }}
              >
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Publish a ride</h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              DepartureTime
                            </label>
                            <input
                              type="text"
                              name="DepartureTime"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              placeholder="DepartureTime"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1n"
                            >
                              arrivingTime
                            </label>

                            <input
                              type="text"
                              name="arrivingTime"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                              placeholder="arrivingTime"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1m1"
                            >
                              StartingArea
                            </label>

                            <input
                              type="text"
                              name="StartingArea"
                              id="form3Example1m1"
                              className="form-control form-control-lg"
                              placeholder="StartingArea"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1n1"
                            >
                              ArrivalArea
                            </label>

                            <input
                              type="text"
                              name="ArrivalArea"
                              id="form3Example1n1"
                              className="form-control form-control-lg"
                              placeholder="ArrivalArea"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1m1"
                            >
                              Nbr of Person
                            </label>

                            <input
                              type="text"
                              name="NbrOfPerson"
                              id="form3Example1m1"
                              className="form-control form-control-lg"
                              placeholder="Nbr of Person"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1n1"
                            >
                              Price
                            </label>

                            <input
                              type="text"
                              name="Price"
                              id="form3Example1n1"
                              className="form-control form-control-lg"
                              placeholder="Price"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1m1"
                            >
                              date
                            </label>

                            <input
                              type="date"
                              name="date"
                              id="form3Example1m1"
                              className="form-control form-control-lg"
                              placeholder="date"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1n1"
                            >
                              Car name
                            </label>

                            <input
                              type="text"
                              name="CarName"
                              id="form3Example1n1"
                              className="form-control form-control-lg"
                              placeholder="car name"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example90">
                          Roules
                        </label>
                        <input
                          type="text"
                          name="roules"
                          id="form3Example90"
                          className="form-control form-control-lg"
                          placeholder="Put your roules for the ride, and separate them with ','"
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example97">
                          Description
                        </label>

                        <input
                          type="text"
                          name="Description"
                          id="form3Example97"
                          className="form-control form-control-lg"
                          placeholder="Description from the driver"
                          onChange={onChange}
                        />
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                          onClick={onSubmit}
                          style={{
                            backgroundColor: "#1d6d86",
                            borderColor: "#1d6d86",
                          }}
                        >
                          Publish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublishRide;

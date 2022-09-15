const mongoose = require("mongoose");

const publishRide = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: { type: String, required: true },
    DepartureTime: { type: String, required: true },
    arrivingTime:  { type: String, required: true },
    StartingArea:  { type: String, required: true },
    ArrivalArea:  { type: String, required: true },
    NbrOfPerson:{ type: Number, required: true },
    Price:{ type: Number, required: true },
    roules:{ type: String },
    des:{ type: String },
    carName:{ type: String },
  },
  { timestamps: true }
);

module.exports = PublishRide = mongoose.model("publishRide", publishRide);
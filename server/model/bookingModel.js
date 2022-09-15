const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    idPublishRide: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "PublishRide",
    },
    customers : {type : Array},
    bookingCompleted : { type : Boolean, default : false }
  },
  { timestamps: true }
);

module.exports = Booking = mongoose.model("booking", bookingSchema);
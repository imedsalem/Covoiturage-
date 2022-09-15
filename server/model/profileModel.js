const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    des: { type: String, trim: true },
    age: { type: Number },
    picture: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    VerifiedID: {type: Boolean, default: false},
    ConfirmedEmail: {type: Boolean, default: false},
    ConfirmedPhoneNumber: {type: Boolean, default: false},
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model("profile", profileSchema);
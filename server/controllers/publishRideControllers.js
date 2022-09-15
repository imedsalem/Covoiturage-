const publishRide = require("../model/publishRidemodel");
const Booking = require("../model/bookingModel");
const mongoose = require("mongoose");

const RideCtrl = {
  getRidesByToken: async (req, res) => {
    try {
      const getRides = await publishRide
        .find({ idUser: req.user.id })
        .populate("idUser", "fullName");
      if (!getRides) return res.status(400).send({ msg: "Rides not found" });

      res.status(200).send(getRides);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => getRidesrByToken" });
    }
  },
  getRide: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "link not found" });

      const getRide = await publishRide
        .findOne({ _id: req.params.id })
        .populate("idUser", "fullName");
      if (!getRide) return res.status(400).send({ msg: "Ride not found" });

      res.status(200).send(getRide);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => getRidesrByToken" });
    }
  },
  getAllRide: async (req, res) => {
    try {
      const getRides = await publishRide.find({
        $and: [
          { date: { $regex: req.query.date || "" } },
          { DepartureTime: { $regex: req.query.DepartureTime || "" } },
          { arrivingTime: { $regex: req.query.arrivingTime || "" } },
          { StartingArea: { $regex: req.query.StartingArea || "" } },
          { ArrivalArea: { $regex: req.query.ArrivalArea || "" } },
          { carName: { $regex: req.query.carName || "" } },
          { NbrOfPerson: { $regex: req.query.NbrOfPerson || 0 } },
          { Price: { $regex: req.query.Price || 0 } },
        ],
      }).populate("idUser", "fullName");
      if (!getRides) return res.status(400).send({ msg: "Rides not found" });

      res.status(200).send(getRides);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => getRidesrByToken", error : error });
    }
  },
  // postRide: async (req, res) => {
  //   try {
  //     const {
  //       date,
  //       DepartureTime,
  //       arrivingTime,
  //       StartingArea,
  //       ArrivalArea,
  //       NbrOfPerson,
  //       Price,
  //     } = req.body;

  //     if (
  //       !date ||
  //       !DepartureTime ||
  //       !arrivingTime ||
  //       !StartingArea ||
  //       !ArrivalArea ||
  //       !NbrOfPerson ||
  //       !Price
  //     )
  //       return res.status(400).json({ msg: "Please fill in all fields." });

  //     const existRide = await publishRide.findOne({
  //       DepartureTime: req.body.DepartureTime,
  //       date: req.body.date,
  //       idUser: req.user._id,
  //     });
  //     if (existRide) return res.status(400).send({ msg: "ride exist" });

  //     const postRide = await publishRide.create({
  //       ...req.body,
  //       idUser: req.user._id,
  //     });

  //     res.status(200).send({ msg: "post ride success!", postRide });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).json({ msg: "Something went wrong => postRides" });
  //   }
  // },
  postRide: async (req, res) => {
    const customers = [];
    try {
      const {
        date,
        DepartureTime,
        arrivingTime,
        StartingArea,
        ArrivalArea,
        NbrOfPerson,
        Price,
      } = req.body;

      // if (
      //   !date ||
      //   !DepartureTime ||
      //   !arrivingTime ||
      //   !StartingArea ||
      //   !ArrivalArea ||
      //   !NbrOfPerson ||
      //   !Price
      // )
      //   return res.status(400).json({ msg: "Please fill in all fields." });

      const existRide = await publishRide.findOne({
        DepartureTime: req.body.DepartureTime,
        date: req.body.date,
        idUser: req.user._id,
      });
      if (existRide) return res.status(400).send({ msg: "ride exist" });

      const postRide = await publishRide.create({
        ...req.body,
        idUser: req.user._id,
      });
      console.log(postRide)

      const activeReservation = await Booking.create({
        idPublishRide: postRide._id,
        customers: customers,
      });

      res.status(200).send({ msg: "post ride success!", postRide });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ msg: "Something went wrong => postRides" });
    }
  },
  updateRide: async (req, res) => {
    try {
      const existRide = await publishRide.findOne({ _id: req.params.id });

      if (!existRide) return res.status(400).send({ msg: "Ride not found" });

      const updateUser = await publishRide.findByIdAndUpdate(
        existRide._id,
        { ...req.body },
        {
          new: true,
        }
      );

      res.status(200).send({ msg: "update Ride success!", updateUser });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => updateRide" });
    }
  },
  deleteRide: async (req, res) => {
    try {
      const getRide = await publishRide.findOne({ _id: req.params.id });

      if (!getRide) return res.status(400).send({ msg: "Ride not found" });

      const deleteUser = await publishRide.findByIdAndRemove({
        _id: getRide._id,
      });

      const existRide = await Booking.findOne({ idPublishRide: req.params.id });

      const deletebooking = await Booking.findByIdAndRemove({
        _id: existRide._id,
      });

      res.status(200).json({ msg: "delete ride success!", _id: req.params.id });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => deleteRide" });
    }
  },
  deleteRideByAdmin: async (req, res) => {
    try {
      const getRide = await publishRide.findOne({ _id: req.params.id });

      if (!getRide) return res.status(400).send({ msg: "Ride not found" });

      const deleteUser = await publishRide.findByIdAndRemove({
        _id: getRide._id,
      });

      const existRide = await Booking.findOne({ idPublishRide: req.params.id });

      const deletebooking = await Booking.findByIdAndRemove({
        _id: existRide._id,
      });

      res.status(200).json({ msg: "delete ride success!", _id: req.user.id });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => deleteRide" });
    }
  },
};

module.exports = RideCtrl;

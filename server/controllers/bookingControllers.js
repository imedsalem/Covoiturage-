const booking = require("../model/bookingModel");
const publishRide = require("../model/publishRidemodel");
const User = require("../model/userModel");
const profile = require("../model/profileModel");

const mongoose = require("mongoose");

const bookingCtrl = {
  // activeBooking: async (req, res) => {
  //   try {
  //     if (!mongoose.Types.ObjectId.isValid(req.params.id))
  //       return res.status(400).send({ msg: "link not found" });

  //     const findBooking = await booking.findOne({
  //       idPublishRide: req.params.id,
  //     });

  //     if (!findBooking)
  //       return res.status(400).send({ msg: "booking not found" });

  //     const findUser = await publishRide.findOne({
  //       _id: req.params.id,
  //     });

  //     if (findUser.idUser.toString() === req.user._id.toString())
  //       return res.status(400).send({
  //         msg: "you can't not make a rezervation because you are how publich this offre"
  //       });

  //     if (findBooking.customers.includes(req.user._id))
  //       return res.status(400).send({ msg: "you alredy registred" });

  //     findBooking.customers = [...findBooking.customers, req.user._id];
  //     await findBooking.save();

  //     res.status(200).send({ msg: "you register succes", findBooking });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).json({ msg: "Something went wrong => postProfile" });
  //   }
  // },
  activeBooking: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "link not found" });

      const findBooking = await booking.findOne({
        idPublishRide: req.params.id,
      });

      if (!findBooking)
        return res.status(400).send({ msg: "booking not found" });

      const findUser = await publishRide.findOne({
        _id: req.params.id,
      });

      if (findUser.idUser.toString() === req.user._id.toString())
        return res.status(400).send({
          msg: "you can't not make a rezervation because you are how publich this offre"
        });

        
      if ((findBooking.customers.findIndex(x => x._id === req.user._id)) === (-1))
        return res.status(400).send({ msg: "you alredy registred" });

        const findProfile = await profile.findOne({
          idUser: req.user._id,
        });
        console.log(req.user)
        console.log(findProfile)
        const data = {
          _id: req.user._id, name: req.user.fullName, pic: findProfile.picture.url
        }
        console.log(data)

      findBooking.customers = [...findBooking.customers, data];
      await findBooking.save();

      res.status(200).send({ msg: "you register succes", findBooking });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => postProfile" });
    }
  },
  // desactiveBooking: async (req, res) => {
  //   try {
  //     if (!mongoose.Types.ObjectId.isValid(req.params.id))
  //       return res.status(400).send({ msg: "link not found" });

  //     const findBooking = await booking.findOne({
  //       idPublishRide: req.params.id,
  //     });

  //     if (!findBooking)
  //       return res.status(400).send({ msg: "booking not found" });

  //     findBooking.customers = findBooking.customers.filter(item => item != req.user._id.toString() );
  //     await findBooking.save();

  //     res.status(200).send({ msg: "your annuled succes", findBooking });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).json({ msg: "Something went wrong => postProfile" });
  //   }
  // },
  desactiveBooking: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "link not found" });

      const findBooking = await booking.findOne({
        idPublishRide: req.params.id,
      });

      if (!findBooking)
        return res.status(400).send({ msg: "booking not found" });

      findBooking.customers = findBooking.customers.filter(item => item._id.toString() != req.user._id.toString() );
      await findBooking.save();

      res.status(200).send({ msg: "your annuled succes", findBooking });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => postProfile" });
    }
  },
  // deleteCustomer: async (req, res) => {
  //   try {
  //     if (!mongoose.Types.ObjectId.isValid(req.params.id))
  //       return res.status(400).send({ msg: "link not found" });

  //     const findBooking = await booking.findOne({
  //       _id: req.params.id,
  //     });

  //     findBooking.customers = findBooking.customers.filter(item => item != req.params.idcust.toString() );
  //     await findBooking.save();

  //     res.status(200).send({ msg: "your annuled succes", findBooking });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).json({ msg: "Something went wrong => postProfile" });
  //   }
  // },
  deleteCustomer: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "link not found" });

      const findBooking = await booking.findOne({
        _id: req.params.id,
      });

      findBooking.customers = findBooking.customers.filter(item => item._id.toString() != req.user._id.toString() );
      await findBooking.save();

      res.status(200).send({ msg: "your annuled succes", findBooking });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => postProfile" });
    }
  },
  deleteAllCustomer: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "link not found" });

      const findBooking = await booking.findOne({
        _id: req.params.id,
      });

      findBooking.customers = [];
      await findBooking.save();

      res.status(200).send({ msg: "your annuled succes", findBooking });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => postProfile" });
    }
  },
};

module.exports = bookingCtrl;

const profile = require("../model/profileModel");
const mongoose = require("mongoose");
const cloudinary = require("../middleware/Cloudinary");
const upload = require("../middleware/multer");

const profileCtrl = {
  getProfileByToken: async (req, res) => {
    try {
      const getProfile = await profile
        .findOne({ idUser: req.user._id })
        .populate("idUser", "fullName");
      if (!getProfile)
        return res.status(400).send({ msg: "profile not found" });
      console.log(req.user)
      res.status(200).send(getProfile);
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ msg: "Something went wrong => getProfilerByToken" });
    }
  },
  getProfile: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "link not found" });

      const getProfile = await profile
        .findOne({ user: req.params.id })
        .populate("idUser", "fullName");
      if (!getProfile)
        return res.status(400).send({ msg: "profile not found" });

      res.status(200).send(getProfile);
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ msg: "Something went wrong => getProfilerByToken" });
    }
  },
  // postProfile: async (req, res) => {
  //   try {
  //     if (
  //       "VerifiedID" in req.body ||
  //       "ConfirmedEmail" in req.body ||
  //       "ConfirmedPhoneNumber" in req.body
  //     )
  //       return res.status(400).json({ msg: "You cannot add this fields" });

  //     const existProfile = await profile.findOne({ idUser: req.user.id });

  //     if (existProfile) return res.status(400).send({ msg: "profile exist" });

  //     const myCloud = req.file
  //       ? await cloudinary.uploader.upload(req.file.path)
  //       : {
  //           public_id: "tbylpitmrljes1j3ahfr",
  //           secure_url:
  //             "https://res.cloudinary.com/dabwxl2ku/image/upload/v1659692424/img_542942_sscmmw.png",
  //         };

  //     const postProfile1 = await profile.create({
  //       ...req.body,
  //       picture: { public_id: myCloud.public_id, url: myCloud.secure_url },
  //       idUser: req.user._id,
  //     });

  //     const postProfile = await profile
  //       .findOne({ idUser: req.user.id })
  //       .populate("idUser", "fullName");

  //     res.status(200).send({ msg: "post profile success!", postProfile });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).json({ msg: "Something went wrong => postProfile" });
  //   }
  // },
  updateProfile: async (req, res) => {
    try {
      if (
        "VerifiedID" in req.body ||
        "ConfirmedEmail" in req.body ||
        "ConfirmedPhoneNumber" in req.body
      )
        return res.status(400).json({ msg: "You cannot add this fields" });

      const existProfile = await profile.findOne({ idUser: req.user.id });

      if (!existProfile)
        return res.status(400).send({ msg: "profile not found" });
      console.log({ ...req.body });

      let myCloud;

      if (req.file) {
        await cloudinary.uploader.destroy(existProfile.picture.public_id);

        myCloud = await cloudinary.uploader.upload(req.file.path);
      }

      const picture = myCloud
        ? { public_id: myCloud.public_id, url: myCloud.secure_url }
        : existProfile.picture;

      const data = {
        ...req.body,
        picture,
      };

      const updateUser = await profile.findByIdAndUpdate(
        existProfile._id,
        data,
        {
          new: true,
        }
      );

      res.status(200).send({ msg: "update profile success!", updateUser });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => updateProfile" });
    }
  },
  // deleteProfile: async (req, res) => {
  //   try {
  //     const getProfile = await profile.findOne({ user: req.user.id });

  //     if (!getProfile)
  //       return res.status(400).send({ msg: "profile not found" });

  //     await cloudinary.uploader.destroy(getProfile.picture.public_id);

  //     const deleteUser = await profile.findByIdAndRemove({
  //       _id: getProfile._id,
  //     });

  //     res
  //       .status(200)
  //       .json({ msg: "delete account success!", _id: req.user.id });
  //   } catch (error) {
  //     console.log(error);
  //     res
  //       .status(404)
  //       .json({ msg: "Something went wrong => deleteprofilerProfile" });
  //   }
  // },
  updateVerifyProfile: async (req, res) => {
    try {
      if ("des" in req.body || "age" in req.body)
        return res.status(400).json({ msg: "You cannot add this fields" });

      const existProfile = await profile.findOne({ idUser: req.user.id });

      if (!existProfile)
        return res.status(400).send({ msg: "profile not found" });
      console.log({ ...req.body });

      const updateUser = await profile.findByIdAndUpdate(
        existProfile._id,
        { ...req.body },
        {
          new: true,
        }
      );

      res.status(200).send({ msg: "update profile success!", updateUser });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => updateProfile" });
    }
  },
  // deleteProfileByAdmin: async (req, res) => {
  //   try {
  //     if (!mongoose.Types.ObjectId.isValid(req.params.id))
  //       return res.status(400).send({ msg: "User not found" });

  //     const getProfile = await profile.findOne({ _id: req.params.id });

  //     if (!getProfile)
  //       return res.status(400).send({ msg: "profile not found" });

  //     await cloudinary.uploader.destroy(getProfile.picture.public_id);

  //     const deleteUser = await profile.findByIdAndRemove({
  //       _id: getProfile._id,
  //     });

  //     res
  //       .status(200)
  //       .json({ msg: "delete profile success!", _id: req.params.id });
  //   } catch (error) {
  //     console.log(error);
  //     res
  //       .status(404)
  //       .json({ msg: "Something went wrong => deleteProfileByAdmin" });
  //   }
  // },
};

module.exports = profileCtrl;

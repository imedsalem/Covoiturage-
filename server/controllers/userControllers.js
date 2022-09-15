const User = require("../model/userModel");
const profile = require("../model/profileModel");

const cloudinary = require("../middleware/Cloudinary");
const upload = require("../middleware/multer");

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userCtrl = {
  // register: async (req, res) => {
  //   try {
  //     const { fullName, email, password, repetPassword } = req.body;

  //     if ("role" in req.body && req.body.role !== "user")
  //       return res.status(400).json({ msg: "You cannot add this fields" });

  //     if (!fullName || !email || !password || !repetPassword)
  //       return res.status(400).json({ msg: "Please fill in all fields." });

  //     if (
  //       email.split("@")[1] !== "gmail.com" &&
  //       email.split("@")[1] !== "outlook.fr"
  //     )
  //       return res.status(400).json({ msg: "Invalid emails." });

  //     const user = await User.findOne({ email });
  //     if (user)
  //       return res.status(400).json({ msg: "This email already exists." });

  //     if (password !== repetPassword)
  //       return res
  //         .status(400)
  //         .json({ msg: "Password and repetPassword must be equals" });

  //     if (password.length < 6)
  //       return res
  //         .status(400)
  //         .json({ msg: "Password must be at least 6 characters." });

  //     const UserAdd = new User({ ...req.body });
  //     await UserAdd.save();

  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     UserAdd.password = hashedPassword;
  //     await UserAdd.save();

  //     res.status(200).send({ msg: "register success!", UserAdd });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).json({ msg: "Something went wrong => register" });
  //   }
  // },
  register: async (req, res) => {
    try {
      const { fullName, email, password, repetPassword } = req.body;

      if ("role" in req.body && req.body.role !== "user")
        return res.status(400).json({ msg: "You cannot add this fields" });

      if (!fullName || !email || !password || !repetPassword)
        return res.status(400).json({ msg: "Please fill in all fields." });

      if (
        email.split("@")[1] !== "gmail.com" &&
        email.split("@")[1] !== "outlook.fr"
      )
        return res.status(400).json({ msg: "Invalid emails." });

      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "This email already exists." });

      if (password !== repetPassword)
        return res
          .status(400)
          .json({ msg: "Password and repetPassword must be equals" });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });

      const UserAdd = new User({ ...req.body });
      await UserAdd.save();

      const hashedPassword = await bcrypt.hash(password, 10);
      UserAdd.password = hashedPassword;
      await UserAdd.save();

      const myCloud = req.file
        ? await cloudinary.uploader.upload(req.file.path)
        : {
            public_id: "tbylpitmrljes1j3ahfr",
            secure_url:
              "https://res.cloudinary.com/dabwxl2ku/image/upload/v1659692424/img_542942_sscmmw.png",
          };

      const postProfile1 = await profile.create({
        ...req.body,
        picture: { public_id: myCloud.public_id, url: myCloud.secure_url },
        idUser: UserAdd._id,
      });

      res.status(200).send({ msg: "register success!", UserAdd });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => register" });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ msg: "Please fill in all fields." });

      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "This email does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Password is incorrect." });

      const token = await generateToken(user._id);

      res.status(200).send({ msg: "Login success!", token });
      // res.status(200).send({ msg: "Login success!", user, token });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => login" });
    }
  },
  getUserByToken: async (req, res) => {
    try {
      res.status(200).send(req.user);
    } catch (error) {
      console.log(error.messqge);
      res.status(404).json({ message: "Something went wrong" });
    }
  },
  getUserById: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "User not found" });

      const existUser = await User.findOne({ _id: req.params.id }).select(
        "-password"
      );
      if (!existUser) return res.status(400).send({ msg: "User not found" });

      res.status(200).send(existUser);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => userInfo" });
    }
  },
  updateUserFullName: async (req, res) => {
    try {
      if ("role" in req.body || "paswword" in req.body || "email" in req.body)
        return res.status(400).json({ msg: "You cannot add this fields" });

      const user = await User.findByIdAndUpdate(req.user, req.body, {
        new: true,
      });

      res.status(200).send({ msg: "update full name success!", user });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => updateInfo" });
    }
  },
  updateUserEmail: async (req, res) => {
    try {
      if ("role" in req.body || "fullName" in req.body)
        return res.status(400).json({ msg: "You cannot add this fields" });

      const { newEmail, lastEmail, password } = req.body;

      if (!newEmail || !lastEmail || !password)
        return res.status(400).json({ msg: "Please fill in all fields." });

      const user1 = await User.findOne({ email: lastEmail });
      if (!user1)
        return res.status(400).json({ msg: "This email does not exist." });

      const user2 = await User.findOne({ email: newEmail });
      if (user2)
        return res.status(400).json({ msg: "This email already exists." });

      const isMatch = await bcrypt.compare(password, user1.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Password is incorrect." });

      user1.email = newEmail;
      await user1.save();

      const user = await User.findOne({ email: newEmail }).select("-password");

      res.status(200).send({ msg: "update email success!", user });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => updateInfo" });
    }
  },
  updateUserPassword: async (req, res) => {
    try {
      if ("role" in req.body || "fullName" in req.body)
        return res.status(400).json({ msg: "You cannot add this fields" });

      const { password, newPassword, repateNewPassword } = req.body;

      if (!password || !newPassword || !repateNewPassword)
        return res.status(400).json({ msg: "Please fill in all fields." });

      const user1 = await User.findOne({ email: req.user.email });
      if (!user1)
        return res.status(400).json({ msg: "This email does not exist." });

      const isMatch = await bcrypt.compare(password, user1.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Password is incorrect." });

      if (newPassword !== repateNewPassword)
        return res
          .status(400)
          .json({ msg: "Password and repetPassword must be equals" });

      if (newPassword.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      user1.password = hashedPassword;
      await user1.save();

      const user = await User.findOne({ email: req.user.email }).select(
        "-password"
      );

      res.status(200).send({ msg: "update password success!", user });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => updateInfo" });
    }
  },
  // deleteUser: async (req, res) => {
  //   try {
  //     const deleteUser = await User.findByIdAndRemove(req.user._id);
  //     res
  //       .status(200)
  //       .json({ msg: "delete account success!", id: deleteUser._id });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).json({ msg: "Something went wrong => deleteAccount" });
  //   }
  // },
  deleteUser: async (req, res) => {
    try {
      const getProfile = await profile.findOne({ user: req.user.id });

      await cloudinary.uploader.destroy(getProfile.picture.public_id);

      const deleteUser1 = await profile.findByIdAndRemove({
        _id: getProfile._id,
      });

      const deleteUser = await User.findByIdAndRemove(req.user._id);
      res
        .status(200)
        .json({ msg: "delete account success!", id: deleteUser._id });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => deleteAccount" });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const allUser = await User.find().select("-password");

      res.status(200).send(allUser);
    } catch (error) {
      console.log(error.messqge);
      res.status(404).json({ message: "Something went wrong" });
    }
  },
  updateUserRole: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "User not found" });

      const existUsersId = await User.findOne({ _id: req.params.id });
      if (!existUsersId) return res.status(400).send({ msg: "User not found" });

      {
        existUsersId.role === "admin"
          ? (existUsersId.role = "user")
          : (existUsersId.role = "admin");
      }
      await existUsersId.save();

      const user = await User.findOne({ _id: req.params.id }).select(
        "-password"
      );

      res.status(200).send({ msg: "update role success!", user });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => deleteAccount" });
    }
  },
  // deleteUserByAdmin: async (req, res) => {
  //   try {
  //     if (!mongoose.Types.ObjectId.isValid(req.params.id))
  //       return res.status(400).send({ msg: "User not found" });

  //     const existUsersId = await User.findOne({ _id: req.params.id });
  //     if (!existUsersId) return res.status(400).send({ msg: "User not found" });

  //     const deleteUser = await User.findByIdAndRemove(req.params.id);
  //     res
  //       .status(200)
  //       .json({ msg: "delete account success!", id: deleteUser._id });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).json({ msg: "Something went wrong => deleteAccount" });
  //   }
  // },
  deleteUserByAdmin: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send({ msg: "User not found" });

        const getProfile = await profile.findOne({ _id: req.params.id });
        if (!getProfile)
          return res.status(400).send({ msg: "profile not found" });
  
        await cloudinary.uploader.destroy(getProfile.picture.public_id);
  
        const deleteUser1 = await profile.findByIdAndRemove({
          _id: getProfile._id,
        });

      const existUsersId = await User.findOne({ _id: req.params.id });
      if (!existUsersId) return res.status(400).send({ msg: "User not found" });

      const deleteUser = await User.findByIdAndRemove(req.params.id);
      res
        .status(200)
        .json({ msg: "delete account success!", id: deleteUser._id });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Something went wrong => deleteAccount" });
    }
  },
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = userCtrl;

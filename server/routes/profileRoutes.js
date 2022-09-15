const express = require("express");
const router = express.Router();
const profileCtrl = require("../controllers/profileControllers");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

const upload = require('../middleware/multer')

//user
router.get("/getProfileByToken", auth, profileCtrl.getProfileByToken);
router.get("/getProfile/:id", auth, profileCtrl.getProfile);

// router.post("/postProfile", auth, upload.single("image"), profileCtrl.postProfile);

router.put("/updateProfile", auth, upload.single("image"), profileCtrl.updateProfile);

// router.delete("/deleteProfile", auth, profileCtrl.deleteProfile);

// //admin
router.put(
  "/updateVerifyProfile/:id",
  auth,
  authAdmin,
  profileCtrl.updateVerifyProfile
);

// router.delete(
//   "/deleteProfileByAdmin/:id",
//   auth,
//   authAdmin,
//   profileCtrl.deleteProfileByAdmin
// );

module.exports = router;

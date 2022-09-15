const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userControllers");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

//user
router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);

router.get("/getUserByToken", auth, userCtrl.getUserByToken);
router.get("/getUserById/:id", auth, userCtrl.getUserById);

router.put("/updateUserFullName", auth, userCtrl.updateUserFullName);
router.put("/updateUserEmail", auth, userCtrl.updateUserEmail);
router.put("/updateUserPassword", auth, userCtrl.updateUserPassword);

router.delete("/deleteUser", auth, userCtrl.deleteUser);

//admin
router.get("/getAllUser", auth, authAdmin, userCtrl.getAllUser);

router.put("/updateUserRole/:id", auth, authAdmin, userCtrl.updateUserRole);

router.delete(
  "/deleteUserByAdmin/:id",
  auth,
  authAdmin,
  userCtrl.deleteUserByAdmin
);

module.exports = router;

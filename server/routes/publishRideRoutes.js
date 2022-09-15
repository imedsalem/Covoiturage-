const express = require("express");
const router = express.Router();
const RideCtrl = require("../controllers/publishRideControllers");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

//user
router.get("/getRidesByToken", auth, RideCtrl.getRidesByToken);
router.get("/getRide/:id", auth, RideCtrl.getRide);
router.get("/getAllRide", auth, RideCtrl.getAllRide);

router.post("/postRide", auth, RideCtrl.postRide);

router.put("/updateRide/:id", auth, RideCtrl.updateRide);

router.delete("/deleteRide/:id", auth, RideCtrl.deleteRide);

// //admin
router.delete("/deleteRideByAdmin/:id", auth, authAdmin, RideCtrl.deleteRideByAdmin);
 

module.exports = router;

const express = require("express");
const router = express.Router();
const bookingCtrl = require("../controllers/bookingControllers");
const auth = require("../middleware/auth");

//user
// router.get("/getBooking/:id", auth, bookingCtrl.getBooking);

//userCust
router.post("/activeBooking/:id", auth, bookingCtrl.activeBooking);
router.post("/desactiveBooking/:id", auth, bookingCtrl.desactiveBooking);

//userRider
router.post("/deleteCustomer/:id/:idcust", auth, bookingCtrl.deleteCustomer);
router.post("/deleteAllCustomer/:id", auth, bookingCtrl.deleteAllCustomer);
module.exports = router;

//user : getAllCust

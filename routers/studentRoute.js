const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");

// @GET "/students"
router.route("/").get((req, res) => {

    // console.log(users);
    res.json({success: true, message: 'students GET API' });
});

// @POST "/students"
router.route("/").post((req, res) => {

    console.log(req.body);

    res.json({ success: false, message: "students POST API" });
});

module.exports = router;

/*

{
    name: 'ravi kumar',
    email: 'ravik12@gmail.com',
    phone: 9122334455,
    address: 'B-201, Laxmi Nagar, Mathura, Uttar Pradesh'
}

*/
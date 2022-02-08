const express = require("express");
const router = express.Router();

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
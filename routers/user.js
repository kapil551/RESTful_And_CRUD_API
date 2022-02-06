const express = require("express");
const router = express.Router();
const users = require("../data/users");

// @GET "/users"
router.route("/").get((req, res) => {
    // console.log(users);
    res.json({success: true, users });
});

// @POST "/users"
router.route("/").post((req, res) => {

    console.log(req.body);

    const { username, password } = req.body;

    res.json({ success: false, message: "users POST API", user:{ username: username, password: password }});
});

module.exports = router;
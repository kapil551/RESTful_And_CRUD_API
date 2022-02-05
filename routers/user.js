const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.send("GET users API");
})

module.exports = router;
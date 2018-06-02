const express = require("express");
const router = express.Router();

// @route       GET api/users/test
// @description Tests users route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//We must export the router for server to see it
module.exports = router;

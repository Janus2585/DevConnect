const express = require("express");
const router = express.Router();

// @route       GET api/posts/test
// @description Tests posts route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

//We must export the router for server to see it
module.exports = router;

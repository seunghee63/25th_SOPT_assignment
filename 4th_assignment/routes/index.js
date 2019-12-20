var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/blogs', require("./blogs"));

module.exports = router;

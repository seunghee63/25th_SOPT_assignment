var express = require('express');
var router = express.Router();

router.use('/:articleIdx/', require("./comments"));

module.exports = router;

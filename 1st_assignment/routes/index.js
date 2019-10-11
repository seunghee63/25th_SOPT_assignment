var express = require('express');
var router = express.Router();

router.use('/api', require('./api')); // require 에는 /이후 부분이 들어오게 됨

module.exports = router;

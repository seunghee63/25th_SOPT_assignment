var express = require('express');
var router = express.Router();

router.use('/',require('./cafe'));

module.exports = router;

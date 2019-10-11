var express = require('express');
var router = express.Router();

router.use('/',require('./news'));
router.use('/like',require('./like'));

module.exports = router;

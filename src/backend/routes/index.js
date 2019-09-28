var express = require('express');
var router = express.Router();

router.post('/create', function(req, res, next) {
  res.sendStatus(500);
});

module.exports = router;

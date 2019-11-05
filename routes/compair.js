var express = require('express');
var router = express.Router();

/* GET compair page. */
router.get('/', function(req, res, next) {
  res.render('compair', { title: 'compair' });
});

module.exports = router;
